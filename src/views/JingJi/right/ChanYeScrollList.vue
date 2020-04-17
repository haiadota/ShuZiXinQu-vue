<template>
    <div class="main">
        <vuescroll :ops="ops">

        <table class="list parent-dom">
            <thead class="top">
            <tr>
                <td>序号</td>
                <td>产业名称</td>
                <td>完成产值（亿元）</td>
                <td>增长率</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item,i) in list" :key="i" class="cell child-dom">
                    <td>{{i+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.family}}</td>
                    <td>{{item.people}}%</td>
                </tr>
            </tbody>
        </table>
        </vuescroll>
    </div>
</template>

<script>
    import vuescroll from 'vuescroll/dist/vuescroll-native'

    export default {
        name: "ChanYeScrollList",
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
                    {name: '食品工业', family: 29.2, people: 183.80},
                    {name: '电子工业', family: 29.2, people: 17.80},
                    {name: '汽车工业', family: 20.9, people: 12.90},
                    {name: '医药工业', family: 493, people: 12.90},
                    {name: '能源工业', family: 105.5, people: 10.90},
                    {name: '建材工业', family: 25.2, people: 3.90},
                    {name: '装备制造业', family: 34.1, people: -6},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 30%;
    }
    .list{
        border-collapse: collapse;
        width: 100%;
        text-align: center;
        line-height: 30px;
        .top{
            background: rgba(255,255,255,0.35);
        }
    }
</style>