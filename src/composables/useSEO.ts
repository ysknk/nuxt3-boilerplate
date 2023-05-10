export type TState = {
  title?: string
  url?: string
  description?: string
  keywords?: string[]
  type?: 'website'|'article'
  robots: string
}

export const useSEO = (payload: TState) => {
  if (!payload) { return }

  const meta = []
  if (payload.title) {
    meta.push({ property: 'og:title', content: payload.title })
  }
  if (payload.url) {
    meta.push({ name: 'canonical', content: payload.url })
    meta.push({ property: 'og:url', content: payload.url })
  }
  if (payload.description) {
    meta.push({ name: 'description', content: payload.description })
    meta.push({ property: 'og:description', content: payload.description })
  }
  if (payload.keywords) {
    meta.push({ name: 'keywords', content: payload.keywords.join(',') })
  }
  if (payload.type) {
    meta.push({ property: 'og:type', content: payload.type })
  }
  if (payload.robots) {
    if (payload.robots === 'no') {
      meta.push({ name: 'robots', content: 'noindex,nofollow' })
    } else {
      meta.push({ name: 'robots', content: payload.robots })
    }
  }

  useHead({
    title: payload.title,
    meta
  })
}
