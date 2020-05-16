<template>
    <div class="main parent-dom">
        <vuescroll :ops="ops">
            <div class="child-dom wrap">
                <video class="item" src="../../../../public/video/光谷大街与创新路交叉口（西侧路灯杆）.mp4" muted autoplay="autoplay" controls="controls"></video>
            </div>
            <div class="child-dom wrap">
                <video class="item" src="../../../../public/video/众恒路月光谷大街交叉口（西北角路灯杆).mp4" muted autoplay="autoplay" controls="controls"></video>
            </div>
            <div class="child-dom wrap">
                <video class="item" src="../../../../public/video/开运街与蔚山路交叉路口（西南角广场路灯杆）.mp4" muted autoplay="autoplay" controls="controls"></video>
            </div>
            <div class="child-dom wrap">
                <video class="item" src="../../../../public/video/蔚山路与茂祥街交汇处（东北角监控）.mp4" muted autoplay="autoplay" controls="controls"></video>
            </div>
        </vuescroll>
    </div>
</template>

<script>
    import vuescroll from 'vuescroll/dist/vuescroll-native'

    export default {
        name: "VideoScrollList",
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
        height: 36%;
        .wrap{
            width: 100%;
            margin-bottom: 5px;
            .item{
                width: 97%;
            }
        }
    }
</style>