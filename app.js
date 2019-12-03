const Koa = require("koa")

const Router = require("koa-router")

const app = new Koa()

const router = new Router()

// app.use( async ctx => ctx.body = 'hello koa')

//router test
router.get('/', (ctx) => ctx.body = 'Im /')

router.get('/index', (ctx) => ctx.body = 'Im index')

router.get('/news', (ctx) => ctx.body = 'Im news')



//when you want to use the router.routes,you need to regist the router first
app.use(router.routes())

app.listen(3000)