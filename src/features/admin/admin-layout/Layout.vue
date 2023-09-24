<script setup>
import Navitem from "../../../common/components/Navitem.vue";
import NavDropDown from "../../../common/components/NavDropDown.vue";
import Bar3 from "../../../common/components/icons/Bar3.vue";
import EmailIcon from "../../../common/components/icons/EmailIcon.vue";
import { Avatar } from "flowbite-vue";
import { useLayout } from "./layout-model";
const model = useLayout();
</script>
<template>
  <main class="w-full h-screen flex">
    <!-- side bar -->
    <div
      class="w-[250px] h-screen bg-[#091943] duration-700"
      :class="
        model.sideBarShow.value ? 'translate-x-0' : '-translate-x-96 hidden'
      "
    >
      <header class="flex items-center m-2.5 gap-3.5">
        <Avatar size="md" rounded />
        <div class="flex flex-col justify-between">
          <h1 class="font-bold text-white text-[14px]">Admin</h1>
          <div class="flex items-center gap-3.5">
            <div class="h-2.5 w-2.5 bg-green-500 rounded-full"></div>
            <p class="text-white text-[14px]">Online</p>
          </div>
        </div>
      </header>
      <section>
        <div class="py-2.5 pl-4 bg-[#041339]">
          <h1 class="text-white">MENU</h1>
        </div>
        <Navitem name="Notification" to="#">
          <EmailIcon />
        </Navitem>
        <NavDropDown name="master">
          <Navitem name="pengguna" to="#" />
          <Navitem name="otoritas admin" to="#" />
          <Navitem name="otoritas mengakses" to="#" />
        </NavDropDown>
      </section>
    </div>
    <!-- navbar -->
    <div class="flex-1 h-[65px] shadow-md flex items-center pl-10 duration-700">
      <div class="w-fit cursor-pointer" @click="model.handleSideBarShow()">
        <Bar3 />
      </div>
    </div>
  </main>
</template>
