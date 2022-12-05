import App from './App.vue'

const host = 'https://unidemo.dcloud.net.cn/';

//uni-app的入口文件，主要用于初始化Vue实例，定义全局组件、使用需要的插件如vuex.
// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$host = host;
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
