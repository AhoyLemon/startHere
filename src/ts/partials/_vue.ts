/**
 * Vue application setup
 */

// Import Vue from CDN (it should be loaded in the HTML)
declare const Vue: any;

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      h1: "It works!",
      h5: "Whenever you're ready, delete this text and start writing code.",
    };
  },
  methods: {
    // Add your methods here
  },
  computed: {
    // Add your computed properties here
  },
  mounted() {
    // Code to run when the app is mounted
  },
});

app.mount("#app");

export default app;
