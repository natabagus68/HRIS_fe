import { Divisi } from "../domain/model/devisi";
import { PaginatedData } from "../domain/model/paginated-data";
import { Divisirepository } from "../domain/repository/divisi-repository";
import { api } from "./_api";
import { ITableParams } from "../domain/model/tableParams";

export class DivisiApiRepository implements Divisirepository {
  async get(props: ITableParams): Promise<PaginatedData<Divisi>> {
    const { data } = await api.get("/operation/m_divisi", {
      params: {
        search: props.q,
        page: props.page,
        limit: props.limit,
        where: props.filter,
      },
    });

    return PaginatedData.create({
      page: props.page,
      limit: props.limit,
      lastPage: data.lastPage,
      totalRows: data.totalRows,
      data: data?.data?.map((item: any) => {
        return Divisi.create({
          code: item?.code ?? "",
          name: item?.name ?? "",
          desc: item?.desc ?? "",
          status: item?.status ?? "",
          num: item?.num ?? 0,
        });
      }),
    });
  }
}
