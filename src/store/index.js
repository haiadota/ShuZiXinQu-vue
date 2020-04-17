import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        navIndex: 0,
        activeArr: [
            {name: '高新开发区', value: 0},
            {name: '北湖新区', value: 0},
            {name: '长德新区', value: 0},
            {name: '空港新区', value: 0}
        ]
    },
    mutations: {
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