<template>
    <div class="box main_view">
        <LeftView>
            <Theme :value="'经济概览'"></Theme>
            <GanLan></GanLan>
            <Theme :value="'招商引资'"></Theme>
            <ZhaoShang></ZhaoShang>
            <Tab3D></Tab3D>
        </LeftView>
        <MidView></MidView>
        <RightView>
            <Theme :value="'产业结构趋势'"></Theme>
            <ChanYeJieGou></ChanYeJieGou>
            <Theme :value="'固定资产投资趋势分析'"></Theme>
            <GuDingZiChan></GuDingZiChan>
            <Theme :value="'规上工业七大产业增长情况排名'"></Theme>
            <ChanYeScrollList></ChanYeScrollList>
        </RightView>
        <Menu :btnList="btnList"></Menu>
    </div>
</template>

<script>
    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Theme from '@/components/Theme.vue'
    import Tab3D from '@/components/Tab3D.vue'
    import Menu from '@/components/Menu.vue'
    import GanLan from './left/GanLan.vue'
    import ZhaoShang from './left/ZhaoShang.vue'
    import ChanYeJieGou from './right/ChanYeJieGou.vue'
    import GuDingZiChan from './right/GuDingZiChan.vue'
    import ChanYeScrollList from './right/ChanYeScrollList.vue'
    import Event from "@/postMessage/Iframe.js";

    export default {
        name: 'JingJi',
        components: {
            MidView,
            LeftView,
            RightView,
            Theme,
            Tab3D,
            Menu,
            GanLan,
            ZhaoShang,
            ChanYeJieGou,
            GuDingZiChan,
            ChanYeScrollList
        },
        data() {
            return {
                btnList: [
                    {name: '产业园区分布', action: 'ChanYeLayer'},
                ]
            }
        },
        methods: {},
        mounted(){
            Event['ChanYeLayer']()
        }
    }
</script>

<style lang="scss" scoped>

</style>

