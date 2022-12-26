import{_ as s,c as n,o as a,a as l}from"./app.af55ad6b.js";const C=JSON.parse('{"title":"\u9519\u8BEF\u6355\u6349\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49\u6355\u6349\u5668","slug":"\u5B9A\u4E49\u6355\u6349\u5668"},{"level":2,"title":"\u4F7F\u7528\u81EA\u5B9A\u4E49\u6355\u6349\u5668","slug":"\u4F7F\u7528\u81EA\u5B9A\u4E49\u6355\u6349\u5668"}],"relativePath":"config/recover.md"}'),e={name:"config/recover.md"},p=l(`<h1 id="\u9519\u8BEF\u6355\u6349\u5668" tabindex="-1">\u9519\u8BEF\u6355\u6349\u5668 <a class="header-anchor" href="#\u9519\u8BEF\u6355\u6349\u5668" aria-hidden="true">#</a></h1><p><code>aurora</code> \u5185\u90E8\u81EA\u5E26\u9ED8\u8BA4\u7684\u9519\u8BEF\u6355\u6349\u5668\uFF0C\u5176\u76EE\u7684\u5728\u4E8E\u4E0D\u8BA9web\u670D\u52A1\u9047\u5230panic\u800C\u505C\u6B62\u670D\u52A1\uFF0C\u5185\u7F6E\u9519\u8BEF\u6355\u6349\u5668\u4E0D\u4E00\u5B9A\u6EE1\u8DB3\u5927\u591A\u4EBA\u7684\u9700\u8981\uFF0C\u56E0\u6B64\u63D0\u4F9B\u4E00\u4E2A\u81EA\u5B9A\u4E49\u65B9\u5F0F\u3002</p><h2 id="\u5B9A\u4E49\u6355\u6349\u5668" tabindex="-1">\u5B9A\u4E49\u6355\u6349\u5668 <a class="header-anchor" href="#\u5B9A\u4E49\u6355\u6349\u5668" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Recover</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> web</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Recover </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">w http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ResponseWriter</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">recover</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u4F7F\u7528\u81EA\u5B9A\u4E49\u6355\u6349\u5668" tabindex="-1">\u4F7F\u7528\u81EA\u5B9A\u4E49\u6355\u6349\u5668 <a class="header-anchor" href="#\u4F7F\u7528\u81EA\u5B9A\u4E49\u6355\u6349\u5668" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Server</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Use</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Recover</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,6),o=[p];function r(c,t,D,F,i,y){return a(),n("div",null,o)}var d=s(e,[["render",r]]);export{C as __pageData,d as default};
