const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const router = require('koa-router')({ prefix: '/api' })

// 设置cookie加密密钥
app.keys = ['some secret', 'another secret']

const goods = [
  { id: 1, text: 'JavaScript高级教程', price: 64.5 },
  { id: 2, text: '技术人修炼之道', price: 79 },
  { id: 3, text: '图解http', price: 34 },
]

// 配置路由
// 获取产品列表
router.get('/goods', (ctx) => {
  ctx.body = {
    ok: 1,
    goods,
  }
})
// 产品详情
router.get('/detail', (ctx) => {
  ctx.body = {
    ok: 1,
    data: goods.find((good) => good.id === ctx.query.id),
  }
})

// 登陆
router.post('/login', (ctx) => {
  const user = ctx.request.body
  if (user.username === 'peter' && user.password === '123') {
    // 将token存入cookie
    const token = 'a mock token'
    ctx.cookies.set('token', token)
    ctx.body = { ok: 1, token }
  } else {
    ctx.body = { ok: 0 }
  }
})

// 解析post数据并注册路由
app.use(bodyparser())

app.use(router.routes())

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('api服务已启动')
})
