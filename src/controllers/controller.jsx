const localRecursos = 'http://localhost:3001/acerto';
const localRecursosProd = 'http://localhost:3001/produto';

const Controller = {
    doSubmit(e, prodQuantidadeAtual) {
        if (e.id_produto != null && e.quantidade != null && e.tipo != null && e.motivo != null) {
            Controller.gravarAcerto(e);
            Controller.alterarQuantidadeProduto(e, prodQuantidadeAtual);
            return;
        }
    },

    alterarQuantidadeProduto(e, prodQuantidadeAtual) {
        const retirada = prodQuantidadeAtual.quantidade[0] - parseInt(e.quantidade);
        const data = { quantidade: retirada, id: parseInt(e.id_produto) };
        fetch(localRecursosProd, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(resposta => resposta.json())
            .then(retorno => {
                if (retorno)
                    console.log('Quantidade atualizada com sucesso!');
                else
                    console.log('Não foi possível atualizar o Quantidade!');
            });
    },

    gravarAcerto(e) {
        e = { quantidade: parseInt(e.quantidade), tipo: e.tipo, motivo: e.motivo, data: e.data, id_produto: parseInt(e.id_produto) };
        fetch(localRecursos, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e)
        })
            .catch(error => console.log(error))
            .then(resposta => resposta.json())
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