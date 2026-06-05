import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import compress from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // compress({
    //   verbose: true,
    //   disable: false,
    //   threshold: 10240,
    //   algorithm: "gzip",
    //   ext: ".gz",
    // }),
  ],
});