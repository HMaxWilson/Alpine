<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <a :href="href"><slot></slot></a>
</template>