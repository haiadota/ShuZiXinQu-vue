<template>
    <div class="main">
        <p class="selectablefalse">
            <span class="txt">{{value}}</span>
        </p>
        <div class="three_line">
            <div class="left_line"></div>
            <div class="under_line"></div>
            <div class="right_line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Theme",
        props: ['value']
    }
</script>

<style lang="scss" scoped>
    .main {
        width: 100%;
        height: 4%;

        .txt {
            font-size: 19px;
            padding: 0 5px;
            color: #1ed2e3;
            font-family: 'FZZZHUNHJW';
        }

        .three_line {
            height: 0.2rem;
            display: flex;
            align-items: center;
            position: relative;

            .left_line {
                width: .5rem;
                height: .06rem;
                background: #00ffff;
            }

            .under_line {
                flex: 1;
                height: 0.021rem;
                background: rgba(0, 255, 255, 0.6);
                box-shadow: 0 0 0.6rem 0.12rem rgba(255, 255, 255, 0.2);
            }

            .right_line {
                width: .22rem;
                height: .03rem;
                position: absolute;
                right: 0;
                top: 0.19rem;
                background: #00ffff;
            }
        }
    }
</style>