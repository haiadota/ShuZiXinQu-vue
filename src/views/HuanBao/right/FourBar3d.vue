<template>
    <div class="main">
        <div class="highcharts-container" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "FourBar3d",
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
                        marginTop: 40,
                        marginBottom: 35,
                        marginLeft: 30,
                        marginRight: 0
                    },
                    title: {
                        text: ''
                    },
                    legend:{
                        align: 'center', //水平方向位置
                        verticalAlign: 'top', //垂直方向位置
                        y: -10,
                        itemStyle : {
                            'fontSize' : '16px',
                            'color' : '#fff',
                            // 'fontFamily': '微软雅黑',
                            'fontWeight': 'lighter'
                        }
                    },
                    xAxis: {
                        categories: ['1月','2月','3月',],
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
                                return this.value + '件' ;
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
                        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}件 '
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            depth: 12,
                            pointWidth: 10,
                        }
                    },
                    series: [{
                        name: '空港',
                        data: [5, 3, 14,],
                        color: '#1A83D2',
                        stack: 'konggang'
                    },{
                        name: '常德',
                        data: [3, 2, 15],
                        color: '#E1EEC3',
                        stack: 'changde'
                    },{
                        name: '高新',
                        data: [4, 7, 2],
                        color: '#1D976C',
                        stack: 'gaoxin'
                    },{
                        name: '北湖',
                        data: [4, 5, 3],
                        color: '#F8B500',
                        stack: 'beihu'
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
        height: 26%;
        width: 101%;
    }
    .highcharts-container {
        height: 100%;
    }
</style>