import { useState, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';

const localRecursos = 'http://localhost:3001/acerto';

export default function PageViewAcertos() {

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
                            <div>{acerto}</div>
                        )
                    })}
                </div>
            </div>
        );
}