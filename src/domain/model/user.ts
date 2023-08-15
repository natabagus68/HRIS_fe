import { Entity } from "./_Entity";

export interface IUser {
  id?: string;
  email?: string | undefined;
  password?: string | undefined;
  name?: string | undefined;
  role?: string | undefined;
  active?: boolean | undefined;
}

export class User extends Entity<IUser> {
  static create(props: IUser): User {
    return new User(props);
  }

  unmarshall() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      role: this.role,
      active: this.active,
    };
  }

  get email(): string | undefined {
    return this._props.email;
  }
  get password(): string | undefined {
    return this._props.password;
  }
  get name(): string | undefined {
    return this._props.name;
  }
  get role(): string | undefined {
    return this._props.role;
  }
  get active(): boolean | undefined {
    return this._props.active;
  }
}
