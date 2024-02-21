let path = require("path");
let { VueLoaderPlugin } = require("vue-loader");
let { DefinePlugin } = require("webpack");

module.exports = {
	target: "web",
	mode: "development",
	entry: "./src/client/index.js",
	output: {
		filename: "client_bundle.js",
		path: path.resolve(__dirname, "../build/client"),
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
	plugins: [
		new VueLoaderPlugin(),
		new DefinePlugin({
			__VUE_OPTIONS_API__: false,
			__VUE_PROD_DEVTOOLS__: false,
		}),
	], //对vue文件的打包
	resolve: {
		//添加了这些扩展明名之后 项目中导包如下的扩展名文件就不需要编写文件的后缀
		extensions: [".js", ".json", ".wasm", ".jsx", ".vue"],
	},
};
