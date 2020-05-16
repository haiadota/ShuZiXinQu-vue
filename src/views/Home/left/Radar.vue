<template>
    <div class="main" ref="main"></div>
</template>

<script>
    export default {
        name: "Radar",
        data() {
            return {
                myChart: null,
            }
        },
        computed: {
            option() {
                return {
                    textStyle: {
                        fontSize: '70%'
                    },
                    tooltip: {
                        textStyle: {
                            fontSize: '80%'
                        },
                    },
                    radar: {
                        name: {
                            formatter: function (value, indicator) {
                                return value
                            },
                            textStyle: {color: '#fff'}
                        },
                        splitArea: {show: false},
                        radius: '70%',
                        indicator: [
                            {name: '生命线保障指数', max: 10},
                            {name: '交通出行指数', max: 10},
                            {name: '公共安全指数', max: 10},
                            {name: '生态环境指数', max: 10},
                            {name: '民生服务指数', max: 10},
                            {name: '繁荣指数', max: 10},
                        ]
                    },
                    series: [{
                        name: '城市体征',
                        type: 'radar',
                        itemStyle: {opacity: 0},
                        areaStyle: {
                            color: new this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#00fafa'},
                                    {offset: 0.3, color: '#0da1c5'},
                                    {offset: 1, color: '#2b5357'}
                                ]
                            )
                        },
                        lineStyle: {color: '#fff'},
                        data: [{value: [5.84, 6.72, 8.34, 8.33, 7.96, 6.52],}]
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
    .main {
        height: 28%;
    }
</style>