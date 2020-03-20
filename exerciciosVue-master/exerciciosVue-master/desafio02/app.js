new Vue({
    el: '#desafio',
    data: {

    },
    methods: {
        exibirAlerta() {
            alert('O botao foi clicado')
        },
        salvar(event) {
            this.valor = event.target.value
        }
    }
})