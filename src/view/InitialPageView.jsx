import Form from 'react-bootstrap/Form';
import '../estilos/initialpage.css';
import Button from 'react-bootstrap/Button';

export default function InitialPageView() {

    return (
        <div className="container mb-2">
            <div className="header">
                <p className="m-0">Acerto de Produto</p>
                <hr className="m-0" />
                <p className="mb-0 header_descricao">Identificação e contabilização das mercadorias que estão armazenadas no estoque.</p>
            </div>
            <Form>
                <div className="row form_edit ">
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Produto</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione um produto</option>
                                <option value="1">Creatina</option>
                                <option value="2">Whey Protein</option>
                                <option value="3">Vitamina B3</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione uma quantidade</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
                <div className="row form_edit">
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione um tipo</option>
                                <option value="1">Sólido</option>
                                <option value="2">Gás</option>
                                <option value="3">Líquido</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Motivo</Form.Label>
                            <Form.Control as="textarea" rows={1} placeholder='Descreva um motivo' />
                        </Form.Group>
                    </div>
                </div>
                <div className="row form_edit">
                    <div className="col-11">
                    </div>
                    <div className="col-1 button_submit">
                        <Button variant="primary">Confirmar</Button>{' '}
                    </div>
                </div>
            </Form>

        </div>
    );
}