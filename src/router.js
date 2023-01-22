import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomeViews'
import Users from './views/UsersViews'


Vue.use(Router) // useでプラグインを使えるようにしている。

export default new Router({
  routes: [{ path: '/', component: Home }, { path: '/users', component: Users }] // このURLではこのコンポーネントを出すという設定をする。
})
