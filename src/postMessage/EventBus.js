import Vue from 'vue'
import _ from 'lodash';
import store from '@/store'

class EventBus {
    constructor(iframeId = '3dIframe') {
        this.vue = new Vue();
        const iFrame = document.getElementById(iframeId);
        if (iFrame === null) {
            throw new Error('没有引入正确的 iframe');
        }
        this.iframeWindow = iFrame.contentWindow;
    }

    postMessage(obj) {
        if (store.state.btnFlag != obj.type && obj.type && _.isString(obj.type)) {
            store.commit('handlebtnFlag', obj.type)
            this.iframeWindow.postMessage(obj, '*');
            setTimeout(function () {
                store.commit('handlebtnFlag', '')
            }, 0.5*1000)
        }
    }

    onEvent(eventType, callback) {
        this.vue.$on(
            eventType, data => {
                callback(data);
            }
        );
    }

    offEvent(eventType, callback) {
        this.vue.$off(eventType);
    }

    emitEvent(eventType, data) {
        this.vue.$emit(eventType, data);
    }
}

const eventBus = new EventBus();

window.eventBus = eventBus;

window.addEventListener("message", event => {
    const data = event.data;
    if (data && (typeof data.type === 'string')) {
        window.eventBus.emitEvent(data.type, data);
    }
}, false);
export default eventBus;