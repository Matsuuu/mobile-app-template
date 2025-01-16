import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("fitted-image")
export class FittedImage extends LitElement {
    static properties = {
        src: { type: String },
    };

    src = undefined;

    render() {
        return html`
            <img src="${this.src}" />
            <div></div>
        `;
    }

    static styles = css`
        :host {
            position: relative;
        }

        div {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: inset 0px 0px 60px 60px #fff;
        }

        img {
            width: 100%;
        }
    `;
}
