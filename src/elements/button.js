import BaseElement from "./base-element.js";

export default class Button extends BaseElement {
    render() {
        const attrs = this.getCommonAttributes();
        const button = document.createElement("button");
        button.innerText = attrs.text;
        
        this.applyCommonStyles(button, attrs);
        this.setupEventListeners(button);
        
        return button;
    }
}