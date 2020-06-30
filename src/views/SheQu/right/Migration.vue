<template>
    <div class="main" ref="main">
        <div class="txt">
            <div class="bar"></div>
            <div>人口迁移率</div>
            <div><span><span class="percent num">{{'0.6'}}</span> %</span></div>
        </div>
        <div class="list">
            <div class="option">
                <div class="left_fade">迁入率</div>
                <div class="right_fade"><span class="percent"><span class="num">{{'7.01'}}</span> %</span></div>
                <!--<div v-if="true" class="up"></div>-->
                <!--<div v-else class="down"></div>-->
            </div>
            <div class="option">
                <div class="left_fade">迁出率</div>
                <div class="right_fade"><span class="percent"><span class="num">{{'6.4'}}</span> %</span></div>
                <!--<div v-if="false" class="up"></div>-->
                <!--<div v-else class="down"></div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Migration",
        data() {
            return {
                myTimer1: null,
                myTimer2: null
            }
        },
        methods: {
            firstShow() {
                let arr = this.$refs.main.getElementsByClassName('left_fade')
                let i = 0
                let that = this
                this.myTimer1 = setInterval(function () {
                    if (i == arr.length) {
                        clearInterval(that.myTimer1)
                        that.myTimer1 = null
                    } else {
                        arr[i].className = 'left_fade slideIn'
                    }
                    i++
                }, 500)
            },
            secondShow() {
                let arr = this.$refs.main.getElementsByClassName('right_fade')
                let i = -2
                let that = this
                this.myTimer2 = setInterval(function () {
                    if (i == arr.length) {
                        clearInterval(that.myTimer2)
                        that.myTimer2 = null
                    } else {
                        if (arr[i]) {
                            arr[i].className = 'right_fade slideIn'
                        }
                    }
                    i++
                }, 500)
            }
        },
        mounted() {
            this.firstShow()
            this.secondShow()
        },
        beforeDestroy() {
            if (this.myTimer1) {
                clearInterval(this.myTimer1)
                this.myTimer1 = null
            }
            if (this.myTimer2) {
                clearInterval(this.myTimer2)
                this.myTimer2 = null
            }
        }
    }
</script>

<style scoped lang="scss">
    .main {
        position: relative;
        height: 13%;
    }

    .txt {
        padding-left: 15px;
        height: 20%;
        display: flex;
        align-items: center;

        .bar {
            margin-right: 6px;
            background: #00bdff;
            width: 2px;
            height: 18px;
        }

        .percent {
            padding: 0 5px 0 20px;
            font-size: 24px;
            line-height: 16px;
        }
    }
    .list{
        padding-top: 6px;
        .option{
            padding: 12px 0 12px 25px;
            height: 20%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .percent {
                padding: 0 50px 0 30px;
            }
            .up{
                width: 0;
                height: 0;
                border-width: 14px;
                border-style: solid;
                border-color: transparent transparent #F19149 transparent;
                transform: translateY(-7px);
            }
            .down{
                width: 0;
                height: 0;
                border-width: 14px;
                border-style: solid;
                border-color:#00b7ee transparent transparent transparent;
                transform: translateY(7px);
            }
        }
    }
</style>