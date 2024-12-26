const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      h1: "It works!",
      h5: "Whenever you're ready, delete this text and start writing code.",
    };
  },
  methods: {
    // ...existing code...
  },
  computed: {
    // ...existing code...
  },
  mounted() {
    // ...existing code...
  },
});

app.mount("#app");
