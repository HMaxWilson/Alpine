<script setup>
  import { RouterLink, useRoute } from "vue-router";
  import Link from "./Link.vue";
</script>

<template>
  <header class="p-8 text-white">
    <div class="flex w-full justify-between">
      <div class="flex my-auto">
        <RouterLink to="/">
          <div class="flex flex-col">
            <img class="" src="/src/assets/images/TrimLogo.png" alt="Alpine Building Solutions Logo" />
            <p class="text-right font-light text-sm">Holiday Maintenance</p>
          </div>
        </RouterLink>
        <p class="text-right font-light italic px-4 my-auto">Quality Holiday Home Care</p>
      </div>

      <div class="flex font-light my-auto">
        <RouterLink :to="{ path: '/' }" class="mx-2 my-auto" :class="{ 'font-bold': $route.path === '/' }">Home</RouterLink>
        <RouterLink :to="{ path: '/services' }" class="mx-2 my-auto" :class="{ 'font-bold': $route.path === '/services' }">Services</RouterLink>
        <RouterLink :to="{ path: '/team' }" class="mx-2 my-auto" :class="{ 'font-bold': $route.path === '/team' }">Meet the Team</RouterLink>
        <RouterLink :to="{ path: '/contact' }" class="mx-2 my-auto" :class="{ 'font-bold': $route.path === '/contact' }">Contact</RouterLink>
        <Link href="https://alpinebuildingsolutions.co.uk" target="_blank" class="flex flex-col mx-auto text-center ml-2 bg-white p-2 rounded-sm bg-opacity-25">
          <p>Looking for</p>
          <p>Alpine Building</p>
          <p>Solutions?</p>
        </Link>
      </div>
    </div>
  </header>
</template>