<template>
    <div class="loading event_all selectablefalse">
        <div class="container">
            <div class="one common"></div>
            <div class="two common"></div>
            <div class="three common"></div>
            <div class="four common"></div>
            <div class="five common"></div>
            <div class="six common"></div>
            <div class="seven common"></div>
            <div class="eight common"></div>
        </div>
        <div class="txt">加载中...</div>
    </div>
</template>

<script>
    export default {
        name: "Loading",
    }
</script>

<style scoped lang="scss">
    .loading{
        z-index: 3;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.25);
    }
    .txt{
        font-size: 40px;
        color: rgba(255,255,255,.8);
        text-align: center;
    }
    .container {
        width: 40vw;
        height: 40vw;
        margin: auto;
    }

    .common {
        height: 5vw;
        max-height: 100%;
        overflow: auto;
        width: 2vw;
        margin: auto;
        max-width: 100%;
        position: absolute;
        border-radius: 0vw 10vw 0vw 10vw;
        box-shadow: inset 0vw 0vw 0vw .1vw #E645D0, 0vw 0vw 1.5vw 0vw #E645D0;
    }

    .one {
        transform: rotate(45deg);
        left: 0;
        right: 0;
        top: 0;
        bottom: 7.5vw;
    }

    .two {
        transform: rotate(90deg);
        left: 5.5vw;
        right: 0;
        top: 0;
        bottom: 5.5vw;
    }

    .three {
        transform: rotate(135deg);
        left: 7.5vw;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .four {
        transform: rotate(180deg);
        left: 5.5vw;
        right: 0;
        top: 5.5vw;
        bottom: 0;
    }

    .five {
        transform: rotate(225deg);
        left: 0;
        right: 0;
        top: 7.5vw;
        bottom: 0;
    }

    .six {
        transform: rotate(270deg);
        left: 0;
        right: 5.5vw;
        top: 5.5vw;
        bottom: 0;
    }

    .seven {
        transform: rotate(315deg);
        left: 0;
        right: 7.5vw;
        top: 0;
        bottom: 0;
    }

    .eight {
        transform: rotate(360deg);
        left: 0;
        right: 5.5vw;
        top: 0;
        bottom: 5.5vw;
    }

    .one {
        animation: one 1s ease infinite;
        -moz-animation: one 1s ease infinite;
        /* Firefox */
        -webkit-animation: one 1s ease infinite;
        /* Safari and Chrome */
        -o-animation: one 1s ease infinite;
        /* Opera */
    }

    @keyframes one {
        0%,
        100% {
        }
        50% {
            box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
        }
    }

    .two {
        animation: two 1s .125s ease infinite;
        -moz-animation: two 1s .125s ease infinite;
        /* Firefox */
        -webkit-animation: two 1s .125s ease infinite;
        /* Safari and Chrome */
        -o-animation: two 1s .125s ease infinite;
        /* Opera */
    }

    @keyframes two {
        0%,
        100% {
        }
        50% {
            box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
        }
    }

    .three {
        animation: three 1s .25s ease infinite;
        -moz-animation: three 1s .25s ease infinite;
        /* Firefox */
        -webkit-animation: three 1s .25s ease infinite;
        /* Safari and Chrome */
        -o-animation: three 1s .25s ease infinite;
        /* Opera */
    }

    @keyframes three {
        0%,
        100% {
        }
        50% {
            box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
        }
    }

    .four {
        animation: four 1s .375s ease infinite;
        -moz-animation: four 1s .375s ease infinite;
        /* Firefox */
        -webkit-animation: four 1s .375s ease infinite;
        /* Safari and Chrome */
        -o-animation: four 1s .375s ease infinite;
        /* Opera */
    }

    @keyframes four {
        0%,
        100% {
        }
        50% {
            box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
        }
    }

    .five {
        animation: five 1s .5s ease infinite;
        -moz-animation: five 1s .5s ease infinite;
        /* Firefox */
        -webkit-animation: five 1s .5s ease infinite;
        /* Safari and Chrome */
        -o-animation: five 1s .5s ease infinite;
        /* Opera */
    }

    @keyframes five {
        0%,
        100% {
        }
        50% {
            box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
        }
    }

    .six {
        animation: six 1s .625s ease infinite;
        -moz-animation: six 1s .625s ease infinite;
        /* Firefox */
        -webkit-animation: six 1s .625s ease infinite;
        /* Safari and Chrome */
        -o-animation: six 1s .625s ease infinite;
        /* Opera */
    }

    @keyframes six {
        0%,
        100% {
        }
        50% {
            box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
        }
    }

    .seven {
        animation: seven 1s .750s ease infinite;
        -moz-animation: seven 1s .750s ease infinite;
        /* Firefox */
        -webkit-animation: seven 1s .750s ease infinite;
        /* Safari and Chrome */
        -o-animation: seven 1s .750s ease infinite;
        /* Opera */
    }

    @keyframes seven {
        0%,
        100% {
        }
        50% {
            box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
        }
    }

    .eight {
        animation: eight 1s .875s ease infinite;
        -moz-animation: eight 1s .875s ease infinite;
        /* Firefox */
        -webkit-animation: eight 1s .875s ease infinite;
        /* Safari and Chrome */
        -o-animation: eight 1s .875s ease infinite;
        /* Opera */
    }

    @keyframes eight {
        0%,
        100% {
        }
        50% {
            box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
        }
    }

    .container {
        animation: container 5s linear infinite;
        -moz-animation: container 5s linear infinite;
        /* Firefox */
        -webkit-animation: container 5s linear infinite;
        /* Safari and Chrome */
        -o-animation: container 5s linear infinite;
        /* Opera */
    }

    @keyframes container {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }

</style>