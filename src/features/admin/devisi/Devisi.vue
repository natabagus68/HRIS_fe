<script setup lang="ts">
import { useDevisi } from "./devisi.ts";
import TableAgGrid from "../../../common/components/TableAgGrid.vue";
import ExportBtn from "../../../common/components/buttons/export-btn.vue";
import AddBtn from "../../../common/components/buttons/add-btn.vue";
const model = useDevisi();
</script>

<template>
  <div class="w-full rounded-md shadow-lg pt-[23px]">
    <div class="flex items-center justify-between pt-4 px-[15px]">
      <div class="flex items-center gap-3">
        <label class="text-black">Filter</label>
        <div class="flex items-center">
          <select
            name=""
            id=""
            class="w-[200px] px-2 pt-[11px] rounded-l-md border border-gray-200 outline-none"
          >
            <option value="">ID Pengguna</option>
          </select>
          <input
            type="text"
            placeholder="Masukan Value..."
            class="w-[200px] px-2 pt-[11px] rounded-r-md border border-gray-200 outline-none"
          />
        </div>
      </div>
      <div class="flex items-center gap-3">
        <ExportBtn />
        <AddBtn />
      </div>
    </div>
    <div class="w-full mt-5">
      <TableAgGrid
        :datas="model?.data?.value.data?.map((item) => item.unmarshall())"
        :headers="['code', 'name', 'desc', 'status', 'num']"
      />
    </div>
  </div>
</template>
