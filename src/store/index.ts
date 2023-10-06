import { createStore } from 'vuex';

export default createStore({
  state: {
    taskList: [
      { id: 1, title: 'Faire la vaisselle', done: false },
      { id: 2, title: 'Do something', done: false },
    ],
  },
  getters: {
    taskList: (state) => state.taskList,
  },
  mutations: {
    addTask(state, task) {
      state.taskList.push(task);
    },
  },
  actions: {},
  modules: {},
});
