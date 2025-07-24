<script setup lang="ts">
import { useRouter } from 'vue-router';
import Container from '../../components/Container/Container.vue';
import Header from '../../components/Headers/Header.vue';
import Paragraph from '../../components/Paragraph/Paragraph.vue';
import { Icon } from '@iconify/vue';
let window: any = globalThis;

const router = useRouter();

const aboutLink = () => {
  router.push('/about');
};
</script>

<template>
  <div
    class="md:bg-none! shadow-sm dark:shadow-none z-10 flex w-full flex-row items-center justify-between bg-gray-100 bg-contain bg-top bg-no-repeat py-5 px-10 dark:bg-gray-900/50 sticky top-0 backdrop-blur-sm"
  >
    <div class="flex items-center space-x-4">
      <a href="https://github.com/cspath1" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="octicon:mark-github-24"
          class="text-3xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 hover:cursor-pointer"
        >
        </Icon>
      </a>
      <a href="/cody_spath_resume.pdf" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="mdi:file-document"
          class="text-3xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 hover:cursor-pointer"
        />
      </a>
      <a href="https://www.linkedin.com/in/cody-spath-6b1805283/" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="fa6-brands:linkedin"
          class="text-3xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 hover:cursor-pointer"
        />
      </a>
    </div>
    <nav class="flex space-x-4">
      <a href="/about" class="text-gray-600 dark:text-gray-300 hover:underline" @click.prevent="aboutLink">About Me</a>
    </nav>
  </div>
  <RouterView></RouterView>
</template>