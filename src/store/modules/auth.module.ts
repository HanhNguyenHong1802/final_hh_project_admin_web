import AuthService from "@/services/auth/auth.service";
import { TUserRequest, TUserResponse } from "@/services/auth/auth.type";
import { Commit } from "vuex";

const user = JSON.parse(localStorage.getItem("user") || "");
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

type UserState = {
  status: {
    loggedIn: boolean;
  };
  user: unknown;
};
export const auth = {
  namespace: true,
  state: initialState,
  actions: {
    login(
      { commit }: { commit: Commit },
      user: TUserRequest
    ): Promise<{
      accessToken: string;
      username: string;
      email?: string;
      roles: string[];
    }> {
      return AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }: { commit: Commit }) {
      AuthService.logout();
      commit("logout");
    },
    register({ commit }: { commit: Commit }, user: TUserRequest) {
      return AuthService.register(user).then(
        (res) => {
          commit("registerSuccess");
          return Promise.resolve(res.data);
        },
        (error) => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state: UserState, user: TUserResponse) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state: UserState) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state: UserState) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state: UserState) {
      state.status.loggedIn = false;
    },
    registerFailure(state: UserState) {
      state.status.loggedIn = false;
    },
  },
};
