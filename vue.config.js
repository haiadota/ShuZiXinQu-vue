const pxtovw = require('postcss-px-to-viewport');
module.exports = {
    devServer: {
        disableHostCheck: true
    },
    publicPath: './',
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: `@import "~@/assets/style/variables.scss";`
            },
            css:{
                //给css-loader传递选项
            },
            postcss: {
                //给postcss-loader传递选项
                plugins: [
                    new pxtovw({
                        unitToConvert: 'px', //需要转换的单位，默认为"px"；
                        "viewportWidth": "1920", //视窗的宽度，对应的是我们设计稿的宽度
                        "viewportHeight": "1080",
                        unitPrecision: 5, //单位转换后保留的小数位数
                        propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
                        viewportUnit: 'vw', //转换后的视口单位
                        fontViewportUnit: 'vw', //转换后字体使用的视口单位
                        selectorBlackList: [], //不进行转换的css选择器，继续使用原有单位
                        minPixelValue: 1, //设置最小的转换数值
                        mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
                        replace: true, //是否直接更换属性值，而不添加备用属性
                        exclude: [/node_modules/] //忽略某些文件夹下的文件
                    })
                ]
            }
        }
    }
}
