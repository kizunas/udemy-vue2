<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push('users'); // もしくは this.$router.push({path: 'users'});
    }
  }
}
</script>