export type TUserRequest = {
  username: string;
  password: string;
  email?: string;
};
export type TUserResponse = {
  data: {
    accessToken: string;
    username: string;
    email: string;
    roles: Array<string>;
  };
};
