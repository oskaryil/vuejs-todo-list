import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [{ todo: "buy groceries", edit: false }]
  },
  mutations: {},
  actions: {},
  getters: {
    todos(state) {
      return state.todos;
    }
  }
});
