import Vue from 'nativescript-vue';
import Projects from './components/Projects';
import VueDevtools from 'nativescript-vue-devtools';

import store from './store';

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';

new Vue({
  store,
  render: h => h('frame', [h(Projects)]),
}).$start();
