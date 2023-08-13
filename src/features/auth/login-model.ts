import { ref } from "vue";
import { Login } from "../../domain/model/login";

export const useLogin = () => {
  const form = ref<Login>(
    Login.create({
      email: "",
      password: "",
    })
  );

  const handleChange = (e: Event) => {
    const event = <HTMLInputElement>e.target;
    // duplication
    const newForm = Login.create({
      ...form.value.unmarshall(),
      [event.name]: event.value,
    });
    // set new Object
    form.value = newForm;
  };

  return {
    form,
    handleChange,
  };
};
