import BaseElement from "./base-element.js";

export default class Image extends BaseElement {
    render() {
        const attrs = this.getCommonAttributes();
        const src = this.xmlNode.querySelector("src")?.textContent || "";
        const alt = this.xmlNode.querySelector("alt")?.textContent || "";
        const fit = this.xmlNode.querySelector("fit")?.textContent || "contain";

        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        img.style.objectFit = fit;
        
        this.applyCommonStyles(img, attrs);
        this.setupEventListeners(img);
        
        return img;
    }
}