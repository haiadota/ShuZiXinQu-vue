<template>
    <div class="main">
        <div class="list">
            <div class="option">
                <div>流域面积</div>
                <div><span class="num">{{'322'}}</span><span> KM²</span></div>
            </div>
            <div class="option">
                <div>河流总量</div>
                <div><span class="num">{{'36'}}</span><span> 条</span></div>
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
        height: 11%;
    }

    .list{
        height: 100%;
        .option{
            padding-left: 10%;
            height: 50%;
            display: flex;
            align-items: center;

            .num {
                padding: 0 0 0 80px;
            }
        }
    }
</style>