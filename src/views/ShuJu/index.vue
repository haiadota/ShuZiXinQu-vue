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
            <Theme :value="'数据交换量Top5'"></Theme>
            <Top5 :list="top5List"></Top5>
            <Theme :value="'24H数据交换量趋势分析'"></Theme>
            <Line24H></Line24H>
            <Theme :value="'信息资源共享方式对比'"></Theme>
            <CityTiZheng></CityTiZheng>
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
    import CityTiZheng from './right/GongXiang.vue'
    import Top5 from './right/Top5.vue'
    import Line24H from './right/Line24H.vue'
    import Event from "@/postMessage/Iframe.js";

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
            KaiFang,
            CityTiZheng,
            Top5,
            Line24H
        },
        data() {
            return {
                top5List: [
                    { typename: "人社局", num: 400 },
                    { typename: "卫计局", num: 350 },
                    { typename: "教育局", num: 300 },
                    { typename: "新区建委", num: 200 },
                    { typename: "安监局", num: 100 },
                ],
                btnList: [
                    {name: '数据传输网络', action: 'FlyLineLayer'},
                ]
            }
        },
        methods: {},
        mounted(){
            Event['FlyLineLayer']()
        }
    }
</script>

<style lang="scss" scoped>

</style>

