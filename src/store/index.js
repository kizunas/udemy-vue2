import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count" // 作成したファイルをimportして読み込む

Vue.use(Vuex); //Vue.useは指定したプラグイン（今回はVuex）を全体で使用するという意味

//export defaultでmain.jsに読み込めるようにする。
export default new Vuex.Store({    //storeはデータを置いておく場所というイメージ
  state: {  //全体で使えるグローバル変数みたいなものを作る。
    message: ''
  },
  getters: {  // 関数を書く
    message: state => state.message
  },
  mutations: {  // mutationsで値を変える（他で値を替えるとややこしくなるため、基本的にmutations以外で値を替えないように
    updateMessage(state, newMessage) { //第一引数はstateを取る。
      state.message = newMessage;
    }
  },
  actions: {
    updateMessage(context, newMessage) {     
      context.commit("updateMessage", newMessage);
    }
  },
  modules: { // モジュールに分割したコードをimportでとりこみここで使えるようにする
    count
  }
}); 