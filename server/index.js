const Koa = require('koa')
const server = new Koa()
const path = require('path')
const koaStatic = require('koa-static')

const main = koaStatic(path.join('public'))

server.use(main)
server.listen(3000)
