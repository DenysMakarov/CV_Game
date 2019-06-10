const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {                        //// вход
        app: "./src/index.js"
    },
    output:{                        //// выход
        filename: '[name].js',
        // // filename: '[name].js', можно так если есть еще одна точка вхождения
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist/'         //// что бы не добавлять этот путь в картиках нужно отключить и вкл в dev ser contentBase: path.join(__dirname, "dist")
    },
    module: {
        rules:[{
            test: /\.js$/,              //// берем все js и с помощью
            loader: "babel-loader",     //// него конвертирует для всех браузеров
            exclude: "/node-modules/"   //// исключает
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                outputPath:'images',
                name:'[name].[ext]'
            }
        }, {
            test: /\.(eot|svg|ttf|woff|otf|woff2)$/,
            loader: 'file-loader',
            options: {
                outputPath:'fonts',
                name:'[name].[ext]'
            }
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config:{ path: 'src/js/postcss.config.js'}}
                },
                {
                    loader: "sass-loader",
                    options: {sourceMap: true}
                }
            ]
        },
            {
            test: /\.css$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",               //// позволяет импортировать css в js
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: { path: 'src/js/postcss.config.js'}}
                }
            ]
        }
        ]
    },
    devServer:{
        overlay: true,                                 //// выводит ошибки в черном окне
        contentBase: path.join(__dirname, "dist"),     //// в какой папке читать html
        compress: true,
        host: '0.0.0.0',
        useLocalIp: true,
        port: 3030 //// порт
    },
    plugins: [                      //// регестрируем плагины => смотр. на оф сфйтах
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
};


//// npm install --save-dev mini-css-extract-plugin
//// npm i --save-dev css-loader style-loader
//// npm i sass-loader node-sass --save-dev
//// npm i postcss-loader autoprefixer css-mqpacker cssnano --save-dev
