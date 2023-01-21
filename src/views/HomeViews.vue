<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" :value="message" @input="updateMssage">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"]),
    message() {
      return this.$store.getters.message;
    }
  },
  methods: {
    updateMssage(e) { // イベントを取得し、actionへ値を送る。
      this.$store.dispatch("updateMessage", e.target.value)
      console.log(e);
    },
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 }
      });
    }
  }
};
</script>
