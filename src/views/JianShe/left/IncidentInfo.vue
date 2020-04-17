<template>
    <div class="main">
        <div class="list">
            <div class="option">
                <div>事发总量</div>
                <div><span class="num">{{'365'}}</span><span> 件</span></div>
            </div>
            <div class="option">
                <div>事件处理率</div>
                <div><span class="num">{{'98'}}</span><span> %</span></div>
            </div>
            <div class="option">
                <div>平均处理时长</div>
                <div><span class="num">{{'5'}}</span><span> 小时</span></div>
            </div>
            <div class="option">
                <div>事件高发类型</div>
                <div><span class="num">{{'占道经营'}}</span><span></span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IncidentInfo"
    }
</script>

<style scoped lang="scss">
    .main {
        position: relative;
        height: 19%;
    }

    .list{
        height: 75%;
        .option{
            padding-left: 10%;
            height: 33%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>