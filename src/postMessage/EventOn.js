import store from '@/store'
import EventBus from './EventBus';
import router from '@/router'

function SunshineSheQu(){
    router.push('/SunshineSheQu')
}
function CarXunCha(data){
    router.push({name:'CarXunCha',params:data.data})
}
function KeyQiYe(data){
    router.push({path:'/KeyQiYe',query:data.data})
}
function SixBuilding(){
    router.push('/SixBuilding')
}
function handlePoint(data){
    store.commit('handlePoint', data.data)
}
function handleLoading(){
    store.commit('handleLoadFlag', false)
}
function handleMenuFlag(){
    store.commit('handleMenuFlag', true)
}
EventBus.onEvent('SunshineSheQu', SunshineSheQu)
EventBus.onEvent('carPage', CarXunCha)
EventBus.onEvent('KeyQiYe', KeyQiYe)
EventBus.onEvent('liuhaolou', SixBuilding)
EventBus.onEvent('handlePoint', handlePoint)
EventBus.onEvent('loading', handleLoading)
EventBus.onEvent('handleMenuFlag', handleMenuFlag)
