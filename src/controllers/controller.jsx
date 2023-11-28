const localRecursos = 'http://localhost:3001/acerto';

const Controller = {
    doSubmit(e) {
        if (e.produto != null && e.quantidade != null && e.tipo != null && e.motivo != null) {
            Controller.gravarAcerto(e);
            return;
        }
    },

    gravarAcerto(e) {
        console.log("gravarAcerto()", JSON.stringify(e));
        fetch(localRecursos, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e)
        })
            .then(resposta => resposta.json())
        console.log("sucess ao gravar");
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