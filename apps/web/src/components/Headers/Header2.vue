<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

interface Header2Props {
  class?: string
}

const props = defineProps<Header2Props>();
</script>

<template>
  <h2 :class="[twMerge('text-2xl font-bold text-black dark:text-white', props.class)]">
    <slot />
  </h2>
</template>