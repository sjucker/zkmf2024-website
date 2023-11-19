import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        fontFamily: {
            'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
            'serif': [...defaultTheme.fontFamily.serif],
            'mono': [...defaultTheme.fontFamily.mono]
        },
        extend: {
            colors: {
                blau: {
                    DEFAULT: '#0358ae'
                },
                rot: {
                    DEFAULT: '#ff5f24'
                },
                gelb: {
                    DEFAULT: '#ffbf2d'
                },
                silber: {
                    DEFAULT: '#d5d7d9'
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}

