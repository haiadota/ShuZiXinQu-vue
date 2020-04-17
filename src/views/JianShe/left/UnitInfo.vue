<template>
    <div class="main">
        <div class="list">
            <div class="option">
                <div>部件总数</div>
                <div><span class="num">{{'365'}}</span><span> 个</span></div>
            </div>
            <div class="option">
                <div>部件完整率</div>
                <div><span class="num">{{'98'}}</span><span> %</span></div>
            </div>
            <div class="option">
                <div>部件易损类型</div>
                <div><span class="num">{{'公共设施'}}</span><span></span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UnitInfo"
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
            padding-left: 10%;
            height: 33%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>