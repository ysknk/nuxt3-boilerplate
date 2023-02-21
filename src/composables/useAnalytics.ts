export type TState = {
  gtm?: {
    event?: string
    eventCategory?: string
    eventAction?: string
    eventLabel: string
  }
}

const initialState:TState = {
  gtm: {
    event: '',
    eventCategory: '',
    eventAction: '',
    eventLabel: ''
  }
}

export const useAnalytics = () => {
  const state = useState<TState>('analytics', () => {
    return Object.assign({}, initialState)
  })

  const gtmPush = (payload: TState) => {
    if (!process.client) { return }
    window.dataLayer = window.dataLayer || []
    payload = Object.assign({}, state.value.gtm, payload)
    return window.dataLayer.push(payload)
  }

  return {
    state,
    gtmPush
  }
}

