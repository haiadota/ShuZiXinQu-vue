<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>资源共享度</div>
            <div><span class="num">{{'92.25'}}</span></div>
            <div>%</div>
        </div>
        <div class="list">
            <div class="option">
                <div>接入数据总量</div>
                <div><span class="num">{{'6345345'}}</span><span> 条</span></div>
            </div>
            <div class="option">
                <div>今日数据接入量</div>
                <div><span class="num">{{'3246'}}</span><span> 条</span></div>
            </div>
            <div class="option">
                <div>数据交换总量</div>
                <div><span class="num">{{'342550'}}</span><span> 条</span></div>
            </div>
            <div class="option">
                <div>今日交换量</div>
                <div><span class="num">{{'8726'}}</span><span> 条</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JiaoHuan"
    }
</script>

<style scoped lang="scss">
    .main {
        position: relative;
        height: 25%;
    }
    .txt {
        padding-left: 15px;
        height: 15%;
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
        height: 85%;
        .option{
            padding-left: 10%;
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>