import { html } from "lit";

export function ActionView() {
    return () =>
        html` <div class="sliding-view">
            <back-button href="/get-started"></back-button>
            <fitted-image src="/woman-book.png"></fitted-image>
            <h1>Action</h1>

            <h2>Routing and Templating</h2>

            <p>TODO</p>

            <h2>Battle tested components</h2>
            <p>TODO</p>

            <h2>Mobile development environment</h2>
            <p>TODO</p>
        </div>`;
}
