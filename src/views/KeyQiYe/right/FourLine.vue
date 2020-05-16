<template>
    <div class="main" ref="main"></div>
</template>

<script>
    export default {
        name: "FourLine",
        data() {
            return {
                myChart: null,
            }
        },
        methods: {
            mGetDate() {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var d = new Date(year, month, 0);
                return d.getDate();
            }
        },
        computed: {
            option() {
                let num = this.mGetDate()
                let xarr = []
                for (let i = 0; i < num; i++) {
                    xarr.push(i + 1)
                }
                return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: '#57617B',
                            }
                        },
                        textStyle: {
                            fontSize: '90%',
                            color: '#F1F1F3'
                        }
                    },
                    legend: {
                        icon: 'rect',
                        itemWidth: 15,
                        itemHeight: 15,
                        itemGap: 13,
                        data: ['COD', '氨氮', '总磷', '总氮'],
                        right: '4%',
                        textStyle: {
                            fontSize: 17,
                            color: '#F1F1F3'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '1%',
                        bottom: '8%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#fff',
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: '60%',
                            },
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
                                fontSize: '70%',
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    }],
                    series: [{
                        name: 'COD',
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
                                    color: 'rgba(90, 214, 236, 0.3)'
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
                        data: [86.3, 96.4, 97.5, 95.6, 98.1, 94.8, 89.6, 94.1, 80.1, 72.4, 75.8, 94.7, 96.3, 96.4, 97.5, 95.6, 98.1, 94.8, 89.6, 94.1, 80.1, 82.4, 75.8, 94.7, 86.3, 96.4, 97.5, 95.6, 98.1, 72.4]
                    }, {
                        name: '氨氮',
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
                                    color: 'rgba(137, 189, 27, 0.94)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(137, 189, 27, 0.3)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(137, 189, 27, 0.94)'
                            }
                        },
                        data: [67.3, 79.2, 79.3, 80.0, 79.6, 70.6, 60.0, 71.5, 69.8, 67.5, 70.4, 64.9, 77.3, 79.2, 79.3, 80.0, 79.6, 70.6, 60.0, 71.5, 69.8, 57.5, 70.4, 64.9, 67.3, 79.2, 79.3, 80.0, 79.6, 67.5]
                    }, {
                        name: '总磷',
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
                                    color: 'rgba(255, 199, 80, 0.3)'
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
                        data: [44.2, 41.0, 27.5, 32.1, 43.7, 38.5, 41.9, 61.8, 39.7, 47.6, 52.9, 60, 34.2, 31.0, 27.5, 32.1, 43.7, 48.5, 51.9, 61.8, 39.7, 47.6, 52.9, 30, 44.2, 41.0, 27.5, 32.1, 43.7, 47.6]
                    }, {
                        name: '总氮',
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
                                    color: 'rgba(90, 214, 236, 0.3)'
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
                        data: [31.9, 21.8, 19.7, 27.6, 32.9, 30, 24.2, 21.0, 17.5, 12.1, 33.7, 12.1, 23.7, 18.5, 21.9, 31.8, 19.7, 27.6, 32.9, 19.7, 27.6, 32.9, 30, 31.9, 41.8, 19.7, 27.6, 32.9, 30, 31.9]
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