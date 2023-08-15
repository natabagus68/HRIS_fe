import { Entity } from "./_Entity";
import { User } from "./user";

export interface IAuth {
  id?: string;
  token: string;
  user: User;
}

export class Auth extends Entity<IAuth> {
  static create(props: IAuth): Auth {
    return new Auth(props);
  }

  unmarshall() {
    return {
      id: this.id,
      token: this.token,
      user: this.user,
    };
  }
  get token(): string {
    return this._props.token;
  }
  get user(): User {
    return this._props.user;
  }
}
