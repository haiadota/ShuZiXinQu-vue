<template>
    <div class="main">
        <vuescroll :ops="ops">

        <table class="list parent-dom">
            <thead class="top">
            <tr>
                <td>站点名称</td>
                <td>监测时间</td>
                <td>COD</td>
                <td>氨氮</td>
                <td>总磷</td>
                <td>总氮</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item,i) in list" :key="i" class="cell child-dom">
                    <td>{{item.name}}</td>
                    <td>{{item.time}}</td>
                    <td>{{item.COD}}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </vuescroll>
    </div>
</template>

<script>
    import vuescroll from 'vuescroll/dist/vuescroll-native'

    export default {
        name: "DailyScrollList",
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
                    {name: '硅谷大街', time: '4-05', COD: '正常'},
                    {name: '硅谷大街', time: '5-05', COD: '正常'},
                    {name: '硅谷大街', time: '6-05', COD: '正常'},
                    {name: '硅谷大街', time: '7-05', COD: '正常'},
                    {name: '硅谷大街', time: '8-05', COD: '正常'},
                    {name: '硅谷大街', time: '9-05', COD: '正常'},
                    {name: '硅谷大街', time: '10-05', COD: '正常'},
                    {name: '硅谷大街', time: '11-05', COD: '正常'},
                    {name: '硅谷大街', time: '12-05', COD: '正常'},

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 36%;
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