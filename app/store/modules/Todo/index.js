import * as todoTypes from './mutation-types';

import { getTodos, createTodo, removeTodo } from '../../../api/Todo';

const state = {
  todos: [],
};

const actions = {
  [todoTypes.GET_TODOS]({ commit }) {
    getTodos().then(todos => commit(todoTypes.SET_TODOS, todos));
  },
  [todoTypes.ADD_TODO]({ commit }, todo) {
    createTodo(todo).then(res => commit(todoTypes.ADD_TODO, todo));
  },
  [todoTypes.REMOVE_TODO]({ commit }, todo) {
    removeTodo(todo.id).then(res => commit(todoTypes.REMOVE_TODO, todo.id));
  },
};

const mutations = {
  [todoTypes.ADD_TODO](state, todo) {
    state.todos = [...state.todos, todo];
  },
  [todoTypes.SET_TODOS](state, todos) {
    state.todos = todos;
  },
  [todoTypes.REMOVE_TODO](state, todoId) {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
  },
};

const getters = {
  getTodosByProjectId: state => projectId =>
    state.todos.filter(todo => todo.projectId === projectId),
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
