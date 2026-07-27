module.exports = {
  server: {
    baseDir: ".",
    routes: {
      "/svg": "src/svg",
      "/img": "src/img",
    },
  },
  files: ["**/*.html", "css/*.css", "js/**/*.js"],
  notify: false,
  open: false,
};
