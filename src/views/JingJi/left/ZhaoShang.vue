<template>
    <div class="main" ref="main">
        <div class="dark">
            <p class="txt" title="全区实际利用内资162.2亿元"><span>全区实际利用内资<span class="num"> 162.2</span>亿元</span></p>
        </div>
        <div class="light">
            <p class="txt" title="实际利用外资7287.8万美元"><span>实际利用外资 <span class="num">7287.8</span>万美元</span></p>
        </div>
        <div class="dark">
            <p class="txt" title="新引进产业类项目119个"><span>新引进产业类项目 <span class="num">119</span>个</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ZhaoShang",
        data() {
            return {
                myTimer1: null,
                myTimer2: null
            }
        },
        methods: {
            firstShow() {
                let arr = this.$refs.main.getElementsByClassName('txt')
                let i = 0
                let that = this
                this.myTimer1 = setInterval(function () {
                    if (i == arr.length) {
                        clearInterval(that.myTimer1)
                        that.myTimer1 = null
                    } else {
                        arr[i].className = 'txt slideIn'
                    }
                    i++
                }, 500)
            }
        },
        mounted() {
            this.firstShow()
        },
        beforeDestroy() {
            if (this.myTimer1) {
                clearInterval(this.myTimer1)
                this.myTimer1 = null
            }

        }
    }
</script>

<style lang="scss" scoped>
    .main {
        margin-bottom: 3%;
        height: 14%;
    }

    .dark {
        padding: 0 5px;
        background: rgba(225, 225, 225, .26);
        height: 33%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .light {
        padding: 0 5px;
        height: 33%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .txt {
        text-indent: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        align-items: center;
        visibility: hidden;
    }
</style>