import{_ as s,c as a,o as n,a as e}from"./app.11d790b3.js";const u=JSON.parse('{"title":"\u8DEF\u7531\u4E2D\u95F4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49\u4E2D\u95F4\u4EF6","slug":"\u5B9A\u4E49\u4E2D\u95F4\u4EF6"},{"level":2,"title":"\u5168\u5C40\u4E2D\u95F4\u4EF6","slug":"\u5168\u5C40\u4E2D\u95F4\u4EF6"},{"level":2,"title":"\u5C40\u90E8\u4E2D\u95F4\u4EF6","slug":"\u5C40\u90E8\u4E2D\u95F4\u4EF6"},{"level":2,"title":"\u4E2D\u95F4\u4EF6\u5904\u7406\u4E2D\u65AD","slug":"\u4E2D\u95F4\u4EF6\u5904\u7406\u4E2D\u65AD"}],"relativePath":"router/middleware.md"}'),l={name:"router/middleware.md"},o=e(`<h1 id="\u8DEF\u7531\u4E2D\u95F4\u4EF6" tabindex="-1">\u8DEF\u7531\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u8DEF\u7531\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h1><p>\u4E2D\u95F4\u4EF6\u662F\u4E00\u4E2A\u56FA\u5B9A\u7684\u51FD\u6570\u7B7E\u540D\uFF0C\u65E5\u540E\u4E5F\u8BB8\u4F1A\u6709\u6240\u8C03\u6574\uFF0C\u51FD\u6570\u901A\u8FC7\u8FD4\u56DE\u4E00\u4E2A <code>bool</code> \u6765\u5224\u65AD\u662F\u5426\u6267\u884C\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u3002</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Middleware</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">Ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u5B9A\u4E49\u4E2D\u95F4\u4EF6" tabindex="-1">\u5B9A\u4E49\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u5B9A\u4E49\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Before</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> aurora</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Middleware </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">ctx aurora</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">before</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u5168\u5C40\u4E2D\u95F4\u4EF6" tabindex="-1">\u5168\u5C40\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u5168\u5C40\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h2><p>\u76F4\u63A5\u8C03\u7528 <code>Use(Before())</code> \u65B9\u6CD5\u5373\u53EF,\u4EFB\u4F55\u63A5\u53E3\u6267\u884C\u4E4B\u524D\u90FD\u4F1A\u88AB <code>Before</code> \u4E2D\u95F4\u4EF6\u4F18\u5148\u5904\u7406\u3002</p><h2 id="\u5C40\u90E8\u4E2D\u95F4\u4EF6" tabindex="-1">\u5C40\u90E8\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u5C40\u90E8\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h2><p>\u5728\u6CE8\u518C\u51FD\u6570\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u53EF\u53D8\u53C2\u6570\uFF0C\u80FD\u7ED9\u4E00\u4E2A\u63A5\u53E3\u914D\u7F6E\u591A\u4E2A\u4E2D\u95F4\u4EF6</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Before</span><span style="color:#89DDFF;">())</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E2D\u95F4\u4EF6\u5904\u7406\u4E2D\u65AD" tabindex="-1">\u4E2D\u95F4\u4EF6\u5904\u7406\u4E2D\u65AD <a class="header-anchor" href="#\u4E2D\u95F4\u4EF6\u5904\u7406\u4E2D\u65AD" aria-hidden="true">#</a></h2><p>\u67D0\u4E2A\u4E2D\u95F4\u4EF6\u5982\u679C\u903B\u8F91\u5904\u7406\u5931\u8D25\uFF0C\u6211\u4EEC\u9700\u8981\u6B63\u5E38\u7684\u5BF9\u5BA2\u6237\u7AEF\u505A\u51FA\u54CD\u5E94\uFF0C\u901A\u8FC7 <code>aurora.Ctx</code> \u7684 <code>func (c Ctx) Return(value ...interface{})</code> \u6765\u5B8C\u6210\u3002</p>`,12),p=[o];function r(t,c,i,D,d,F){return n(),a("div",null,p)}var A=s(l,[["render",r]]);export{u as __pageData,A as default};
