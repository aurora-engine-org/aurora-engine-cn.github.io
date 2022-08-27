import{_ as s,c as n,o as a,a as l}from"./app.11d790b3.js";const d=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"Go \u7248\u672C","slug":"go-\u7248\u672C"},{"level":2,"title":"\u5BFC\u5165\u4F9D\u8D56","slug":"\u5BFC\u5165\u4F9D\u8D56"},{"level":2,"title":"\u521B\u5EFA\u670D\u52A1\u5668","slug":"\u521B\u5EFA\u670D\u52A1\u5668"},{"level":3,"title":"\u7B2C\u4E00\u6B65 \u521B\u5EFAServe","slug":"\u7B2C\u4E00\u6B65-\u521B\u5EFAserve"},{"level":3,"title":"\u7B2C\u4E8C\u6B65 \u521B\u5EFA\u5B9E\u73B0\u63A5\u53E3","slug":"\u7B2C\u4E8C\u6B65-\u521B\u5EFA\u5B9E\u73B0\u63A5\u53E3"},{"level":3,"title":"\u7B2C\u4E09\u6B65 \u542F\u52A8\u670D\u52A1\u5668","slug":"\u7B2C\u4E09\u6B65-\u542F\u52A8\u670D\u52A1\u5668"}],"relativePath":"introduce/start.md"}'),e={name:"introduce/start.md"},p=l(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u5E2E\u52A9\u60A8\u4ECE\u96F6\u5F00\u59CB\u6784\u5EFA\u4E00\u4E2A <code>Aurora web</code> \u9879\u76EE</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u672C\u6559\u7A0B\u4E5F\u5047\u8BBE\u60A8\u6709\u4E00\u5B9A\u7684\u7F16\u7A0B\u57FA\u7840\uFF0C\u80FD\u591F\u5927\u81F4\u660E\u767DGO\u8BED\u8A00\u4EE3\u7801\u7684\u610F\u601D\uFF0C\u5982\u679C\u60A8\u5728\u9605\u8BFBGo\u4EE3\u7801\u65B9\u9762\u9047\u89C1\u95EE\u9898\uFF0C\u53EF\u4EE5\u8BBF\u95EE <a href="https://golang.google.cn/" target="_blank" rel="noreferrer">golang</a>\u3002</p></div><h2 id="go-\u7248\u672C" tabindex="-1">Go \u7248\u672C <a class="header-anchor" href="#go-\u7248\u672C" aria-hidden="true">#</a></h2><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">go1.19</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u5BFC\u5165\u4F9D\u8D56" tabindex="-1">\u5BFC\u5165\u4F9D\u8D56 <a class="header-anchor" href="#\u5BFC\u5165\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">gitee.com/aurora-engine/aurora</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u521B\u5EFA\u670D\u52A1\u5668" tabindex="-1">\u521B\u5EFA\u670D\u52A1\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>\u521B\u5EFA\u4E00\u4E2A\u7ED3\u6784\u4F53\uFF0C\u5D4C\u5957\u4E00\u4E2A <code>*aurora.Engine</code> \u5B9E\u4F8B\u3002</p><h3 id="\u7B2C\u4E00\u6B65-\u521B\u5EFAserve" tabindex="-1">\u7B2C\u4E00\u6B65 \u521B\u5EFAServe <a class="header-anchor" href="#\u7B2C\u4E00\u6B65-\u521B\u5EFAserve" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Server \u5D4C\u5957Engine\u5B9A\u4E49\u4E00\u4E2A\u670D\u52A1 \u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Server</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">aurora</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Engine</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5B9E\u73B0 <code>aurora.Application</code> \u63A5\u53E3\u4E2D\u7684\u4E24\u4E2A\u65B9\u6CD5, \u63A5\u53E3\u5B9A\u4E49\u5982\u4E0B,\u9664\u4E86<code>Server()</code> \u548C <code>Router()</code> \u5176\u4ED6\u65B9\u6CD5\u5747\u7531 <code>*aurora.Engine</code> \u5B9E\u73B0\u4E86</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Application</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Use</span><span style="color:#89DDFF;">(...interface{})</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Server</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">ioc</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Router</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u7B2C\u4E8C\u6B65-\u521B\u5EFA\u5B9E\u73B0\u63A5\u53E3" tabindex="-1">\u7B2C\u4E8C\u6B65 \u521B\u5EFA\u5B9E\u73B0\u63A5\u53E3 <a class="header-anchor" href="#\u7B2C\u4E8C\u6B65-\u521B\u5EFA\u5B9E\u73B0\u63A5\u53E3" aria-hidden="true">#</a></h3><p>\u5F00\u59CB\u5B9E\u73B0\u63A5\u53E3, <code>Server()</code> \u51FD\u6570\u4EC5\u7528\u4E8E\u52A0\u8F7D\u670D\u52A1\u8FD0\u884C\u671F\u95F4\u7684\u4F9D\u8D56\u7EC4\u4EF6\uFF0C<code>Router()</code> \u51FD\u6570\u5219\u8D1F\u8D23\u5B9A\u4E49\u670D\u52A1\u7684\u8DEF\u7531\u90E8\u5206\uFF0C\u4ED6\u4EEC\u5728\u67D0\u4E9B\u7279\u5B9A\u7684\u60C5\u51B5\u4E0B\u9700\u8981\u4E25\u683C\u533A\u5206\u3002 \u4E0B\u9762\u7684\u5B9E\u73B0\u4E2D\u5728 <code>Router()</code> \u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A <code>Get</code> \u8BF7\u6C42\uFF0C\u8BF7\u6C42\u8DEF\u5F84\u4E3A <code>/</code>\u3002</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Server</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// \u8FDB\u884C\u4E00\u4E0B\u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u6BD4\u5982 \u63A7\u5236\u5668\u5B9E\u4F8B\uFF0C\u5168\u5C40\u4E2D\u95F4\u4EF6\uFF0C\u5168\u5C40\u53D8\u91CF\uFF0C\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5E93\u7B49\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// \u8BF7\u4E0D\u8981\u5728 Server()\u51FD\u6570\u4E2D\u8FDB\u884C\u8DEF\u7531\u6CE8\u518C\uFF0CServer()\u51FD\u6570 \u4EC5\u8D1F\u8D23\u52A0\u8F7D\u7EC4\u4EF6\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Router</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// \u6DFB\u52A0 web \u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Router() \u51FD\u6570\u5185\u53EF\u4EE5\u505A\u4EFB\u4F55\u5904\u7406\uFF0C\u8DEF\u7531\u5206\u7EC4\uFF0C\u8DEF\u7531\u4E2D\u95F4\u4EF6\u7B49</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u7B2C\u4E09\u6B65-\u542F\u52A8\u670D\u52A1\u5668" tabindex="-1">\u7B2C\u4E09\u6B65 \u542F\u52A8\u670D\u52A1\u5668 <a class="header-anchor" href="#\u7B2C\u4E09\u6B65-\u542F\u52A8\u670D\u52A1\u5668" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> aurora</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Run</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">aurora</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">New</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">aurora</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Debug</span><span style="color:#89DDFF;">())})</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">panic</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,18),o=[p];function r(c,t,i,D,F,y){return a(),n("div",null,o)}var u=s(e,[["render",r]]);export{d as __pageData,u as default};
