import { Auth } from "../model/auth";
import { IUser } from "../model/user";
export interface AuthRepository {
  Login(props: IUser): Promise<Auth>;
  me(): Promise<Auth>;
}
