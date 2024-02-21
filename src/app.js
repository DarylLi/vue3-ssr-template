import { createSSRApp } from "vue";

import App from "./App.vue";

//这里为什么写一个函数来返回app实例
//通过函数返回app实例 可以保证每个请求都会返回一个新的app实例 避免跨请求状态的污染
export default function createApp() {
	let app = createSSRApp(App);
	return app;
}
