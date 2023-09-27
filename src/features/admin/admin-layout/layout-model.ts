import { onBeforeMount, onMounted, onUnmounted, ref } from "vue";
import { AuthRepository } from "../../../domain/repository/auth-repository";
import { AuthApiRepository } from "../../../data/auth-api-repository";
import { useRouter } from "vue-router";
import moment from "moment";
export const useLayout = () => {
  const authRep: AuthRepository = new AuthApiRepository();
  const router = useRouter();
  const loading = ref<boolean>(false);
  const sideBarShow = ref<boolean>(true);
  const handleSideBarShow = () => {
    sideBarShow.value = !sideBarShow.value;
  };
  const currentTime = ref(moment());

  const updateTime = () => {
    currentTime.value = moment();
  };

  const isMe = async () => {
    try {
      loading.value = true;
      await authRep.me();
      loading.value = false;
    } catch (error) {
      router.push("/");
    }
  };

  // Memulai interval setiap detik saat komponen dimuat
  onBeforeMount(() => {
    const intervalId = setInterval(updateTime, 1000);

    // Membersihkan interval saat komponen di-unmount
    onUnmounted(() => {
      clearInterval(intervalId);
    });
  });

  onMounted(() => {
    isMe();
  });
  return {
    loading,
    sideBarShow,
    currentTime,
    handleSideBarShow,
  };
};
