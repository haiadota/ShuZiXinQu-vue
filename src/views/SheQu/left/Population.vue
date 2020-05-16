<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>户籍人口</div>
            <div><span class="num">{{'68'}}</span></div>
            <div>万人</div>
        </div>
        <div class="list">
            <div class="option">
                <div>出生率</div>
                <div><span class="num">{{'8.24'}}</span><span> %</span></div>
                <!--<div v-if="false" class="up"></div>-->
                <!--<div v-else class="down"></div>-->
            </div>
            <div class="option">
                <div>死亡率</div>
                <div><span class="num">{{'3.89'}}</span><span >%</span></div>
                <!--<div v-if="true" class="up"></div>-->
                <!--<div v-else class="down"></div>-->
            </div>
            <div class="option">
                <div>自然增长率</div>
                <div><span class="num">{{'4.36'}}</span><span> %</span></div>
                <!--<div v-if="false" class="up"></div>-->
                <!--<div v-else class="down"></div>-->
            </div>
            <div class="option">
                <div>城镇化率</div>
                <div><span class="num">{{'39'}}</span><span> %</span></div>
                <!--<div v-if="true" class="up"></div>-->
                <!--<div v-else class="down"></div>-->
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
        height: 28%;
    }

    .txt {
        padding-left: 15px;
        height: 20%;
        display: flex;
        align-items: center;

        .bar {
            margin-right: 6px;
            background: #00bdff;
            width: 2px;
            height: 18px;
        }

        .num {
            font-family: 'RuiZi';
            padding: 0 5px 0 20px;
            font-size: 28px;
        }
    }
    .list{
        padding-top: 6px;
        height: 80%;
        .option{
            padding: 5% 0 4% 15%;
            height: 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .num {
                font-family: 'RuiZi';
                padding: 0 3px 0 30px;
                font-size: 22px;
                line-height: 16px;
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
        }
    }
</style>