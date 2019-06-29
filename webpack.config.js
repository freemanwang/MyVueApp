const path = require('path')

let HtmlWebpackPlugin = require('html-webpack-plugin')

let webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
    mode:'development',
    entry:  './src/main.js',//入口，表示 要使用 webpack 打包哪个文件
    output:{
        filename:'bundle.js',  //指定输出文件的名称
        path: path.resolve(__dirname, 'dist')//出口，指定打包好的文件输出到哪个目录中去
    },
    devServer: {  //另一种配置法，写在server；也可以写在package里secipt
        port:80,
        open:true,
        contentBase:'src',
    //     hot:true,//热更新第一步
    },
    plugins:[ //数组，放着所有的 webpack 插件. 插件要 new 新对象 放进去
    //     //热更新第三步
    //     new  webpack.HotModuleReplacementPlugin(),
    //     new HtmlWebpackPlugin({
    //         template: "./src/index.html",  //指定模板，根据该页面生成内存中的页面
    //         filename: "index.html"   //指定生成页面的名称，生成在内存中
    //     }),
        new VueLoaderPlugin()
    ],
    module: { //配置所有第三方模块加载器
        rules: [  //所有第三方模块匹配规则
            {test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader"},
    //         //处理字体文件的loader对象
            {test:/\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
    //         //    配置babel 来转换高级ES语法
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'},//处理 .vue 的loader
        ]
    },
    resolve: {
        alias: { //修改 vue 被导入时包的路径，指向完整版
            //一般开发是这么做的
            // "vue$": "vue/dist/vue.js"
        }
    }
}