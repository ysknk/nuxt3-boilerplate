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
      // link: [
      //   { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      //   { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap' },
      // ]
    }
  },
}
