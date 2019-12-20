const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const path = require('path')

module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      less: {
        modifyVars: {
          'hack': `true; @import "${path.join(__dirname,'./src/assets/css/theme.less')}";`
        }
      }
    },
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.chengyizhuanyun.com',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
  .loader('style-resources-loader')
  .options({
    patterns: [
      path.resolve(__dirname, './src/assets/css/public.less'),
    ],
  })
}