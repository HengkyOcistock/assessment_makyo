import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),    
    federation({
      name: "dropdownmenu",
      filename: "remoteEntry.js",
      exposes: {
        "./DropdownMenu": "./src/components/DropdownMenu",
      },
      shared: ["react", "react-dom", "@mui/material", "@mui/icons-material", "@emotion/styled", "@emotion/react", "@fontsource/roboto"],
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
