module.exports = {
  env: 'production',
  app: {
    debug: false,
    port: 8088,
    keys: ['keys-blog-admin', 'keykeys-blog-admin'],
    sessionKey: 'session-key',
  },
  db: {
    URL: 'mongodb://localhost/reactBlog'
  }
}
