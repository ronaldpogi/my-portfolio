<template>
<div class="py-10 md:py-19">
  <div class="container max-w-screen-xl mx-auto px-4">

      <h1 class="font-bold text-gray-900 text-3xl md:text-4xl mb-5">Experience</h1>

      <p class="font-normal text-gray-700 text-xs md:text-base mb-10">Below are the companies where I worked as a professional web developer.</p>

      <div v-for="item in typedExperience" class="flex flex-col lg:flex-row py-5">
        
        <!-- First Item: Left -->
        <div class="flex-1 text-left space-y-8 md:space-y-16 mb-16 md:mb-0">
            <p class="font-semibold text-gray-600 text-base">
            {{ item.company }}
            <span class="font-normal text-gray-400"> / Philippines</span>
            </p>
        </div>

        <!-- Second Item: Center -->
        <div class="flex-1 text-center space-y-8 md:space-y-16 mb-16 md:mb-0">
            <p class="font-normal text-gray-700 text-base">{{ item.position }}</p>
        </div>

        <!-- Third Item: Right -->
        <div class="flex-1 text-right space-y-8 md:space-y-16">
            <p class="font-normal text-gray-700 text-base">{{ item.year }}</p>
        </div>

      </div>

  </div>
</div>
</template>

<script lang="ts" setup>

import experience from '@/data/experience'

const typedExperience = experience

</script>

<style>

</style>