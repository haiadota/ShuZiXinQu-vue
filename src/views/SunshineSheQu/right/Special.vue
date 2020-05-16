<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>特殊人口</div>
            <div><span class="num">{{'247'}}</span></div>
            <div>人</div>
        </div>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "Special",
        data() {
            return {
                chart: null,
                yData: ["育龄妇女：", "残联人员：", "失业人员：", "老龄人员：", "优抚人口：", "学龄儿童："],
                seriesData: [14, 4, 24, 54, 17, 134],
            }
        },
        computed: {
            barMax() {
                return Math.max(...this.seriesData) + 100
            },
            seriesBgData() {
                let arr = []
                for (var i = 0; i < this.seriesData.length; i++) {
                    arr.push(this.barMax)
                }
                return arr
            },
            option() {
                return {
                    tooltip: {
                        textStyle: {
                            fontSize: '80%',
                        },
                        show: true
                    },
                    legend: {
                        show: false
                    },
                    grid: [{
                        left: '13%',
                        right: '5%',
                        bottom: '0%',
                        top: '0%',
                        containLabel: true
                    }],
                    xAxis: [{
                        type: 'value',
                        show: false,
                        gridIndex: 0,

                    }],
                    yAxis: [{
                        triggerEvent: true,
                        inverse: true,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            color: '#fff',
                            interval: 0,
                            fontWeight: 'normal',
                            fontSize: '70%',
                        },
                        data: this.yData,
                        gridIndex: 0
                    }],
                    series: [{
                        name: '特殊人口',
                        type: 'bar',
                        barGap: '-100%',
                        data: this.seriesData,
                        barWidth: '15%',
                        itemStyle: {
                            barBorderRadius: [12, 12, 12, 12],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    {offset: 0, color: ' rgba(0, 246, 255, 1)'},
                                    {offset: 1, color: 'rgba(0, 128, 248, 1)'}
                                ]
                            )
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: '{c}人',
                                color: '#fff',
                                fontFamily: 'RuiZi',
                                fontSize: '80%',
                                padding: [0, 0, 0, 10],
                                position: 'right'
                            }
                        },
                        z: 100,
                        yAxisIndex: 0,
                        xAxisIndex: 0
                    }, {
                        name: '进度条背景',
                        type: 'bar',
                        barGap: '-100%',
                        data: this.seriesBgData,
                        barWidth: '15%',
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            barBorderRadius: [12, 12, 12, 12],
                            color: 'rgba(255,255,255,0.5)'
                        },
                        z: 90,
                        yAxisIndex: 0,
                        xAxisIndex: 0
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
        height: 28%;
    }

    .txt {
        font-size: 16px;
        padding-left: 15px;
        height: 20%;
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
        height: 80%;
        width: 100%;
    }

</style>