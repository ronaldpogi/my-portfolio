<template>
  <!-- component -->
  <LoadingComp v-if="isLoading" />
  <div v-else class="container px-4 mx-auto py-20">
    <ResponseComp />
    <div class="max-w-lg mx-auto">
      <div class="text-center mb-6">
        <h2 class="text-3xl md:text-4xl font-extrabold">Register</h2>
      </div>
      <form @submit.prevent="signUp">

         <div class="mb-6">
          <label class="block mb-2 font-extrabold" for="email">Name</label>
          <input
            id="name"
            v-model="name"
            class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="input"
            placeholder="name"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block mb-2 font-extrabold" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="email"
            placeholder="email"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block mb-2 font-extrabold" for="password">Password</label>
          <input
            id="password"
            v-model="password"
            class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="password"
            placeholder="password"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block mb-2 font-extrabold" for="email">Confirm Password</label>
          <input
            id="confirm_password"
            v-model="confirm_password"
            class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="password"
            placeholder="confirm password"
            required
          />
        </div>

        <button
          type="submit"
          class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
        >
          Sign up
        </button>

        <p class="text-center font-extrabold">
          Don&rsquo;t have an account?
          <NuxtLink to="/laravel/login" class="text-blue-500 hover:underline">
            Sign in
          </NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/auth'

const userStore = useUserStore()

const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const confirm_password = ref<string>('')

const isLoading = computed(() => userStore.isLoading)

const signUp = async () => {
  try {

    await userStore.signUp({
      name: name.value,
      email: email.value,
      password: password.value,
      confirm_password: confirm_password.value
    })
    // Optional: Redirect or show success message
  } catch (error) {
    // Handle error (e.g., invalid credentials)
    console.error('Sign-up failed:', error)
  }
}
</script>
