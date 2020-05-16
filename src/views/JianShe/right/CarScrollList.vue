<template>
    <div class="main">
        <vuescroll :ops="ops">
        <table class="list parent-dom">
            <thead class="top">
            <tr class="title">
                <td>车牌号</td>
                <td>行驶里程<br>(km)</td>
                <td>油耗<br>(L/100km)</td>
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
                    {name: '吉AH93S0', mileage: 340, oil: 8.7,status: '在线'},
                    {name: '吉AXG030', mileage: 234, oil: 9.7,status: '在线'},
                    {name: '吉AJ96L5', mileage: 254, oil: 8.1,status: '在线'},
                    {name: '吉AXG023', mileage: 278, oil: 7.1,status: '在线'},
                    {name: '吉AH56Y8', mileage: 297, oil: 7.5,status: '在线'},
                    {name: '吉AH61U8', mileage: 165, oil: 8.2,status: '在线'},
                    {name: '吉AG80C6', mileage: 187, oil: 7.9,status: '在线'},
                    {name: '吉AG80C5', mileage: 276, oil: 7.5,status: '在线'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 27%;
    }
    .list{
        border-collapse: collapse;
        width: 100%;
        text-align: center;
        line-height: 30px;
        .top{
            background: rgba(255,255,255,0.35);
        }
        .title{
            line-height: 20px;
        }
    }
</style>