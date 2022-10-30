import{_ as s,c as n,o as a,a as e}from"./app.06bcd442.js";const y=JSON.parse('{"title":"\u65E5\u5FD7","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49\u65E5\u5FD7\u66FF\u6362","slug":"\u81EA\u5B9A\u4E49\u65E5\u5FD7\u66FF\u6362"}],"relativePath":"config/log.md"}'),l={name:"config/log.md"},p=e(`<h1 id="\u65E5\u5FD7" tabindex="-1">\u65E5\u5FD7 <a class="header-anchor" href="#\u65E5\u5FD7" aria-hidden="true">#</a></h1><h2 id="\u81EA\u5B9A\u4E49\u65E5\u5FD7\u66FF\u6362" tabindex="-1">\u81EA\u5B9A\u4E49\u65E5\u5FD7\u66FF\u6362 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u65E5\u5FD7\u66FF\u6362" aria-hidden="true">#</a></h2><p><code>web.Log</code>\u65E5\u5FD7\u63A5\u53E3</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Log</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Info</span><span style="color:#89DDFF;">(...interface{})</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Error</span><span style="color:#89DDFF;">(...interface{})</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Debug</span><span style="color:#89DDFF;">(...interface{})</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Panic</span><span style="color:#89DDFF;">(...interface{})</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Warn</span><span style="color:#89DDFF;">(...interface{})</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 <code>logrus</code></p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Use</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">logrus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">New</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">aurora</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Run</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6),o=[p];function r(c,t,i,F,D,A){return a(),n("div",null,o)}var u=s(l,[["render",r]]);export{y as __pageData,u as default};
