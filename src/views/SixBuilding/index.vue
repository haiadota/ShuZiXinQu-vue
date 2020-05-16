<template>
    <div class="box main_view">
        <LeftView>
            <Theme :value="'基本信息'"></Theme>
            <BasicInfo></BasicInfo>
            <Tab3D></Tab3D>
        </LeftView>
        <MidView></MidView>
        <RightView>
            <Theme :value="'人口统计 '"></Theme>
            <SixDoughnut></SixDoughnut>
            <Theme :value="'楼租户情况  '"></Theme>
            <ZuHuPercent></ZuHuPercent>
            <Theme :value="'6号楼今日进出人次'"></Theme>
            <RenCiLine></RenCiLine>
            <Theme :value="'视频监控'"></Theme>
            <VideoList></VideoList>
        </RightView>
        <Menu :btnList="btnList"><div class="btn" @click="fanhui">返回社区</div></Menu>
    </div>
</template>

<script>
    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Theme from '@/components/Theme.vue'
    import Tab3D from '@/components/Tab3D.vue'
    import Menu from '@/components/Menu.vue'
    import BasicInfo from './left/BasicInfo.vue'
    import SixDoughnut from './right/SixDoughnut.vue'
    import ZuHuPercent from './right/ZuHuPercent.vue'
    import RenCiLine from './right/RenCiLine.vue'
    import VideoList from './right/VideoList.vue'
    import Event from "@/postMessage/Iframe.js";

    export default {
        name: 'SixBuilding',
        components: {
            MidView,
            LeftView,
            RightView,
            Theme,
            Tab3D,
            Menu,
            BasicInfo,
            SixDoughnut,
            ZuHuPercent,
            RenCiLine,
            VideoList
        },
        data() {
            return {
                btnList: [
                    {name: '非本地户籍', action: 'feibendi'},
                    {name: '外省户籍', action: 'waisheng'},
                    {name: '租户', action: 'zuhu'},
                ]
            }
        },
        methods: {
            fanhui() {
                this.$router.go(-1)
                Event['fanhuiChangjing']()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

