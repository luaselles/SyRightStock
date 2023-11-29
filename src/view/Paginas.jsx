import { Pagina } from "./Pagina";
import InitialPageView from "./InitialPageView"
import PageViewAcertos from "./PageViewAcertos"

export function PageInitial(props) {
    return (
        <Pagina>
            <InitialPageView />
        </Pagina>
    );
}
export function PageAcertos(props) {
    return (
        <Pagina>
            <PageViewAcertos />
        </Pagina>
    );
}