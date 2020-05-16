<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>河长人数</div>
            <div><span class="num">{{'39'}}</span></div>
            <div>名</div>
        </div>
        <div class="list">
            <div class="option">
                <div>流域面积</div>
                <div><span class="num">{{'322'}}</span><span> KM²</span></div>
            </div>
            <div class="option">
                <div>河流总量</div>
                <div><span class="num">{{'36'}}</span><span> 条</span></div>
            </div>
            <div class="option">
                <div>河流总长</div>
                <div><span class="num">{{'322'}}</span><span> KM</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Population"
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
            padding-left: 10%;
            height: 33%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>