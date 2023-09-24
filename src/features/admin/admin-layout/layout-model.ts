import { onMounted, ref } from "vue";

export const useLayout = () => {
  const sideBarShow = ref<boolean>(true);
  const handleSideBarShow = () => {
    sideBarShow.value = !sideBarShow.value;
  };
  onMounted(() => {
    console.log("pasang");
  });
  return {
    sideBarShow,
    handleSideBarShow,
  };
};
