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
                        options3d: {
                            enabled: true,
                            alpha: 15,
                            beta: 15,
                            viewDistance: 90,
                            depth: 40,
                        },
                        marginTop: 20,
                        marginBottom: 35,
                        marginLeft: 25,
                        marginRight: -10
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
                                'fontSize' : '15px',
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
                                'fontSize' : '15px',
                                color: '#fff'
                            }
                        }
                    },
                    tooltip: {
                        style:{
                            'fontSize' : '20px',
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
                            pointWidth: 10,
                        }
                    },
                    series: [{
                        data: [500, 300, 140, 420, 120,350, 360, 400, 710, 200,520,280],
                        color: '#0bceff',
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
                this.chart = new this.$Highcharts.Chart(this.$refs.chart, this.option);
            }
        }
    }
</script>

<style scoped>
    .main {
        position: relative;
        height: 24%;
    }
    .highcharts-container {
        height: 100%;
    }
</style>