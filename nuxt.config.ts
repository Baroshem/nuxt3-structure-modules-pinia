import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@pinia/nuxt',
    { name: 'blog-module', handler: '~/modules/blog/module' }
  ]
})
