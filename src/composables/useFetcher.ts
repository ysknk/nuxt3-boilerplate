// REF:
// https://nuxt.com/docs/api/composables/use-fetch#usefetch
// https://github.com/unjs/ofetch
import merge from 'lodash/merge'

export type TState = {
  [key: string]: any
}

const initialState:TState = {
  method: 'GET',
}

export const useFether = () => {
  const runtimeConfig = useRuntimeConfig()

  const state = useState<TState>('fetcher', () => {
    return merge(
      {},
      { baseURL: runtimeConfig.public.apiPath },
      initialState
    )
  })

  const get = async (url: string, payload: TState) => {
    const options:TState = merge({}, state.value, payload, {
      method: 'GET',
    })
    return await $fetch(url, options)
  }

  const post = async (url: string, payload: TState) => {
    const options:TState = merge({}, state.value, payload, {
      method: 'POST',
    })
    return await $fetch(url, options)
  }

  return {
    state,
    get,
    post
  }
}
