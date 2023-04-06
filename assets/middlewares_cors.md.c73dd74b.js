import{_ as s,c as a,o as n,N as o}from"./chunks/framework.cff67d0c.js";const C=JSON.parse('{"title":"跨域中间件","description":"","frontmatter":{},"headers":[],"relativePath":"middlewares/cors.md"}'),l={name:"middlewares/cors.md"},p=o(`<h1 id="跨域中间件" tabindex="-1">跨域中间件 <a class="header-anchor" href="#跨域中间件" aria-label="Permalink to &quot;跨域中间件&quot;">​</a></h1><p><code>aurora</code> 源码中内置了对跨域中间件的支持，位置在 <code>aurora/middleware/cors/cors.go</code> 中基本使用方式如下</p><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Server 全局加载</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Server</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	cors </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">New</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Domain</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MethodPost</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Domain</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MethodGet</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// 注册中间件</span></span>
<span class="line"><span style="color:#A6ACCD;">	server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Use</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Cors</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,3),e=[p];function r(t,c,D,F,y,i){return n(),a("div",null,e)}const d=s(l,[["render",r]]);export{C as __pageData,d as default};