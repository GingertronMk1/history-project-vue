<template>
  <header class="py-2 bg-primary text-secondary">
    <div class="container flex flex-row items-center mx-auto">
    <h1 class="text-4xl">NNT History Project</h1>
    <div class="flex flex-row gap-4 ms-auto">
      <RouterLink :to="{ name: 'yearsPage' }">Years</RouterLink>
    </div>
    </div>
  </header>
  <div class="py-2">
    <RouterView class="container mx-auto" />
  </div>
</template>
<script setup lang="ts">
</script>
