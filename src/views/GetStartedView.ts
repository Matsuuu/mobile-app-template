import { html } from "lit";

export function GetStartedView() {
    return () => html`
        <div class="sliding-view">
            <back-button href="/tech"></back-button>
            <fitted-image src="/woman-smiling.png"></fitted-image>
            <page-indicator pages="3" current="3"></page-indicator>
            <h1>Clone the template, Install dependencies and start creating!</h1>

            <sl-button outline variant="primary" href="https://github.com/Matsuuu/mobile-app-template"
                >Get the template!</sl-button
            >

            <sl-button outline href="/action">Or see it in action!</sl-button>
        </div>
    `;
}
