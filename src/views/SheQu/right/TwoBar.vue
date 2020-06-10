<template>
    <div class="main" ref="main"></div>
</template>

<script>
    export default {
        name: "TwoBar",
        data() {
            return {
                chart: null,
                categories: ['0-4', '5-9', '10-14', '15-19',
                    '20-24', '25-29', '30-34', '35-39', '40-44',
                    '45-49', '50-54', '55-59', '60-64', '65-69',
                    '70-74', '75-79', '80-84', '85-89', '90-94',
                    '95-99', '100 + '],
            }
        },
        computed: {
            option() {
                let that = this
                return {
                    credits: {
                        enabled: false,
                    },
                    chart: {
                        type: 'bar',
                        backgroundColor: 'rgba(0,0,0,0)',
                    },
                    legend: {
                        align: 'center', //水平方向位置
                        verticalAlign: 'top', //垂直方向位置
                        y: -15, //距离x轴的距离
                        itemStyle: {
                            'fontSize': '0.6vw',
                            color: '#fff'
                        }
                    },
                    title: {text: ''},
                    xAxis: [{
                        lineWidth :0,//去掉x轴线
                        categories: this.categories,
                        reversed: false,
                        labels: {
                            style: {
                                'fontSize': '0.6vw',
                                color: '#fff'
                            }
                        },
                    }, {
                        // 显示在右侧的镜像 xAxis （通过 linkedTo 与第一个 xAxis 关联）
                        lineWidth :0,//去掉x轴线
                        opposite: true,
                        reversed: false,
                        categories: this.categories,
                        linkedTo: 0,
                        labels: {
                            style: {
                                'fontSize': '0.6vw',
                                color: '#fff'
                            }
                        },
                    }],
                    yAxis: {
                        gridLineWidth: 0,
                        title: {text: null},
                        labels: {
                            style: {
                                'fontSize': '0.6vw',
                                color: '#fff'
                            },
                            formatter: function () {
                                return (Math.abs(this.value) / 1000000) + '万';
                            }
                        },
                        min: -4000000,
                        max: 4000000
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal',
                            borderColor: ''
                        },
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                                '人口: ' + that.$Highcharts.numberFormat(Math.abs(this.point.y), 0);
                        }
                    },
                    series: [{
                        name: '男',
                        data: [-1746181, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
                            -2664537, -3556505, -3680231, -3143062, -2721122, -2229181, -2227768,
                            -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
                    }, {
                        name: '女',
                        color:'#ba7871',
                        data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
                            3360596, 3493473, 3050775, 2759560, 2304444, 2426504, 2568938, 1785638,
                            1447162, 1005011, 330870, 130632, 21208]
                    }]
                }
            }
        },
        mounted() {
            this.initChart();
        },
        methods: {
            initChart() {
                this.chart = new this.$Highcharts.Chart(this.$refs.main, this.option);
            }
        }
    }
</script>

<style scoped>
    .main {
        height: 28%;
    }
</style>