// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    googleFonts: {
        families: {
            Poppins: {
                wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            }
        }
    },

    modules: [
        '@nuxt/image',
        '@nuxtjs/google-fonts',
    ],

    runtimeConfig: {
        public: {
            apiBase: process.env.NODE_ENV === 'production' ? 'https://zkmf2024-server.herokuapp.com' : (process.env.NODE_ENV === 'staging' ? 'https://zkmf2024-server-staging.herokuapp.com' : 'http://localhost:8080')
        }
    }
})
