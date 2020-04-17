<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>实时空气质量</div>
            <div><span class="num">{{'55'}}</span></div>
            <div class="grade">{{'良'}}</div>
            <div class="month">{{'四'}} 月</div>
        </div>
        <div class="title">
            <div>空气质量优良率</div>
            <div>废水排放达标率</div>
        </div>
        <div class="chart">
            <div class="item" ref="first"></div>
            <div class="item" ref="second"></div>
        </div>
    </div>
</template>

<script>
    import 'echarts-liquidfill/src/liquidFill.js';

    export default {
        name: "LiquidFill",
        data() {
            return {
                myChart: null,
            }
        },
        methods: {
            option(value) {
                let arr = [value, value, value]
                return {
                    title: {
                        text: (value * 100).toFixed(0) + '{a|%}',
                        textStyle: {
                            fontSize: 36,
                            fontFamily: 'RuiZi',
                            fontWeight: 'normal',
                            color: '#c5c2fb',
                            rich: {
                                a: {
                                    fontSize: 22,
                                }
                            }
                        },
                        x: 'center',
                        y: 'center'
                    },
                    // graphic: [{
                    //     type: 'group',
                    //     left: 'center',
                    //     top: '60%',
                    //     children: [{
                    //         type: 'text',
                    //         z: 100,
                    //         left: '10',
                    //         top: 'middle',
                    //         style: {
                    //             fill: '#aab2fa',
                    //             text: '流量统计',
                    //             font: '20px Microsoft YaHei'
                    //         }
                    //     }]
                    // }],
                    series: [{
                        type: 'liquidFill',
                        radius: '80%',
                        center: ['50%', '50%'],
                        //  shape: 'roundRect',
                        data: arr,
                        backgroundStyle: {
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [{
                                    offset: 1,
                                    color: 'rgba(68, 145, 253, 0)'
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(68, 145, 253, .25)'
                                }, {
                                    offset: 0,
                                    color: 'rgba(68, 145, 253, 1)'
                                }],
                                globalCoord: false
                            },
                        },
                        outline: {
                            borderDistance: 0,
                            itemStyle: {
                                borderWidth: 5,
                                borderColor: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(69, 73, 240, 0.2)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(69, 73, 240, .25)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(69, 73, 240, 0.3)'
                                    }],
                                    globalCoord: false
                                },
                                shadowBlur: 10,
                                shadowColor: '#000',
                            }
                        },
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 1,
                                    color: 'rgba(58, 71, 212, 0)'
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(31, 222, 225, .2)'
                                }, {
                                    offset: 0,
                                    color: 'rgba(31, 222, 225, 1)'
                                }],
                                globalCoord: false
                            },
                        },
                        label: {
                            normal: {
                                formatter: '',
                            }
                        }
                    },]
                };
            }
        },
        mounted() {
            this.myChartFirst = this.$echarts.init(this.$refs.first)
            this.myChartSecond = this.$echarts.init(this.$refs.second)
            this.myChartFirst.setOption(this.option(0.78))
            this.myChartSecond.setOption(this.option(0.98))
        },
        beforeDestroy() {
            this.$echarts.dispose(this.myChartFirst)
            this.$echarts.dispose(this.myChartSecond)
        }
    }
</script>

<style scoped lang="scss">
    .main {
        position: relative;
        height: 26%;
    }

    .txt {
        height: 20%;
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
        .month{
            margin-left: 40px;
            font-size: 18px;
        }
    }

    .title {
        height: 10%;
        display: flex;
        justify-content: space-around;
    }

    .chart {
        height: 70%;
        display: flex;

        .item {
            flex: 1;
        }
    }
</style>