module.exports = {
  transpileDependencies: true,
  devServer: {
    onBeforeSetupMiddleware: function(devServer) {
      devServer.app.get('/api/list', (req, res) => {
        res.json([
          { id: 1, name: '本是后山人，偶做前堂客', selected: false },
          { id: 2, name: '醉舞经阁半卷书，坐井说天阔', selected: true },
        ])
      })
    }
  }
}
