// import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import axios from 'axios'
import Koa from 'koa'

const app = new Koa();
// const router = new Router();
// 	router.get("/", async ctx => {
		
// 	})
// const server = express()

// server.get('/', (req, res) => {
//   const vueApp = createSSRApp({
//     data: () => ({ count: 1 }),
//     template: `<button @click="count++">{{ count }}</button>`
//   })

//   renderToString(vueApp).then((html) => {
//     res.send(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>Vue SSR Example</title>
//       </head>
//       <body>
//         <div id="app">${html}</div>
//       </body>
//     </html>
//     `)
//   })
// })

// server.listen(3000, () => {
//   console.log('ready')
// })
// http://franxxdaryl.site:1919/mikamoods
app.use(async (ctx, next) => {
	await next();
	const mika = await axios.request({
		baseURL: 'http://franxxdaryl.site:1919/mikamoods'
	})
	  const vueApp = createSSRApp({
		data: () => ({ count: 1 }),
		template: `<button @click="count++">{{ count }}</button>`
	  })
	const html = await renderToString(vueApp);
	let output = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">
		${html}
		<div>today moods: ${mika?.data?.mood}</div>
		</div>
      </body>
    </html>
`;
	ctx.response.body = output;
});

app.listen(3000, () => {
  console.log("服务器开启成功", `http://localhost:3000/`);
});