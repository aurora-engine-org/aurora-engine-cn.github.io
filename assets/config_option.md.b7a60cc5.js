import{_ as s,c as a,o as n,a as e}from"./app.c96cf21e.js";const y=JSON.parse('{"title":"\u914D\u7F6E\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"Debug \u65E5\u5FD7","slug":"debug-\u65E5\u5FD7"},{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"\u6587\u4EF6\u4E0A\u4F20","slug":"\u6587\u4EF6\u4E0A\u4F20"},{"level":2,"title":"\u9759\u6001\u8D44\u6E90","slug":"\u9759\u6001\u8D44\u6E90"}],"relativePath":"config/option.md"}'),o={name:"config/option.md"},l=e(`<h1 id="\u914D\u7F6E\u9879" tabindex="-1">\u914D\u7F6E\u9879 <a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a></h1><p>\u914D\u7F6E\u9879\u5BF9 <code>Aurora</code> \u6574\u4E2A\u5B9E\u4F8B\u63D0\u4F9B\u4E86\u4E00\u4E9B\u81EA\u5B9A\u4E49\u9009\u9879\u7684\u652F\u6301\uFF0C\u76EE\u524D\u4E3B\u8981\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u65E5\u5FD7\uFF0C\u9759\u6001\u8D44\u6E90\u505A\u4E86\u652F\u6301\u3002</p><h2 id="debug-\u65E5\u5FD7" tabindex="-1">Debug \u65E5\u5FD7 <a class="header-anchor" href="#debug-\u65E5\u5FD7" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u5F00\u542FDebug\u914D\u7F6E\u9879\u53EF\u4EE5\u67E5\u770B\u542F\u52A8\u8FC7\u7A0B\u4E2D\u7684\u63A5\u53E3\u6CE8\u518C\u7EC6\u8282\u7B49\u4FE1\u606F\u3002</p><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ConfigFilePath</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">configPath </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> Option</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>ConfigFilePath</code>\u53EF\u4EE5\u6307\u5B9A\u670D\u52A1\u5668\u672C\u5730\u8FD0\u884C\u73AF\u5883\u7684\u5177\u4F53\u4F4D\u7F6E\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E00\u4E2A\u9879\u76EE\u5B58\u5728\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EA\u8981\u5728\u9879\u76EE\u8DEF\u5F84\u4E0B\u65E0\u8BBA\u5728\u54EA\u91CC\u90FD\u53EF\u4EE5\u67E5\u627E\u5230\uFF0C\u63D0\u4F9B\u7684\u76EE\u7684\u662F\u5207\u6362\u672C\u5730\u73AF\u5883\u7684\u4E0D\u540C\u7248\u672C\u914D\u7F6E\u3002</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Config</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">config web</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Config</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> Option</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>Config</code> \u76F4\u63A5\u66FF\u6362 <code>Aurora</code>\u7684\u9ED8\u8BA4\u914D\u7F6E\u5B9E\u4F8B\uFF0C\u6267\u884C\u540E\u5C06\u4E0D\u4F1A\u521D\u59CB\u5316\u672C\u5730\u914D\u7F6E\uFF0C\u9002\u5408\u53BB\u505A\u8FDC\u7A0B\u914D\u7F6E\u4E2D\u5FC3\u7684\u8BFB\u53D6\u3002</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LoadConfig</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cnf </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> Option</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>LoadConfig</code> \u53EA\u9002\u7528\u4E8E \u672C\u5730\u914D\u7F6E\u6587\u4EF6 embed \u65B9\u5F0F\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\u6570\u636E\uFF0C\u521D\u59CB\u5316\u914D\u7F6E\u5B9E\u4F8B\u8FD8\u662F\u9ED8\u8BA4\u7684,\u5982\u679C\u60F3\u8981 \u7B2C\u4E09\u65B9\u6570\u636E\u6E90 \u8BF7\u4F7F\u7528 Config \u65B9\u6CD5\u66FF\u6362\u6389 \u9ED8\u8BA4\u7684\u914D\u7F6E\u5B9E\u4F8B</p><h2 id="\u6587\u4EF6\u4E0A\u4F20" tabindex="-1">\u6587\u4EF6\u4E0A\u4F20 <a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MaxMultipartMemory</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">size </span><span style="color:#C792EA;">int64</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> Option </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>MaxMultipartMemory</code> \u7528\u4E8E\u8BBE\u7F6E\u5168\u5C40web\u670D\u52A1\u6587\u4EF6\u4E0A\u4F20\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u7684\u5168\u5C40\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F\u4E3A <code>8 &lt;&lt; 20</code></p><h2 id="\u9759\u6001\u8D44\u6E90" tabindex="-1">\u9759\u6001\u8D44\u6E90 <a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Static</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fs embed</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FS</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> Option</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>Static</code> \u7528\u4E8E\u914D\u7F6E\u9759\u6001\u8D44\u6E90\u6253\u5305</p>`,17),p=[l];function c(r,t,i,d,u,D){return n(),a("div",null,p)}var g=s(o,[["render",c]]);export{y as __pageData,g as default};
