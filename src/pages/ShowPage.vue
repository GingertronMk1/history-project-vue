<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { ALL_SHOWS } from '@/data/shows.ts'

const routeParams = computed(() => useRoute().params)
const thisShow = computed<Show | undefined>(() =>
  ALL_SHOWS.find((s) => s.slug === routeParams.value.slug && s.year === routeParams.value.year),
)
</script>

<template>
  <template v-if="thisShow !== undefined">
    <h2 class="text-2xl" v-text="thisShow.title" />
    <pre class="text-wrap" v-html="JSON.stringify(thisShow, null, 2)" />
  </template>
</template>
