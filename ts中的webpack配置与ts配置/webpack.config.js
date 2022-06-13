//引入一个包
const path = require('path')

// 下方两个插件是让我们可以优雅的写代码 让原本需要手动操作的步骤自动操作 json文件中还配置了自动打开服务的包
// 引入html插件  可以自动生成html文件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入插件 自动清空dist内文件 始终保持最新版本的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


// 写入所有webpack配置信息
module.exports = {
    entry: "./src/index.ts",
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的文件名
        filename: 'bundle.js',
        // 告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false
        },
    },
    mode: 'production',
    // 指定打包时使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 从后往前的执行顺序 下方数组内的配置
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        targets: {
                                            // 要兼容的目标浏览器
                                            "chrome": "88"
                                        },
                                        // 指定corejs'的版本
                                        "corejs": "3",
                                        // 使用corejs的方法“usage”   表示按需加载
                                        "useBuiltIns": "usage"

                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',],
                exclude: /node-modules/,
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: '网页名',
            // 用src目录下的index.html为模板在bundle 后的dist文件夹下生成html文件 并同时引入了js
            template: './src/index.html'
        },
            new CleanWebpackPlugin()
        ),
    ],
    resolve: {
        // 可以让ts文件进行模块化引入
        extensions: ['.ts', '.js']
    }
}
