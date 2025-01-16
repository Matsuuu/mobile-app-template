import { html } from "lit";

export function GetStartedView() {
    return () => html`
        <fitted-image src="/woman-smiling.png"></fitted-image>
        <page-indicator pages="3" current="3"></page-indicator>
        <h1>Clone the template, Install dependencies and start creating!</h1>

        <sl-button outline variant="primary" href="https://github.com/Matsuuu/mobile-app-template"
            >Get the template!</sl-button
        >
    `;
}
