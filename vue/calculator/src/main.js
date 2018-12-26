import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)
    // Mesma coisa acima ^^^^
    // render(createElement){
    //     return createElement(App)
    // }
}).$mount("#app")