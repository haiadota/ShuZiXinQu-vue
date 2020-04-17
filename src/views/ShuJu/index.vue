<template>
    <div class="box main_view">
        <LeftView>
            <Theme :value="'共享交换数据分析'"></Theme>
            <GongXiang></GongXiang>
            <Theme :value="'共享开放数据分析'"></Theme>
            <KaiFang></KaiFang>
            <Tab3D></Tab3D>
        </LeftView>
        <MidView></MidView>
        <RightView>
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
    import GongXiang from './left/JiaoHuan.vue'
    import KaiFang from './left/KaiFang.vue'

    export default {
        name: 'ShuJu',
        components: {
            MidView,
            LeftView,
            RightView,
            Theme,
            Tab3D,
            Menu,
            GongXiang,
            KaiFang
        },
        data() {
            return {
                btnList: [
                    {name: '人口分布', action: 'BarLayer'},
                    {name: '社区分布', action: 'HomeVideo'},
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>

