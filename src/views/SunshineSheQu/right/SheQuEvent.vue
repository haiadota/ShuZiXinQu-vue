<template>
    <div class="main">
        <div class="highcharts-container" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "SheQuEvent",
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
                        marginTop: 10,
                        marginBottom: 50,
                        marginLeft: 40,
                        marginRight: 0,
                        // options3d: {
                        //     enabled: true,
                        //     alpha: 10,
                        //     beta: 25,
                        //     depth: 70,
                        //     viewDistance: 100,      // 视图距离，它对于计算角度影响在柱图和散列图非常重要。此值不能用于3D的饼图
                        //     frame: {                // Frame框架，3D图包含柱的面板，我们以X ,Y，Z的坐标系来理解，X轴与 Z轴所形成
                        //         // 的面为bottom，Y轴与Z轴所形成的面为side，X轴与Y轴所形成的面为back，bottom、
                        //         // side、back的属性一样，其中size为感官理解的厚度，color为面板颜色
                        //         bottom: {
                        //             size: 10
                        //         },
                        //         side: {
                        //             size: 1,
                        //             color: 'transparent'
                        //         },
                        //         back: {
                        //             size: 1,
                        //             color: 'transparent'
                        //         }
                        //     },
                        // },
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
                            pointWidth: 12,
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
                        categories: ['施工<br>管理', '街面<br>秩序', '扩展<br>事件', '突发<br>事件', '宣传<br>广告']
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
                        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}件 '
                    },
                    series: [{
                        name: '',
                        data: [21, 23, 6, 1, 23]
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
                var colors = [ '#1A83D2','#19F4D2'];
                this.$Highcharts.getOptions().colors = this.$Highcharts.map(colors, function (color) {
                    return {
                        radialGradient: { cx:0, cy: -0.8,r:2.3 },
                        stops: [[0, color], [2, that.$Highcharts.Color(color).brighten(14).get('rgb')] // darken
                        ]
                    };
                })

                this.chart = new this.$Highcharts.Chart(this.$refs.chart, this.option);
            }
        }
    }
</script>

<style scoped>
    .main {
        position: relative;
        height: 24%;
        width: 101%;
    }

    .highcharts-container {
        height: 100%;
    }
</style>