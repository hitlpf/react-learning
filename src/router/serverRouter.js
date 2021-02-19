const Router = require('koa-router');
const router = new Router();

const renderResult = require('../controller/renderResult');

module.exports = app => {
    // 服务端路由
    // router.get('/', renderResult.Spa);
    router.get('/schedule', renderResult.Spa);
    router.get('/roster', renderResult.Spa);

    router.get('/', renderResult.Index);
    router.get('/ssr', renderResult.Ssr);
    router.get('/spa', renderResult.Spa);
    app.use(router.routes()).use(router.allowedMethods());
};
