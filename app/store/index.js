import Vue from 'vue';
import Vuex from 'vuex';

import Todo from './modules/Todo';
import Project from './modules/Project/';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { Todo, Project },
});

export default store;
