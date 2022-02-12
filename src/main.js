import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import { setupRouter } from './router'

/**
 * 对于H5 production环境做特殊处理
 * 必须在main.js中字面量写入
 * 让vite打包时在uni对象里强制标记5个方法，否则vite会用内部函数指针把代码中的字面量全部覆盖
 * 必须字面量描述，不能动态描述
 * 以下使用条件编译
 */
// #ifdef H5
const navigateTo = uni.navigateTo
const redirectTo = uni.redirectTo
const reLaunch = uni.reLaunch
const switchTab = uni.switchTab
const navigateBack = uni.navigateBack
uni.navigateTo = navigateTo
uni.redirectTo = redirectTo
uni.reLaunch = reLaunch
uni.switchTab = switchTab
uni.navigateBack = navigateBack
// #endif

export function createApp() {
	const app = createSSRApp(App);
	setupRouter(app)
	return {
		app,
	};
}
