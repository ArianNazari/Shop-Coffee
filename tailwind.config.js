/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow: {
        "shadow-normal": "0px 1px 10px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      spacing: {
        "30": "7.5rem",
        "25": "6.25rem",
        "50": "12.5rem",
        "4.5": "1.125rem"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem'
        }
      },
      backgroundImage: {
        "home-desktop": "url(../images/headerBgDesktop.png)",
        "home-mobile": "url(../images/CoffeeShop-Files/headerBgMobile.webp)"
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
