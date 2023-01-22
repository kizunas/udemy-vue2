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
// import { mapGetters } from 'vuex';

export default {
  computed: {
    // ...mapGetters("count", ["doubleCount", "tripleCount"]), // map〇〇を使う場合は第一引数に名前空間の名をつける。すなわち「'ファイルがindex.jsの場合はディレクトリ名 or ファイル名がindex.jsではない場合はファイル名'」を記述
    doubleCount() {
      return this.$store.getters["count/doubleCount"] // 配列に「'ファイルがindex.jsの場合はディレクトリ名 or ファイル名がindex.jsではない場合はファイル名'」/「'state or getters or mutations or actions内の関数名'」を記述
    },
    tripleCount() {
      return this.$store.getters["count/tripleCount"]
    },
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
