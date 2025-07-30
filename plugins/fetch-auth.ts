import { defineNuxtPlugin, useCookie } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie('MY_COOKIE') // use your actual cookie key

  // Create custom $fetch instance
  const customFetch = $fetch.create({
    onRequest({ options }) {
    console.log('PLUGIN TOKEN', token.value)

      if (token.value) {
        options.headers = {
          ...(options.headers || {}),
          Authorization: `Bearer ${token.value}`
        }
      }
    },
    onResponseError({ response }) {
      console.error('Fetch Error:', response._data || response.statusMessage)
    }
  })

  // Make it globally available
  nuxtApp.provide('api', customFetch)
})
