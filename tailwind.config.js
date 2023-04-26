/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      
    },
    extend: {
      colors: {
        coolBlue: 'hsl(228, 45%, 44%)',
        lightWhite: 'hsl(0, 0%, 98%)',
        midGray: 'hsl(0, 0%, 41%)',
        lightBlack: 'hsl(0, 0%, 8%)',
        purple: 'hsl(242, 79%, 68%)',
        yellow: 'hsl(53, 74%, 53%)',
        skyBlue: 'hsl(198, 66%, 57%)',
      },
      heroImage: {
        "mobile-image": "url('./images/image-hero-mobile.png')",
        "desktop-image": "url('./images/image-hero-desktop.png')",
      }
    },
  },
  plugins: [],
};

