/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  daisyui: {
    themes: [
      {
        "default-light": {
          primary: "#0369a1",
          secondary: "#0891b2",
          accent: "#6d28d9",
          neutral: "#6b7280",
          "neutral-content": "#d1d5db",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-content": "#0a0a0a",
          info: "#a5f3fc",
          success: "#22c55e",
          warning: "#facc15",
          error: "#dc2626",
        },
      },
      {
        "default-dark": {
          primary: "#7dd3fc",
          secondary: "#22d3ee",
          accent: "#6d28d9",
          neutral: "#9ca3af",
          "neutral-content": "#404040",
          "base-100": "#171717",
          "base-200": "#262626",
          "base-content": "#fafafa",
          info: "#009ee4",
          success: "#00b17d",
          warning: "#eac700",
          error: "#f1293c",
        },
      },
       // Red Light Theme
       {
         "red-light": {
           primary: "#ef4444",
           secondary: "#dc2626",
           accent: "#6d28d9",
           neutral: "#6b7280",
           "neutral-content": "#d1d5db",
           "base-100": "#ffffff",
           "base-200": "#f3f4f6",
           "base-content": "#0a0a0a",
           info: "#a5f3fc",
           success: "#22c55e",
           warning: "#facc15",
           error: "#dc2626",
         },
       },
       // Red Dark Theme
       {
         "red-dark": {
           primary: "#ef4444",
           secondary: "#dc2626",
           accent: "#6d28d9",
           neutral: "#9ca3af",
           "neutral-content": "#404040",
           "base-100": "#171717",
           "base-200": "#262626",
           "base-content": "#fafafa",
           info: "#009ee4",
           success: "#00b17d",
           warning: "#eac700",
           error: "#f1293c",
         },
       },
       // Green Light Theme
       {
         "green-light": {
           primary: "#22c55e",
           secondary: "#16a34a",
           accent: "#6d28d9",
           neutral: "#6b7280",
           "neutral-content": "#d1d5db",
           "base-100": "#ffffff",
           "base-200": "#f3f4f6",
           "base-content": "#0a0a0a",
           info: "#a5f3fc",
           success: "#22c55e",
           warning: "#facc15",
           error: "#dc2626",
         },
       },
       // Green Dark Theme
       {
         "green-dark": {
           primary: "#22c55e",
           secondary: "#16a34a",
           accent: "#6d28d9",
           neutral: "#9ca3af",
           "neutral-content": "#404040",
           "base-100": "#171717",
           "base-200": "#262626",
           "base-content": "#fafafa",
           info: "#009ee4",
           success: "#00b17d",
           warning: "#eac700",
           error: "#f1293c",
         },
       },
       // Orange Light Theme
       {
         "orange-light": {
           primary: "#f97316",
           secondary: "#ea580c",
           accent: "#6d28d9",
           neutral: "#9ca3af",
           "neutral-content": "#404040",
           "base-100": "#171717",
           "base-200": "#262626",
           "base-content": "#fafafa",
           info: "#009ee4",
           success: "#00b17d",
           warning: "#eac700",
           error: "#f1293c",
         },
       },
       // Orange Dark Theme
       {
         "orange-dark": {
           primary: "#f97316",
           secondary: "#ea580c",
           accent: "#6d28d9",
           neutral: "#9ca3af",
           "neutral-content": "#404040",
           "base-100": "#171717",
           "base-200": "#262626",
           "base-content": "#fafafa",
           info: "#009ee4",
           success: "#00b17d",
           warning: "#eac700",
           error: "#f1293c",
         },
       },
     ],
   },
   darkMode: ["class", '[data-theme="dark"]'],
   content: [
     "./app/**/*.{js,ts,jsx,tsx}",
     "./pages/**/*.{js,ts,jsx,tsx}",
     "./components/**/*.{js,ts,jsx,tsx}",

    // For the "layouts" directory
     "./layouts/**/*.{js,ts,jsx,tsx}",
   ],
   plugins: [
     require("daisyui"),
     plugin(({ addVariant }) => {
       addVariant("dark", '&[data-theme="dark"]');
     }),
   ],
 };
 