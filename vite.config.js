import reactRefresh from "@vitejs/plugin-react-refresh";
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  plugins: [reactRefresh()],
  minify: true,
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.jsx"),
      name: "mockman",
      fileName: (format) => `mockman.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
