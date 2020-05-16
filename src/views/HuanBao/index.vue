<template>
    <div class="box main_view">
        <LeftView>
            <Theme :value="'总体情况'"></Theme>
            <Overall></Overall>
            <Theme :value="'河湖概况'"></Theme>
            <River></River>
            <Tab3D></Tab3D>
        </LeftView>
        <MidView></MidView>
        <RightView>
            <Theme :value="'空气质量趋势'"></Theme>
            <AirLine></AirLine>
            <Theme :value="'环保信访'"></Theme>
            <FourBar3d></FourBar3d>
            <Theme :value="'重点监控企业'"></Theme>
            <QiYeScrollList></QiYeScrollList>
        </RightView>
        <Menu :btnList="btnList"></Menu>
    </div>
</template>

<script>
    import Tab3D from '@/components/Tab3D.vue'
    import Menu from '@/components/Menu.vue'
    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Theme from '@/components/Theme.vue'
    import Overall from './left/Overall.vue'
    import River from './left/River.vue'
    import AirLine from './right/AirBar.vue'
    import FourBar3d from './right/FourBar3d.vue'
    import QiYeScrollList from './right/QiYeScrollList.vue'


    export default {
        name: 'HuanBao',
        components: {
            MidView,
            LeftView,
            RightView,
            Theme,
            Menu,
            Overall,
            River,
            Tab3D,
            AirLine,
            FourBar3d,
            QiYeScrollList
        },
        data() {
            return {
                btnList: [
                    {name: '空气监测点', action: 'KongqiJiance'},
                    {name: '重点监控企业', action: 'ZhongdianQiye'},
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>

