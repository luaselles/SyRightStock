import { useState, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import '../estilos/acertospage.css';
import Moment from 'react-moment';
import 'moment-timezone';

const localRecursos = 'http://localhost:3001/acerto';

export default function PageViewAcertos(props) {

    const [acertos, setAcertos] = useState([]);

    function buscarAcertos() {
        fetch(localRecursos, { method: "GET" })
            .then(resposta => resposta.json())
            .then(dados => {
                setAcertos(dados);
            },
                error => {
                    console.log("Error buscarAcertos()", error);
                });
    }

    useEffect(() => {
        buscarAcertos();
    }, [acertos]);

    if (acertos.length == 0)
        return (
            <div className="container mb-2">
                <div className="header">
                    <p className="m-0">Acerto Realizados</p>
                    <hr className="m-0" />
                    <p className="mb-0 header_descricao">Acertos que foram realizados.</p>
                </div>
                <div className="p-2">
                    <Alert key="info" variant="info">
                        Não possui acertos.
                    </Alert>
                </div>
            </div>
        )
    else
        return (
            <div className="container mb-2">
                <div className="header">
                    <p className="m-0">Acerto Realizados</p>
                    <hr className="m-0" />
                    <p className="mb-0 header_descricao">Acertos que foram realizados.</p>
                </div>
                <div>
                    {acertos.map((acerto) => {
                        return (
                            <div className="m-2">
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Quantidade</th>
                                            <th>Tipo</th>
                                            <th>Motivo</th>
                                            <th>Data</th>
                                            <th>Produto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{acerto.id}</td>
                                            <td>{acerto.quantidade}</td>
                                            <td>{acerto.tipo}</td>
                                            <td>{acerto.motivo}</td>
                                            <td>
                                                <Moment format="DD/MM/YYYY">
                                                    {acerto.data}
                                                </Moment>
                                            </td>
                                            <td>{acerto.id_produto}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
}