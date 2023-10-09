import { createStore } from 'vuex';

export default createStore({
  state: {
    taskList: [
      { id: 1, title: 'Faire la vaisselle', done: true },
      { id: 2, title: 'Do something', done: false },
    ],
  },
  getters: {
    taskList: (state) => state.taskList,
  },
  mutations: {
    addTask(state, title) {
      state.taskList.push({
        id: state.taskList.length + 1,
        title,
        done: false,
      });
    },
    updateTaskDone(state, task) {
      const index = state.taskList.findIndex((el) => el.id === task.id);
      state.taskList[index].done = !task.done;
    },
  },
  actions: {},
  modules: {},
});
