<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"]),
    message: { // getterとsetterをつかう。
      get() {
        return this.$store.getters.message; // computedのgetterでstoreのgetterを取得
      },
      set(value) {
        this.$store.dispatch("updateMessage", value) // computedのsetterでinputの変化をv-modelから第一引数経由で取得。その値をdispatchでstoreのactionへ伝える。
      }
    }
  },
  methods: {
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 }
      });
    }
  }
};
</script>
