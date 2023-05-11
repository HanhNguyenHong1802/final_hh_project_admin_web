import axios from "axios";
import { TUserRequest, TUserResponse } from "./auth.type";

class AuthService {
  login(user: TUserRequest) {
    return axios
      .post(process.env.VUE_APP_API_URL + "signin", {
        username: user.username,
        password: user.password,
      })
      .then((res: TUserResponse) => {
        if (res !== null && res.data.accessToken)
          localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      });
  }
  logout() {
    return axios
      .post(process.env.VUE_APP_API_URL + "signout")
      .then((res: object) => {
        if (res) localStorage.removeItem("user");
      });
  }

  register(user: TUserRequest) {
    return axios.post(process.env.VUE_APP_API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
