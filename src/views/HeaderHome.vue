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
export default {
  methods: {
    increment() {
      this.$store.dispatch("increment", 2)
    },
    decrement() {
      this.$store.dispatch("decrement", 2)
      this.$store.dispatch("resetCounter")
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