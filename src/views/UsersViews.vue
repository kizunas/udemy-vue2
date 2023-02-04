<template>
  <div>
    <h3>Users</h3>
    <hr> <!-- <hr> 水平線を書くタグ -->
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/a">ユーザーa</router-link>
    <h1>User No. {{ id }}</h1> <!-- propsによりrouter.jsのusers/:idのidが渡されるようになった。 -->
  </div>
</template>

<script>
export default {
  props: ["id"] // 親コンポーネントから渡された物ではないため、再利用する際は親コンポーネントから別のidというものを渡してあげると上のマスタッシュ構文のidで表示されるものが違うものにできる。
}
</script>