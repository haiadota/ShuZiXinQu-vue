<template>
    <div class="main">
        <div class="item">
            <div class="txt">
                <div class="wrap">
                    <p>总量{{xunchaTotal}}</p>
                    <p>市政巡查车</p>
                </div>
            </div>
            <div class="chart" ref="first"></div>
        </div>
        <div class="item">
            <div class="txt">
                <div class="wrap">
                    <p>总量{{huanweiTotal}}</p>
                    <p>环卫车</p>
                </div>
            </div>
            <div class="chart" ref="second"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CarInfo",
        data() {
            return {
                xunchaTotal: 100,
                xunchaOnline: 0,
                huanweiTotal: 100,
                xunchaOnline: 0,
            }
        },
        methods: {
            option(name, numArr) {
                return {
                    credits: {
                        enabled: false,
                    },
                    chart: {
                        type: 'pie',
                        backgroundColor: 'rgba(0,0,0,0)',
                        // options3d: {
                        //     enabled: true,
                        //     alpha: 45
                        // }
                    },
                    title: {
                        text: '',
                        floating: true,
                        useHTML: true,
                        verticalAlign: 'middle',
                        align: 'center',
                        x: 23,
                        y: 0,
                        style: {
                            fontSize: '16px',
                            lineHeight: 1,
                            color: "#fff",
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        pie: {
                            center: ['65%', '50%'],
                            cursor: 'pointer',
                            showInLegend: true,
                            innerSize: '90%',
                            depth: 15,
                            size: '85%'
                        }
                    },
                    tooltip: {
                        style: {
                            'fontSize': '0.8vw',
                        },
                        shared: true,
                        headerFormat: '<span>{point.key}</span><br>',
                        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <span class="num">{point.y}</span>辆 '
                    },
                    series: [{
                        name: '在线量',
                        data: [
                            {
                                y: numArr[0],
                                name: '',
                                color: '#e8f860',
                                dataLabels: {
                                    enabled: false,
                                }
                            },
                            {
                                y: numArr[1],
                                name: name,
                                color: '#0bceff',
                                dataLabels: {
                                    format: "{y}<br>在线量",
                                    y: 0,
                                    padding: 0,
                                    connectorColor: '#fff',
                                    distance: 20,
                                    enabled: true,
                                    style: {
                                        fontWeight: 'light',
                                        fontSize: '0.7vw',
                                        color: "#fff",
                                        textOutline: "none"
                                    }
                                }
                            }
                        ]
                    }]
                }
            }
        },
        created() {
            let that = this
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 255}, "url": "http://120.24.175.113:18884/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(res => {
                if (res.status == '200') {
                    let arr = res.data.data.data.data
                    let onlineNum = 0
                    arr.forEach(function (i) {
                        if (i.ONLINE) {
                            onlineNum++
                        }
                    })
                    that.xunchaTotal = arr.length
                    that.xunchaOnline = onlineNum
                }
                that.$nextTick(() => {
                    if(that.$refs.first){
                        that.myChartFirst = new that.$Highcharts.Chart(that.$refs.first, that.option('市政巡查车', [that.xunchaTotal - that.xunchaOnline, that.xunchaOnline]));
                    }
                })
            }).catch(err => {
                that.myChartFirst = new that.$Highcharts.Chart(that.$refs.first, that.option('市政巡查车', [5, 49]));
            })
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 278}, "url": "http://120.24.175.113:18884/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(res => {
                if (res.status == '200') {
                    let arr = res.data.data.data.data
                    let onlineNum = 0
                    arr.forEach(function (i) {
                        if (i.ONLINE) {
                            onlineNum++
                        }
                    })
                    that.huanweiTotal = arr.length
                    that.xunchaOnline = onlineNum
                }
                that.$nextTick(() => {
                    if(that.$refs.second){
                        that.myChartSecond = new this.$Highcharts.Chart(that.$refs.second, that.option('环卫车', [that.huanweiTotal - that.xunchaOnline, that.xunchaOnline]));
                    }
                })
            }).catch(err => {
                that.myChartSecond = new this.$Highcharts.Chart(that.$refs.second, that.option('环卫车', [4, 94]));

            })
        },
        beforeDestroy() {
            if (this.myChartFirst) this.myChartFirst.destroy()
            if (this.myChartSecond) this.myChartSecond.destroy()
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        width: 106%;
        height: 17%;
        display: flex;
        transform: translateX(-3%);

        .item {
            flex: 1;
            height: 100%;
            position: relative;

            .txt {
                position: absolute;
                right: 0;
                top: 0;
                width: 77%;
                height: 96%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                font-size: 16px;
            }

            .chart {
                height: 100%;
            }
        }
    }
</style>