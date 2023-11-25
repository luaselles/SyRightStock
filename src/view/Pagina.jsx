import Container from "../components/container"
import Footer from '../components/footer'
import Header from '../components/header'

export function Pagina(props) {
    return (
        <div>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </div>
    );
}