<script setup lang="ts">
const { $window } = useNuxtApp()
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
</script>

<template lang="pug">
p env: {{ $config.public.appEnv }}
p width: {{ $window.width }}
p height: {{ $window.height }}
p scrolltop: {{ $window.scrollTop }}

div(v-if="result")
  p data: {{ result }}
div(v-else)
  p data: loading
p: NuxtLink(to="/simple/") simple
//- p: NuxtLink(to="/test/") test
//- NuxtWelcome
</template>

<style lang="stylus" scoped>
</style>
