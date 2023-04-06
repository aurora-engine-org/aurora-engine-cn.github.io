import{_ as s,c as a,o as n,N as e}from"./chunks/framework.cff67d0c.js";const C=JSON.parse('{"title":"错误捕捉器","description":"","frontmatter":{},"headers":[],"relativePath":"config/recover.md"}'),l={name:"config/recover.md"},p=e(`<h1 id="错误捕捉器" tabindex="-1">错误捕捉器 <a class="header-anchor" href="#错误捕捉器" aria-label="Permalink to &quot;错误捕捉器&quot;">​</a></h1><p><code>aurora</code> 内部自带默认的错误捕捉器，其目的在于不让web服务遇到panic而停止服务，内置错误捕捉器不一定满足大多人的需要，因此提供一个自定义方式。</p><h2 id="定义捕捉器" tabindex="-1">定义捕捉器 <a class="header-anchor" href="#定义捕捉器" aria-label="Permalink to &quot;定义捕捉器&quot;">​</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Recover</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> web</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Recover </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">w http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ResponseWriter</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">recover</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="使用自定义捕捉器" tabindex="-1">使用自定义捕捉器 <a class="header-anchor" href="#使用自定义捕捉器" aria-label="Permalink to &quot;使用自定义捕捉器&quot;">​</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Server</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Use</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Recover</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,6),o=[p];function r(t,c,D,i,F,y){return n(),a("div",null,o)}const d=s(l,[["render",r]]);export{C as __pageData,d as default};