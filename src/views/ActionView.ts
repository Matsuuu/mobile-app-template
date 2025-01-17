import { html } from "lit";
// @ts-ignore
import hljs from "../lib/es/highlight.min.js";
// @ts-ignore
import "../lib/styles/atom-one-dark.css";
// @ts-ignore
import javascript from "../lib/es/languages/javascript";
// @ts-ignore
import xml from "../lib/es/languages/xml";
import { onNavigation } from "suunta";
import { router } from "../router.js";

export function ActionView() {
    onNavigation(() => {
        hljs.registerLanguage("javascript", javascript);
        hljs.registerLanguage("html", xml);

        hljs.highlightAll();
    });

    return () => html`
        <div class="sliding-view">
            <back-button href="${router.resolve("GetStarted")}"></back-button>
            <fitted-image src="/woman-book.png"></fitted-image>
            <h1>Action</h1>

            <h2>Routing and Templating</h2>

            <p>
                By default the template utilizes <a href="#">Suunta</a> as its routing library, and
                <a href="https://lit.dev">Lit</a> as its templating system.
            </p>
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

            <p>Lit comes fitted with all you need for templating, rendering custom elements and the bunch.</p>

            <p>
                Suunta will take care or your client-side routing, state management and lifecycle hooks of your views.
            </p>

            <h2>Battle tested components</h2>

            <p>
                <a href="https://shoelace.style/">Shoelace</a> provides a massive collection of ready-made components
                you can use out of the box, modify to fit your style tokens or even extend to fit your specific needs
            </p>

            <pre><code class="language-html">
&ltdiv class="sliding-view"&gt
    &ltsl-drawer&gt
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        &ltsl-button slot="footer" variant="primary"&gtClose&lt/sl-button&gt
    &lt/sl-drawer&gt
    &ltpage-indicator pages="3" current="1"&gt&lt/page-indicator&gt
    &lth1&gtWriting mobile apps doesn't have to be hard.&lt/h1&gt
    &ltsl-button outline variant="primary" href="/tech"&gtShow me!&lt/sl-button&gt
&lt/div&gt
            </code></pre>

            <p>
                Being built as Web Components, these components are just drag and drop for pretty much any part of your
                application. Treat them like you would treat your native HTML elements
            </p>

            <h2>Mobile development environment</h2>
            <p>
                Your mobile dev environment is just one <code>npm start</code> and
                <code>npm run start:android</code> away! Develop against a real device or an emulator, with hot reloads
                built in.
            </p>

            <p><i>You will need to have an emulator for your given system installed though...</i></p>

            <h2>Native API's</h2>
            <p>
                Access native mobile API's through the <a href="https://capacitorjs.com/">Capacitor</a> Plugin system.
                Just because you're building a cross-platform tool, doesn't mean you have to withdraw from all native
                features.
            </p>

            <pre><code class="language-javascript">
import { Share } from '@capacitor/share';

await Share.share({
  title: 'See cool stuff',
  text: 'Really awesome thing you need to see right meow',
  url: 'http://ionicframework.com/',
  dialogTitle: 'Share with buddies',
});
            </code></pre>

            <pre><code class="language-javascript">
import { Geolocation } from '@capacitor/geolocation';

const printCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition();

  console.log('Current position:', coordinates);
};
            </code></pre>

            <sl-button outline variant="primary" href="https://github.com/Matsuuu/mobile-app-template"
                >I'm sold! Get me to the template!</sl-button
            >
        </div>
    `;
}
