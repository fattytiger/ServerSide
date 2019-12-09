const Koa = require("koa")

const Router = require("koa-router")

const app = new Koa()

const router = new Router()

const render = require('koa-ejs')

const path = require('path')

render(app,{
    root:path.join(__dirname,`view/master-page`),
    layout: `master`,
    viewExt:`html`,
    cache:false,
    debug:false
})



// app.use( async ctx => ctx.body = 'hello koa')

//router test
router.get('/', async ctx => {
    await ctx.render('../pages/index')
})

router.get('/index', (ctx) => ctx.body = 'Im index')

router.get('/news', (ctx) => ctx.body = 'Im news')



//when you want to use the router.routes,you need to regist the router first
app.use(router.routes())

app.listen(3000)