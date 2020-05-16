<template>
    <div class="box main_view">
        <LeftView>
            <Theme :value="'部件信息'"></Theme>
            <UnitInfo></UnitInfo>
            <Theme :value="'事件信息'"></Theme>
            <IncidentInfo></IncidentInfo>
            <Theme :value="'监控车辆'"></Theme>
            <CarInfo></CarInfo>
            <Tab3D></Tab3D>
        </LeftView>
        <MidView></MidView>
        <RightView>
            <Theme :value="'环保绿化'"></Theme>
            <LvHua></LvHua>
            <Theme :value="'环卫站箱清理频率'"></Theme>
            <BoxLine></BoxLine>
            <Theme :value="'城市事件趋势分析'"></Theme>
            <CityEvent></CityEvent>
            <Theme :value="'车辆动态实时跟踪'"></Theme>
            <CarScrollList></CarScrollList>
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
    import UnitInfo from './left/UnitInfo.vue'
    import IncidentInfo from './left/IncidentInfo.vue'
    import CarInfo from './left/CarInfo.vue'
    import LvHua from './right/LvHua.vue'
    import BoxLine from './right/BoxLine.vue'
    import CityEvent from './right/CityEvent.vue'
    import CarScrollList from './right/CarScrollList.vue'

    export default {
        name: 'JianShe',
        components: {
            MidView,
            LeftView,
            RightView,
            Theme,
            Tab3D,
            Menu,
            UnitInfo,
            IncidentInfo,
            CarInfo,
            LvHua,
            BoxLine,
            CityEvent,
            CarScrollList
        },
        data() {
            return {
                btnList: [
                    {name: '重大项目', action: 'ZhongdaXiangmu'},
                    {name: '市政巡查车', action: 'Xunchache'},
                    {name: '环卫车', action: 'Huanweiche'},
                    {name: '垃圾箱', action: 'Lajixiang'},
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>

