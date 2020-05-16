import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        menuFlag: false,
        LoadFlag: false,
        btnFlag: '', // 按钮延时开关值
        showNav: true, // 显示导航按钮
        navIndex: 0, // 导航菜单下标显示
        point: [{ // 小地图点位
            name: '中心点',
            value: [125.48034667968749,
                43.919658762067655]
        }],
        CarXunCha: false, // 显示巡查车页面
        KeyQiYe: false, // 显示重点企业页面
        activeArr: [ // 小地图区域
            {name: '高新开发区', value: 0},
            {name: '北湖新区', value: 0},
            {name: '长德新区', value: 0},
            {name: '空港新区', value: 0}
        ]
    },
    mutations: {
        handleMenuFlag(state, payLoad) {
            state.menuFlag = payLoad
        },
        handleLoadFlag(state, payLoad) {
            state.LoadFlag = payLoad
        },
        handlebtnFlag(state, payLoad) {
            state.btnFlag = payLoad
        },
        handleKeyQiYe(state, payLoad) {
            state.KeyQiYe = payLoad
        },
        handleShowNav(state, payLoad) {
            state.showNav = payLoad
        },
        handlePoint(state, payLoad) {
            state.point = [{name:payLoad.name||'',value:[...payLoad.value,100]}]
        },
        handleCarXunCha(state, payLoad) {
            state.CarXunCha = payLoad
        },
        handleNavIndex(state, payLoad) {
            state.navIndex = payLoad
        },
        handleActiveArr(state, payLoad) {
            let arr = []
            state.activeArr.forEach(function (i) {
                if (i.name == payLoad.name) {
                    arr.push({name: i.name, value: 1})
                } else {
                    arr.push({name: i.name, value: 0})
                }
            })
            state.activeArr = arr
        }
    }
})

export default store