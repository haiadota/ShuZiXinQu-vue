<template>
    <div class="main parent-dom">
        <vuescroll :ops="ops">
            <div class="child-dom wrap">
                <div class="title">001-排污口</div>
                <video class="item" src="../../../../public/video/超然街与锦湖大路交叉口（西侧中间绿化带路灯杆）.mp4" muted autoplay="autoplay" controls="controls"></video>
            </div>
        </vuescroll>
    </div>
</template>

<script>
    import vuescroll from 'vuescroll/dist/vuescroll-native'

    export default {
        name: "CarVideo",
        components: {vuescroll},
        data() {
            return {
                ops: {
                    vuescroll: {scroller: {minZoom: 1, maxZoom: 1,}},
                    scrollPanel: {scrollingX: false,},
                    rail: {},
                    bar: {
                        keepShow: true,
                        background: '#c0c0c0'
                    },
                },
                list: [

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 20%;
        .wrap{
            width: 100%;
            margin-bottom: 0px;
            .title{
                padding-bottom: 5px;
            }
            .item{
                width: 100%;
            }
        }
    }
</style>