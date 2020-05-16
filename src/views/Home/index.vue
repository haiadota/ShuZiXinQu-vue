<template>
    <div class="box main_view">
        <LeftView>
            <Theme :value="'城市基本信息'"></Theme>
            <BaseInfo></BaseInfo>
            <Theme :value="'城市体征'"></Theme>
            <Sign></Sign>
            <!--<Tab></Tab>-->
            <Tab3D></Tab3D>
        </LeftView>
        <MidView></MidView>
        <RightView>
            <Theme :value="'数据资源'"></Theme>
            <!--<Resource></Resource>-->
            <First></First>
            <Theme :value="'生态环境'"></Theme>
            <Environment></Environment>
            <Theme :value="'城乡建设'"></Theme>
            <Construction></Construction>
            <Theme :value="'社区治理'"></Theme>
            <Community></Community>
        </RightView>
        <Menu :btnList="btnList"></Menu>
    </div>
</template>

<script>
    import Menu from '@/components/Menu.vue'
    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Theme from '@/components/Theme.vue'
    import Tab from '@/components/Tab.vue'
    import BaseInfo from './left/BaseInfo.vue'
    import Sign from './left/Radar.vue'
    import Resource from './right/Resource.vue'
    import Environment from './right/LiquidFill.vue'
    import Construction from './right/Construction.vue'
    import Community from './right/Wordcloud.vue'
    import First from './right/Doughnut.vue'
    import Tab3D from '@/components/Tab3D.vue'

    export default {
        name: 'Home',
        components: {
            MidView,
            LeftView,
            RightView,
            Theme,
            Tab,
            BaseInfo,
            Sign,
            Resource,
            Environment,
            Construction,
            Community,
            Menu,
            First,
            Tab3D
        },
        data() {
            return {
                btnList:[
                    {name:'视频监控',action:'VideoLayer'}
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>

