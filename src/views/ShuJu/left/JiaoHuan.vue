<template>
    <div class="main" ref="main">
        <div class="txt">
            <div class="bar"></div>
            <div>资源共享度</div>
            <div><span class="num">{{'92.25'}}</span></div>
            <div>%</div>
        </div>
        <div class="list">
            <div class="option">
                <div class="left_fade">接入数据总量</div>
                <div class="right_fade"><span class="num">{{'6345345'}}</span><span> 条</span></div>
            </div>
            <div class="option">
                <div class="left_fade">今日数据接入量</div>
                <div class="right_fade"><span class="num">{{'3246'}}</span><span> 条</span></div>
            </div>
            <div class="option">
                <div class="left_fade">数据交换总量</div>
                <div class="right_fade"><span class="num">{{'342550'}}</span><span> 条</span></div>
            </div>
            <div class="option">
                <div class="left_fade">今日交换量</div>
                <div class="right_fade"><span class="num">{{'8726'}}</span><span> 条</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JiaoHuan",
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
        height: 25%;
    }
    .txt {
        padding-left: 15px;
        height: 15%;
        display: flex;
        align-items: center;

        .bar {
            margin-right: 6px;
            background: #00bdff;
            width: 2px;
            height: 18px;
        }

        .num {
            padding: 0 5px 0 20px;
            font-size: 24px;
        }
    }

    .list{
        height: 85%;
        .option{
            padding-left: 5%;
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>