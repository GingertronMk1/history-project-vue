<script setup lang="ts">
import { useRoute } from 'vue-router'
import ShowData from '@/shows.json'
import { computed } from 'vue'

const routeParams = computed(() => useRoute().params)
const shows = computed(() => Object.values(ShowData))
const thisShow = computed(() =>
  shows.value.find((s) => s.slug === routeParams.value.slug && s.year === routeParams.value.year),
)
</script>

<template>
  <template v-if="thisShow !== undefined">
    <h2 class="text-2xl" v-text="thisShow.title" />
    <pre class="text-wrap" v-html="JSON.stringify(thisShow, null, 2)" />
  </template>
</template>
