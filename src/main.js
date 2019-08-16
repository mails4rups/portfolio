import Vue from 'vue'
import App from './App.vue'

/** Initializing Bootstrap **/
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/** importing Router **/
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/** importing loader **/
import Loader from "./utils/Loader"
Vue.component("Loader", Loader);

/** initializing vue-moment **/
import VueMoment from 'vue-moment'
Vue.use(require('vue-moment'));

/** importing global css file**/
import "../public/index.css";

/** Importing global variables  **/
import { BASE_URL,WEBSITE_NAME } from "./utils/init";

/** Importing  pages **/
import Home from "./pages/Home.vue";

Vue.config.productionTip = false

/** Defining Router **/
const routes = [
  { path: "/home", component: Home },
  { path: "/", component: Home },
  { path: '*', redirect: '/' }
];

export var router = new VueRouter({
  routes: routes,
  mode: "history",
  linkActiveClass: 'active',
  base: BASE_URL
});


/** storing current route in local storage **/
router.afterEach((to, from) => {
  localStorage.setItem(WEBSITE_NAME+'_current_route', router.history.current.path);
});


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
