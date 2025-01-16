import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("back-button")
export class BackButton extends LitElement {
    static properties = {
        href: { type: String },
    };

    href = "";

    render() {
        return html` <a href="${this.href}"><sl-icon name="chevron-left"></sl-icon></a> `;
    }

    static styles = css`
        :host {
            position: absolute;
            top: 1rem;
            left: 1rem;
        }
    `;
}
