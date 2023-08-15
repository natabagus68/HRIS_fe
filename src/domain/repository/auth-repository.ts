import { Auth } from "../model/auth";
import { User } from "../model/user";

export interface AuthRepository {
  Login(props: User): Promise<Auth>;
  me(): Promise<Auth>;
}
