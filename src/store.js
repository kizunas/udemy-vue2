import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //Vue.useは指定したプラグイン（今回はVuex）を全体で使用するという意味

//export defaultでmain.jsに読み込めるようにする。
export default new Vuex.Store({    //storeはデータを置いておく場所というイメージ
  state: {  //全体で使えるグローバル変数みたいなものを作る。
    count: 2
  },
  getters: {  // 関数を書く
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3  
  },
  mutations: {  // mutationsで値を変える（他で値を替えるとややこしくなるため、基本的にmutations以外で値を替えないように
    increment(state, number) { //第一引数はstateを取る。
      state.count += number;
    },
    decrement(state, number) { 
      state.count -= number;
    }
  }
}); 