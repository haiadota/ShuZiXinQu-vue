import EventBus from '@/postMessage/EventBus';

export default {
    FlyToXinQu(data = {}) {
        EventBus.postMessage({ type: 'FlyToXinQu', data });
    },
    VideoLayer(data = {}) {
        EventBus.postMessage({ type: 'VideoLayer', data });
    },
    BarLayer(data = {}) {
        EventBus.postMessage({ type: 'BarLayer', data });
    },
};
