import "./styles/main.css";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/shoelace.js";
import { html, render } from "lit";

render(
  html`
    <sl-button>
      <sl-icon name="apple"></sl-icon>
      Testi
    </sl-button>
  `,
  document.body,
);
