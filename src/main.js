import Vue from "vue";
import App from "./App.vue";
import Bootstrap from "bootstrap-vue";
import Notifications from "vue-notification";
import firebase from "firebase/app";
import "firebase/firestore";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Notifications);
Vue.use(Bootstrap);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBm-Scn93exTyT9XJE5CSxKg_Nd0E5aQAg",
  authDomain: "vue-cloud-todo.firebaseapp.com",
  databaseURL: "https://vue-cloud-todo.firebaseio.com",
  projectId: "vue-cloud-todo",
  storageBucket: "vue-cloud-todo.appspot.com",
  messagingSenderId: "162667308904",
  appId: "1:162667308904:web:4ab0d0e7ab0332ffda58dd",
});

export const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

new Vue({
  render: (h) => h(App),
}).$mount("#app");
