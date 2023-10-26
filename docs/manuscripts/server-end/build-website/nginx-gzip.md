# 配置gzip

> nginx返回js文件的时候，会判断是否开启gzip，然后压缩后再还给浏览器。但是nginx其实会先判断是否有.gz后缀的相同文件，有的话直接返回，nginx自己不再进行压缩处理。而压缩是要时间的！不同级别的压缩率花的时间也不一样。所以提前准备gz文件，可以更加优化。而且你可以把压缩率提高点，这样带宽消耗会更小

### 安装compression-webpack-plugin

```bash
npm compression-webpack-plugin --save-dev
```

### 配置vue.config.js文件

```js
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

module.exports = {
  // 配置反向代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.31.120.61:8080/',
        // target: 'http://172.31.120.158:8080/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
}
```

### 修改nginx配置

```bash
 gzip on; #开启或关闭gzip on off
 gzip_disable "msie6"; #不使用gzip IE6
 gzip_min_length 100k; #gzip压缩最小文件大小，超出进行压缩（自行调节）
 gzip_buffers 4 16k; #buffer 不用修改
 gzip_comp_level 8; #压缩级别:1-10，数字越大压缩的越好，时间也越长
 gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png; #  压缩文件类型
```

上述nginx的配置，如果有域名解析，建议配置在nginx的域名解析处，直接放在网关效果不大！
