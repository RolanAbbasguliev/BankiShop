import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { store } from './store';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
Vue.config.productionTip = false;
Vue.component('card-list', require('./components/CardList.vue').default);
Vue.component('card-item', require('./components/CardItem.vue').default);
Vue.component('my-header', require('./components/MyHeader.vue').default);
Vue.component('my-footer', require('./components/MyFooter.vue').default);
Vue.component('my-button', require('./components/UI/MyButton.vue').default);
Vue.component('my-modal', require('./components/UI/MyModal.vue').default);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

new Vue({
  store,
  vuetify,
  el: '#app',
  render: (h) => h(App),
});
