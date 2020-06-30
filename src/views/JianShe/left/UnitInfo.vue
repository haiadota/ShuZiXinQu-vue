<template>
    <div class="main" ref="main">
        <div class="list">
            <div class="option">
                <div class="left_fade">部件总数</div>
                <div class="right_fade"><span class="num">{{'183223'}}</span><span> 个</span></div>
            </div>
            <div class="option">
                <div class="left_fade">部件完整率</div>
                <div class="right_fade"><span class="num">{{'78'}}</span><span> %</span></div>
            </div>
            <div class="option">
                <div class="left_fade">部件易损类型</div>
                <div class="right_fade"><span class="num">{{'公共设施'}}</span><span></span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UnitInfo",
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
        height: 15%;
    }

    .list{
        height: 100%;
        .option{
            padding-left: 5%;
            height: 33%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>