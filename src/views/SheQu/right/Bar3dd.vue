<template>
    <div class="main">
        <div class="highcharts-container" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "Bar3dd",
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
                        marginRight: 0
                    },
                    title: {
                        text: ''
                    },
                    legend:{
                        align: 'center', //水平方向位置
                        verticalAlign: 'top', //垂直方向位置
                        y: -15,
                        itemStyle : {
                            'fontSize' : '17px',
                            'color' : '#fff',
                            // 'fontFamily': '微软雅黑',
                            'fontWeight': 'lighter'
                        }
                    },
                    xAxis: {
                        categories: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95+'],
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
                                return this.value + '万' ;
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
                        headerFormat: '<b>{point.key}</b><br>',
                        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}万人 '
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            depth: 12,
                            pointWidth: 10,
                        }
                    },
                    series: [{
                        name: '男',
                        data: [5, 3, 14, 7, 22,5, 3, 4, 7, 2],
                        color: '#0bceff',
                        stack: 'male'
                    },{
                        name: '女',
                        data: [3, 2, 15, 4, 23,5, 3, 4, 7, 2],
                        color: '#ed4343',
                        stack: 'female'
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
        height: 23%;
    }
    .highcharts-container {
        height: 100%;
    }
</style>