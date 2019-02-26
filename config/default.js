module.exports = {
  env: 'production',
  app: {
    debug: false,
    port: 8089,
  },
  db: {
    URL: 'mongodb://localhost/reactBlog'
  }
}
