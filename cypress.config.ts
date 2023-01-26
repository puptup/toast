import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: false,
    baseUrl: 'http://localhost:6006',
    supportFile: false,
  },
});
