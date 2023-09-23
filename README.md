<p align="center"><a href="https://tetsuya-dev.vercel.app/" target="_blank"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/499c570b-7931-4a84-9121-8c4a1c02a470/dfyq34u-9b8f0a02-18bd-4343-ae1a-d6acae746378.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5OWM1NzBiLTc5MzEtNGE4NC05MTIxLThjNGExYzAyYTQ3MFwvZGZ5cTM0dS05YjhmMGEwMi0xOGJkLTQzNDMtYWUxYS1kNmFjYWU3NDYzNzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jRuVhS8Ftl40m_5ocqLl0mfqmQu7ydEM_BPTEfa1Mz0" width="500" alt="Tetsuya"></a></p>

## こんにちは、ファリザルです

# Web Admin Template

This is Vue.ts admin template

## Library use

- Vite.ts + vue 3
- Vue Router v4
- Pinia
- TailwindCss
- Flowbite vue 3
- Axios
- UID

## How to start

1. Clone this repo
2. Install Yarn if doesnt exist

```
npm i -g yarn
```

3. Run this command inside root folder for install node depedencies

```
yarn
```

4. Run this command after installing depedencies to start development

```
yarn dev
```

## Folder Structure

```
root
|   public
|
+ src
|   + app
|   |   + services
|   |   - router.ts
|   |
|   + assets
|   |
|   + common
|   |   + component
|   |   + utils
|   |
|   + data
|   |   + types
|   |   - _api.ts
|   |
|   + domain
|   |   + model
|   |     - _Entity.ts
|   |   + repository
|   |     - _repository.ts
|   |
|   + features
|   - main.ts
|
- .env
- index.html
- package.json
- postcss.config.cgs
- README.md
- tailwind.config.js
- vite.config.ts
```

## Example Component Structure

```
auth
| - login-model.ts
| - Login.vue
```

## Example Implementation Component

### login-model.ts

```javascript
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

```

### Login.vue

```javascript
<script setup lang="ts">
import { useLogin } from "./login-model";
const model = useLogin();
</script>

<template>
<div>
  <p>Login</p>
  <input
    @input="model.handleChange"
    type="text"
    name="email"
    class="w-32 py-2 px-4 border border-gray-400 rounded-md outline-none"
  />
</div>

{{ model.form.value.email }}
</template>

```
