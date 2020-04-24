import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.http.options.root = "https://dhimas-stock-trader.firebaseio.com/";

Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
