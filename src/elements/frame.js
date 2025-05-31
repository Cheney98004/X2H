import BaseElement from "./base-element.js";

export default class Frame extends BaseElement {
    render() {
        const attrs = this.getCommonAttributes();
        const border = this.xmlNode.querySelector("border")?.textContent || "none";
        const padding = this.xmlNode.querySelector("padding")?.textContent || "0";
        const overflow = this.xmlNode.querySelector("overflow")?.textContent || "visible";

        const div = document.createElement("div");
        div.style.border = border;
        div.style.padding = `${padding}px`;
        div.style.overflow = overflow;
        
        this.applyCommonStyles(div, attrs);
        this.setupEventListeners(div);
        
        return div;
    }
}