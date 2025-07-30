<template>
<LoadingComp v-if="isLoading" />

<div v-else>
  <div class="relative border-t border-gray-200 bg-gray-50">
    <div class="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:pt-24">
        <header class="mx-auto max-w-2xl text-center">
            <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Welcome to my website <span class="text-blue-500">{{ userData.name }}</span></h1>
            <p class="mt-2 text-sm font-semibold text-gray-400">
              Thank you for the visit!
            </p>
            <br>
            <small>
              <p>ID: {{ userData.id }}</p>
              <p> Email : {{ userData.email }} </p>
            </small>
        </header>
    </div>
  </div>

  <div class="w-full h-screen bg-gray-100 px-10 pt-20">
    <div class="relative mb-32 max-w-sm mx-auto mt-24 text-center">
        <div class="rounded overflow-hidden shadow-md bg-white">
            <div class="absolute -mt-20 w-full flex justify-center">
              <div>
                      <NuxtImg
                        format="webp"
                        src="/me.jpg"
                        sizes=""
                        class="w-30 h-30 object-cover rounded-full"
                      />
                </div>
            </div>
            <div class="px-20 pb-20 mt-16">
                <h1 class="font-bold text-3xl text-center mb-1">RJSB</h1>
                <p class="text-gray-800 text-sm text-center">webdev</p>
                <p class="text-center text-gray-600 text-base pt-3 font-normal">
                    "Discipline is the bridge between goals and accomplishment"
                </p>
                <p style="font-style: italic;" class="text-center text-gray-600 text-base pt-3 font-normal"> 
                    – Jim Rohn
                </p>
            </div>
        </div>
        <button @click="signOut()" class="mt-3 px-5 py-2 md:px-6 md:py-2 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Sign Out</button>
    </div>
  </div>



</div>


</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { useUserStore } from '@/store/auth'

definePageMeta({
    middleware: ['protect']
})

const userStore = useUserStore()

const isLoading = computed(() => userStore.isLoading)
const userData = computed(() => userStore.user)

const signOut = async () => {
  try {
    await userStore.signOut()
  } catch (error) {
    console.error('Sign-in failed:', error)
  }
}

</script>