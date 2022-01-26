const { resolve } = require("path");
const { defineConfig } = require("vite");
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";

/*
The config is defined to run the build based on the mode it is run. 
For mode=website, the react app is built and served.
For mode=package, the mockman package is built and can be published.
*/
export default defineConfig(({ mode }) => {
  if (mode === "package") {
    return {
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
    };
  } else {
    return {
      plugins: [react()],
    };
  }
});
