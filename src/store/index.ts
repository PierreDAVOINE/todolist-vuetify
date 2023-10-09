import { createStore } from 'vuex';

export default createStore({
  state: {
    taskList: [{ id: 1, title: 'Faire ma to-do list', done: false }],
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
    deleteTask(state, task) {
      const index = state.taskList.findIndex((el) => el.id === task.id);
      state.taskList.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
