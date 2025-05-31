import Label from "./elements/label.js";
import Button from "./elements/button.js";
import Input from "./elements/input.js";
import Image from "./elements/image.js";
import Frame from "./elements/frame.js";
import Checkbox from "./elements/checkbox.js";

export default class X2HRender {
    constructor(xmlStringOrDoc) {
        if (typeof xmlStringOrDoc === "string") {
            const parser = new DOMParser();
            this.xmlDoc = parser.parseFromString(xmlStringOrDoc, "text/xml");
            if (this.xmlDoc.querySelector("parsererror")) {
                throw new Error("Invalid XML string");
            }
        } else {
            this.xmlDoc = xmlStringOrDoc;
        }

        this.elementMap = {
            label: Label,
            button: Button,
            input: Input,
            image: Image,
            frame: Frame,
            checkbox: Checkbox
        };
    }

    render(target = document.body) {
        const fragment = document.createDocumentFragment();

        const titleNode = this.xmlDoc.querySelector("Web-Title");
        if (titleNode) {
            document.title = titleNode.textContent;
        }

        for (const [tagName, ElementClass] of Object.entries(this.elementMap)) {
            const elements = this.xmlDoc.getElementsByTagName(tagName);
            for (const elementNode of elements) {
                try {
                    const element = new ElementClass(elementNode);
                    const el = element.render();
                    fragment.appendChild(el);
                } catch (error) {
                    console.error(`Error rendering ${tagName}:`, error);
                }
            }
        }

        target.appendChild(fragment);
    }
}