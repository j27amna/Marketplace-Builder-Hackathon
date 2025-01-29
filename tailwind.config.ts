import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";
import {Suspense} from "react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'] 
      },
      backgroundImage: {
        'heroimg': "url('/images/heroimg.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
