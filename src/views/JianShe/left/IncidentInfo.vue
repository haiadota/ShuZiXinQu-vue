<template>
    <div class="main">
        <div class="list">
            <div class="option">
                <div>执法事发总量</div>
                <div><span class="num">{{total}}</span><span> 件</span></div>
            </div>
            <div class="option">
                <div>执法事件处理率</div>
                <div><span class="num">{{percent}}</span><span> %</span></div>
            </div>
            <div class="option">
                <div>平均处理时长</div>
                <div><span class="num">{{time}}</span><span class="num">{{unit}}</span>
                </div>
            </div>
            <div class="option">
                <div>执法事件高发类型</div>
                <div><span class="num">{{type}}</span><span></span></div>
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
                type: '占道经营'
            }
        },
        created() {
            let that = this
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 241}, "url": "http://120.24.175.113:18884/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(res => {
                that.total = res.data.data.data.val
            }).catch(err=>{})
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 245}, "url": "http://120.24.175.113:18884/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}
            ).then(res => {
                that.percent = parseInt(res.data.data.data.data[0].value / res.data.data.data.total * 100)
            }).catch(err=>{})
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 244}, "url": "http://120.24.175.113:18884/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}
            ).then(res => {
                that.time = res.data.data.data.val
                that.unit = res.data.data.data.valunit
            }).catch(err=>{})
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 246}, "url": "http://120.24.175.113:18884/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}
            ).then(res => {
                let arr = res.data.data.data
                arr.forEach(function (i) {
                    if (i.PAIMING == 1) {
                        that.type = i.LXMC
                    }
                })
            }).catch(err=>{})
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
            padding-left: 10%;
            height: 33%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>