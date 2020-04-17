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
        name: "AirLine",
        data() {
            return {
                myChart: null,
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
                    textStyle: {
                        fontFamily: 'RuiZi',
                        fontSize: 24,
                        color: '#fff'
                    },
                    grid: {left: 40, right: 15, top: '5%', bottom: '15%'},
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xarr
                    },
                    yAxis: {
                        type: 'value'
                    },
                    tooltip: {
                        // trigger: 'none',
                        axisPointer: {type: 'cross'},
                    },
                    series: [{
                        data: [52, 23, 30, 29, 40, 35,52, 23, 30, 29, 40, 35,52, 23, 30, 29, 40, 35,52, 23, 30, 29, 40, 35,52, 23, 30, 29, 40, 35],
                        type: 'line',
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#19F4D2' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#1A83D2' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                    }]
                };
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
        mounted() {
            this.myChart = this.$echarts.init(this.$refs.chart)
            this.myChart.setOption(this.option)
        },
        beforeDestroy() {
            this.$echarts.dispose(this.myChart)
        }
    }
</script>

<style scoped lang="scss">
    .main {
        position: relative;
        height: 30%;
    }
    .index{
        height: 10%;
        text-indent: 10px;
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

        .month {
            margin-left: 40px;
            font-size: 18px;
        }
    }

    .chart {
        height: 70%;
    }
</style>