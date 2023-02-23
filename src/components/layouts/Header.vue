<script setup>
  import { RouterLink } from "vue-router";
  import Navigation from "@/components/Header/Navigation.vue";
</script>

<template>
  <header class="p-8 text-white">
    <div class="flex w-full justify-between">
      <div class="flex xl:flex-row">
        <RouterLink to="/">
          <div class="flex flex-col">
            <img src="/src/assets/images/TrimLogo.png" alt="Alpine Building Solutions Logo" />
            <p class="text-right font-light text-sm">Holiday Maintenance</p>
          </div>
        </RouterLink>
        <p class="hidden xl:block text-right font-light italic px-4 my-auto">Quality Holiday Home Care</p>
      </div>

      <Navigation />
    </div>
  </header>
</template>