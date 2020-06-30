<template>
    <div class="main" ref="main">
        <div class="list">
            <div class="option">
                <div class="left_fade">执法事发总量</div>
                <div class="right_fade"><span class="num">{{total}}</span><span> 件</span></div>
            </div>
            <div class="option">
                <div class="left_fade">执法事件处理率</div>
                <div class="right_fade"><span class="num">{{percent}}</span><span> %</span></div>
            </div>
            <div class="option">
                <div class="left_fade">平均处理时长</div>
                <div class="right_fade"><span class="num">{{time}}</span><span class="num">{{unit}}</span></div>
            </div>
            <div class="option">
                <div class="left_fade">执法事件高发类型</div>
                <div class="right_fade"><span class="num">{{type}}</span><span></span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IncidentInfo",
        data() {
            return {
                total: 0,
                percent: 0,
                time: 0,
                unit: '小时',
                type: '占道经营',
                myTimer1: null,
                myTimer2: null
            }
        },
        created() {
            let that = this
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 241}, "url": that.host1 + "/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(res => {
                that.total = res.data.data.data.val
            }).catch(err=>{})
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 245}, "url": that.host1 + "/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}
            ).then(res => {
                that.percent = parseInt(res.data.data.data.data[0].value / res.data.data.data.total * 100)
            }).catch(err=>{})
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 244}, "url": that.host1 + "/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}
            ).then(res => {
                that.time = res.data.data.data.val
                that.unit = res.data.data.data.valunit
            }).catch(err=>{})
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 246}, "url": that.host1 + "/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}
            ).then(res => {
                let arr = res.data.data.data
                arr.forEach(function (i) {
                    if (i.PAIMING == 1) {
                        that.type = i.LXMC
                    }
                })
            }).catch(err=>{})
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
        height: 19%;
    }

    .list {
        height: 75%;

        .option {
            padding-left: 5%;
            height: 33%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>