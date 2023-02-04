<template>
  <div>
    <h3>Users</h3>
    <hr> <!-- <hr> 水平線を書くタグ -->
    <h1>User No. {{ $route.params.id }}</h1> <!-- router.js内で今回users/:idとしたので取得するparamsはidとしている。 -->
  </div>
</template>