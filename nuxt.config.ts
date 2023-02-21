import { resolve, relative } from 'path'
import { merge } from 'lodash'

const defaultEnv = require(`./.env.default.ts`)
const appEnv = process.env.appEnv || 'development'
const fileEnv = require(`./.env.${appEnv}.ts`)
const env = merge({}, defaultEnv, fileEnv)

const srcDir = 'src/'
const resolveSrcDir = `${resolve(__dirname, `./${srcDir}`)}`

const baseDir = `${env.app.baseURL}`
const publicDir = relative(`${srcDir}/server`, `.output/public${baseDir.replace(/\/$/g, '')}`)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir,
  telemetry: false,
  app: {
    ...env.app
  },
  runtimeConfig: {
    ...env.runtimeConfig
  },
  typescript: {
    typeCheck: true,
    strict: true
  },
  nitro: {
    output: {
      publicDir
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          additionalData: [
            `@import "${resolveSrcDir}/assets/css/style.styl"`
          ].join('')
        }
      }
    }
  }
  // ssr: false,
  // ...env
})
