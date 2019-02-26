module.exports = {
  env: 'production',
  app: {
    debug: false,
    port: 8088,
  },
  db: {
    URL: 'mongodb://localhost/reactBlog'
  }
}
