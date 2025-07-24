<script setup lang="ts">
import Container from '../../components/Container/Container.vue';
import Divider from '../../components/Divider/Divider.vue';
import Header from '../../components/Headers/Header.vue';
import Header2 from '../../components/Headers/Header2.vue';
import Paragraph from '../../components/Paragraph/Paragraph.vue';

document.title = "About Me";
</script>

<template>
  <Container class="flex flex-col items-left justify-start min-h-screen space-y-4 pt-12 px-8 pb-16">
    <Header>About Me</Header>
    <Divider/>
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left justify-start sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full justify-center flex">
          <img src="@/assets/cody_headshot.png" alt="Cody Spath" class="w-[75%] h-auto rounded-full">
        </div>
        <div class="sm:w-2/3 w-full">
          <Header2 class="pb-1">Professional Background</Header2>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            Hi, I'm Cody Spath, a software developer with a passion for building well-architected web applications that are intuitive both for users and developers.
            I have a strong background in full-stack development, with a focus on creating scalable and maintainable codebases.
            I enjoy working with modern technologies and frameworks, and I'm always eager to learn new skills and improve my craft.
            My primary background is in Node.js, TypeScript, and React, but also have multiple years of experience with C# (Entity Framework), Java/Kotlin (Sprint Boot), Angular, and Vue.js.
          </Paragraph>
          <Paragraph class="pt-4 text-gray-700 dark:text-gray-300">
            Throughout my career, I have developed a strong interest in DevOps practices, and believe that one of the keys to success with any project is to have
            a well-defined and automated deployment pipeline that truly empowers developers to deliver high-quality software more efficiently, while minimizing the risk of
            introducing bugs or downtime. I have experience with various CI/CD tools and cloud platforms, and I enjoy working on projects that involve Infrastructure as Code and automation.
            Outside of professional work, I enjoy finding any and every excuse to continue to learn something new, whether it be a new programming language, framework, or integrating with a new API.
          </Paragraph>
        </div>
      </div>
    </div>
    <Divider />
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left justify-start sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full justify-center flex">
          <img src="@/assets/yellowstone.jpg" alt="Cody Spath" class="w-[75%] h-auto rounded-lg">
        </div>
        <div class="sm:w-2/3 w-full">
          <Header2 class="pb-1">Personal Background + Hobbies</Header2>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            Outside of work, I enjoy spending time with my family and friends, exploring the outdoors, and traveling to new places.
            I also enjoy reading books, playing video games, and exercising to stay healthy and active. I have been really big into
            sci-fi and fantasy books lately, though I love reading pretty much anything, and am always on the lookout for something outside
            of my niche.
          </Paragraph>
          <Paragraph class="pt-4 text-gray-700 dark:text-gray-300">
            Some of my favorite authors include Joe Abercrombie, Steven Erikson, Adrian Tchaikovsky, and Brandon Sanderson. I am
            currently working my way through the Dungeon Crawler Carl series, as well as the Red Rising series. After that, I'm hoping
            to read the Age of Madness trilogy by Joe Abercrombie, and probably move on to Realm of the Elderlings by Robin Hobb.
          </Paragraph>
          <Paragraph class="pt-4 text-gray-700 dark:text-gray-300">
            One of my recent
            obsessions within reading in general has been limited print editions of books. Forced scarcity aside, I find the art, passion, and craftsmanship behind
            these editions to be truly inspiring, and I love collecting them. I currently have a few Dragonsteel books from Brandon Sanderson, and am working
            on collecting the entire set of the Leatherbound editions of the Malazan Book of the Fallen series published by Subterranean Press. By far my favorite
            publisher currently in the limited print space is Curious King, who has published some truly stunning editions of books like The First Law trilogy by Joe Abercrombie,
            and is currently working on a limited edition of the Farseer Trilogy by Robin Hobb.
          </Paragraph>
          <Paragraph class="pt-4 text-gray-700 dark:text-gray-300">
            Some of my favorite video games include the Dark Souls series, Outer Wilds, Disco Elysium, and Baldur's Gate 3.
            I enjoy play pretty much any genre of video game, but the ones that end up truly standing out to me are ones that,
            through themes and story, leave a lasting impact on me.
          </Paragraph>
          <Paragraph class="pt-4 text-gray-700 dark:text-gray-300">
            I'm also an animal lover, and currently have two cats — Gizmo and Daisy — and a dog named Miracle.
          </Paragraph>
        </div>
      </div>
    </div>
    <Divider />
    <div class="pt-4">
      <div class="flex sm:flex-row flex-col sm:items-center items-left justify-start sm:space-x-1 space-y-4">
        <div class="sm:w-1/4 w-full justify-center flex">
          <img src="@/assets/miracle.jpg" alt="Cody Spath" class="w-[64%] h-[50%] rounded-lg">
        </div>
        <div class="sm:w-1/2 w-full justify-center flex">
          <img src="@/assets/gifford_pinchot_state_park.jpg" alt="Cody Spath" class="w-[75%] h-auto rounded-lg">
        </div>
        <div class="sm:w-1/4 w-full justify-center flex">
          <img src="@/assets/gizmo.jpg" alt="Cody Spath" class="w-[90%] h-auto rounded-lg">
        </div>
      </div>
    </div>
  </Container>
</template>