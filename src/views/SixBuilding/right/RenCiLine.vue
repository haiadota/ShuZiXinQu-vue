<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>今日出入人次</div>
            <div><span class="num">{{'55'}}</span></div>
            <div>人次</div>
        </div>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "RenCiLine",
        data() {
            return {
                myChart: null,
            }
        },
        methods: {
        },
        computed: {
            option() {
                let xarr = []
                for (let i = 0; i < 24; i++) {
                    xarr.push(i + 1)
                }
                return {
                    tooltip: {
                        trigger: 'axis',
                        textStyle: {
                            fontSize: '90%'
                        },
                        axisPointer: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    },
                    legend: {
                        icon: 'rect',
                        itemWidth: 15,
                        itemHeight: 15,
                        itemGap: 13,
                        data: ['进', '出', '总人数'],
                        right: '4%',
                        textStyle: {
                            fontSize: 26,
                            color: '#F1F1F3'
                        }
                    },
                    grid: {
                        left: '6%',
                        right: '1%',
                        bottom: '6%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: [{
                        axisLabel: {
                            color: '#fff',
                            fontSize: '60%',
                        },
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#fff',
                            }
                        },
                        data: xarr
                    }],
                    yAxis: [{
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                fontSize: '70%'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    }],
                    series: [{
                        name: '总人数',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(0, 217, 235, 0.94)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(90, 214, 236, 0.1)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 217, 235, 0.94)'
                            }
                        },
                        data: [3, 2, 4, 7, 6, 7, 3, 6, 6, 8, 7, 7, 8, 8, 5, 4, 8, 7, 4, 5, 8, 8, 7, 5]
                    }, {
                        name: '进',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(80, 255, 158, 0.94)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(255, 199, 80, 0.1)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(80, 255, 158, 0.94)'
                            }
                        },
                        data: [2, 1, 2, 2, 3, 3, 1, 1, 3, 4, 5, 3, 3, 3, 2, 3, 4, 2, 1, 1, 3, 4, 2, 3, 2]
                    }, {
                        name: '出',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(236, 90, 90, 0.94)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(90, 214, 236, 0.1)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(236, 90, 90, 0.94)'
                            }
                        },
                        data: [1, 1, 2, 5, 3, 4, 2, 5, 3, 4, 2, 4, 5, 5, 3, 1, 4, 5, 3, 4, 5, 4, 5, 2]
                    }]
                }
            }
        },
        mounted() {
            this.myChart = this.$echarts.init(this.$refs.chart)
            this.myChart.setOption(this.option)
        },
        beforeDestroy() {
            this.$echarts.dispose(this.myChart)
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        position: relative;
        height: 26%;
    }

    .txt {
        font-size: 16px;
        padding-left: 15px;
        height: 12%;
        display: flex;
        align-items: center;

        .bar {
            margin-right: 6px;
            background: #00bdff;
            width: 2px;
            height: 18px;
        }

        .num {
            padding: 0 5px 0 20px;
            font-size: 26px;
            line-height: 16px;
        }
    }

    .chart {
        width: 100%;
        height: 88%;
    }

</style>