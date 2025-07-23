<script setup lang="ts">
import Container from '../../components/Container/Container.vue';
import Divider from '../../components/Divider/Divider.vue';
import Header from '../../components/Headers/Header.vue';
import Header2 from '../../components/Headers/Header2.vue';
import Header3 from '../../components/Headers/Header3.vue';
import Paragraph from '../../components/Paragraph/Paragraph.vue';

document.title = "Cody's Portfolio";
</script>

<template>
  <Container class="flex flex-col items-left justify-start min-h-screen space-y-4 pt-12 px-8 pb-16">
    <Header>Cody's Portfolio</Header>
    <Divider />
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full">
          <img src="@/assets/ycas_radio_telescope.jpg" alt="Ycas Radio Telescope" class="w-full h-auto rounded-lg">
        </div>
        <div class="sm:w-2/3 w-full pl-4">
          <Header2 class="pb-1">York College Capstone Project — YCAS Radio Telescope</Header2>
          <italics class="italics text-gray-500 dark:text-gray-400">2018-2019</italics>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            For my capstone project at York College, a group of CS students and I teamed up with Electrical Engineering, Computer Engineering, and Mechanical Engineering students to construct and design software to remotely operate a radio telescope obtained by the York County Astronomical Society (YCAS).
            This project involved four individual software teams operating in parallel using Agile methodologies to create:
          </Paragraph>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>Control Room Software that would control the radio telescope and handle data collection.</li>
            <li>Backend web application services powering the frontend website.</li>
            <li>Frontend web application used for data visualization, time scheduling, and live control.</li>
            <li>VR visualization software to help YCAS with educational outreach and public engagement.</li>
          </ul>
          <Header3 class="pt-4">Technologies Used:</Header3>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>C#</li>
            <li>Kotlin + Spring Boot</li>
            <li>Vue.js</li>
            <li>Unity + Oculus</li>
            <li>Travis CI</li>
            <li>MySQL</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
    </div>
    <Divider />
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full dark:bg-gray-50 rounded-2xl p-4">
          <img src="@/assets/edio.webp" alt="Edio" class="w-full h-auto">
        </div>
        <div class="sm:w-2/3 w-full pl-4">
          <Header2 class="pb-1">Andculture — edio</Header2>
          <italics class="italics text-gray-500 dark:text-gray-400">2019-2020</italics>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            Edio is a web-based LMS application developed by Andculture for the Commmonwealth Charter Academy (CCA) in Pennsylvania.
            This was an ongoing project that I joined when I was first hired at Andculture.
            The team working on the project consisted of three different scrum teams operating in parallel, each with their own focus.
            During my time on the project, I worked on:
          </Paragraph>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>Creating and supporting the underlying tools used by instructors building out digital lessons, quizzes, and exams</li>
            <li>Digitizing state-mandated forms including student Intent to Return and Withdrawal Forms</li>
            <li>Syncing and storing Student Information changes pulled from PowerSchool</li>
            <li>Orchestrate and Execute scheduled production deployments to CCA's on-prem production servers</li>
          </ul>
          <Header3 class="pt-4">Technologies Used:</Header3>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>C# + Entity Framework</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Jenkins CI/CD</li>
            <li>On-Prem Production Infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
    <Divider />
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full">
          <img src="@/assets/pa_disciplinary_board.png" alt="PA Disciplinary Board" class="w-full h-auto rounded-lg ">
        </div>
        <div class="sm:w-2/3 w-full pl-4">
          <Header2 class="pb-1">Andculture — PA Disciplinary Board</Header2>
          <italics class="italics text-gray-500 dark:text-gray-400">2020</italics>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            The Pennsylvania Disciplinary Board is a state-run organization that helps maintain the integrity of the legal profession in Pennsylvania.
            Another developer and I worked on a feature request to:
          </Paragraph>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>Allow attorneys to file case documents online</li>
            <li>Allow attorneys to check their case statuses</li>
            <li>Allow attorneys to manage their registration information</li>
          </ul>
          <Header3 class="pt-4">Technologies Used:</Header3>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>C# + In-House CRM</li>
            <li>CoffeeScript + HTML</li>
            <li>Jenkins CI/CD</li>
            <li>On-Prem Production Infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
    <Divider />
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full dark:bg-gray-50 rounded-2xl p-4">
          <img src="@/assets/ptc.png" alt="PTC" class="w-[80%] mx-auto h-auto">
        </div>
        <div class="sm:w-2/3 w-full pl-4">
          <Header2 class="pb-1">Andculture — Pennsylvania Turnpike Commission Website Redesign</Header2>
          <italics class="italics text-gray-500 dark:text-gray-400">2020-2022</italics>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            The Pennsylvania Turnpike Commission (PTC) is responsible for maintaining and operating the Pennsylvania Turnpike, a major highway in the state.
            The PTC wanted to redesign their website to improve user experience and accessibility. For this project, we utilized Sitefinity, a .NET-based CMS, to build out the new website,
            and empower PTC to manage their own content.
            My role on the project was to:
          </Paragraph>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>Wire up CI/CD pipelines via a Jenkins Server.</li>
            <li>Implement custom features and functionality within Sitefinity to meet the business needs of PTC</li>
            <li>Collaborate with the design team to ensure a seamless user experience via a mobile-first approach</li>
            <li>Design and implement an intuitive toll calculator experience</li>
            <li>Integrate with third-party APIs focused on traffic and weather alerts to give users real-time information on driving/road conditions</li>
            <li>Scaffold out cloud infrastructure in Microsoft Azure, later helping to implement Terraform as Infrastructure as Code (IaC) approach</li>
          </ul>
          <Header3 class="pt-4">Technologies Used:</Header3>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>C# + Sitefinity CRM</li>
            <li>Jenkins CI/CD</li>
            <li>JavaScript + HTML</li>
            <li>Microsoft SQL Server</li>
            <li>Microsoft Azure</li>
            <li>Terraform</li>
          </ul>
        </div>
      </div>
    </div>
    <Divider />
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full">
          <img src="@/assets/carnegie_learning.png" alt="MathStream" class="w-full h-auto rounded-lg">
        </div>
        <div class="sm:w-2/3 w-full pl-4">
          <Header2 class="pb-1">RSM — Carnegie Learning — MathStream</Header2>
          <italics class="italics text-gray-500 dark:text-gray-400">2022-2024</italics>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            I had the opportunity to work the Carnegie Learning's (CL) innovation department, CL Next, on a project called MathStream.
            MathStream is a web-based supplemental learning platform that provides interactive and adaptive math content for students via video lessons.
            My role on the project was to:
          </Paragraph>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>Implement a new video player experience that allows students to have interactive content during video lessons</li>
            <li>Implement a new user interface (UI) using Angular and TypeScript</li>
            <li>Integrate with third-party APIs to pull in video and lesson data and assemble an interactive stream player</li>
            <li>Add gamification elements + system rewards and power ups to incentivize student engagement</li>
            <li>Dockerize the application for easier deployment, scalability, and developer setup</li>
          </ul>
          <Header3 class="pt-4">Technologies Used:</Header3>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>NodeJS + NestJS</li>
            <li>Prisma</li>
            <li>Angular</li>
            <li>TypeScript</li>
            <li>PNPM</li>
            <li>Turborepo</li>
            <li>MySQL</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </div>
    <Divider />
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full">
          <img src="@/assets/programmatic_marketing.webp" alt="Programmatic Marketing" class="w-full h-auto rounded-lg">
        </div>
        <div class="sm:w-2/3 w-full pl-4">
          <Header2 class="pb-1">Boostpoint — Programmatic Marketing Platform</Header2>
          <italics class="italics text-gray-500 dark:text-gray-400">2024-2025</italics>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            Boostpoint's Programmatic Marketing Platform is a web-based application intended to provide a uniform means of processing, parsing, and analyzing XML jobs from various job feeds.
            The platform allows Boostpoint to provide a standardized interface for job feeds, allowing for easier integration with various job boards and applicant tracking systems,
            along with providing a means of launching and monitoring Meta Ad Campaigns launched from jobs found within a job feed.
            My role on the project was to:
          </Paragraph>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>Design and implement cron jobs for processing XML job feeds, monitoring for changes and updating Meta Ad Campaigns as needed based on changes</li>
            <li>Implement CI/CD via CircleCI and scaffold out Cloud Infrastructure using Terraform</li>
            <li>Write unit tests and integration tests to ensure the reliability of the API</li>
            <li>Implement a Redis queue to handle the volume of job data contained within XML feeds without overwhelming the memory of the application</li>
            <li>Design React frontend to allow for an intuitive user experience during the "Discovery" phase of working with a new job feed</li>
          </ul>
          <Header3 class="pt-4">Technologies Used:</Header3>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>NodeJS + NestJS</li>
            <li>TypeScript</li>
            <li>PNPM</li>
            <li>Turborepo</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>Redis</li>
            <li>CircleCI</li>
            <li>Terraform</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
    </div>
    <Divider />
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full dark:bg-gray-50 rounded-2xl p-4">
          <img src="@/assets/applicant_tracking_system.png" alt="Applicant Tracking System" class="w-full h-auto rounded-lg">
        </div>
        <div class="sm:w-2/3 w-full pl-4">
          <Header2 class="pb-1">Boostpoint — ATS API</Header2>
          <italics class="italics text-gray-500 dark:text-gray-400">2024-2025</italics>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            The Applicant Tracking System (ATS) API is a backend service that provides a standardized interface for managing job applications and applicant/candidate data.
            It allows Boostpoint to standardize the shape of applicant data across different product offerings.
            My role on the project was to:
          </Paragraph>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>Configure CI/CD and cloud infrastructure using CircleCI and Terraform</li>
            <li>Implement authentication and authorization mechanisms to secure the API</li>
            <li>Write unit tests and integration tests to ensure the reliability of the API</li>
            <li>Integrate existing products with the ATS API</li>
            <li>Document the API using OpenAPI/Swagger</li>
          </ul>
          <Header3 class="pt-4">Technologies Used:</Header3>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>NodeJS + NestJS</li>
            <li>TypeScript</li>
            <li>PNPM</li>
            <li>Turborepo</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>CircleCI</li>
            <li>Terraform</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
    </div>
    <Divider />
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full">
          <img src="@/assets/music_streaming.webp" alt="Music Streaming Library Sync" class="w-full h-auto rounded-lg">
        </div>
        <div class="sm:w-2/3 w-full pl-4">
          <Header2 class="pb-1">Personal — Music Streaming Library Sync</Header2>
          <italics class="italics text-gray-500 dark:text-gray-400">2025 (new)</italics>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            Music Streaming Library Sync is a personal project aimed at synchronizing a user's music library across multiple streaming platforms.
            The application will allow users to manage their music libraries more effectively and ensure that their playlists are consistent across all platforms,
            in the event they decide to switch streaming services, or have multiple ones they want to keep in sync. This is something I have wanted to build for a while,
            since I feel like music streaming services often hit users with a sunken cost fallacy when it comes to switching services. Too much time committed curating your music library,
            and you don't want to lose it all by switching to a new service (or spend the time to manually recreate it). More coming soon!
          </Paragraph>
          <Header3 class="pt-4">Technologies Being Used:</Header3>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>NodeJS + NestJS</li>
            <li>Prisma</li>
            <li>TypeScript</li>
            <li>PNPM</li>
            <li>Turborepo</li>
            <li>MongoDB</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </div>
    <Divider />
    <div>
      <div class="flex sm:flex-row flex-col sm:items-center items-left sm:space-x-4 space-y-4">
        <div class="sm:w-1/3 w-full">
          <img src="@/assets/diary.jpg" alt="Personal Journal" class="w-full h-auto rounded-lg">
        </div>
        <div class="sm:w-2/3 w-full pl-4">
          <Header2 class="pb-1">Personal — Personal Media Journal Application</Header2>
          <italics class="italics text-gray-500 dark:text-gray-400">2025 (new)</italics>
          <Paragraph class="text-gray-700 dark:text-gray-300">
            My idea for a Personal Media Journal is a personal project aimed at providing a platform for users (or just me) to log and track their media consumption, such as movies, TV shows, books, and music.
            One of the ways I best remember things, especially books I have read, games I have played, etc., is by writing about them. Sometimes I don't necessarily feel the need to
            post this publicly on social media, but still want a nice and easy way to log my thoughts and feelings about the media I consume.
          </Paragraph>
          <Header3 class="pt-4">Technologies Being Used:</Header3>
          <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 py-4">
            <li>NodeJS + NestJS</li>
            <li>Prisma</li>
            <li>TypeScript</li>
            <li>PNPM</li>
            <li>Turborepo</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>React Native</li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
</template>