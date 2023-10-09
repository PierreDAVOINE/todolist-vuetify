import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import vuetifyThemes from './plugins/vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(store)
  .use(vuetify)
  .use(vuetifyThemes)
  .use(router)
  .mount('#app');
