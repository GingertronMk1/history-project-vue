<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ALL_SHOWS } from '@/data/shows.ts'

const year = computed<string | string[] | undefined>(() => useRoute().params.year)

const isValidYear = computed(() =>
  typeof year.value === 'string' ? year.value.match(/\d{2}_\d{2}/) : false,
)

const shows = computed(() =>
  ALL_SHOWS.filter((show) => show.year === year.value).sort(
    (a, b) => a.season_sort - b.season_sort,
  ),
)
</script>

<template>
  <div v-if="isValidYear" class="flex flex-col">
    <RouterLink
      v-for="show in shows"
      :key="`${show.year}~${show.slug}`"
      :to="{ name: 'showPage', params: { slug: show.slug, year: show.year } }"
      class="hover:text-gray-500"
    >
      {{ show.year }} / {{ show.title }}
    </RouterLink>
  </div>
  <div v-else>Invalid year: {{ year }}</div>
</template>

<style scoped></style>
