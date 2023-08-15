import { ref } from "vue";
import { User } from "../../domain/model/user";
import { AuthRepository } from "../../domain/repository/auth-repository";
import { AuthApiRepository } from "../../data/auth-api-repository";

export const useLogin = () => {
  const authRepo: AuthRepository = new AuthApiRepository();
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
    try {
      e.preventDefault();
      await authRepo.Login(JSON.parse(JSON.stringify(form.value)));
    } catch (error) {}
  };
  return {
    form,
    handleChange,
    handleSubmit,
  };
};
