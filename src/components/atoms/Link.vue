<script setup lang="ts">
interface IProps {
  to?: string
  target?: '_blank'|'_self'
  rel?: 'noopener'|'noreferrer'|'noopener noreferrer'
}
const props = withDefaults(defineProps<IProps>(), {
  to: '/',
  target: '_self',
})
const rel = useState(props.rel)
if (props.target !== '_self' && !props.rel) {
  rel.value = 'noopener'
}
</script>

<template lang="pug">
span.link
  template(v-if="!props.target || props.target === '_self'")
    NuxtLink(:to="props.to")
      slot
  template(v-else)
    a(
      :href="props.to"
      :target="props.target"
      :rel="rel"
    )
      slot
</template>

<style lang="stylus" scoped>
.link
  display inline-block
</style>
