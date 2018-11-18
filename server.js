import Koa from 'koa';

const app = new Koa();

app.listen('8009', () => {
  console.log('成功监听8009端口');
})