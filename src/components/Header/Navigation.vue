<script setup>
import Link from "../layouts/Link.vue";
import { RouterLink } from "vue-router";
import { Slide } from "vue3-burger-menu";
import { ref } from "vue";

const isOpen = ref(false);

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Meet the Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];
</script>

<template>
  <div class="hidden lg:flex">
    <RouterLink v-for="page in pages" :to="{ path: page.path }" class="mx-2 my-auto font-light" :class="{ '!font-bold': $route.path === page.path }">{{ page.name }}</RouterLink>
    <Link href="https://alpinebuildingsolutions.co.uk" target="_blank" class="ml-2 w-[140px] text-center p-2 rounded-sm bg-white bg-opacity-25">
      <p>Looking for Alpine Building Solutions?</p>
    </Link>
  </div>


  <div class="flex lg:hidden">
    <button class="flex lg:hidden ml-auto" v-if="!isOpen" @click="isOpen=true">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <Slide right :burgerIcon="false" :closeOnNavigation="true" :isOpen="isOpen" @closeMenu="isOpen = false" width="280">
      <RouterLink v-for="page in pages" :to="{ path: page.path }" class="mx-2 my-auto font-light" :class="{ '!font-bold': $route.path === page.path }">{{ page.name }}</RouterLink>
      <Link href="https://alpinebuildingsolutions.co.uk" target="_blank" class="mx-2 text-center p-2 rounded-sm bg-white bg-opacity-25">
        <p>Looking for Alpine Building Solutions?</p>
      </Link>
    </Slide>
  </div>
</template>