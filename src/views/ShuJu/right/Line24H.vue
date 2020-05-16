<template>
    <div class="main" ref="main"></div>
</template>

<script>
    export default {
        name: "Line24H",
        data() {
            return {
                myChart: null,
            }
        },
        computed: {
            option() {
                return {
                    textStyle: {
                        fontFamily: 'RuiZi',
                        fontSize: '80%',
                        color: '#15ffff'
                    },
                    color: ['#5793f3', '#d14a61', '#675bba'],
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {type: 'cross'}
                    },
                    grid: {left: 0, right: 0, top: '18%', bottom: '20%'},
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: '70%',
                                },
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '交换量  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["1时", "2时", "3时", "4时", "5时", "6时", "7时", "8时", "9时", "10时", "11时", "12时"]
                        }
                    ],
                    yAxis: [{show: false, type: 'value'}],
                    series: [
                        {
                            name: '今日 交换量',
                            type: 'line',
                            markPoint: {
                                symbolSize: 65,
                                itemStyle: {
                                    borderColor: '#75b2e4',
                                    color: 'rgba(255, 255, 255, 0)'
                                },
                                data: [{type: 'max',}]
                            },
                            smooth: true,
                            lineStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#c2e3fe' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#006fc1' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(57,214,217,1)' // 0% 处的颜色
                                    }, {
                                        offset: 0.4, color: 'rgba(91,151,181,0.6)' // 100% 处的颜色
                                    }, {
                                        offset: 0.6, color: 'rgba(85,101,133,0.4)' // 100% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(55,56,62,0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            data: [4, 6, 11, 18, 28, 39, 31, 46, 55, 48, 30, 1]
                        }
                    ]
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
        height: 26%;
    }
</style>