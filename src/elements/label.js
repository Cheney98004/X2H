import BaseElement from "./base-element.js";

export default class Label extends BaseElement {
    render() {
        const attrs = this.getCommonAttributes();
        const div = document.createElement("div");
        div.innerText = attrs.text;
        
        this.applyCommonStyles(div, attrs);
        this.setupEventListeners(div);
        
        return div;
    }
}