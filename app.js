const Koa = require("koa")

const Router = require("koa-router")

const app = new Koa()

const router = new Router()

// const render = require('koa-ejs')
const render = require('koa-art-template')

const path = require('path')

const server = require('koa-static')



// render(app,{
//     root:path.join(__dirname,`view/master-page`),
//     layout: `master`,
//     viewExt:`html`,
//     cache:false,
//     debug:false
// })

render(app,{
    root: path.join(__dirname, 'view/master-page'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})

app.use(server(__dirname+`/node_modules/bootstrap`))
app.use(server(__dirname+`/node_modules/jquery`))
app.use(server(__dirname+`/node_modules/popper.js`))

//router test
router.all('/', async ctx => {

    let list = [
        1,2,3,4,5
    ] 
    let  obj= { 
        name:`zhangsan` 
    } 
    let val = `<h1>12<h1>` 
    await ctx.render('../master-page/master',{ 

        list:list, 
        obj,
        val

    })
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