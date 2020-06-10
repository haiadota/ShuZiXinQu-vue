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
                chart: null
            }
        },
        computed: {
            option() {
                return {
                    credits:{
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
                    legend:{
                        enabled: false,
                    },
                    xAxis: {
                        categories: ['1','2','3','4','5','6','7','8','9','10','11','12'],
                        labels:{
                            style:{
                                'fontSize' : '0.6vw',
                                color: '#fff'
                            }
                        }
                    },
                    yAxis: {
                        allowDecimals: false,
                        min: 0,
                        title: {
                            text: ''
                        },
                        labels:{
                            formatter:function (){
                                return this.value
                            },
                            style:{
                                'fontSize' : '0.6vw',
                                color: '#fff'
                            }
                        }
                    },
                    tooltip: {
                        style:{
                            'fontSize' : '0.8vw',
                        },
                        shared: true,
                        headerFormat: '<b>{point.key}</b>月',
                        // pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}件 '
                        pointFormat: ': {point.y}件 '
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            depth: 12,
                            pointWidth: 7,
                            borderColor: ""
                        }
                    },
                    series: [{
                        data: [500, 300, 140, 420, 120,350, 360, 400, 710, 200,520,280],
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