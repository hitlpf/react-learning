import Koa from 'koa'; // node默认只能用require来导入模块，如果用import得用babel来转换

const path = require('path');
const views = require('koa-views');
const assets = require('koa-static');
const app = new Koa();

const router = require('../router/serverRouter');

//koa-views设置文件路径和文件类型(路径views一定要和项目中页面文件路径一致)
//可以是任何类型的文件：html，也可以是模块文件（pug或nunjucks），nunjucks使用时不使用koa-views模块而是使用koa-nunjucks-2模块
app.use(
    views(path.resolve(__dirname, `../../dist`), {
        extension: 'html'
    })
);

// static path
app.use(assets(path.join(__dirname, '../../dist')));

// 注册路由
router(app);

app.listen(9000, () => {
    console.log(`node服务已经启动, 请访问localhost:9000`);
});
