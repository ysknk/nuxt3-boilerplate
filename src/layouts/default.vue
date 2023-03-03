<template lang="pug">
#app
  OrganismsTheHeader
  main
    slot
  OrganismsTheFooter
</template>

<style lang="stylus" scoped>
#app
  display block
  relative top 0 left 0
  background $test

.page-enter-active,
.page-leave-active
  transition all 0.4s
.page-enter-from,
.page-leave-to
  opacity 0
  filter blur(1rem)
</style>
