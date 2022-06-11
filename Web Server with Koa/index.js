const koa = require("koa");
const app = new koa();

app.use((ctx) => {
  if (ctx.path === "/") ctx.body = "<h1>Index Sayfasına hoş geldiniz</h1>";
  else if (ctx.path === "/about")
    ctx.body = "<h1>Hakkımızda Sayfasına hoş geldiniz</h1>";
  else if (ctx.path === "/contact")
    ctx.body = "<h1>İletişim Sayfasına hoş geldiniz</h1>";
  else ctx.body = "<h1>404 not found</h1>";
});

port = 3000;

app.listen(port, () => {
  console.log("Port başarılı olarak dinleniyor.");
});
