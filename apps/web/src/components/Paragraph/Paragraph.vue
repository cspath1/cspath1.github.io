<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

interface ParagraphProps {
  class?: string;
}
const props = defineProps<ParagraphProps>();
</script>

<template>
  <p :class="[twMerge('text-black font-medium dark:text-white', props.class)]">
    <slot />
  </p>
</template>