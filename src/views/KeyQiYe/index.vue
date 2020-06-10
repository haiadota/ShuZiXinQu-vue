<template>
    <div class="box main_view">
        <LeftView>
            <Theme :value="'污染企业'"></Theme>
            <WuRanQiYe :arr="wangGeArr"></WuRanQiYe>
            <Theme :value="'网格信息'"></Theme>
            <WangGeXinXi></WangGeXinXi>
            <Tab3D></Tab3D>
        </LeftView>
        <MidView></MidView>
        <RightView>
            <Theme :value="'日常监测报告'"></Theme>
            <RiChangJianCe></RiChangJianCe>
            <Theme :value="'污染物排放实时监测'"></Theme>
            <FourLine></FourLine>
            <Theme :value="'监控视频'"></Theme>
            <JianKong></JianKong>
        </RightView>
        <div class="btn event_all selectablefalse">
            <div class="wrap" @click="fanhui">返回</div>
        </div>
    </div>
</template>

<script>
    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Theme from '@/components/Theme.vue'
    import Tab3D from '@/components/Tab3D.vue'
    import Menu from '@/components/Menu.vue'
    import WuRanQiYe from './left/WuRanQiYe.vue'
    import WangGeXinXi from './left/WangGeXinXi.vue'
    import RiChangJianCe from './right/DailyScrollList.vue'
    import FourLine from './right/FourLine.vue'
    import JianKong from './right/JianKong.vue'
    import Event from "@/postMessage/Iframe.js";

    export default {
        name: 'KeyQiYe',
        components: {
            MidView,
            LeftView,
            RightView,
            Theme,
            Tab3D,
            Menu,
            WuRanQiYe,
            WangGeXinXi,
            RiChangJianCe,
            FourLine,
            JianKong
        },
        data() {
            return {
                wangGeArr:[
                    {title:'企业名称',num:'阳光企业'},
                    {title:'统一社会信用代码',num:'6789123456789'},
                    {title:'所属区县',num:'高新区'},
                    {title:'主要污染物指标',num:'氨氮、总磷、总氮'},
                ]
            }
        },
        methods: {
            fanhui() {
                this.$router.go(-1)
                // Event['ZhongdianQiye']()
            }
        },
        created(){
            let obj = this.$route.query
            if(obj.name){
                this.wangGeArr = [
                    {title:'企业名称',num:obj.name},
                    {title:'统一社会信用代码',num:'6789123456789'},
                    {title:'所属区县',num:'高新区'},
                    {title:'主要污染物指标',num:'氨氮、总磷、总氮'},
                ]
            }
            let coordinates = obj.value||[125.248592, 43.789325]
            Event['showQiYeCampus']({"coordinates": coordinates})
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;

        .wrap {
            padding: 10px 30px 16px;
            margin: 0 15px;
            cursor: pointer;
            background: url("../../../public/image/btn.png") no-repeat;
            background-size: 100% 100%;
            text-align: center;
        }

        .wrap:hover {
            color: #c5c2fb;
        }
    }
</style>

