<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getFirstShowMatchingPredicate } from '@/data/shows.ts'

const year = computed<string | string[] | undefined>(() => useRoute().params.year)

const isValidYear = computed<bool>(() =>
  typeof year.value === 'string' ? year.value.match(/\d{2}_\d{2}/) : false,
)

const shows = computed<Show[]>(() =>
  getFirstShowMatchingPredicate((show) => show.year === year.value)
)
</script>

<template>
  <div v-if="isValidYear" class="flex flex-col">
    <RouterLink
      v-for="show in shows"
      :key="`${show.year}~${show.slug}`"
      :to="{ name: 'showPage', params: { slug: show.slug, year: show.year } }"
      class="hover:text-gray-500"
      :data-season-sort="show.season_sort"
    >
      {{ show.title }}
    </RouterLink>
  </div>
  <div v-else>Invalid year: {{ year }}</div>
</template>

<style scoped></style>
