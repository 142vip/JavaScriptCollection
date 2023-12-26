import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-be253e4c.js";const t={},e=p(`<h1 id="配置gzip" tabindex="-1"><a class="header-anchor" href="#配置gzip" aria-hidden="true">#</a> 配置gzip</h1><blockquote><p>nginx返回js文件的时候，会判断是否开启gzip，然后压缩后再还给浏览器。但是nginx其实会先判断是否有.gz后缀的相同文件，有的话直接返回，nginx自己不再进行压缩处理。而压缩是要时间的！不同级别的压缩率花的时间也不一样。所以提前准备gz文件，可以更加优化。而且你可以把压缩率提高点，这样带宽消耗会更小</p></blockquote><h3 id="安装compression-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#安装compression-webpack-plugin" aria-hidden="true">#</a> 安装compression-webpack-plugin</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> compression-webpack-plugin --save-dev
</code></pre></div><h3 id="配置vue-config-js文件" tabindex="-1"><a class="header-anchor" href="#配置vue-config-js文件" aria-hidden="true">#</a> 配置vue.config.js文件</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入compression-webpack-plugin</span>
<span class="token keyword">const</span> CompressionWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 定义压缩文件类型</span>
<span class="token keyword">const</span> productionGzipExtensions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">]</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 配置反向代理</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://172.31.120.61:8080/&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// target: &#39;http://172.31.120.158:8080/&#39;,</span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">CompressionWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[path].gz[query]&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;\\\\.(&#39;</span> <span class="token operator">+</span> productionGzipExtensions<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;|&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;)$&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minRatio</span><span class="token operator">:</span> <span class="token number">0.8</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="修改nginx配置" tabindex="-1"><a class="header-anchor" href="#修改nginx配置" aria-hidden="true">#</a> 修改nginx配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token function">gzip</span> on<span class="token punctuation">;</span> <span class="token comment">#开启或关闭gzip on off</span>
 gzip_disable <span class="token string">&quot;msie6&quot;</span><span class="token punctuation">;</span> <span class="token comment">#不使用gzip IE6</span>
 gzip_min_length 100k<span class="token punctuation">;</span> <span class="token comment">#gzip压缩最小文件大小，超出进行压缩（自行调节）</span>
 gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span> <span class="token comment">#buffer 不用修改</span>
 gzip_comp_level <span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">#压缩级别:1-10，数字越大压缩的越好，时间也越长</span>
 gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png<span class="token punctuation">;</span> <span class="token comment">#  压缩文件类型</span>
</code></pre></div><p>上述nginx的配置，如果有域名解析，建议配置在nginx的域名解析处，直接放在网关效果不大！</p>`,9),o=[e];function c(r,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","nginx-gzip.html.vue"]]);export{k as default};
