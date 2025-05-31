import BaseElement from "./base-element.js";

export default class Input extends BaseElement {
    render() {
        const attrs = this.getCommonAttributes();
        const input = document.createElement("input");
        input.type = this.xmlNode.querySelector("type")?.textContent || "text";
        input.placeholder = this.xmlNode.querySelector("placeholder")?.textContent || "";
        input.value = this.xmlNode.querySelector("value")?.textContent || "";
        
        this.applyCommonStyles(input, attrs);
        this.setupEventListeners(input);
        
        return input;
    }
}