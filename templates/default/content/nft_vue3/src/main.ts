import { createApp } from 'vue'
import App from './App.vue'

import "@/assets/css/index.scss";
import axios from 'axios';
// 加载外部脚本
import { loadPluginMin } from '@/config/initPlugin.js'
//loadPluginMin('allMin', true)

// vue-slider-component 范围滑块
import 'vue-slider-component/theme/default.css'
// ECharts
import ECharts from 'vue-echarts'

// 扩展window接口
declare global {
  interface Window {
    Choices?: any;
		tns?: any;
    ethereum?: any;
  }
}
import router from './router'
import store from './store'
import VueGtag from 'vue-gtag-next';

const app = createApp(App)
app.component('v-chart', ECharts)
app.use(store).use(router).use(VueGtag, {
    property: {
        id: 'UA-72351393-1',
    },
}).mount('#app')
