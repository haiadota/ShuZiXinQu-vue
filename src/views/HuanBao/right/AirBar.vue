<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>实时空气质量</div>
            <div><span class="num">{{'55'}}</span></div>
            <div class="grade">{{'良'}}</div>
            <div class="month">{{'四'}} 月</div>
        </div>
        <div class="index">AQI</div>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "AirBar",
        data() {
            return {
                chart: null
            }
        },
        computed: {
            option() {
                return {
                    credits: {
                        enabled: false,
                    },
                    chart: {
                        type: 'column',
                        margin: 75,
                        backgroundColor: 'rgba(0,0,0,0)',
                        marginTop: 0,
                        marginBottom: 40,
                        marginLeft: 20,
                        marginRight: 0,
                        options3d: {
                            enabled: true,
                            alpha: 10,
                            beta: 25,
                            depth: 70,
                            viewDistance: 100,      // 视图距离，它对于计算角度影响在柱图和散列图非常重要。此值不能用于3D的饼图
                            frame: {                // Frame框架，3D图包含柱的面板，我们以X ,Y，Z的坐标系来理解，X轴与 Z轴所形成
                                // 的面为bottom，Y轴与Z轴所形成的面为side，X轴与Y轴所形成的面为back，bottom、
                                // side、back的属性一样，其中size为感官理解的厚度，color为面板颜色
                                bottom: {
                                    size: 10
                                },
                                side: {
                                    size: 1,
                                    color: 'transparent'
                                },
                                back: {
                                    size: 1,
                                    color: 'transparent'
                                }
                            },
                        },
                    },
                    legend: {
                        enabled: false,
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    plotOptions: {
                        column: {
                            pointWidth: 16,
                            depth: 25
                        }
                    },
                    xAxis: {
                        labels: {
                            style: {
                                'fontSize': '0.6vw',
                                color: '#fff'
                            }
                        },
                        categories: ['园林处', '净月潭', '经开区环卫处']
                    },
                    yAxis: {
                        labels: {
                            style: {
                                'fontSize': '0.6vw',
                                color: '#fff'
                            }
                        },
                        title: {
                            text: null
                        }
                    },
                    tooltip: {
                        style: {
                            'fontSize': '0.8vw',
                        },
                        shared: true,
                        headerFormat: '<b>{point.key}</b><br>',
                        pointFormat: '<span>AQI: </span><span class="num">{point.y}</span>'
                    },
                    series: [{
                        name: '',
                        data: [20, 27, 20]
                    }]
                }
            }
        },
        mounted() {
            this.initChart();
        },
        methods: {
            initChart() {
                let that = this
                var colors = ['#1A83D2', '#19F4D2'];
                this.$Highcharts.getOptions().colors = this.$Highcharts.map(colors, function (color) {
                    return {
                        radialGradient: {cx: 0, cy: -0.8, r: 2.3},
                        stops: [[0, color], [2, that.$Highcharts.Color(color).brighten(14).get('rgb')] // darken
                        ]
                    };
                })
                this.chart = new this.$Highcharts.Chart(this.$refs.chart, this.option);
            }
        }
    }
</script>

<style scoped lang="scss">
    .main {
        position: relative;
        height: 28%;
    }

    .index {
        height: 10%;
        text-indent: 10px;
    }

    .txt {
        height: 12%;
        font-size: 16px;
        padding-left: 15px;
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

        .grade {
            width: 47px;
            height: 25px;
            background: linear-gradient(0deg, rgba(86, 171, 47, 0.6) 0%, rgba(168, 224, 99, 0.6) 100%);
            border-radius: 10px;
            text-align: center;
        }

        .month {
            margin-left: 40px;
            font-size: 18px;
        }
    }

    .chart {
        height: 78%;
    }
</style>