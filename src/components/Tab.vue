<template>
    <div class="main">
        <div class="txt">E {{'125.35'}}°,N {{43.88}}°</div>
        <div class="wrap">
            <div class="mid">
                <div class="tab" ref="main"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import Event from "@/postMessage/Iframe.js";

    export default {
        name: "Tab",
        computed: {
            activeArr() {
                return this.$store.state.activeArr
            },
            option() {
                let arr = []
                this.activeArr.forEach(function (i) {
                    if (i.value) {
                        arr.push(Object.assign({
                            itemStyle: {
                                normal: {
                                    borderColor: '#19F4D2',
                                    areaColor: 'rgba(0,0,0,0.8)',
                                    borderWidth: 1,
                                    shadowColor: 'rgba(128, 217, 248, .3)',
                                    shadowOffsetX: -2,
                                    shadowOffsetY: 2,
                                    shadowBlur: 1,
                                },
                                emphasis: {
                                    areaColor: '#fff',
                                    borderWidth: 0
                                }
                            }
                        }, i))
                    } else {
                        arr.push(Object.assign({
                            itemStyle: {
                                normal: {
                                    borderColor: '#19F4D2',
                                    areaColor: 'rgba(255,255,255,0)',
                                    borderWidth: 1,
                                    shadowColor: 'rgba(128, 217, 248, .3)',
                                    shadowOffsetX: -2,
                                    shadowOffsetY: 2,
                                    shadowBlur: 1,
                                },
                                emphasis: {
                                    areaColor: '#fff',
                                    borderWidth: 0
                                }
                            }
                        }, i))
                    }
                })
                return {
                    backgroundColor: 'rgba(255,255,255,0)',
                    series: [{
                        type: 'map',
                        mapType: 'xinqu',
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#fff'
                                },
                                show: true
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#000'
                                }
                            }
                        },
                        data: arr
                    }]
                }
            }
        },
        data() {
            return {
                myChart: null,
                uploadedDataURL: 'changchunxinqu.geojson',
            }
        },
        methods: {
            ...mapMutations(['handleActiveArr']),
        },
        mounted() {
            let that = this
            this.myChart = this.$echarts.init(this.$refs.main)
            this.axios(this.uploadedDataURL).then(function (geoJson) {
                that.$echarts.registerMap('xinqu', geoJson.data);
                that.myChart.setOption(that.option)
            }).catch(err => {
                console.log(err)
            })
            this.myChart.on('click', function (params) {
                that.handleActiveArr(params)
                Event[params.data.eventType]()
            })
        },
        watch: {
            activeArr() {
                this.myChart.setOption(this.option)
            }
        },
        beforeDestroy() {
            this.$echarts.dispose(this.myChart)
        }
    }
</script>

<style scoped>
    .txt{
        font-size: 16px;
        line-height: 40px;
        text-align: center;
    }
    .wrap {
        width: 232px;
        height: 232px;
        margin: auto;
        background: linear-gradient(to top,#1A83D2,#19F4D2);
        border-radius: 50%;
        padding: 3px;
    }
    .mid{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background: url("../../public/image/tabBd.png") no-repeat;
        background-size: cover;
        display: flex;
        justify-content: flex-end;
    }

    .tab {
        height: 92%;
        width: 90%;
    }
</style>