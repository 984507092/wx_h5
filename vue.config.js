// module.exports = {
// 	devServer: { //记住，别写错了devServer//设置本地默认端口  选填
// 		// port: 9998,
// 		proxy: { //设置代理，必须填
// 			'/h5': { //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
// 				target: 'https://wxweb_test.fasunspace.com', //代理的目标地址
// 				changeOrigin: true, //是否设置同源，输入是的
// 				pathRewrite: { //路径重写
// 					'/h5': '' //选择忽略拦截器里面的单词
// 				}
// 			},
// 			//'/web': { //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
// 			//	target: 'http://121.204.170.197:8000/i8', //代理的目标地址
// 			//	changeOrigin: true, //是否设置同源，输入是的
// 			//	pathRewrite: { //路径重写
// 			//		'/web': '' //选择忽略拦截器里面的单词
// 			//	}
// 			//}
// 		}
// 	}
// }