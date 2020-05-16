<template>
    <div class="map">
        <div class="title">
            <p class="selectablefalse">
                <span class="txt">地图导航</span>
            </p>
            <div class="three_line">
                <div class="left_line"></div>
                <div class="under_line"></div>
                <div class="right_line"></div>
            </div>
        </div>
        <div class="txt">E {{pointInfo[0].value[0].toFixed(6)}}°,N {{pointInfo[0].value[1].toFixed(6)}}°</div>
        <div class="wrap" ref="wrap" :style="{'width':w}">
            <div class="mid">
                <div class="tab" ref="main"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import Event from "@/postMessage/Iframe.js";
    // import 'echarts-gl'

    export default {
        name: "Tab3D",
        computed: {
            pointInfo() {
                return this.$store.state.point
            },
            activeArr() {
                return this.$store.state.activeArr
            },
            option() {
                let arr = []
                this.activeArr.forEach(function (i) {
                    if (i.value) {
                        arr.push({
                            name: i.name,
                            itemStyle: {
                                areaColor: '#2b97df'
                            }
                        })
                    } else {
                        arr.push({
                            name: i.name,
                            itemStyle: {
                                areaColor: 'rgb(5,101,123)'
                            }
                        })
                    }
                })
                return {
                    geo3D: {
                        map: 'xinqu',
                        viewControl: {
                            center: [-15, 5, 20],
                            "beta": -15,
                            alpha: 45
                        },
                        postEffect: {
                            enable: false
                        },
                        itemStyle: {
                            borderColor: 'rgb(62,215,213)',
                            borderWidth: 1,
                        },
                        regions: arr,
                        emphasis: { //当鼠标放上去  地区区域是否显示名称
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 18,
                                    backgroundColor: 'rgba(0,23,11,0.4)'
                                }
                            }
                        },
                        light: { //光照阴影
                            main: {
                                color: '#fff', //光照颜色
                                intensity: 1.2, //光照强度
                                //shadowQuality: 'high', //阴影亮度
                                shadow: false, //是否显示阴影
                                alpha: 55,
                                beta: 10

                            },
                            ambient: {
                                intensity: 0.3
                            }
                        },
                    },
                    series: [
                        {
                            type: 'scatter3D',
                            coordinateSystem: 'geo3D',
                            data: this.pointInfo,
                            symbol: 'pin',
                            symbolSize: 25,
                            itemStyle: {
                                color: '#2b97df',
                                borderColor: '#fff',
                                borderWidth: 1
                            },
                            label: {
                                show: false,
                                formatter: '{b}',
                                position: 'right',
                                textStyle: {
                                    color: '#000',
                                    fontSize: 18,
                                    backgroundColor: 'rgba(225,225,225,0.9)',
                                }
                            }
                        },
                    ]
                }
            }
        },
        data() {
            return {
                w: '80%',
                myChart: null,
                uploadedDataURL: 'changchunxinqu.geojson',
            }
        },
        methods: {
            ...mapMutations(['handleActiveArr', 'handlePoint']),
        },
        mounted() {
            let that = this
            this.w = this.$refs.wrap.clientHeight + 'px'
            this.axios(this.uploadedDataURL).then(function (geoJson) {
                echarts.registerMap('xinqu', geoJson.data);
                that.myChart = echarts.init(that.$refs.main)
                that.myChart.setOption(that.option)
                that.myChart.on('click', function (params) {
                    let action = ''
                    let position = []
                    switch (params.name) {
                        case '高新开发区':
                            action = 'ToGaoXin'
                            position = [125.2638816833496, 43.82486751538151]
                            break
                        case '北湖新区':
                            action = 'ToBeiHu'
                            position = [125.38627624511717, 44.014793040101814]
                            break
                        case '长德新区':
                            action = 'ToChangDe'
                            position = [125.49819946289064, 44.0609461392979]
                            break
                        case '空港新区':
                            action = 'ToKongGang'
                            position = [125.71929931640625, 44.04614157509527]
                            break
                    }
                    that.handlePoint({name: '中心点', value: position})
                    Event['FlyToXinQu'](action)
                })
            }).catch(err => {
                console.log(err)
            })
        },
        watch: {
            pointInfo() {
                this.myChart.setOption(this.option)
            }
        },
        beforeDestroy() {
            echarts.dispose(this.myChart)
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        width: 100%;
        height: 36px;

        .txt {
            font-size: 19px;
            /*background: rgba(255,255,255,0.8);*/
            padding: 0 5px;
            font-family: 'FZZZHUNHJW';
        }

        .three_line {
            height: 0.2rem;
            display: flex;
            align-items: center;
            position: relative;

            .left_line {
                width: .5rem;
                height: .06rem;
                background: #00ffff;
            }

            .under_line {
                flex: 1;
                height: 0.021rem;
                background: rgba(0, 255, 255, 0.6);
                box-shadow: 0 0 0.6rem 0.12rem rgba(255, 255, 255, 0.2);
            }

            .right_line {
                width: .22rem;
                height: .03rem;
                position: absolute;
                right: 0;
                top: 0.19rem;
                background: #00ffff;
            }
        }
    }

    .map {
        width: 100%;
        position: absolute;
        height: 33%;
        bottom: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .txt {
        line-height: 30px;
        text-align: center;
        padding-bottom: 15px;
    }

    .wrap {
        height: 100%;
        flex: 1;
        background: linear-gradient(to top, rgba(26, 131, 210, 0.7), rgba(25, 244, 210, 0.7));
        border-radius: 50%;
        padding: 3px;
    }

    .mid {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background: url("../../public/image/tabBd.png") no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tab {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        overflow: hidden;
    }
</style>