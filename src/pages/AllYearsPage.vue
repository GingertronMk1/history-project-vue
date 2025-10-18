<script setup lang="ts">
import { computed } from 'vue'
import { getAllShowAttributes } from '@/data/shows.ts'

const years = computed(() => {
  const allYears = getAllShowAttributes('year');
  return Object.groupBy(allYears, (year: string) => year.slice(0, 1))
})
</script>

<template>
  <div class="flex flex-row flex-wrap *:w-1/5 p-2">
    <div
      v-for="(decadeYears, decade) in years"
      :key="decade"
      class="flex flex-col p-2 nth-[2n]:bg-secondary/30 nth-[2n+1]:bg-primary/30"
    >
      <RouterLink
        v-for="year in decadeYears"
        :key="year"
        :to="{ name: 'singleYearPage', params: { year } }"
        class="hover:text-gray-500 py-2"
      >
        {{ year.replace('_', '-') }}
      </RouterLink>
    </div>
  </div>
</template>
