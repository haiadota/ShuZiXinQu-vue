import EventBus from '@/postMessage/EventBus';
import store from '@/store'

export default {
    FlyToXinQu(data = {}) {
        EventBus.postMessage({type: 'FlyToXinQu', data});
    },
    VideoLayer(data = {}) {
        EventBus.postMessage({type: 'VideoLayer', data});
    },
    BarLayer(data = {}) {
        EventBus.postMessage({type: 'BarLayer', data});
    },
    FlyLineLayer(data = {}) {
        EventBus.postMessage({type: 'FlyLineLayer', data});
    },
    ChanYeLayer(data = {}) {
        EventBus.postMessage({type: 'ChanYeLayer', data});
    },
    ZhongdianQiye(data = {}) {
        EventBus.postMessage({type: 'ZhongdianQiye', data});
    },
    shequguihua(data = {}) {
        EventBus.postMessage({type: 'shequguihua', data});
    },
    KongqiJiance(data = {}) {
        EventBus.postMessage({type: 'KongqiJiance', data});
    },
    Lajixiang(data = {}) {
        EventBus.postMessage({type: 'Lajixiang', data});
    },
    Xunchache(data = {}) {
        EventBus.postMessage({type: 'Xunchache', data: "市政巡查车"});
    },
    Huanweiche(data = {}) {
        EventBus.postMessage({type: 'Huanweiche', data: "环卫车"});
    },
    ZhongdaXiangmu(data = {}) {
        EventBus.postMessage({type: 'ZhongdaXiangmu', data});
    },
    feibendi(data = {}) {
        EventBus.postMessage({type: 'findType', data: '非本地户口'});
    },
    waisheng(data = {}) {
        EventBus.postMessage({type: 'findType', data: '外省户口'});
    },
    zuhu(data = {}) {
        EventBus.postMessage({type: 'findType', data: '租户'});
    },
    fanhuiChangjing(data = {}) {
        EventBus.postMessage({type: 'fanhuiChangjing'});
    },
    levelchangemap(data = {}) {
        EventBus.postMessage({type: 'levelchangemap'});
    },
    Tab(data = '') {
        EventBus.postMessage({type: 'Tab', data: data});
        // store.commit('handleActiveArr', {name: '高新开发区'})
        store.commit('handlePoint', {name: '中心点', value: [125.2638816833496, 43.82486751538151]})
    },
    createSheQu(data = {}) {
        EventBus.postMessage({type: 'createSheQu'});
    },
};
