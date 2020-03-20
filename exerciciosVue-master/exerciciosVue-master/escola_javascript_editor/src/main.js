import Vue from 'vue'
import App from './App.vue'
// Plugin do quill criado
import './plugins/quill_editor.js'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')