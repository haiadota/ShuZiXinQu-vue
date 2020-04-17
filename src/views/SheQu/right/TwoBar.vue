<template>
    <div class="main" ref="main"></div>
</template>

<script>
    export default {
        name: "TwoBar",
        data() {
            return {
                myChart: null,
                age_gap: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95+'],
                data_age: [{
                    "year": "2018",
                    "age_data": {
                        "male": [3.135, 2.995, 2.951, 2.756, 3.152, 4.168, 4.092, 3.627, 3.718, 4.552, 4.275, 3.076, 2.978, 2.357, 1.477, 0.939, 0.564, 0.251, 0.058, 0.011],
                        "female": [2.752, 2.537, 2.487, 2.333, 2.793, 3.955, 4.05, 3.527, 3.583, 4.392, 4.186, 3.026, 2.964, 2.431, 1.564, 1.053, 0.733, 0.352, 0.119, 0.029]
                    }
                }]
            }
        },
        computed: {
            option() {
                return {
                    baseOption: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        timeline: {
                            show: false,
                            axisType: 'category',
                            tooltip: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    return params.name + '年年龄结构';
                                }
                            },
                            autoPlay: true,
                            currentIndex: 6,
                            playInterval: 1000,
                            label: {
                                normal: {
                                    show: true,
                                    interval: 'auto',
                                    formatter: '{value}年',
                                },
                            },
                            data: ['2018'],
                        },

                        legend: {
                            data: ['男性', '女性'],
                            top: 0,
                            right: '20%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16,
                            },
                        },
                        tooltip: {
                            show: true,
                            trigger: 'axis',
                            formatter: '{b}<br/>{a}: {c}%',
                            textStyle: {
                                fontSize: 18,
                            },
                            axisPointer: {
                                type: 'shadow',
                            }
                        },

                        grid: [{
                            show: false,
                            left: '17%',
                            right: '0',
                            top: 30,
                            bottom: 10,
                            containLabel: true,
                            width: '40%',
                        }, {
                            show: false,
                            left: '10%',
                            top: 40,
                            bottom: 10,
                            width: '0%',
                        }, {
                            show: false,
                            left: '57%',
                            top: 30,
                            bottom: 10,
                            containLabel: true,
                            width: '40%',
                        }],

                        xAxis: [{
                            type: 'value',
                            inverse: true,
                            max: 6,
                            min: 0,
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            position: 'top',
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16,
                                },
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#1F2022',
                                    width: 1,
                                    type: 'solid',
                                },
                            },
                        }, {
                            gridIndex: 1,
                            show: false,

                        }, {
                            gridIndex: 2,
                            max: 6,
                            min: 0,
                            type: 'value',
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            position: 'top',
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16,
                                },
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#1F2022',
                                    width: 1,
                                    type: 'solid',
                                },
                            },
                        }],
                        yAxis: [{
                            type: 'category',
                            inverse: false,
                            position: 'right',
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false,
                                margin: 0,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16,
                                },

                            },
                            data: this.age_gap
                        }, {
                            gridIndex: 1,
                            type: 'category',
                            inverse: false,
                            position: 'left',
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16,
                                },

                            },
                            data: this.age_gap.map(function (value) {
                                return {
                                    value: value,
                                    textStyle: {
                                        align: 'center',
                                    }
                                }
                            }),
                        }, {
                            gridIndex: 2,
                            type: 'category',
                            inverse: false,
                            position: 'left',
                            axisLine: {
                                show: true
                            },
                            axisTick: {
                                show: true
                            },
                            axisLabel: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 12,
                                },

                            },
                            data: this.age_gap,
                        }],
                        series: [],

                    },

                    options: [{
                        series: [{
                            name: '男性',
                            type: 'bar',
                            barGap: 5,
                            barWidth: 10,
                            label: {
                                normal: {
                                    show: false,
                                },
                                emphasis: {
                                    show: true,
                                    position: 'left',
                                    offset: [0, 0],
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 14,
                                    },
                                },
                            },
                            itemStyle: {
                                normal: {
                                    color: '#08d1ff',
                                },
                                emphasis: {
                                    color: '#08C7AE',
                                },
                            },
                            data: this.data_age[0].age_data.male,
                        },
                            {
                                name: '女性',
                                type: 'bar',
                                barGap: 20,
                                barWidth: 10,
                                xAxisIndex: 2,
                                yAxisIndex: 2,
                                label: {
                                    normal: {
                                        show: false,
                                    },
                                    emphasis: {
                                        show: true,
                                        position: 'right',
                                        offset: [0, 0],
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 14,
                                        },
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#ed443d',
                                    },
                                    emphasis: {
                                        color: '#08C7AE',
                                    },
                                },
                                data: this.data_age[0].age_data.female,
                            }
                        ]
                    }]
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