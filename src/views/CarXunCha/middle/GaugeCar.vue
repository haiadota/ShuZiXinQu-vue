<template>
    <div class="main" ref="main"></div>
</template>

<script>
    export default {
        name: "GaugeCar",
        data() {
            return {
                myChart: null,
                option: {
                    tooltip: {
                        formatter: '{a} <br/>{c} {b}'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    series: [
                        {
                            name: '速度',
                            type: 'gauge',
                            min: 0,
                            max: 220,
                            splitNumber: 11,
                            radius: '50%',
                            center: ['30%', '50%'],    // 默认全局居中
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                                    width: 3,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisLabel: {            // 坐标轴小标记
                                fontWeight: 'bolder',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 15,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 25,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {           // 分隔线
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 20,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                show:false
                            },
                            data: [{value: 40, name: 'km/h'}]
                        },
                        {
                            name: '油表',
                            type: 'gauge',
                            center: ['60%', '52%'],    // 默认全局居中
                            radius: '45%',
                            min: 0,
                            max: 2,
                            startAngle: 135,
                            endAngle: 45,
                            splitNumber: 2,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                                    width: 2,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 12,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisLabel: {
                                fontWeight: 'bolder',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10,
                                formatter: function (v) {
                                    switch (v + '') {
                                        case '0':
                                            return 'E';
                                        case '1':
                                            return 'Gas';
                                        case '2':
                                            return 'F';
                                    }
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 15,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                width: 2,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                show: false
                            },
                            detail: {
                                show: false
                            },
                            data: [{value: 0.5, name: 'gas'}]
                        },
                        {
                            name: '水表',
                            type: 'gauge',
                            center: ['60%', '54%'],    // 默认全局居中
                            radius: '30%',
                            min: 0,
                            max: 2,
                            startAngle: 315,
                            endAngle: 225,
                            splitNumber: 2,
                            axisLine: {            // 坐标轴线
                                show: false,
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                                    width: 2,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                show: false
                            },
                            axisLabel: {
                                show: false,
                                fontWeight: 'bolder',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10,
                                formatter: function(v){
                                    switch (v + '') {
                                        case '0': return 'H';
                                        case '1': return 'Water';
                                        case '2': return 'C';
                                    }
                                }
                            },
                            splitLine: {           // 分隔线
                                show: false,
                                length: 15,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                show: false,
                                width: 2,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                show: false
                            },
                            detail: {
                                formatter: function (v) {
                                    return v+'km'
                                },
                                backgroundColor: 'rgba(30,144,255,0.8)',
                                borderWidth: 1,
                                borderColor: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5,
                                offsetCenter: [0, '30%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    color: '#fff',
                                    fontSize: '120%'
                                }
                            },
                            data:[{value: 130000, name: 'gas'}]
                        }
                    ]
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
        height: 100%;
        width: 100%;
    }
</style>