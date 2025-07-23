<script lang="ts" setup>
import { twMerge } from 'tailwind-merge';

interface DividerProps {
  class?: string
}

const props = defineProps<DividerProps>();
</script>

<template>
  <div :class="[twMerge('w-full h-px bg-gray-300 dark:bg-gray-600', props.class)]"></div>
</template>