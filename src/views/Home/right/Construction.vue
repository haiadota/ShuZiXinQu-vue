<template>
    <div class="main">
        <div class="txt">
            <div>
                <div class="title">
                    <div class="bar"></div>
                    <div>今日城管事件</div>
                </div>
                <div>
                    <span class="num">12</span>
                    <span class="unit"> 件</span>
                </div>
            </div>
            <div>
                <div class="title">
                    <div class="bar"></div>
                    <div>今日损坏部件</div>
                </div>
                <div>
                    <span class="num">12</span>
                    <span class="unit"> 件</span>
                </div>
            </div>
        </div>
        <JinDuTiao :list="list" :percent="true"></JinDuTiao>
    </div>
</template>

<script>
    import JinDuTiao from '@/components/JinDuTiao.vue'

    export default {
        name: "Construction",
        components: {
            JinDuTiao
        },
        data(){
            return{
                list: [
                    { typename: "部件完好率", num: 78 },
                    { typename: "城管事件处理率", num: 89 },
                    { typename: "环卫站箱清理频率", num: 79 },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main{
        height: 20%;
        .txt{
            padding: 10px 0;
            display: flex;
            padding-left: 15px;
            height: 20%;
            align-items: center;
            text-align: center;
            justify-content: space-around;
            .title{
                padding-bottom: 5px;
                display: flex;
                align-items: center;
                .bar{
                    margin-right: 6px;
                    background: #00bdff;
                    width: 2px;
                    height: 18px;
                }
            }
            .num{
                font-size: 24px;
            }
            .unit{
                font-size: 14px;
            }
        }
    }
</style>