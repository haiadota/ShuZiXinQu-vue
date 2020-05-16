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
import './postMessage/EventOn.js';

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

router.beforeEach((to, from, next) => {
    store.commit('handleLoadFlag', false)
    let hashTo = to.path.split('/')[1]
    let hashFrom = from.path.split('/')[1]
    if ('CarXunCha' == hashTo) {
        document.getElementById('3dIframe').style.visibility = 'hidden'
        store.commit('handleCarXunCha', true)
        store.commit('handleShowNav', false)
    } else if ('KeyQiYe' == hashTo) {
        // store.commit('handleKeyQiYe', true)
        store.commit('handleShowNav', false)
        store.commit('handleLoadFlag', true)
    } else if ('SunshineSheQu' == hashTo||'SixBuilding' == hashTo) {
        store.commit('handleShowNav', false)
        if('SheQu' == hashFrom){
            store.commit('handleLoadFlag', true)
        }
    } else {
        document.getElementById('3dIframe').style.visibility = 'visible'
        store.commit('handleCarXunCha', false)
        store.commit('handleKeyQiYe', false)
        store.commit('handleShowNav', true)
    }
    next()
})

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
