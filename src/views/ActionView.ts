import { html } from "lit";
// @ts-ignore
import hljs from "../lib/es/highlight.min.js";
// @ts-ignore
import "../lib/styles/atom-one-dark.css";
// @ts-ignore
import javascript from "../lib/es/languages/javascript";
import { onNavigation } from "suunta";
import { router } from "../router.js";

export function ActionView() {
    onNavigation(() => {
        hljs.registerLanguage("javascript", javascript);
        hljs.highlightAll();
    });

    return () =>
        html` <div class="sliding-view">
            <back-button href="${router.resolve("GetStarted")}"></back-button>
            <fitted-image src="/woman-book.png"></fitted-image>
            <h1>Action</h1>

            <h2>Routing and Templating</h2>

            <p>By default the template utilizes Suunta as its routing library, and Lit as its templating system.</p>
            <p>
                You can get started with this setup and even build whole production-ready applications with it. If you
                however want to swap them out, feel free to do so.
            </p>

            <pre><code class="language-javascript">
// Declaring routes as simple as it gets
const routes = [
    {
        name: "Home",
        path: "/",
        view: HomeView,
    },
    {
        name: "Technologies",
        path: "/tech",
        view: TechnologiesView,
    },
]

// Creating views follows a no-ceremony approach

import { html } from "lit";
import "../components/fitted-image";
import "../components/page-indicator";

export function HomeView() {
    return () => html\`
        &ltdiv class="sliding-view"&gt
            &ltfitted-image src="/woman-sitting.png"&gt&lt/fitted-image&gt
            &ltpage-indicator pages="3" current="1"&gt&lt/page-indicator&gt
            &lth1&gtWriting mobile apps doesn't have to be hard.&lt/h1&gt
            &ltsl-button outline variant="primary" href="/tech"&gtShow me!&lt/sl-button&gt
        &lt/div&gt
    \`;
}

            </code></pre>
            <p>TODO</p>

            <h2>Battle tested components</h2>
            <p>TODO</p>

            <h2>Mobile development environment</h2>
            <p>TODO</p>

            <h2>Native API's</h2>
            <p>TODO</p>
        </div>`;
}
