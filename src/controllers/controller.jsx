const localRecursos = 'http://localhost:3001/acerto';

const Controller = {
    doSubmit(e) {
        if (e.id_produto != null && e.quantidade != null && e.tipo != null && e.motivo != null) {
            Controller.gravarAcerto(e);
            return;
        }
    },

    gravarAcerto(e) {
        e = { quantidade: parseInt(e.quantidade), tipo: e.tipo, motivo: e.motivo, data: e.data, id_produto: parseInt(e.id_produto) };
        console.log(e);
        fetch(localRecursos, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e)
        })
            .catch(error => console.log(error))
            .then(resposta => resposta.json())
        Controller.buscarAcertos();
        // console.log("sucess ao gravar");
    },

    buscarAcertos() {
        fetch(localRecursos, { method: "GET" })
            .then(resposta => resposta.json())
            .then(dados => {
                console.log("buscarAcertos", dados);
            },
                error => {
                    // setFoiCarregado(true);
                    // setErro(error);
                });
    },

    validationSelectProd(e) {
        e.target.value === '' ? e.target.setCustomValidity("Selecione um produto")
            : e.target.setCustomValidity("");
    },

    validationQuantidade(e) {
    },

    validationTipo(e) {
        e.target.value === '' ? e.target.setCustomValidity("Selecione um tipo")
            : e.target.setCustomValidity("");
    },

    validationMotivo(e) {
    },

}
export default Controller;