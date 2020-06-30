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
                            fontSize: '20',
                            color: '#fff'
                        }
                    },
                    tooltip: {

                        show: true,
                        trigger: 'axis'
                    },
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
                                color: 'rgba(200,200,200)',
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
                                color: 'rgba(200,200,200)',
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
                            stack: 'xinfang',
                            barWidth: 16,
                            itemStyle: {
                                normal: {
                                    color: '#3AB6EB',
                                    // barBorderRadius: 11,
                                }
                            },
                        }, {
                            type: 'bar',
                            stack: 'xinfang',
                            barWidth: 16,
                            itemStyle: {
                                normal: {
                                    color: '#ffc21e',
                                }
                            },
                        }, {
                            type: 'bar',
                            stack: 'xinfang',
                            barWidth: 16,
                            itemStyle: {
                                normal: {
                                    color: '#877449',
                                }
                            },
                        }, {
                            type: 'bar',
                            stack: 'xinfang',
                            barWidth: 16,
                            itemStyle: {
                                normal: {
                                    color: '#47fbf2',
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