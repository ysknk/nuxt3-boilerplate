export default {
  app: {
    baseURL: '/',

    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },

    head: {
      charset: 'utf-8',
      title: 'example title',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: 'example description' }
      ],
    }
  },
}
