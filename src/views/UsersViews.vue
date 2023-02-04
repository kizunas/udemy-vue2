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
  created() {
    console.log("createdされました");
  }
}
</script>