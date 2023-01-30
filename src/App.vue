<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <router-link 
       to="/"
       active-class="link--active"
       exact
       class="link"
       >Home</router-link> <!-- aタグのようにサーバーにアクセスされないため切り替えが早い -->
      <router-link 
       to="/users"
       active-class="link--active"
       exact
       class="link">Users</router-link>
    </nav>
    <router-view></router-view>  <!-- URLが変わるとそれに付随したコンポーネントを表示させるために必要。 -->
  </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>
