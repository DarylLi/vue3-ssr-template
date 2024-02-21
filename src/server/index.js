let express = require("express");
let server = express();
import createApp from "../app";
import { renderToString } from "@vue/server-renderer";
import createRouter from "../router";
// 内存路由 -> node用
import { createMemoryHistory } from "vue-router";
import { createPinia } from "pinia";

//部署静态资源
server.use(express.static("build"));

server.get("/*", async (req, res) => {
	let app = createApp();

	//app 安装路由插件
	let router = createRouter(createMemoryHistory());
	app.use(router);
	await router.push(req.url || "/"); // / or /about 等待页面跳转好
	await router.isReady(); // 等待（异步）路由加载完成 再渲染页面

	//app 安装pinia插件
	let pinia = createPinia();
	app.use(pinia);

	let appStringHtml = await renderToString(app);
	res.send(
		`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>mika kira~</title>
			</head>
			<body>
				<h1>mika kira kira bling bling</h1>
				<div id="app">
					${appStringHtml}
				</div>
				<script src="/client/client_bundle.js"></script>
			</body>
		</html>
		`
	);
});

server.listen(3000, () => {
	console.log("start node server on 3000");
});
