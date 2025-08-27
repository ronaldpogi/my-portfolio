<template>
    <main>
        <LoadingComp v-if="isLoading" />
        <section v-else class="text-gray-600 body-font h-250 flex bg-gray-900 bg-svg-constellation-gray-100 relative">
            <div class="container mx-auto flex px-5 py-12 justify-center flex-col">
                <div class="lg:w-2/3 w-full animate-fade-in-down">
                    <!-- Change the heading text -->
                    <h1 class="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
                        Hello, I'm Ronald John.
                    </h1>
                    <!-- Change the paragraph text -->
                    <p class="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl">
                        I am a Web developer.</p>
                    <!-- Update the button texts and links -->

                    <div class="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                        <!-- <NuxtLink
                            @click="isLoading = true"
                            to="/laravel/login"
                            class="flex-1 text-center uppercase rounded-sm bg-red-400 font-bold text-white px-4 py-2 text-xs sm:px-8 sm:py-4 sm:text-base"
                        >
                            My Portfolio
                        </NuxtLink> -->

                        <NuxtLink
                            @click="isLoading = true"
                            to="/portfolio"
                            class="flex-1 text-center uppercase rounded-sm bg-green-800 font-bold text-white px-4 py-2 text-xs sm:px-8 sm:py-4 sm:text-base"
                        >
                            <Icon name="grommet-icons:link-next" size="30" class="text-bold" />
                        </NuxtLink>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template> 

<script lang="ts" setup>

const isLoading = ref(false)

</script>