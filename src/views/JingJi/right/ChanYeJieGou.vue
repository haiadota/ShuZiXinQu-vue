<template>
    <div class="main" ref="main"></div>
</template>

<script>
    export default {
        name: "ChanYeJieGou",
        data() {
            return {
                myChart: null,
            }
        },
        computed: {
            option() {
                return {
                    title: {
                        text: '',
                        subtext: '实现增加值\n同比增长',
                        textStyle: {
                            align: 'center',
                            fontSize: 0,
                        },
                        subtextStyle: {
                            color: '#fff',
                            fontSize: 14,
                            lineHeight: 24
                        },
                        top: '-5%',
                        left: '-1%',
                    },
                    legend: {
                        itemWidth: 13,
                        itemHeight: 13,
                        data: ['第一产业','第二产业','第三产业','\n', '第一产业 ', '第二产业 ', '第三产业 '],
                        textStyle: {
                            color: '#B5C9FF',
                            fontSize: 14,
                        },
                        show: true,
                        right: "-3%",
                        top: '0%',
                    },
                    tooltip: {
                        show: true,
                        trigger: 'axis',
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        top: '23%',
                        bottom: '5%',
                        containLabel: true
                    },
                    toolbox: {
                        "show": false,
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        axisTick: {
                            "show": false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#B5C9FF'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#484d8d'
                            }
                        },
                        data: ["1月", "2月", "3月", "4月", "5月", "6月"]
                    },
                    yAxis: [
                        {
                            color: '#B5C9FF',
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                formatter: '{value}',
                                textStyle: {
                                    color: '#B5C9FF'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#484d8d'
                                }
                            },
                            type: 'value'
                        },
                        {
                            color: '#B5C9FF',
                            splitLine: {
                                show: false,
                            },
                            axisLabel: {
                                formatter: '{value}%',
                                textStyle: {
                                    color: '#B5C9FF'
                                }
                            },
                            type: 'value'
                        },
                        {
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#FFF'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#00ecff'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#484d8d'
                                }
                            },
                            type: 'value'
                        },
                    ],
                    series: [
                        {
                            name: '第一产业',
                            stack: "基金支出",
                            type: "bar",
                            barMaxWidth: 10,
                            barGap: "10%",
                            itemStyle: {
                                normal: {
                                    color: "#1772ef",
                                    label: {
                                        show: false,
                                        textStyle: {
                                            color: "#fff"
                                        },
                                    }
                                }
                            },
                            data: [50, 40, 60, 55, 43, 30]
                        },
                        {
                            name: '第二产业',
                            stack: "基金支出",
                            type: "bar",
                            barMaxWidth: 10,
                            barGap: "10%",
                            itemStyle: {
                                normal: {
                                    color: "#F1667A",
                                    label: {
                                        show: false,
                                        textStyle: {
                                            color: "#fff"
                                        },
                                    }
                                }
                            },
                            data: [24, 45, 41, 12, 32, 16]
                        },
                        {
                            name: '第三产业',
                            stack: "基金支出",
                            type: "bar",
                            barMaxWidth: 10,
                            barGap: "10%",
                            itemStyle: {
                                normal: {
                                    color: "#cccccc",
                                    label: {
                                        show: false,
                                        textStyle: {
                                            color: "#fff"
                                        },
                                    }
                                }
                            },
                            data: [24, 45, 41, 12, 32, 22]
                        },
                        {
                            name: "第一产业 ",
                            type: "line",
                            yAxisIndex: 1,
                            symbolSize: 2,
                            symbol: 'circle',
                            itemStyle: {
                                normal: {
                                    color: "rgba(152,130,148,1)",
                                    barBorderRadius: 0,
                                    label: {
                                        show: false,
                                        position: "top",
                                    }
                                }
                            },
                            data: [73, 55, 65, 55, 33, 55]
                        },
                        {
                            name: "第二产业 ",
                            type: "line",
                            yAxisIndex: 1,
                            symbolSize: 2,
                            symbol: 'circle',
                            itemStyle: {
                                normal: {
                                    color: "rgba(232,230,248,1)",
                                    barBorderRadius: 0,
                                    label: {
                                        show: false,
                                        position: "top",
                                    }
                                }
                            },
                            data: [23, 35, 45, 25, 53, 35]
                        },
                        {
                            name: "第三产业 ",
                            type: "line",
                            yAxisIndex: 1,
                            symbolSize: 2,
                            symbol: 'circle',
                            itemStyle: {
                                normal: {
                                    color: "rgba(10,30,48,1)",
                                    barBorderRadius: 0,
                                    label: {
                                        show: false,
                                        position: "top",
                                    }
                                }
                            },
                            data: [42, 33, 28, 49, 51, 66]
                        },
                    ]
                };
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