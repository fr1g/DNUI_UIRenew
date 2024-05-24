/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html, js, css}'
  ],
  theme: { 
    extend: {
      colors: {
        // 'main': '#1d4894',
        'main-50':   '#dde9ff',
        'main-100':   '#c8dafc',
        'main-200':   '#afcaf8',
        'main-300':   '#91b6f5',
        'main-400':   '#77a2ec',
        'main-500':   '#5f90e5',
        'main-600':   '#4a81e1',
        'main-700':   '#4073cd',
        'main-800':   '#2d60b9',
        'main-900':   '#1d4894',
        'main-950':   '#113676',
      }
    },
  },
  plugins: [], 
  darkMode: 'class'
}

