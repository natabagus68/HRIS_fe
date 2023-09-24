import { onMounted, ref } from "vue";
import { AuthRepository } from "../../../domain/repository/auth-repository";
import { AuthApiRepository } from "../../../data/auth-api-repository";
import { useRouter } from "vue-router";

export const useLayout = () => {
  const authRep: AuthRepository = new AuthApiRepository();
  const router = useRouter();
  const loading = ref<boolean>(false);
  const sideBarShow = ref<boolean>(true);
  const handleSideBarShow = () => {
    sideBarShow.value = !sideBarShow.value;
  };
  // const isMe = async () => {
  //   try {
  //     loading.value = true;
  //     await authRep.me();
  //     loading.value = false;
  //   } catch (error) {
  //     router.push("/");
  //   }
  // };
  // onMounted(() => {
  //   // isMe();
  // });
  return {
    loading,
    sideBarShow,
    handleSideBarShow,
  };
};
