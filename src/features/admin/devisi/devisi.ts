import { onMounted, ref } from "vue";
import { DivisiApiRepository } from "../../../data/devisi-api-repository";
import { PaginatedData } from "../../../domain/model/paginated-data";
import { Divisi } from "../../../domain/model/devisi";
import { Divisirepository } from "../../../domain/repository/divisi-repository";

export const useDevisi = () => {
  const divRep: Divisirepository = new DivisiApiRepository();
  const data = ref<PaginatedData<Divisi>>(
    PaginatedData.create({
      q: "",
      page: 0,
      limit: 5,
      totalRows: 0,
      lastPage: 0,
      filter: "",
      data: [],
    })
  );

  const fetchData = async () => {
    const res = await divRep.get({
      q: data.value.q,
      page: data.value.page,
      limit: data.value.limit,
      filter: data.value.q,
    });
    console.log(res.data, "async");
    data.value = res;
  };

  onMounted(() => {
    fetchData();
  });

  return {
    data,
  };
};
