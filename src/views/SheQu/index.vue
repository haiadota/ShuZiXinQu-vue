<template>
    <div class="box main_view">
        <LeftView>
            <Theme :value="'社区概况'"></Theme>
            <Points></Points>
            <Theme :value="'人口情况'"></Theme>
            <Population></Population>
            <Tab3D></Tab3D>
        </LeftView>
        <MidView></MidView>
        <RightView>
            <Theme :value="'户籍人口结构'"></Theme>
            <TwoBar></TwoBar>
            <Theme :value="'人口迁移情况'"></Theme>
            <Migration></Migration>
            <Theme :value="'社区事件分析'"></Theme>
            <SheQuDoughnut></SheQuDoughnut>
            <Theme :value="'人口密度排名'"></Theme>
            <RenKouScrollList></RenKouScrollList>
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
    import Points from './left/Points.vue'
    import Population from './left/Population.vue'
    import Migration from './right/Migration.vue'
    import SheQuDoughnut from './right/SheQuDoughnut.vue'
    import TwoBar from './right/TwoBar.vue'
    import RenKouScrollList from './right/RenKouScrollList.vue'

    export default {
        name: 'SheQu',
        components: {
            Menu,
            MidView,
            LeftView,
            RightView,
            Theme,
            Tab3D,
            Points,
            Population,
            Migration,
            SheQuDoughnut,
            TwoBar,
            RenKouScrollList
        },
        data() {
            return {
                btnList:[
                    {name:'社区分布',action:'shequguihua'},
                    {name:'人口分布',action:'BarLayer'},
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>

