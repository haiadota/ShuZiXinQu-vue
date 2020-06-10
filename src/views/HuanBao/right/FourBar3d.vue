<template>
    <div class="main">
        <div class="highcharts-container" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "FourBar3d",
        data() {
            return {
                chart: null,
                option: {
                    grid: {right: 15, top: '15%', bottom: '15%'},
                    legend: {
                        icon: "circle",
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {},
                    dataset: {
                        source: [
                            ['product', '高新', '北湖', '常德', '空港'],
                            ['2月', 203, 30, 2, 2],
                            ['3月', 52, 6, 0, 1],
                            ['4月', 140, 40, 0, 4],
                        ]
                    },
                    xAxis: {
                        type: 'category',
                        data: ['2月', '3月', '4月'],
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: '70%',
                            },
                        },
                        axisLine: {
                            lineStyle: {        // 属性lineStyle控制线条样式
                                color: '#233950',
                                width: 3,
                                type: 'solid'
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: '70%',
                            },
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            barWidth: 8,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#fff'
                                    }, {
                                        offset: 1,
                                        color: '#1A83D2'
                                    }]),
                                    barBorderRadius: 11,
                                }
                            },
                        }, {
                            type: 'bar',
                            barWidth: 8,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#55eab2'
                                    }, {
                                        offset: 1,
                                        color: '#195d4e'
                                    }]),
                                    barBorderRadius: 11,
                                }
                            },
                        }, {
                            type: 'bar',
                            barWidth: 8,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#e9b056'
                                    }, {
                                        offset: 1,
                                        color: '#494a38'
                                    }]),
                                    barBorderRadius: 11,
                                }
                            },
                        }, {
                            type: 'bar',
                            barWidth: 8,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#49FCB0'
                                    }, {
                                        offset: 1,
                                        color: '#3AB6EB'
                                    }]),
                                    barBorderRadius: 11,
                                }
                            },
                        },
                    ]
                }
            }
        },
        methods: {
            init() {
                this.myChart.setOption(this.option);
            }
        },
        mounted() {
            this.myChart = this.$echarts.init(this.$refs.chart);
            this.init()
        },
        beforeDestroy() {
            this.$echarts.dispose(this.myChart);
        }
    }
</script>

<style scoped>
    .main {
        position: relative;
        height: 28%;
        width: 101%;
    }

    .highcharts-container {
        height: 100%;
    }
</style>