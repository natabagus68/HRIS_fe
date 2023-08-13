import { Entity } from "./_Entity";

export interface ILogin {
  id?: string;
  email: string;
  password: string;
}

export class Login extends Entity<ILogin> {
  static create(props: ILogin): Login {
    return new Login(props);
  }

  unmarshall() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
    };
  }

  get email(): string {
    return this._props.email;
  }
  get password(): string {
    return this._props.password;
  }
}
