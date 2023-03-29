<script setup lang="ts">
interface IProps {
  to?: string
  target?: '_blank'|'_self'
  rel?: 'noopener'|'noreferrer'|'noopener noreferrer'
  label?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  to: '',
  target: '_self',
})
const rel = useState(props.rel)
if (props.target !== '_self' && !props.rel) {
  rel.value = 'noopener'
}
</script>

<template lang="pug">
template(v-if="props.label")
  label.link
    slot
template(v-else-if="!props.to")
  button.link
    slot
template(v-else-if="props.to === 'void'")
  a.link(href="javascript:void(0)")
    slot
template(v-else-if="!props.target || props.target === '_self'")
  NuxtLink.link(:to="props.to")
    slot
template(v-else)
  a.link(
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
