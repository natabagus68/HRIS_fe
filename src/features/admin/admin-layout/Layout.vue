<script setup>
import Navitem from "../../../common/components/Navitem.vue";
import NavDropDown from "../../../common/components/NavDropDown.vue";
import Bar3 from "../../../common/components/icons/Bar3.vue";
import EmailIcon from "../../../common/components/icons/EmailIcon.vue";
import Loader from "../../../common/components/Loader.vue";
import { Avatar } from "flowbite-vue";
import { useLayout } from "./layout-model";
const model = useLayout();
</script>
<template>
  <div
    v-if="model.loading.value === true"
    class="absolute w-screen h-screen bg-white flex items-center justify-center"
  >
    <Loader />
  </div>

  <div v-else class="w-full flex flex-col">
    <!-- navbar -->
    <div class="w-full h-[52px] shadow-md flex items-center pl-10 duration-700">
      <div class="w-[230px] mr-5 pl-6">
        <img src="/logoql.png" alt="logo ql" class="h-[49px] w-[52px]" />
      </div>
      <div class="w-fit cursor-pointer" @click="model.handleSideBarShow()">
        <Bar3 />
      </div>
    </div>
    <!-- side bar -->
    <div class="flex flex-row w-full">
      <div
        class="w-[250px] min-h-screen h-auto bg-[#091943] pb-5 transform transition-transform duration-1000 ease-in-out"
        :class="model.sideBarShow.value ? 'translate-x-0' : '-translate-x-96'"
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
            <Navitem name="divisi" to="#" />
            <Navitem name="jobdesk" to="#" />
            <Navitem name="jabatan" to="#" />
            <Navitem name="departemen" to="#" />
            <Navitem name="status karyawan" to="#" />
            <Navitem name="dokumen" to="#" />
            <Navitem name="partner" to="#" />
          </NavDropDown>
          <NavDropDown name="transaksi">
            <Navitem name="pengguna" to="#" />
            <Navitem name="otoritas admin" to="#" />
            <Navitem name="otoritas mengakses" to="#" />
          </NavDropDown>
          <NavDropDown name="report">
            <Navitem name="pengguna" to="#" />
            <Navitem name="otoritas admin" to="#" />
            <Navitem name="otoritas mengakses" to="#" />
          </NavDropDown>
        </section>
      </div>

      <!-- main content -->
      <main class="flex-1 p-10">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
