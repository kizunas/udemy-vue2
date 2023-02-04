import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomeViews'
import Users from './views/UsersViews'


Vue.use(Router) // useでプラグインを使えるようにしている。

export default new Router({
  mode: 'history',
  // このURLではこのコンポーネントを出すという設定をする。↴
  routes: [
    { path: '/', component: Home }, 
    { path: '/users/:id', component: Users, props: true } // コロン（:）をつけると動的にできる。基本的には:idと書く。
    // props: trueとするとpropsが使える。users/:idのidが返されるようになる。すなわちusers/1なら1を渡す。
  ]
})
