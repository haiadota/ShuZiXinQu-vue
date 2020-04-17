import EventType from '@/util/EventType';
import store from '@/store'
import EventBus from '@/util/EventBus';

function jinRuXinQu(data){
    store.commit('jinRuXinQu',data.data)
}

EventBus.onEvent(EventType.jinRuXinQu, jinRuXinQu)
