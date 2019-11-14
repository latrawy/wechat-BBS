'use strict'
const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const ctx = this.ctx;
        // const page = ctx.query.page || 1;
        // const newsList = await ctx.service.news.list(page);
        const newsList = [];
        ctx.render('news/list.tpl', { list: newsList });
        const result = await ctx.curl('http://rocketship.com.au/404/');
        console.log(result.status);
        ctx.body = result.data;
    }
}
module.exports = NewsController;