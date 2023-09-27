import { ITableParams } from "../model/tableParams";
import { Divisi } from "../model/devisi";
import { PaginatedData } from "../model/paginated-data";

export interface Divisirepository {
  get(props: ITableParams): Promise<PaginatedData<Divisi>>;
}
