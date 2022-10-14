import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
// main.js，注意要在use方法之后执行
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import { vueBaberrage } from 'vue-baberrage';  //弹幕
Vue.use(vueBaberrage);

import wechat from './utils/wechat.js' //微信操作js
if (wechat.isWechat()) {
  Vue.prototype.$wechat = wechat;
}

// import scroll from 'vue-seamless-scroll'// 自动滚动
// Vue.use(scroll)

import music from './utils/myMusic.js'//音乐
Vue.prototype.$music = music

// 调用setConfig方法，方法内部会进行对象属性深度合并，可以放心嵌套配置
// 需要在Vue.use(uView)之后执行
uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'rpx'
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		radio: {
			size: 15
		}
		// 其他组件属性配置
		// ......
	}
})


App.mpType = 'app'

















const app = new Vue({
    ...App
})
app.$mount()
// #endif



























// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif