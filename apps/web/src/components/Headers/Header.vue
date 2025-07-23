<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
  class?: string
}
const props = defineProps<HeaderProps>();
</script>

<template>
  <h1 :class="[twMerge('text-2xl text-gray-700 dark:text-gray-300', props.class)]">
    <slot />
  </h1>
</template>