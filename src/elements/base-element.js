export default class BaseElement {
    constructor(xmlNode) {
        this.xmlNode = xmlNode;
    }

    getCommonAttributes() {
        const id = this.xmlNode.getAttribute("id") || "";
        const text = this.xmlNode.querySelector("text")?.textContent || "";
        const x = this.xmlNode.querySelector("geometry > x")?.textContent || "0";
        const y = this.xmlNode.querySelector("geometry > y")?.textContent || "0";
        const width = this.xmlNode.querySelector("geometry > width")?.textContent || "auto";
        const height = this.xmlNode.querySelector("geometry > height")?.textContent || "auto";
        const fontSize = this.xmlNode.querySelector("font-size")?.textContent || "16";
        const color = this.xmlNode.querySelector("color")?.textContent || "#000";
        const backgroundColor = this.xmlNode.querySelector("background-color")?.textContent;
        const borderRadius = this.xmlNode.querySelector("border-radius")?.textContent;
        const className = this.xmlNode.querySelector("class")?.textContent;

        const tooltip = this.xmlNode.querySelector("tooltip")?.textContent;
        const enabled = this.xmlNode.querySelector("enabled")?.textContent !== "false";
        const opacity = this.xmlNode.querySelector("opacity")?.textContent || "1";
        const transform = this.xmlNode.querySelector("transform")?.textContent;
        const zIndex = this.xmlNode.querySelector("z-index")?.textContent;


        return { id, text, x, y, width, height,
                 fontSize, color, backgroundColor, borderRadius,
                 className,
                 tooltip, enabled, opacity, transform, zIndex
         };
    }

    applyCommonStyles(element, attrs) {
        if (attrs.id) element.id = attrs.id;
        if (attrs.className) element.className = attrs.className;
        element.classList.add(`x2h-${this.constructor.name.toLowerCase()}`);
        
        element.style.position = "absolute";
        element.style.left = `${attrs.x}px`;
        element.style.top = `${attrs.y}px`;
        element.style.width = attrs.width === "default" ? "auto" : `${attrs.width}px`;
        element.style.height = attrs.height === "default" ? "auto" : `${attrs.height}px`;
        element.style.fontSize = `${attrs.fontSize}px`;
        element.style.color = attrs.color;
        element.style.whiteSpace = "pre";
        element.style.fontFamily = "Arial, sans-serif";
        
        if (attrs.backgroundColor) element.style.backgroundColor = attrs.backgroundColor;
        if (attrs.borderRadius) element.style.borderRadius = `${attrs.borderRadius}px`;

        if (attrs.tooltip) element.title = attrs.tooltip;
        if (!attrs.enabled) {
            element.disabled = true;
            element.style.opacity = "0.5";
            element.style.cursor = "not-allowed";
        }
        if (attrs.opacity !== "1") element.style.opacity = attrs.opacity;
        if (attrs.transform) element.style.transform = attrs.transform;
        if (attrs.zIndex) element.style.zIndex = attrs.zIndex;

        return element;
    }

    setupEventListeners(element) {
        const onClick = this.xmlNode.querySelector("on-click")?.textContent;
        if (onClick) {
            element.addEventListener("click", () => {
                try {
                    const fn = new Function(onClick);
                    fn.call(element);
                } catch (error) {
                    console.error("Error executing onClick handler:", error);
                }
            });
        }

        const onMouseEnter = this.xmlNode.querySelector("on-mouse-enter")?.textContent;
        const onMouseLeave = this.xmlNode.querySelector("on-mouse-leave")?.textContent;
        const onFocus = this.xmlNode.querySelector("on-focus")?.textContent;
        const onBlur = this.xmlNode.querySelector("on-blur")?.textContent;
        const onChange = this.xmlNode.querySelector("on-change")?.textContent;

        if (onMouseEnter) element.addEventListener("mouseenter", () => new Function(onMouseEnter).call(element));
        if (onMouseLeave) element.addEventListener("mouseleave", () => new Function(onMouseLeave).call(element));
        if (onFocus) element.addEventListener("focus", () => new Function(onFocus).call(element));
        if (onBlur) element.addEventListener("blur", () => new Function(onBlur).call(element));
        if (onChange) element.addEventListener("change", () => new Function(onChange).call(element));
    }
}