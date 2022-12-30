<template>
  <nav>
    <h2>Home</h2>
    <router-link
      to="/"
      active-class="link--active"
      exact
      class="link"
    >Home</router-link>
    <router-link
      :to="{ name: 'users-id-profile', params: { id: 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }"
      active-class="link--active"
      exact
      class="link"
    >Users</router-link>
    <h1>{{ counter }}</h1>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </nav>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  methods: {
    increment() {
      this.$store.commit('increment', 1) // mutationsを実行した場合は、commit('実行したい関数名')を使う
    },                                   // 今回は第二引数があるのでcommit('increment', 1)と記述。
    decrement() {
      this.$store.commit('decrement', 1) // 今回は第二引数があるのでcommit('decrement', 1)と記述。
    },
  },
  computed: {
    counter() {
      return this.$store.state.count;
    }
  }
};
</script>


<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>