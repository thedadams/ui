import dotenv from 'dotenv'

dotenv.config()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  ssr: false,

  runtimeConfig: {
    api: process.env.NUXT_API || 'https://api.openai.com/v1',
    apiModel: process.env.NUXT_MODEL || 'gpt-4-1106-preview',
    apiKey: process.env.NUXT_API_KEY || '',
  },

  devtools: { enabled: true },

  devServer: {
    port: 3100,
    https: {
      cert: 'server/tls/localhost.crt',
      key: 'server/tls/localhost.key',
    },
  },

  modules: [
    '@nuxt/ui',
  ],

  vite: {
    build: {
      manifest: true,
      ssrManifest: true,
      sourcemap: true,
      rollupOptions: {
        output: {
          sourcemap: true,
        },
      },
    },

    css: {
      devSourcemap: true,
    },
  },

  colorMode: {
    classSuffix: '',
  },
})
