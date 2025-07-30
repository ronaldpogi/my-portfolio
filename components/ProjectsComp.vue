<template>
<div class="py-10 md:py-16">
  <div class="container max-w-screen-xl mx-auto px-4">
      <div class="flex flex-col lg:flex-row justify-between">
          <div class="mb-10 lg:mb-0">
              <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Projects</h1>
              <p class="font-normal text-gray-500 text-xs md:text-base">Here are some of the projects from my previous company in which I was involved as a professional developer.</p>
          </div>

          <div class="space-y-10">

              <div v-for="project in typedProjects" class="flex space-x-6">
                  <h1 class="font-normal text-gray-700 text-1xl md:text-2xl">{{ project.order }}</h1>
                  <span class="w-20 h-0.5 bg-gray-300 mt-5"></span>
                  <div>
                      <h1 class="font-normal text-gray-700 text-2xl md:text-3xl mb-5">{{ project.name }}</h1>

                      <div class="rounded-md">
                        <div class="flex justify-center bg-gray-100 rounded-md mb-2">
                        <NuxtImg
                            format="webp"
                            :src="project.img"
                            sizes="sm:200 lg:400"
                        />
                        </div>
                      </div>

                       <NuxtLink
                        :to="`/projects/order?description=${project.description}&img=${project.img}&imgTwo=${project.imgTwo}&name=${project.name}`"
                        class="px-5 py-1 md:px-9 md:py-2 font-medium bg-gray-700 text-gray-50 text-sm hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                        >
                         View More
                      </NuxtLink>

                  </div>

              </div>
              
          </div>
      </div>
  </div>
</div>
</template>

<script lang="ts" setup>

import projects from '@/data/projects'

const typedProjects = projects;

</script>

<style>

</style>