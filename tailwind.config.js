/**@type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            colors: {
                brand: '#1a202c',
            },
        },
    },
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
    ],

    theme: {
        extend: {
            colors: {
                "black": "#060606"
            },
            fontFamily: {
                'hanken-grotesk': ['Hanken Grotesk', 'sans-serif'],
            },
            fontSize: {
                "2xs": "10px" //.625rem
            }
        },
    },
    plugins: [],
}

// this is not working 
