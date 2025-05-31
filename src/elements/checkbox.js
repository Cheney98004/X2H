import BaseElement from "./base-element.js";

export default class Checkbox extends BaseElement {
    render() {
        const attrs = this.getCommonAttributes();
        const checked = this.xmlNode.querySelector("checked")?.textContent === "true";
        const name = this.xmlNode.querySelector("name")?.textContent || "";

        const container = document.createElement("div");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");

        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.gap = "8px";

        checkbox.type = "checkbox";
        checkbox.checked = checked;
        checkbox.name = name;
        checkbox.id = attrs.id || name;
        checkbox.style.width = "16px";
        checkbox.style.height = "16px";
        checkbox.style.margin = "0";
        checkbox.style.cursor = "pointer";

        label.htmlFor = checkbox.id;
        label.textContent = attrs.text;
        label.style.cursor = "pointer";
        label.style.userSelect = "none";
        label.style.color = attrs.color;
        label.style.fontSize = `${attrs.fontSize}px`;
        
        container.appendChild(checkbox);
        container.appendChild(label);
        
        this.applyCommonStyles(container, attrs);
        this.setupEventListeners(checkbox);
        
        return container;
    }
}