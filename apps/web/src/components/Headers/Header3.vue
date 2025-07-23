<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

interface Header2Props {
  class?: string
}

const props = defineProps<Header2Props>();
</script>

<template>
  <h3 :class="[twMerge('text-xl font-medium text-purple dark:text-purple-50', props.class)]">
    <slot />
  </h3>
</template>