<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  class?: string
}

const props = defineProps<ContainerProps>();
</script>

<template>
  <div :class="[twMerge('w-full h-full flex dark:border-gray-500 border-gray-700 rounded-xl', props.class)]">
    <slot />
  </div>
</template>
