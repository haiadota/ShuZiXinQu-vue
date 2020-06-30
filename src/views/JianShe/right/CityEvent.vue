<template>
    <div class="main">
        <div class="highcharts-container" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "CityEvent",
        data() {
            return {
                chart: null,
                today: new Date().getDate()
            }
        },
        computed: {
            option() {
                let categories = []
                for (let i = 6; i >= 0; i--) {
                    categories.push(this.today - i)
                }
                return {
                    credits: {
                        enabled: false,
                    },
                    chart: {
                        type: 'column',
                        backgroundColor: 'rgba(0,0,0,0)',
                        // options3d: {
                        //     enabled: true,
                        //     alpha: 15,
                        //     beta: 15,
                        //     viewDistance: 90,
                        //     depth: 40,
                        // },
                        marginTop: 20,
                        marginBottom: 35,
                        marginLeft: 50,
                        marginRight: 0
                    },
                    title: {
                        text: ''
                    },
                    legend: {
                        enabled: false,
                    },
                    xAxis: {
                        categories: categories,
                        labels: {
                            style: {
                                'fontSize': '0.6vw',
                                'color': 'rgba(200,200,200)'
                            }
                        }
                    },
                    yAxis: {
                        allowDecimals: false,
                        min: 0,
                        title: {
                            text: ''
                        },
                        labels: {
                            formatter: function () {
                                return this.value
                            },
                            style: {
                                'fontSize': '0.6vw',
                                'color': 'rgba(200,200,200)'
                            }
                        }
                    },
                    tooltip: {
                        style: {
                            'fontSize': '0.8vw',
                        },
                        shared: true,
                        headerFormat: '<b>{point.key}</b>日',
                        // pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}件 '
                        pointFormat: ': {point.y}件 '
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            depth: 12,
                            pointWidth: 10,
                            borderColor: ""
                        }
                    },
                    series: [{
                        data: [4, 2, 3, 3, 2, 3, 1],
                        stack: 'male'
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

<style scoped>
    .main {
        position: relative;
        height: 22%;
    }

    .highcharts-container {
        height: 100%;
    }
</style>