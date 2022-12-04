import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Users from './views/Users'


//useはプラグインを導入する意味をもつ（vue公式のものだけこの書き方？）
Vue.use(Router)

//main.jsに記述できるようにする。
export default new Router({
  routes: [{ path: '/', component: Home }, { path: '/users', component: Users }]
})