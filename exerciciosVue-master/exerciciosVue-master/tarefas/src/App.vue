<template>
  <div id="app">
    <h1>Tarefas</h1>
   <TaskGrid :tasks="tasks"></TaskGrid>
  </div>
</template>

<script>
    import TaskGrid from './components/TaskGrid.vue'
    export default {
        components: {
            TaskGrid
        },
        name: 'app',
        data() {
            return {
                tasks: [{
                    name: 'Comprar remedio ',
                    pending: false
                }, {
                    name: 'passear com o cachorro',
                    pending: true
                }]
            }
        }

    }
</script>


<style>
    body {
        background: #403B4A;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #E7E9BB, #403B4A);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #E7E9BB, #403B4A);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    
    #app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    
    #app h1 {
        margin-bottom: 5px;
        font-weight: 300;
        font-size: 5rem;
    }
</style>