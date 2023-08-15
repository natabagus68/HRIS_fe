import { ref } from "vue";
import { User } from "../../domain/model/user";
import { AuthRepository } from "../../domain/repository/auth-repository";
import { AuthApiRepository } from "../../data/auth-api-repository";
import { useRouter } from "vue-router";

export const useLogin = () => {
  const router = useRouter();
  const authRepo: AuthRepository = new AuthApiRepository();
  const loading = ref<boolean>(false);
  const errors = ref<boolean>(false);
  const form = ref<User>(
    User.create({
      email: "",
      password: "",
    })
  );

  const handleChange = (e: Event) => {
    const event = <HTMLInputElement>e.target;
    // duplication
    const newForm = User.create({
      ...form.value.unmarshall(),
      [event.name]: event.value,
    });
    // set new Object
    form.value = newForm;
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    loading.value = true;
    try {
      const auth = await authRepo.Login(JSON.parse(JSON.stringify(form.value)));
      await localStorage.setItem("token", auth.token);
      router.push("/");
    } catch (error) {
      errors.value = true;
      loading.value = false;
    }
  };
  return {
    form,
    loading,
    errors,
    handleChange,
    handleSubmit,
  };
};
