<template>
    <div class="main">
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "BoxLine",
        data() {
            return {
                myChart: null,
            }
        },
        computed: {
            option() {
                let num = this.mGetDate()
                let xarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
                        data: xarr,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: '70%',
                            },
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: '70%',
                            },
                        },
                    },
                    tooltip: {
                        // trigger: 'none',
                        axisPointer: {type: 'cross'},
                    },
                    series: [{
                        data: [52, 23, 30, 29, 40, 35, 52, 23, 30, 29, 40, 35],
                        type: 'line',
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#006fc1' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#c2e3fe' // 100% 处的颜色
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

<style scoped>
    .main {
        height: 22%;
    }

    .chart {
        height: 100%;
    }
</style>