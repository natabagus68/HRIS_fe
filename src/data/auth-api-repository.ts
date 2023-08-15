import { Ref } from "vue";
import { Auth } from "../domain/model/auth";
import { User } from "../domain/model/user";
import { AuthRepository } from "../domain/repository/auth-repository";
import { api } from "./_api";

export class AuthApiRepository implements AuthRepository {
  async Login(props: User): Promise<Auth> {
    const { data } = await api.post("admin/login", {
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
}
