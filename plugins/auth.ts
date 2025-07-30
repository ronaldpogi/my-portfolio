import { useUserStore } from "@/store/auth";

// upon refreshing the profile page, store should persist and view should not change
export default defineNuxtPlugin(async (nuxtApp) => {
  const userStore = useUserStore();

  if (userStore.token) {
    // await userStore.fetchUser();
  }
});
