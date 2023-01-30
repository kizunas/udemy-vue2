<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <router-link to="/">Home</router-link> <!-- aタグのようにサーバーにアクセスされないため切り替えが早い -->
      <router-link to="/users">Users</router-link>
    </nav>
    <router-view></router-view>  <!-- URLが変わるとそれに付随したコンポーネントを表示させるために必要。 -->
  </div>
</template>
