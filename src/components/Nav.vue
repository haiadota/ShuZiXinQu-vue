<template>
    <div class="event_all navigation_bar selectablefalse">
        <div class="text_area">
            <!--<p class="zh">数字新区运行指挥中心</p>-->
            <!--<p class="en">-->
            <!--<i>-->
            <!--<span class="big">O</span>peration-->
            <!--<span class="big">C</span>ommand-->
            <!--<span class="big">C</span>enter-->
            <!--<span class="big">O</span>f-->
            <!--<span class="big">D</span>igital-->
            <!--<span class="big">N</span>ew-->
            <!--<span class="big">A</span>rea-->
            <!--</i>-->
            <!--</p>-->
        </div>
        <div class="mid_view">
            <div v-if="showNav" class="cell_wrap" v-for="(item,index) in navList" :key="index">
                <div v-if="index" class="fence">
                    <div class="left_bar"></div>
                    <div class="right_bar"></div>
                </div>
                <div class="cell">
                    <transition name="delay">
                        <div v-if="index == navIndex" class="cell_active">
                            <div class="outer_ring">
                                <div class="inner_ring">
                                    <div class="circle_bg">
                                        <div class="tex">{{item}}</div>
                                    </div>
                                    <div class="rotation">
                                        <div class="big_star"></div>
                                        <div class="small_star"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <transition name="bounce">
                        <div v-if="index != navIndex" class="cell_inactive" @click="handleRoutingHop(index)">
                            <span class="left_top"></span>
                            <span class="right_top"></span>
                            <span class="right_bot"></span>
                            <span class="left_bot"></span>
                            <div class="tex">{{item}}</div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <div class="some">
            <DateTime></DateTime>
            <div class="bar"></div>
            <div class="tianqi"></div>
            <div class="wendu"></div>
            <div>16℃</div>
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    import DateTime from "@/components/DateTime.vue";
    import Event from "@/postMessage/Iframe.js";

    export default {
        name: "Footer",
        components: {
            DateTime,
        },
        computed: {
            navIndex() {
                return this.$store.state.navIndex
            },
            showNav() {
                return this.$store.state.showNav
            }
        },
        data() {
            return {
                // navList: ["城市概览", "社区治理", "生态环保", "城乡建设", "经济活力","数据资源",'阳光社区','重点企业','巡查车','六号楼'],
                navList: ["城市概览", "社区治理", "生态环保", "城乡建设", "经济活力", "数据资源"],
                roterList: ["Home", "SheQu", "HuanBao", "JianShe", "JingJi", "ShuJU", "SunshineSheQu", "KeyQiYe", "CarXunCha", "SixBuilding"],
            };
        },
        methods: {
            ...mapMutations(['handleNavIndex', 'handleActiveArr', 'handlePoint']),
            handleRoutingHop(value) {
                this.handleNavIndex(value)
                this.$router.push('/' + this.roterList[value])
                // this.handleActiveArr({name:'高新开发区'})
                // this.handlePoint({name: '中心点', value: [125.2638816833496, 43.82486751538151, 100]})
                Event['Tab'](this.roterList[value])
            },
        },
        mounted() {
            let value = window.location.hash.split('/')[1]
            for (let i in this.roterList) {
                if (this.roterList[i] == value) {
                    this.handleNavIndex(i)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes slide_down {
        from {
            top: -100px;
        }
        to {
            top: 5px;
        }
    }
    .navigation_bar {
        width: 100%;
        display: flex;
        align-items: center;
        z-index: 5;
        top: 5px;
        position: absolute;
        height: 100px;
        animation: slide_down 1s linear;

        .image {
            height: 50%;
        }

        .text_area {
            width: 405px;
            height: 34px;
            background: url("../../public/image/logo.png") no-repeat;
            background-size: 100% 100%;
            margin: 0 50px 0 8px;
        }

        .some {
            height: 80%;
            padding-bottom: 15px;
            margin-right: 30px;
            display: flex;
            align-items: center;

            .bar {
                width: 0px;
                height: 32%;
                margin: 0 20px;
                border: 1px solid rgba(170, 170, 170, 1);
            }

            .tianqi {
                width: 30px;
                height: 30px;
                background: url("../../public/image/qingtian.png") no-repeat;
                background-size: 100% 100%;
            }

            .wendu {
                margin: 0 5px;
                width: 25px;
                height: 25px;
                background: url("../../public/image/wenduji.png") no-repeat;
                background-size: 100% 100%;
            }
        }

        .mid_view {
            flex: 1;
            height: 100%;
            font-size: 0.3rem;
            color: #68fffe;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: nowrap;

            .cell_wrap {
                display: flex;
                align-items: center;
                user-select: none;
                height: 100%;

                .tex {
                    width: 0.7rem;
                    letter-spacing: 0.05rem;
                }

                .cell {
                    width: 1.8rem;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    position: relative;

                    .cell_inactive {
                        width: 1.4rem;
                        height: 1.12rem;
                        margin: 0 0.2rem;
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;

                        .left_top {
                            height: 0.14rem;
                            width: 0.14rem;
                            border-top: 0.01rem solid #00ffff;
                            border-left: 0.01rem solid #00ffff;
                            position: absolute;
                            top: 0;
                            left: 0;
                        }

                        .right_top {
                            height: 0.14rem;
                            width: 0.14rem;
                            border-top: 0.01rem solid #00ffff;
                            border-right: 0.01rem solid #00ffff;
                            position: absolute;
                            top: 0;
                            right: 0;
                        }

                        .right_bot {
                            height: 0.14rem;
                            width: 0.14rem;
                            border-bottom: 0.01rem solid #00ffff;
                            border-right: 0.01rem solid #00ffff;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                        }

                        .left_bot {
                            height: 0.14rem;
                            width: 0.14rem;
                            border-bottom: 0.01rem solid #00ffff;
                            border-left: 0.01rem solid #00ffff;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                        }
                    }

                    .cell_active {
                        position: absolute;

                        .outer_ring {
                            padding: 0.12rem;
                            border: 0.02rem dashed #309ea9;
                            border-radius: 50%;
                            box-shadow: 0 0 2.5rem rgba(81, 203, 238, 0.5);

                            .inner_ring {
                                padding: 0.06rem;
                                border: 0.02rem dashed #39dae9;
                                border-radius: 50%;
                                position: relative;
                                box-shadow: 0 0 0.5rem rgba(81, 203, 238, 0.5);

                                .circle_bg {
                                    width: 1.36rem;
                                    height: 1.36rem;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    border-radius: 50%;
                                    background: linear-gradient(to bottom right, rgba(58, 69, 255, 0.6) 0%, rgba(133, 238, 253, 0.6) 100%);
                                }

                                .rotation {
                                    width: 1.47rem;
                                    height: 1.47rem;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    animation: rotate 10s linear infinite;

                                    .big_star {
                                        width: 0.26rem;
                                        height: 0.26rem;
                                        border-radius: 50%;
                                        background: #46dbed;
                                        position: absolute;
                                        left: -0.13rem;
                                        top: 50%;
                                        transform: translateY(-50%);
                                    }

                                    .small_star {
                                        width: 0.18rem;
                                        height: 0.18rem;
                                        border-radius: 50%;
                                        background: #4ed6cb;
                                        position: absolute;
                                        right: -0.09rem;
                                        top: 50%;
                                        transform: translateY(-50%);
                                    }
                                }
                            }
                        }
                    }
                }

                .fence {
                    width: 0.8rem;
                    height: 1.12rem;
                    position: relative;

                    .left_bar {
                        position: absolute;
                        width: 0.03rem;
                        height: 0.87rem;
                        top: 0.16rem;
                        left: 40%;
                        background: #fffefc;
                    }

                    .right_bar {
                        position: absolute;
                        width: 0.03rem;
                        height: 0.87rem;
                        top: 0.16rem;
                        right: 40%;
                        background: #363b3b;
                    }
                }
            }
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-359deg);
        }
    }

    .bounce-enter-active {
        /*animation: bounce-in .5s;*/
    }

    .bounce-leave-active {
        animation: bounce-out .5s;
    }

    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.7);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }

    .delay-enter-active {
        animation: delay-in 0.6s;
    }

    @keyframes delay-in {
        0% {
            transform: scale(0);
        }
        40% {
            transform: scale(0);
        }
        50% {
            transform: scale(0.7);
        }
        100% {
            transform: scale(1);
        }
    }
</style>