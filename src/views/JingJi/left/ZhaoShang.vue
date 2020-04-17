<template>
    <div class="main">
        <div class="dark">
            <div class="wrap">
                <p class="txt" title="全区实际利用内资162.2亿元"><span>全区实际利用内资<span class="num"> 162.2</span>亿元</span></p>
                <div class="percent">
                    <p><span class="num">{{'20.3'}}</span>%</p>
                    <div v-if="true" class="up"></div>
                    <div v-else class="down"></div>
                </div>
            </div>
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
        name: "ZhaoShang"
    }
</script>

<style lang="scss" scoped>
    .main{
        margin-bottom: 3%;
        height: 18%;
    }
    .dark{
        padding: 0 5px;
        background: rgba(225,225,225,.26);
        height: 33%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .light{
        padding: 0 5px;
        height: 33%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .wrap{
        width: 100%;
        height: 100%;
        padding-top: 10px;
    }
    .percent{
        display: flex;
        justify-content: flex-end;
    }
    .txt{
        text-indent: 0px;
         overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        display: flex;
        align-items: center;
    }
    .up{
        width: 0;
        height: 0;
        border-width: 14px;
        border-style: solid;
        border-color: transparent transparent #F19149 transparent;
        transform: translateY(-7px);
    }
    .down{
        width: 0;
        height: 0;
        border-width: 14px;
        border-style: solid;
        border-color:#00b7ee transparent transparent transparent;
        transform: translateY(7px);
    }
</style>