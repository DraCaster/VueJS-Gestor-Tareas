import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    filter: "",
    loading: false,
    notify: null,
    tasksDeleted: 0,
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setTask(state, task) {
      state.tasks.push(task);
      state.notify = "add";
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
      state.tasksDeleted++;
      state.notify = "delete";
    },
    updateTask(state, { index, task }) {
      Vue.set(state.tasks, index, task);
      state.notify = "update";
    },
    setFilter(state, value) {
      state.filter = value;
    },
    setLoading(state, value) {
      state.loading = value;
    },
    setNotify(state, val) {
      state.notify = val;
    },
  },
  actions: {
    getTasks({ commit }) {
      commit("setLoading", true);
      setTimeout(() => {
        commit("setTasks", [
          "Comprar en el super",
          "Acariciar a michi",
          "Peinar a michi",
        ]);
        commit("setLoading", false);
      }, 1500);
    },
  },
  getters: {
    getTasksFilter(state) {
      let reg = new RegExp(state.filter, "i");
      return state.tasks.filter((task) => reg.test(task));
    }
  }
});
