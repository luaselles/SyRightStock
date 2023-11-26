import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import '../estilos/initialpage.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Controller from '../controllers/controller'
import moment from "moment";

const localRecursos = 'http://localhost:3001/produto';

export default function InitialPageView() {

    // const date = moment().format("YYYY-MM-DD hh:mm:ss");
    // console.log(date);

    const [produtos, setProdutos] = useState([]);
    const [foiCarregado, setFoiCarregado] = useState(false);

    function buscarProdutos() {
        fetch(localRecursos, { method: "GET" })
            .then(resposta => resposta.json())
            .then(dados => {
                setFoiCarregado(true);
                setProdutos(dados);
            },
                error => {
                    console.log("erro", error);
                    // setFoiCarregado(true);
                    // setErro(error);
                });
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos]);

    if (produtos.length == 0)
        return (
            <div className="container mb-2">
                <div className="header">
                    <p className="m-0">Acerto de Produto</p>
                    <hr className="m-0" />
                    <p className="mb-0 header_descricao">Identificação e contabilização das mercadorias que estão armazenadas no estoque.</p>
                </div>
                <div className="p-2">
                    <Alert key="info" variant="info">
                        Não possui produtos a serem listados no momento.
                    </Alert>
                </div>
            </div>
        )
    else
        return (
            <div className="container mb-2">
                <div className="header">
                    <p className="m-0">Acerto de Produto</p>
                    <hr className="m-0" />
                    <p className="mb-0 header_descricao">Identificação e contabilização das mercadorias que estão armazenadas no estoque.</p>
                </div>
                <div>
                    {produtos.map((prod) => {
                        return (
                            <div>
                                <Form onSubmit={Controller.doSubmit} action="#">
                                    <div className="row form_edit ">
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                                <Form.Label>Produto</Form.Label>
                                                <Form.Select onChange={Controller.validationSelectProd} required>
                                                    <option value="">Selecione um produto</option>
                                                    <option value={prod.id}>{prod.nome}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Quantidade</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    maxLength={prod.quantidade}
                                                    max={prod.quantidade}
                                                    placeholder="Digite uma quantidade"
                                                    required
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row form_edit">
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Tipo</Form.Label>
                                                <Form.Select onChange={Controller.validationTipo} required>
                                                    <option value="">Selecione um tipo</option>
                                                    <option value="1">Crítico</option>
                                                    <option value="2">Grave</option>
                                                    <option value="3">Tolerável</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Motivo</Form.Label>
                                                <Form.Control required type="textarea" rows={1} placeholder='Descreva um motivo' />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row form_edit">
                                        <div className="col-11 p_right">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control
                                                    type="date"
                                                    value={moment().format("YYYY-MM-DD")}
                                                    disabled
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-1 button_submit">
                                            <Button variant="primary" type="submit">Confirmar</Button>{' '}
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
}