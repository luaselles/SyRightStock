
const Controller = {
    doSubmit(e) {
        console.log("doSubmit()", e)
        // const formulario = e.currentTarget;
        // alert(formulario.checkValidity());
        // if (formulario.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // } else {
        //     props.onGravar(escoteiro);
        // }

        // setFormValidado(true);
    },

    validationSelectProd(e) {
        e.target.value === '' ? e.target.setCustomValidity("Selecione um produto")
            : e.target.setCustomValidity("");
    },

    validationQuantidade(e) { },

    validationTipo(e) {
        e.target.value === '' ? e.target.setCustomValidity("Selecione um tipo")
            : e.target.setCustomValidity("");
    },

    validationMotivo(e) { }


}
export default Controller;