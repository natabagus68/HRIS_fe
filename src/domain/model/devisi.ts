import { Entity } from "./_Entity";

export interface IDivisi {
  id?: string;
  code: string;
  name: string;
  desc: string;
  status: string;
  num: number;
}

export class Divisi extends Entity<IDivisi> {
  static create(props: IDivisi): Divisi {
    return new Divisi(props);
  }

  unmarshall() {
    return {
      id: this.id,
      code: this.code,
      name: this.name,
      desc: this.desc,
      status: this.status,
    };
  }

  get code(): string {
    return this._props.code;
  }
  get name(): string {
    return this._props.name;
  }
  get desc(): string {
    return this._props.desc;
  }
  get status(): string {
    return this._props.status;
  }
}
