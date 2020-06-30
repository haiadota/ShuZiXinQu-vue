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
                        subtext: [
                            '实现增加值',
                            '{b|同比增长}'
                        ].join('\n'),
                        textStyle: {
                            align: 'center',
                        },
                        subtextStyle: {
                            color: '#fff',
                            fontSize: '70%',
                            lineHeight: 30,
                            rich: {
                                b: {
                                    color: '#77eca6',
                                    fontSize: '70%',
                                },
                            },
                        },
                        top: '-3%',
                        left: '-1%',
                    },
                    legend: {
                        itemWidth: 13,
                        itemHeight: 13,
                        formatter: function (name) {
                            if(name.indexOf('实现增加值')!=-1){
                                return name.replace('实现增加值','')
                            } else {
                                return name.replace('同比增长','')
                            }
                        },
                        data: ['第一产业实现增加值', '第二产业实现增加值', '第三产业实现增加值', '\n',
                            {
                                name: '第一产业同比增长',
                                textStyle: {
                                    // color: '#77eca6'
                                }
                            }, {
                                name: '第二产业同比增长',
                                textStyle: {
                                    // color: '#77eca6'
                                }
                            }, {
                                name: '第三产业同比增长',
                                textStyle: {
                                    // color: '#77eca6'
                                }
                            }],
                        textStyle: {
                            color: '#fff',
                            fontSize: 20,
                        },
                        show: true,
                        right: "0%",
                        top: '0%'
                    },
                    tooltip: {
                        show: true,
                        trigger: 'axis',
                    },
                    grid: {
                        left: '6%',
                        right: '7.5%',
                        top: '30%',
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
                                fontSize: '70%',
                                color: 'rgba(200,200,200)'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        data: ["2016","2017","2018"]
                    },
                    yAxis: [
                        {
                            name: "亿元",
                            nameTextStyle: {
                                fontSize: '70%',
                                color: "#fff"
                            },
                            color: '#B5C9FF',
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                formatter: '{value}',
                                textStyle: {
                                    fontSize: '70%',
                                    color: 'rgba(200,200,200)'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            },
                            type: 'value'
                        },
                        {
                            name: "同比 %",
                            nameTextStyle: {
                                fontSize: '70%',
                                color: "#77eca6"
                            },
                            position: "right",
                            color: '#B5C9FF',
                            splitLine: {
                                show: false,
                            },
                            axisLabel: {
                                formatter: '{value}',
                                textStyle: {
                                    fontSize: '70%',
                                    color: '#77eca6'
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
                            name: '第一产业实现增加值',
                            stack: "基金支出",
                            type: "bar",
                            barWidth: 16,
                            barGap: "10%",
                            itemStyle: {
                                normal: {
                                    color: "#0bceff",
                                    label: {
                                        show: false,
                                        textStyle: {
                                            color: "#fff"
                                        },
                                    }
                                }
                            },
                            data: [0.8,0.8,0.7]
                        },
                        {
                            name: '第二产业实现增加值',
                            stack: "基金支出",
                            type: "bar",
                            barWidth: 16,
                            barGap: "10%",
                            itemStyle: {
                                normal: {
                                    color: "#5397f8",
                                    label: {
                                        show: false,
                                        textStyle: {
                                            color: "#fff"
                                        },
                                    }
                                }
                            },
                            data: [732.1,816.7,886.1]
                        },
                        {
                            name: '第三产业实现增加值',
                            stack: "基金支出",
                            type: "bar",
                            barWidth: 16,
                            barGap: "10%",
                            itemStyle: {
                                normal: {
                                    color: "#ffc21e",
                                    label: {
                                        show: false,
                                        textStyle: {
                                            color: "#fff"
                                        },
                                    }
                                }
                            },
                            data: [63.5,71.8,79.2]
                        },
                        {
                            name: "第一产业同比增长",
                            type: "line",
                            yAxisIndex: 1,
                            symbolSize: 2,
                            symbol: 'circle',
                            itemStyle: {
                                normal: {
                                    color: "#eee",
                                    barBorderRadius: 0,
                                    label: {
                                        show: false,
                                        position: "top",
                                    }
                                }
                            },
                            data: [21.7,3.4,3.4]
                        },
                        {
                            name: "第二产业同比增长",
                            type: "line",
                            yAxisIndex: 1,
                            symbolSize: 2,
                            symbol: 'circle',
                            itemStyle: {
                                normal: {
                                    color: "#0bceff",
                                    barBorderRadius: 0,
                                    label: {
                                        show: false,
                                        position: "top",
                                    }
                                }
                            },
                            data: [8.1,8.7,8.3]
                        },
                        {
                            name: "第三产业同比增长",
                            type: "line",
                            yAxisIndex: 1,
                            symbolSize: 2,
                            symbol: 'circle',
                            itemStyle: {
                                normal: {
                                    color: "#64e694",
                                    barBorderRadius: 0,
                                    label: {
                                        show: false,
                                        position: "top",
                                    }
                                }
                            },
                            data: [8.6,9.3,6]
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