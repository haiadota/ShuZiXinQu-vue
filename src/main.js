import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import './assets/style/reset.css'
import './assets/iconfont/iconfont.css'
import '../public/font/RuiZiBiGeQingChunTiJian2-0-1.css'
import '../public/newFont/FZZZHUNHJW.css'

import Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';

HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
Vue.prototype.$Highcharts = Highcharts

var echarts = require('echarts')
Vue.prototype.$echarts = echarts

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
    window.addEventListener('load',function () {
        router.replace('/Home')
    })
    next()
})

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
