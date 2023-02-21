export default defineNuxtPlugin(() => {
  return {
    provide: {

      window: (() => {
        const $window = reactive({
          width: 0,
          height: 0,
          scrollTop: 0
        })

        if (process.client) {
          const onScroll = () => {
            $window.scrollTop = globalThis.scrollY
          }
          const onResize = () => {
            $window.width = globalThis.innerWidth
            $window.height = globalThis.innerHeight
          }

          onScroll()
          onResize()

          globalThis.addEventListener('scroll', onScroll)
          globalThis.addEventListener('resize', onResize)
        }

        return $window
      })()

    }
  }
})
