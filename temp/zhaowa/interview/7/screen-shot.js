(async () => {
  const PCR = require('puppeteer-chromium-resolver')
  const stats = await PCR()

  const browser = stats.puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
    executablePath: stats.executablePath
  }).catch(function(err) {
    console.log(err)
  })

  const Koa = require('koa')
  const app = new Koa()

  app.use(async ctx => {
    const { url } = ctx.query
    if (!url) {
      ctx.body = 'Invalid Url'
      return
    }
    ctx.set('Context-Type', 'image/png')
    const page = await browser.newPage()

    await page.goto(url, { awaitUntil: 'networkidle2' })

    ctx.body = await page.screenshot({ encoding: 'binary', type: 'png' })

    await page.close()
  })

  app.listen(8083)

  console.log('server listening on port 8083')
})()