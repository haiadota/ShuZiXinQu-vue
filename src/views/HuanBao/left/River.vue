<template>
    <div class="main" ref="main">
        <div class="txt">
            <div class="bar"></div>
            <div>河长人数</div>
            <div><span class="num">{{'39'}}</span></div>
            <div>名</div>
        </div>
        <div class="list">
            <div class="option">
                <div class="left_fade">流域面积</div>
                <div class="right_fade"><span class="num">{{'322'}}</span><span> KM²</span></div>
            </div>
            <div class="option">
                <div class="left_fade">河流总量</div>
                <div class="right_fade"><span class="num">{{'36'}}</span><span> 条</span></div>
            </div>
            <div class="option">
                <div class="left_fade">河流总长</div>
                <div class="right_fade"><span class="num">{{'322'}}</span><span> KM</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Population",
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
        height: 26%;
    }
    .txt {
        padding-left: 15px;
        height: 25%;
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
        height: 75%;
        .option{
            padding-left: 5%;
            height: 33%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>