<script setup lang="ts">
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { onMounted, ref } from "vue";
const { datas, headers } = defineProps(["datas", "headers"]);
const headerNames = ref([]);
const data = ref([]);
const setData = async () => {
  data.value = await datas?.map((item: any) => item);
  headerNames.value = headers?.map((item: any) => {
    return {
      headerName: item,
      field: item,
      flex: 1,
      minWidth: 50,
      maxWidth: 1000,
    };
  });

  console.log(datas);
};
onMounted(() => {
  setData();
});
</script>

<template>
  <ag-grid-vue
    style="width: 100%; height: 200px"
    class="ag-theme-alpine"
    :columnDefs="headerNames"
    :rowData="data"
  >
  </ag-grid-vue>
</template>

<style scoped>
.ag-theme-alpine {
  /* disable all borders */
  --ag-borders: none;
  /* then add back a border between rows */
  --ag-row-border-style: solid;
  --ag-row-border-width: 1px;
  --tw-bg-opacity: 1;
  --ag-row-border-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
</style>
