import { createApp } from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import "@/config/firebaseConfig";
import "./index.css";
import { FontAwesomeIcon } from "./plugins/font-awesome";
import { loadingMixin } from "./mixins/loading-mixin";
createApp(App)
  .use(store)
  .use(router)
  .mixin(loadingMixin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
