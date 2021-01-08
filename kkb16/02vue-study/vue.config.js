module.exports = {
  devServer: {
    before(app) {
      // app是一个express实例
      app.get('/api/courses', (req, res) => {
        setTimeout(() => {
          res.json([{ name: 'web', price: 78 }, { name: 'javascript', price: 38 }, { name: 'html5', price: 23 }])
        }, 300)
      })
    }
  }
}