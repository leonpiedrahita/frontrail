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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
