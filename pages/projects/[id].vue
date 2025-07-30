<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const img = computed(() => route.query.img ?? undefined)
const imgTwo = computed(() => route.query.imgTwo ?? undefined)
const description = computed(() => route.query.description ?? undefined)
const name = computed(() => route.query.name ?? undefined)


useSeoMeta({
  title: name,
  description: description
});
</script>

<template>
<div class="pt-12 sm:pt-16 h-screen">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
            <p
                class="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                {{ name }}
            </p>
            <h1 class="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
                {{ description }}
            </h1>
        </div>
    </div>
    <div class="px-5 py-10">

        <div v-if="img" class="relative mx-auto">
            <div class="lg:max-w-4xl lg:mx-auto border border-gray-500">
                <NuxtImg
                    format="webp"
                    :src="img"
                />
            </div>
        </div>

        <div v-if="imgTwo" class="relative mx-auto mt-4 md:mt-8">
            <div class="lg:max-w-4xl lg:mx-auto border border-gray-500">
                <NuxtImg
                    format="webp"
                    :src="imgTwo"
                />
            </div>
        </div>

        <div class="relative mx-auto mt-4 md:mt-8">
            <div class="lg:max-w-4xl lg:mx-auto">

            <!-- <NuxtLink
              to="/"
              class="w-[350px] sm:w-[800px] px-5 py-2 font-medium bg-gray-700 text-gray-50 text-sm hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500 text-center block mx-auto"
            >
              <Icon name="streamline:return-2" width="24" height="24" />
            </NuxtLink> -->

            </div>
        </div>
        
    </div>
</div>
</template>