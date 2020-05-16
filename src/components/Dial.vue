<template>
    <canvas id="myCanvas">您的浏览器不支持此标签</canvas>
</template>

<script>
    export default {
        name: "Dial",
        mounted() {
            (function () {
                var canvas = document.getElementById('myCanvas')
                let x = canvas.parentElement.offsetWidth
                let y = canvas.parentElement.offsetHeight
                let all = x < y ? x : y

                canvas.width = x
                canvas.height = y

                var ctx = canvas.getContext('2d')

                for (var i = 0; i < 60; i++) {
                    ctx.beginPath()
                    ctx.lineWidth = all / 120
                    //保存当前绘图环境
                    ctx.save()
                    //重置绘制起始位置(将圆心位置重置为0,0)
                    ctx.translate(x / 2, y / 2)
                    //旋转画布到一定的弧度 弧度=角度*PI/180
                    ctx.rotate(i * 6 * Math.PI / 180)
                    //设置绘制线条的起始位置
                    ctx.moveTo(0, all / 2.8)
                    ctx.strokeStyle = '#15ffff'
                    //设置线条的结束位置
                    ctx.lineTo(0, all / 2.5)
                    //绘制路径
                    ctx.stroke();
                    //还原初始的绘图环境
                    ctx.restore()
                    ctx.closePath()
                }
            })()
        }
    }
</script>

<style scoped>

</style>