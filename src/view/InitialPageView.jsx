import Form from 'react-bootstrap/Form';
import '../estilos/initialpage.css'

export default function InitialPageView() {

    return (
        <div className="container mb-2">
            <div className="header">
                <p className="m-0">Acerto de Produto</p>
                <hr className="m-0" />
                <p className="m-0 header_descricao">Identificação e contabilização das mercadorias que estão armazenadas no estoque.</p>
            </div>
            <div className="row form_edit">
                <Form>
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </div>
                </Form>
            </div>
        </div>
    );
}