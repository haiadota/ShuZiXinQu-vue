<template>
    <div class="main" ref="main">
        <div v-for="(item,index) in arr" :class="index%2?'light':'dark'" :key="index">
            <!--<p class="dot"></p>-->
            <p class="txt">{{item.title}}:</p>
            <div class="numerical">
                <div class="left"><span class="num">{{item.number}}</span> {{item.units}}</div>
                <div class="state">
                    <span class="percent"><span class="num">{{item.percent}}</span>%</span>
                    <div v-if="item.status" class="up"></div>
                    <div v-else class="down"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GanLan",
        data(){
            return {
                arr:[
                    {title:'地区生产总值',number:'966.0',units:'亿元',percent:'8.10',status:1},
                    {title:'农林牧渔业总产值',number:'13090',units:'万元',percent:'0.20',status:1},
                    {title:'规上工业企业实现总产值',number:'789.3',units:'亿元',percent:'13.4',status:1},
                    {title:'固定资产投资',number:'351.9',units:'亿元',percent:'25.2',status:1},
                    {title:'社会消费品零售总额实现',number:'84.8',units:'亿元',percent:'6.30',status:1},
                    {title:'一般预算全口径财政收入',number:'86.6',units:'亿元',percent:'8.0',status:1},
                    {title:'一般公共预算财政收入实现',number:'16.7',units:'亿元',percent:'24.0',status:1},
                ],
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
                }, 300)
            },
            secondShow() {
                let arr = this.$refs.main.getElementsByClassName('numerical')
                let i = -2
                let that = this
                this.myTimer2 = setInterval(function () {
                    if (i == arr.length) {
                        clearInterval(that.myTimer2)
                        that.myTimer2 = null
                    } else {
                        if (arr[i]) {
                            arr[i].className = 'numerical slideIn'
                        }
                    }
                    i++
                }, 300)
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

<style lang="scss" scoped>
    .main {
        margin-bottom: 3%;
        height: 41%;
    }

    .dark {
        padding: 0 5px;
        background: rgba(225, 225, 225, .26);
        height: 14.25%;
    }

    .light {
        padding: 0 5px;
        height: 14.25%;
    }

    .txt {
        text-indent: 0px;
        height: 50%;
        line-height: 160%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        visibility: hidden;
    }

    .numerical {
        visibility: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
            text-indent: 100px;
        }

        .state {
            height: 50%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .percent{
                padding-right: 8px;
            }

            .up {
                width: 0;
                height: 0;
                border-width: 14px;
                border-style: solid;
                border-color: transparent transparent #F19149 transparent;
                transform: translateY(-7px);
            }

            .down {
                width: 0;
                height: 0;
                border-width: 14px;
                border-style: solid;
                border-color: #00b7ee transparent transparent transparent;
                transform: translateY(7px);
            }
        }
    }

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #55a532;
    }
</style>