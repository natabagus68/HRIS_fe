# Web Admin Template

This is Vue.ts admin template

## Library use

- Vite.ts + vue.ts
- Vue Router v4
- TailwindCss
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
    form: form.value,
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

{{ model.form.email }}
</template>

```
