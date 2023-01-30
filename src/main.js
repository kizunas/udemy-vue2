import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router, // routerを使えるようにする
  render: h => h(App), // App.vueがメイン画面。App.vue内にコンポーネントが表示される。
}).$mount('#app')
