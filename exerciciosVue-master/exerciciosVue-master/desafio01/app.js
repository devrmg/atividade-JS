new Vue({
    el: '#desafio',
    data: {
        nome: 'david alves',
        idade: 27,
        link: 'https://www.google.com/search?q=imagen&source=lnms&tbm=isch&sa=X&ved=0ahUKEwja-7jv7rziAhVvD7kGHee3BYgQ_AUIDigB&biw=1053&bih=719#imgrc=CQznGJAGSWU2dM:'
    },
    methods: {
        idade3x() {
            return idade * 3
        },
        aleatorio() {
            return Math.random()
        }

    },
})