import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSignature from "vue-signature-pad"
import Vuelidate from "vuelidate";
import store from './store';


Vue.use(VueSignature);
Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
