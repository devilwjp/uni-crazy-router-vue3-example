import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import { setupRouter } from './router'
export function createApp() {
	const app = createSSRApp(App);
	setupRouter(app)
	return {
		app,
	};
}
