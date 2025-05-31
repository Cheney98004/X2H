import BaseElement from "./base-element.js";

export default class Checkbox extends BaseElement {
    render() {
        const attrs = this.getCommonAttributes();
        const checked = this.xmlNode.querySelector("checked")?.textContent === "true";
        const name = this.xmlNode.querySelector("name")?.textContent || "";

        const container = document.createElement("div");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");

        checkbox.type = "checkbox";
        checkbox.checked = checked;
        checkbox.name = name;
        checkbox.id = attrs.id || name;

        label.htmlFor = checkbox.id;
        label.textContent = attrs.text;

        container.appendChild(checkbox);
        container.appendChild(label);
        
        this.applyCommonStyles(container, attrs);
        this.setupEventListeners(checkbox);
        
        return container;
    }
}