<template>
    <div class="main" ref="main"></div>
</template>

<script>
    export default {
        name: "GongXiang",
        data() {
            return {
                myChart: null,
            }
        },
        computed: {
            option() {
                return {
                    textStyle: {
                        fontSize: '80%'
                    },
                    tooltip: {
                        textStyle: {
                            fontSize: '90%',
                        },
                    },
                    radar: {
                        name: {textStyle: {color: '#fff',}},
                        splitArea: {show: false},
                        radius: '70%',
                        indicator: [
                            {name: '接口', max: 3500},
                            {name: '拷盘', max: 1600},
                            {name: '数据库', max: 3000},
                            {name: '电子文档', max: 3800},
                            {name: '纸质报表', max: 3200},
                            {name: '文件', max: 2500},
                            {name: '邮件', max: 2500},
                        ]
                    },
                    series: [{
                        name: '共享方式',
                        type: 'radar',
                        itemStyle: {opacity: 0},
                        areaStyle: {color: new this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#00fafa'},
                                    {offset: 0.3, color: '#0da1c5'},
                                    {offset: 1, color: '#2b5357'}
                                ]
                            )},
                        lineStyle: {color: '#fff'},
                        data: [{value: [2000, 1200, 2400, 2100, 2200, 1600, 1800, 2100],}]
                    }]
                }
            }
        },
        mounted() {
            this.myChart = this.$echarts.init(this.$refs.main)
            this.myChart.setOption(this.option)
        },
        beforeDestroy() {
            this.$echarts.dispose(this.myChart)
        }
    }
</script>

<style scoped>
    .main{
        height: 32%;
    }
</style>