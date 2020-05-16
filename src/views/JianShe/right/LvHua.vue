<template>
    <div class="main">
        <div class="list">
            <div class="option">
                <div>市植株总量</div>
                <div><span class="num">{{'112242'}}</span><span> 株</span></div>
            </div>
            <div class="option">
                <div>绿化覆盖率</div>
                <div><span class="num">{{'25.78'}}</span><span> %</span></div>
            </div>
            <div class="option">
                <div>环卫站箱清理频率</div>
                <div><span class="num">{{'78'}}</span><span> %</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LvHua"
    }
</script>

<style scoped lang="scss">
    .main {
        position: relative;
        height: 13%;
    }

    .list{
        height: 100%;
        .option{
            padding-left: 10%;
            height: 33%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .num {
                padding: 0 0 0 80px;
            }
        }
    }
</style>