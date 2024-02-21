import { createApp } from "vue";
import App from "../App.vue";
import createRouter from "../router";
import { createWebHistory } from "vue-router";
import { createPinia } from "pinia";

let app = createApp(App);

//安装路由插件
let router = createRouter(createWebHistory());
let pinia = createPinia();
app.use(router);
app.use(pinia);
router.isReady().then(() => {
	app.mount("#app");
});

