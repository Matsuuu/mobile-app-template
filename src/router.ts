import { html, render } from "lit";
import { Suunta, SuuntaTarget, ViewRoute } from "suunta";
import { HomeView } from "./views/HomeView";
import { TechnologiesView } from "./views/TechnologiesView";
import { GetStartedView } from "./views/GetStartedView";
import { ActionView } from "./views/ActionView";

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
    {
        name: "GetStarted",
        path: "/get-started",
        view: GetStartedView,
    },
    {
        name: "Action",
        path: "/action",
        view: ActionView,
    },
] as const;

const renderer = (view: unknown, route: ViewRoute, renderTarget: SuuntaTarget) => {
    render(html`${view}`, renderTarget);
};

const routerOptions = {
    routes,
    renderer,
    target: document.body,
};

const router = new Suunta(routerOptions);

export function startRouter() {
    router.start();
}
