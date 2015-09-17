module.exports = {
    entry: "./entry.js", // 入口文件
    output: {
        path: __dirname, // 打包文件路径
        filename: "bundle.js" // 打包文件名
    },
    module: {
        loaders: [
            {
              test: /\.scss$/, // 对此类文件调用下面的loader
              loader: "style!css!sass" // 上面的scss调用这些loader
            },
            {
              test: /\.js$/, // 对js文件
              loader: "babel" // 调用babel进行ES6语法的转译
            }
        ]
    }
};
