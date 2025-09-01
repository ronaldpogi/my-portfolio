<template>
<div class="py-12 sm:py-16 lg:py-20 xl:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <p class="text-sm font-bold uppercase tracking-widest text-gray-700">How I buit This Portfolio</p>
            <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl uppercase">
                Deployed this Portfolio in simple steps
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
                I deployed this Portfolio using AWS ECS with a CI/CD pipeline
            </p>
        </div>
        <ul class="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-3">
            <li v-for="x in typedSteps" class="flex-start group relative flex lg:flex-col">
                <span
                    class="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                <div
                    class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-200">
                    <Icon :name="x.icon" size="25"/>
                </div>
                <div class="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        class="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        {{ x.name }}
                    </h3>
                    <h4 class="mt-2 text-base text-gray-700">{{ x.description }}</h4>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script lang="ts" setup>

import steps  from '@/data/steps';

const typedSteps = steps;

</script>

<style>

</style>