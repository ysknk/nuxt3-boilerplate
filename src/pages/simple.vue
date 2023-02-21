<script setup lang="ts">
const fetcher = useFether()
let result = ref('')
let sample = async () => {
  const data:any = await fetcher.get('sample/', {
    test: 'aa'
  })
  result.value = data
}

onBeforeMount(() => {
  sample()
})

useSEO({
  title: 'index'
})

definePageMeta({
  layout: "simple"
})
</script>

<template lang="pug">
p env: {{ $config.public.appEnv }}
div(v-if="result")
  p data: {{ result }}
div(v-else)
  p data: loading
//- p: NuxtLink(to="/test/") test
//- NuxtWelcome
</template>

<style lang="stylus" scoped>
</style>
