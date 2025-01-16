import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-indicator")
export class PageIndicator extends LitElement {
    static properties = {
        pages: { type: Number },
        current: { type: Number },
    };

    pages = 0;
    current = 0;

    render() {
        return html`
            ${new Array(this.pages).fill(0).map((val, i) => html`<span ?selected=${i + 1 === this.current}></span> `)}
        `;
    }

    static styles = css`
        :host {
            display: flex;
            gap: 1rem;
        }

        span {
            width: 10px;
            height: 10px;
            display: block;
            border: 1px solid #9e9e9e;
            border-radius: 50%;
        }

        span[selected] {
            border: none;
            background: salmon;
        }
    `;
}
