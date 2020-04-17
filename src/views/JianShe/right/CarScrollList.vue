<template>
    <div class="main">
        <vuescroll :ops="ops">
        <table class="list parent-dom">
            <thead class="top">
            <tr>
                <td>车牌号</td>
                <td>行驶里程(KM²)</td>
                <td>油耗(L)</td>
                <td>状态</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item,i) in list" :key="i" class="cell child-dom">
                    <td>{{item.name}}</td>
                    <td>{{item.mileage}}</td>
                    <td>{{item.oil}}</td>
                    <td>{{item.status}}</td>
                </tr>
            </tbody>
        </table>
        </vuescroll>
    </div>
</template>

<script>
    import vuescroll from 'vuescroll/dist/vuescroll-native'

    export default {
        name: "CarScrollList",
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
                    {name: '吉A·12345', mileage: 12345, oil: 123,status: '正常'},
                    {name: '吉A·12345', mileage: 12345, oil: 123,status: '正常'},
                    {name: '吉A·12345', mileage: 12345, oil: 123,status: '正常'},
                    {name: '吉A·12345', mileage: 12345, oil: 123,status: '正常'},
                    {name: '吉A·12345', mileage: 12345, oil: 123,status: '正常'},
                    {name: '吉A·12345', mileage: 12345, oil: 123,status: '正常'},
                    {name: '吉A·12345', mileage: 12345, oil: 123,status: '正常'},
                    {name: '吉A·12345', mileage: 12345, oil: 123,status: '正常'},
                    {name: '吉A·12345', mileage: 12345, oil: 123,status: '正常'},
                    {name: '吉A·12345', mileage: 12345, oil: 123,status: '正常'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 25%;
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