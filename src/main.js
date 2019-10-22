import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
Vue.config.productionTip = false
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import vuetify from './vuetify' // path to vuetify export

Vue.config.productionTip = false

const router = new VueRouter({
routes,
linkExactActiveClass: "nav-item active"
});

Vue.use(VueRouter);
Vue.use(VueMaterial);

new Vue({
  vuetify,
  render: h => h(App),
  components: { App },
  router
}).$mount('#app')
