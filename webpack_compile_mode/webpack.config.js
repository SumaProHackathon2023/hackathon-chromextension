/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/**@type {import("webpack").Configuration} */
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		popup: "./src/index.tsx",
		content: "./src/content.tsx",   
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "build"),
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	module: {
		rules: [
			{test: /\.(ts|tsx)$/, loader: "ts-loader"},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, "src"),
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
	target: ["web", "es5"],
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				test: /\.(ts|tsx)?$/,
				presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
			},
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new CopyPlugin({
			patterns: [ { from: "public", to: "./" } 
			],
		}),
		new ESLintPlugin({
			extensions: [".ts",".tsx"],
			exclude: "node_modules"
		})]
};