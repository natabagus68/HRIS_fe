import { ref, onMounted } from "vue";
import { User } from "../../domain/model/user";
import { AuthRepository } from "../../domain/repository/auth-repository";
import { AuthApiRepository } from "../../data/auth-api-repository";
import { useRouter } from "vue-router";

export const useLogin = () => {
  const router = useRouter();
  const authRepo: AuthRepository = new AuthApiRepository();
  const passwordShow = ref<boolean>(false);
  const loading = ref<boolean>(false);
  const errors = ref<string | null>(null);
  const form = ref<User>(
    User.create({
      email: "",
      password: "",
    })
  );

  const handleChange = (e: Event) => {
    const event = <HTMLInputElement>e.target;
    const newForm = User.create({
      ...form.value.unmarshall(),
      [event.name]: event.value,
    });
    form.value = newForm;
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (!form.value.email || !form.value.password) {
      errors.value = "Harap masukan email atau password !";
      loading.value = false;
      return;
    }

    try {
      loading.value = true;
      const auth = await authRepo.Login(form.value.unmarshall());
      await localStorage.setItem("token", auth.token);
      router.push("/admin");
    } catch (error) {
      errors.value = "Password atau Email salah";
      loading.value = false;
    }
  };

  const isMe = async () => {
    try {
      loading.value = true;
      await authRepo.me();
      router.push("/admin");
    } catch (error) {
      loading.value = false;
    }
  };

  const passwordEvent = () => {
    passwordShow.value = !passwordShow.value;
  };

  onMounted(() => {
    isMe();
  });

  return {
    form,
    loading,
    errors,
    passwordShow,
    handleChange,
    handleSubmit,
    passwordEvent,
  };
};
