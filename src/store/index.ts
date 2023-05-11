import { createStore } from "vuex";
import { auth } from "./modules/auth.module";
// import { user } from "./modules/user.module";
const store = createStore({
  modules: {
    auth,
    // user,
  },
});

export default store;
