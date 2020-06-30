<template>
    <div class="main">
        <vuescroll :ops="ops">
        <table class="list parent-dom">
            <thead class="top">
            <tr>
                <td class="title first">序号</td>
                <td class="title">企业名称</td>
                <td class="title third">污染物</td>
                <td class="title">监测值</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item,i) in list" :key="i" class="cell child-dom">
                    <td>{{i+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.family}}</td>
                    <td>{{item.people}}</td>
                </tr>
            </tbody>
        </table>
        </vuescroll>
    </div>
</template>

<script>
    import vuescroll from 'vuescroll/dist/vuescroll-native'

    export default {
        name: "QiYeScrollList",
        components: {vuescroll},
        data() {
            return {
                ops: {
                    vuescroll: {scroller: {minZoom: 1, maxZoom: 1,}},
                    scrollPanel: {scrollingX: false,},
                    rail: {},
                    bar: {
                        keepShow: true,
                        background: '#c0c0c0'
                    },
                },
                list: [
                    {name: '柏林水务长春高新污水处理有限公司', family: 'COD', people: 160},
                    {name: '柏林水务长春长德水处理有限公司', family: '氨氮', people: 129},
                    {name: '长春桑德翔恒水务有限公司', family: 'COD', people: 201},
                    {name: '锦湖轮胎（长春)有限公司', family: '粉尘', people: 160},
                    {name: '长春凯密特尔化学品有限公司', family: 'PH值', people: 129},
                    {name: '长春依多科化工有限公司', family: 'COD', people: 201},
                    {name: '广泽乳业有限公司', family: '二氧化硫', people: 160},
                    {name: '中国航发长春控制科技有限公司', family: '镉', people: 129},
                    {name: '长春汉高表面技术有限公司', family: 'COD', people: 201},
                    {name: '锦湖轮胎（长春)有限公司', family: '硫化物', people: 160},
                    {name: '中国航发长春控制科技有限公司', family: '铜', people: 129},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 32%;
    }
    .list{
        border-collapse: collapse;
        width: 100%;
        line-height: 30px;
        .top{
            background: rgba(255,255,255,0.35);
        }
        .title{
            white-space:nowrap;
        }
        .first{
            padding-right: 5px;
        }
        .third{
            width: 65px;
        }
    }
</style>