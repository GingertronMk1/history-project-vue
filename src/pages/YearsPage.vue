<script setup lang="ts">
import ShowData from '@/shows.json'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const year = computed<string | string[] | undefined>(() => useRoute().params.year)

const isValidYear = computed(() =>
  typeof year.value === 'string' ? year.value.match(/\d{2}_\d{2}/) : false,
)

const years = computed(() => {
  const allYears = new Set(Object.values(ShowData).map(({ year }) => year))
  const groupedYears: Record<string, string[]> = {}
  allYears.forEach((year: string) => {
    const decade: string = year.slice(0, 1)
    if (Array.isArray(groupedYears[decade])) {
      groupedYears[decade].push(year)
    } else {
      groupedYears[decade] = [year]
    }
  })
  return groupedYears
})

const shows = computed(() => Object.values(ShowData).filter((show) => show.year === year.value))
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
  <div v-else class="flex flex-row flex-wrap *:w-1/5 p-2">
    <div
      v-for="(decadeYears, decade) in years"
      :key="decade"
      class="flex flex-col p-2 nth-[2n]:bg-secondary/30 nth-[2n+1]:bg-primary/30"
    >
      <RouterLink
        v-for="year in decadeYears"
        :key="year"
        :to="{ name: 'yearsPage', params: { year } }"
        class="hover:text-gray-500 py-2"
      >
        {{ year }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
