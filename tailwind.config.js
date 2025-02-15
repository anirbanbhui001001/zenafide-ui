
const { heroui } = require("@heroui/theme");

module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-slower': 'ping 3.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        addCommonColors: true,
        colors: {
          background: '#FFFFFF',
          foreground: '#11181C',
          primary: {
            // Adjusted to match the blue accent color in the UI
            50: '#EBF5FF',
            100: '#E1EFFE',
            200: '#C3DDFD',
            300: '#A4CAFE',
            400: '#76A9FA',
            500: '#3F83F8', // Main blue color from image
            600: '#1C64F2',
            700: '#1A56DB',
            800: '#1E429F',
            900: '#233876',
            DEFAULT: '#3F83F8',
            foreground: '#FFFFFF',
          },
          secondary: {
            // Grayscale shades
            50: '#F8F9FA',
            100: '#E9ECEF',
            200: '#DEE2E6',
            300: '#CED4DA',
            400: '#ADB5BD',
            500: '#808080', // Main secondary gray from image
            600: '#6C757D',
            700: '#495057',
            800: '#343A40',
            900: '#212529',
            DEFAULT: '#808080',
            foreground: '#FFFFFF',
          },
        },
      },
      dark: {
        colors: {
          background: '#0C0C0E',
          foreground: '#ECEDEE',
          primary: {
            50: '#E6F1FE',
            100: '#CCE4FD',
            200: '#99C9FB',
            300: '#66AEF9',
            400: '#3393F7',
            500: '#0078F5',
            600: '#0060C4',
            700: '#004893',
            800: '#003062',
            900: '#001831',
            DEFAULT: '#0078F5',
            foreground: '#FFFFFF',
          },
          secondary: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
            DEFAULT: '#6B7280',
            foreground: '#FFFFFF',
          },
          focus: '#0078F5',
          divider: '#27272A',
          overlay: '#1F1F1F',
        },
      },
      modern: {
        colors: {
          background: '#FFFFFF', // Pure white background
          foreground: '#11181C', // Dark text color
          primary: {
            50: '#FDF2F8',
            100: '#FCE7F3',
            200: '#FBCFE8',
            300: '#F9A8D4',
            400: '#F472B6',
            500: '#DB2777', // Your specified pink color rgb(219, 39, 119)
            600: '#BE185D',
            700: '#9D174D',
            800: '#831843',
            900: '#500724',
            DEFAULT: '#DB2777',
            foreground: '#FFFFFF',
          },
          secondary: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
            DEFAULT: '#6B7280',
            foreground: '#FFFFFF',
          },
          focus: '#DB2777',
          divider: '#27272A',
          overlay: '#F9FAFB',
        },
      },
    },
  })],
}

export default config;
