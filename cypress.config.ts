import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'qwiych',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
