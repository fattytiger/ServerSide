const Koa = require("koa")

const Router = require("koa-router")

const app = new Koa()

const router = new Router()

const render = require('koa-ejs')

const path = require('path')

const server = require('koa-static')


render(app,{
    root:path.join(__dirname,`view/master-page`),
    layout: `master`,
    viewExt:`html`,
    cache:false,
    debug:false
})

app.use(server(__dirname+`/node_modules/bootstrap`))
console.log(__dirname+`/node_modules/bootstrap`)

//router test
router.all('/', async ctx => {
    await ctx.render('../pages/index')
})
    .all('/product', async ctx => {
    await ctx.render('../pages/product')
    })
    .all('/blog', async ctx => {
        await ctx.render(`../pages/blog`)
    })
    .all(`/team`, async ctx => {
        await ctx.render(`../pages/team`)
    })



//when you want to use the router.routes,you need to regist the router first
app.use(router.routes())
const port = 3000
app.listen(port)