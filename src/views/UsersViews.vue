<template>
  <div>
    <h3>Users</h3>
    <hr> <!-- <hr> 水平線を書くタグ -->
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/a">ユーザーa</router-link>
    <h1>User No. {{ $route.params.id }}</h1> <!-- router.js内で今回users/:idとしたので取得するparamsはidとしている。 -->
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) { // to, fromの名前は何でもよい。第一引数が新しい値、第二引数が古い値を返してくれる。
      console.log(to);
      console.log(from);
      console.log("$routerが変わった" + from.params.id + "から" + to.params.id);
    }
  }
}
</script>