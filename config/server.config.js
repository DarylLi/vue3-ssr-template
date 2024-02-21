let path = require("path");
let nodeExternals = require("webpack-node-externals");
let { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
	target: "node", //fs path就不会打包了
	mode: "development",
	entry: "./src/server/index.js",
	output: {
		filename: "server_bundle.js",
		path: path.resolve(__dirname, "../build/server"),
	},
	module: {
		rules: [
			{
				test: /\.css$/, // 正则匹配以.css结尾的文件
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /.\js$/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"],
				},
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
		],
	},
	plugins: [new VueLoaderPlugin()], //对vue文件的打包
	resolve: {
		//添加了这些扩展明名之后 项目中导包如下的扩展名文件就不需要编写文件的后缀
		extensions: [".js", ".json", ".wasm", ".jsx", ".vue"],
	},
	externals: [nodeExternals()], //排除掉node_module中的包
};
