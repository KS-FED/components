/**
 * @description webpack 配置
 * @author zdzDesigner
 */
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var hljs = require('highlight.js');

module.exports = {
    entry: {
        css: __dirname + '/dev/styles/app.scss',
        app: __dirname + '/dev/doc/main.js',
        vueCore: __dirname + '/dev/doc/vueCore.js'
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:8].js',
        publicPath: '/dist/'
    },

    module: {
        loaders: [{
            test: /\.md$/,
            loader: 'vue-markdown-loader'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!ks-autobem-loader?type=css!sass-loader')
        }, {
            test: /\.(tpl|html)$/,
            loader: 'html'
        }, {
            test: /\.vue$/,
            loader: 'vue',
        }, {
            test: /\.js$/,
            // excluding some local linked packages.
            // for normal use cases only node_modules is needed.
            exclude: /(.\.min\.js)|node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader-path?limit=8192&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'
        }]
    },

    vueMarkdown: {
        // markdown-it config
        preset: 'default',
        breaks: true,

        highlight: function(str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="ks-hljs"><code>' +
                        hljs.highlight(lang, str, true).value +
                        '</code></pre>';
                } catch (__) {}
            }

            return '<pre class="ks-hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        },

        preprocess: function(MarkdownIt, Source) {
            // code inline
            MarkdownIt.renderer.rules.code_inline = function(tokens, idx, options, env, slf) {
                var token = tokens[idx];

                return '<code class="ks-code-inline"' + slf.renderAttrs(token) + '>' +
                    tokens[idx].content +
                    '</code>';
            };

            // 表格样式替换
            MarkdownIt.renderer.rules.table_open = function() {
                return '<div class="table-striped"><table class="table-entity">';
            };
            MarkdownIt.renderer.rules.table_close = function() {
                return '</table></div>';
            };

            return Source;
        },

        use: [
            /* markdown-it plugin */
            // require('markdown-it-xxx'),

            /* or */
            // [require('markdown-it-xxx'), 'this is options']
        ]
    },

    vue: {
        loaders: {
            scss: 'vue-style-loader!ks-autobem-loader?type=css!sass-loader',
            html: 'vue-html-loader!ks-autobem-loader?type=html',
            markdown: 'vue-markdown-loader'
        }
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.ProvidePlugin({
            'Vue': 'vue',
            'Vuex': 'vuex',
            'VueResource': 'vue-resource',
            'VueRouter': 'vue-router',
            'VueValidator': 'vue-validator'
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('app.css'),
        new webpack.optimize.DedupePlugin()
    ]

};