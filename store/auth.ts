import { useCookie } from 'nuxt/app';
import { defineStore } from 'pinia'
import { ref } from 'vue';
import type { Token } from '@/types/token';
import type { User, Data } from '@/types/user';
import type { Login } from '@/types/login';
import { useMessageStore } from '@/store/message'
import type { Register } from '@/types/register';


export const useUserStore = defineStore('user', () => {
  const messageStore = useMessageStore()
  const user = ref();
  const isLoading = ref(false);
  const token = ref(useCookie('MY_COOKIE', {
    maxAge: 60 * 60
  }));

  const setToken = (data?: string) => (token.value = data);
  const setUser = (data?: Data) => (user.value = data);

  const signIn = async (data: Login) => {
    isLoading.value = true
    try {
      const res = await $fetch<Token>("https://my-api-latest.onrender.com/api/login", {
        method: 'POST',
        body: data,
      });
      
      setToken(res.data.token);

      await fetchUser();

      await navigateTo('/laravel')

    } catch (error: any) {
      setToken()
      setUser()

      const backendMessage = error?.data?.message || 'An unexpected error occurred.'
      messageStore.setMessage(backendMessage, 'error')

      // CONSOLE THE ERROR
      console.log(`signIn error: ${backendMessage}`)
    }
    isLoading.value = false
  };

  const signUp = async (data: Register) => {
    isLoading.value = true
    try {
      const res = await $fetch("https://my-api-latest.onrender.com/api/register", {
        method: 'POST',
        body: data,
      });

      messageStore.setMessage('Success!', 'success')

      await navigateTo('/laravel/login')

    } catch (error: any) {

      const backendMessage = error?.data?.message || 'An unexpected error occurred.'
      messageStore.setMessage(backendMessage, 'error')

      // CONSOLE THE ERROR
      console.log(`signUp error: ${backendMessage}`)
    }
    isLoading.value = false
  };

  const fetchUser = async () => {
    isLoading.value = true
    if (token.value) {
      try {
        const res = await $fetch<User>("https://my-api-latest.onrender.com/api/user", {
          headers: {
            Authorization: `Bearer ${token.value}`
          }
        });
        setUser(res.data);
      } catch (error) {
        setUser();

        // CONSOLE THE ERROR
        console.log(`fetchUser error: ${error}`);
      }
    }
    isLoading.value = false
  };

  const signOut = async () => {
     isLoading.value = true
     if (token.value) {
      try {
          await $fetch<User>("https://my-api-latest.onrender.com/api/logout", {
            headers: {
              Authorization: `Bearer ${token.value}`
            }
          });
          setToken();
          setUser();
          await navigateTo('/')
      } catch (error: any) {
        const backendMessage = error?.data?.message || 'An unexpected error occurred.'
        messageStore.setMessage(backendMessage, 'error')
        
        // CONSOLE THE ERROR
        console.log(`logout error: ${error}`);
      }
    }
    isLoading.value = false
  };

  return {
    user,
    token,
    isLoading,
    signIn,
    signUp,
    fetchUser,
    signOut,  
  };

});