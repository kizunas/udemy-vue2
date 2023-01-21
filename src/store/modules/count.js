const state = {
  count: 2,
};
const getters = {
  doubleCount: state => state.count * 2,
  tripleCount: state => state.count * 3 ,
};
const mutations = {
  increment(state, number) { //第一引数はstateを取る。
    state.count += number;
  },
  decrement(state, number) { 
    state.count -= number;
  },
};
const actions = {
  increment(context, number) {
    context.commit("increment", number);  // commitでmutationsのincrementを発火している。
    context.dispatch("resetCounter")
  },
  decrement({commit}, number) {     //ES6ではcontextと書かず、使いたいものをオブジェクトで書くこともできる。
    commit("decrement", number);
  },
  resetCounter(context) {
    setTimeout(() => {
      context.state.count = 0;
    }, 5000)
  },
};
export default { // importできるようにする。また使えるようにしたい上記の変数を記述する。
  state,
  getters,
  mutations,
  actions
};