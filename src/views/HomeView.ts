import { html } from "lit";
import "../components/fitted-image";
import "../components/page-indicator";

export function HomeView() {
    return () => html`
        <fitted-image src="/woman-sitting.png"></fitted-image>
        <page-indicator pages="3" current="1"></page-indicator>
        <h1>Writing mobile apps doesn't have to be hard.</h1>
    `;
}
