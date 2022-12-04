import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //Vue.useは指定したプラグイン（今回はVuex）を全体で使用するという意味

//export defaultでmain.jsに読み込めるようにする。
export default new Vuex.Store({    //storeはデータを置いておく場所というイメージ
  state: {  //全体で使えるグローバル変数みたいなものを作る。
    count: 2
  }
}); 