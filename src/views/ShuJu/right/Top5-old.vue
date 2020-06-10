<template>
    <div class="main" ref="main"></div>
</template>

<script>
    export default {
        name: "Top5",
        data() {
            return {
                myChart: null,
                yData : ["人社局", "卫计局", "教育局", "新区建委", "安监局"],
                seriesData : [400, 350, 300, 200, 100],
            }
        },
        computed: {
            barMax(){
              return   Math.max(...this.seriesData) + 100
            },
            seriesBgData(){
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
                            fontSize: '90%',
                        },
                        show: true
                    },
                    legend: {
                        show: false
                    },
                    grid: [{
                        left: '10%',
                        right: '16%',
                        bottom: '0%',
                        top: '0%',
                        containLabel: true
                    }],
                    xAxis: [{
                        type: 'value',
                        show:false,
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
                        name: '数据交换量Top5',
                        type: 'bar',
                        barGap: '-100%',
                        data: this.seriesData,
                        barWidth: '15%',
                        itemStyle: {
                            barBorderRadius: [12,12,12,12],
                            color:new echarts.graphic.LinearGradient(
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
                                formatter: '{c}',
                                color: '#fff',
                                fontFamily: 'RuiZi',
                                fontSize: '90%',
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
                        itemStyle: {
                            barBorderRadius: [12,12,12,12],
                            color: 'rgba(255,255,255,0.5)'
                        },
                        tooltip: {
                            show: false
                        },
                        z: 90,
                        yAxisIndex: 0,
                        xAxisIndex: 0
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
    .main{
        height: 29%;
    }
</style>