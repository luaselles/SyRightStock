import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import '../estilos/initialpage.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Controller from '../controllers/controller'
import moment from "moment";

const localRecursos = 'http://localhost:3001/produto';

export default function InitialPageView(props) {

    const [prodQuantidadeAtual, setProdQtdeAtual] = useState({ quantidade: null });
    const [produtos, setProdutos] = useState([]);
    const [foiCarregado, setFoiCarregado] = useState(false);
    const [fields, setFields] = useState({ data: moment().format("YYYY-MM-DD") });
    const [errors, setErrors] = useState({});

    function handleValidation(fields) {
        const formFields = { ...fields };
        const formErrors = {};
        let formIsValid = true;

        //Quantidade
        if (parseInt(formFields["quantidade"]) > prodQuantidadeAtual.quantidade) {
            formIsValid = false;
            formErrors["quantidade"] = "Digite uma quantidade menor a " + prodQuantidadeAtual.quantidade;
        }
        if (!formFields["quantidade"] || parseInt(formFields["quantidade"]) === 0) {
            formIsValid = false;
            formErrors["quantidade"] = "Digite uma quantidade";
        }
        //Produto
        if (!formFields["id_produto"] || formFields["id_produto"] === "Selecione um produto") {
            formIsValid = false;
            formErrors["id_produto"] = "Selecione um produto";
        }
        //Tipo
        if (!formFields["tipo"] || formFields["tipo"] === "Selecione um tipo") {
            formIsValid = false;
            formErrors["tipo"] = "Selecione um tipo";
        }
        //Motivo
        if (!formFields["motivo"]) {
            formIsValid = false;
            formErrors["motivo"] = "Preencha o motivo";
        }

        setErrors(formErrors);
        return formIsValid;
    }

    function resetForm() {
        document.getElementById("form").reset();
    }

    const handleChange = (field, value) => {
        setFields({
            ...fields,
            [field]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (handleValidation(fields)) {
            Controller.doSubmit(fields, prodQuantidadeAtual);
            setFields({ data: moment().format("YYYY-MM-DD") });
            resetForm();
        } else {
            e.preventDefault();
            e.stopPropagation();
            alert("Form inválido.");
        }
    }

    function buscarProdutos() {
        fetch(localRecursos, { method: "GET" })
            .then(resposta => resposta.json())
            .then(dados => {
                setFoiCarregado(true);
                setProdutos(dados);
            },
                error => {
                    console.log("erro", error);
                });
    }

    useEffect(() => {
        buscarProdutos();
        const quantidade = produtos.map(p => p.quantidade);
        setProdQtdeAtual({ quantidade: quantidade });
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
                    <Alert variant="info">
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
                                <Form onSubmit={handleSubmit} action="#" id="form">
                                    <div className="row form_edit ">
                                        <div className="col-6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Produto</Form.Label>
                                                <Form.Select
                                                    onChange={e => handleChange('id_produto', e.target.value)}
                                                    disabled={prod.quantidade == 0}
                                                    name="produto">
                                                    <option value={null}>Selecione um produto</option>
                                                    <option value={prod.id}>{prod.nome}</option>
                                                </Form.Select>
                                                <span className="invalid">{errors["id_produto"]}</span>
                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Quantidade {prod.quantidade}</Form.Label>
                                                <Form.Control
                                                    onChange={e => handleChange('quantidade', e.target.value)}
                                                    // value={fields["quantidade"]}
                                                    name="quantidade"
                                                    type="number"
                                                    min={1}
                                                    maxLength={prod.quantidade}
                                                    max={prod.quantidade}
                                                    placeholder={prod.quantidade == 0 ? "Não a produtos disponíveis" : "Digite uma quantidade"}
                                                    disabled={prod.quantidade == 0}
                                                    required
                                                />
                                                <span className="invalid">{errors["quantidade"]}</span>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row form_edit">
                                        <div className="col-6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Tipo</Form.Label>
                                                <Form.Select
                                                    onChange={e => handleChange('tipo', e.target.value)}
                                                    disabled={prod.quantidade == 0}
                                                    required name="tipo">
                                                    <option value={null}>Selecione um tipo</option>
                                                    <option value="Crítico">Crítico</option>
                                                    <option value="Grave">Grave</option>
                                                    <option value="Tolerável">Tolerável</option>
                                                </Form.Select>
                                                <span className="invalid">{errors["tipo"]}</span>
                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Motivo</Form.Label>
                                                <Form.Control
                                                    disabled={prod.quantidade == 0}
                                                    onChange={e => handleChange('motivo', e.target.value)} value={fields["motivo"]}
                                                    name="motivo" required type="textarea" rows={1} placeholder='Descreva um motivo' />
                                                <span className="invalid">{errors["motivo"]}</span>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row form_edit">
                                        <div className="col-11 p_right">
                                            <Form.Group className="mb-3" >
                                                <Form.Control
                                                    name="data"
                                                    type="date"
                                                    value={moment().format("YYYY-MM-DD")}
                                                    disabled
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-1 button_submit">
                                            {/*  disabled={(form.id_produto === 'Selecione um produto' || form.id_produto === null)
                                                    || (form.quantidade === '' || form.quantidade === null) || (form.tipo === 'Selecione um tipo' || form.tipo === null)
                                                    || (form.motivo === '' || form.motivo === null)} */}
                                            <Button
                                                disabled={prod.quantidade == 0}
                                                variant="primary" type="submit">Confirmar</Button>{' '}
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