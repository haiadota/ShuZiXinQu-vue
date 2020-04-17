<template>
    <div class="main">
        <vuescroll :ops="ops">

        <table class="list parent-dom">
            <thead class="top">
            <tr>
                <td>序号</td>
                <td>企业名称</td>
                <td>污染物</td>
                <td>监测值</td>
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
                    {name: '怡景园', family: 431, people: 1160},
                    {name: '世纪花园', family: 246, people: 629},
                    {name: '三佳', family: 108, people: 201},
                    {name: '怡景园', family: 431, people: 1160},
                    {name: '世纪花园', family: 246, people: 629},
                    {name: '三佳', family: 108, people: 201},
                    {name: '怡景园', family: 431, people: 1160},
                    {name: '世纪花园', family: 246, people: 629},
                    {name: '三佳', family: 108, people: 201},
                    {name: '怡景园', family: 431, people: 1160},
                    {name: '世纪花园', family: 246, people: 629},
                    {name: '三佳', family: 108, people: 201},
                    {name: '怡景园', family: 431, people: 1160},
                    {name: '世纪花园', family: 246, people: 629},
                    {name: '三佳', family: 108, people: 201},
                    {name: '怡景园', family: 431, people: 1160},
                    {name: '世纪花园', family: 246, people: 629},
                    {name: '三佳', family: 108, people: 201},
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
        text-align: center;
        line-height: 30px;
        .top{
            background: rgba(255,255,255,0.35);
        }
    }
</style>