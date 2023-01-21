import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count" // modulesに作成したファイルをimportして読み込む
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex); //Vue.useは指定したプラグイン（今回はVuex）を全体で使用するという意味

//export defaultでmain.jsに読み込めるようにする。
export default new Vuex.Store({    //storeはデータを置いておく場所というイメージ
  state: {  //全体で使えるグローバル変数みたいなものを作る。
    message: ''
  },
  getters,
  mutations,
  actions,
  modules: { // モジュールに分割したコードをimportでとりこみここで使えるようにする
    count
  }
}); 