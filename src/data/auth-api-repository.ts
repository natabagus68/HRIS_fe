import { config } from "../common/utils/config";
import { Auth } from "../domain/model/auth";
import { IUser, User } from "../domain/model/user";
import { AuthRepository } from "../domain/repository/auth-repository";
import { mockAxiosBaseQuery } from "../common/utils/mockAxios";
import { api } from "./_api";

export class AuthApiRepository implements AuthRepository {
  async Login(props: IUser): Promise<any> {
    console.log(props);
    const { data } = await api.post("login", {
      email: props.email,
      password: props.password,
    });
    return Auth.create({
      token: data?.token,
      user: User.create({
        email: data?.user?.email ?? "",
        password: data?.user?.password ?? "",
        name: data?.user?.name ?? "",
        role: data?.user?.role ?? "",
        active: data?.user?.active ?? true,
      }),
    });
  }

  async me(): Promise<Auth> {
    config.mockApi;
    const { data } = config.mockApi
      ? mockAxiosBaseQuery()
      : await api.get("me");

    console.log(data);
    return Auth.create({
      token: data?.token,
      user: User.create({
        email: data?.user?.email ?? "",
        password: data?.user?.password ?? "",
        name: data?.user?.name ?? "",
        role: data?.user?.role ?? "",
        active: data?.user?.active ?? true,
      }),
    });
  }
}
