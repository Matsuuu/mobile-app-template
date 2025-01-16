import { html } from "lit";
import "../components/back-button";

const TECHS = [
    { name: "Lit", href: "http://lit.dev/" },
    { name: "Shoelace", href: "https://shoelace.style/" },
    { name: "Capacitor", href: "https://capacitorjs.com/" },
    { name: "Suunta", href: "https://github.com/Simplr/suunta" },
    { name: "Vite", href: "https://vite.dev/" },
];

export function TechnologiesView() {
    return () => html`
        <back-button href="/"></back-button>
        <fitted-image src="/woman-book.png"></fitted-image>
        <page-indicator pages="3" current="2"></page-indicator>
        <h1>
            Standalone technologies, <br />
            Browser standards, <br />
            Ultimate DX
        </h1>

        <ul class="tech-listing">
            ${TECHS.map(tech => html` <li><a href="${tech.href}">${tech.name}</a></li> `)}
        </ul>
        <sl-button outline variant="primary" href="/get-started">Let's get started!</sl-button>
    `;
}
