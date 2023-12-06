// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      // https://answers.netlify.com/t/javascript-heap-out-of-memory-when-trying-to-build-a-nuxt-app/93138/14
      cssnano: process.env.NODE_ENV === 'production' ? { preset: ['default', { discardComments: { removeAll: true } }] } : false,
    },
  },

  googleFonts: {
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
    display: 'swap',
    preconnect: true,
    useStylesheet: true,
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtseo/module',
    // 'nuxt-gtag',
  ],

  runtimeConfig: {
    public: {
      // do not use process.env.NODE_ENV as it is overwritten (always production) when running 'generate'
      apiBase: process.env.API_BASE ?? 'http://localhost:8080',
    },
  },

  site: {
    url: 'https://www.zkmf2024.ch',
    name: 'ZKMF2024',
    defaultLocale: 'de',
  },

  // gtag: {
  //   id: 'NUXT_PUBLIC_GTAG_ID',
  // },

  image: {
    cloudflare: {
      baseURL: 'https://imagedelivery.net/b5PKQi-eHYmFXihh4Gjd5g/',
    },
  },
})
