import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: ["src/components/"],
    }),
    react(),
  ],
  optimizeDeps: {
    include: ["src/components"],
  },
  build: {
    lib: {
      entry: "src/components/index.ts",
      name: "my-lib",
      fileName: (format) => `ant-tailwindcss.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
