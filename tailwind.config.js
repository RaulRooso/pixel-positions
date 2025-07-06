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
                "black": "red"
            }
        }
    }
}

// this is not working 
