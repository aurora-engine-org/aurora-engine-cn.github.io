import{_ as s,c as a,o as n,a as l}from"./app.1355c4cf.js";const C=JSON.parse('{"title":"\u66F4\u65B0\u65E5\u5FD7","description":"","frontmatter":{},"headers":[{"level":2,"title":"2022-7-13 (tag v1.0.1)","slug":"_2022-7-13-tag-v1-0-1"},{"level":2,"title":"2022-7-15 (tag v1.0.2)","slug":"_2022-7-15-tag-v1-0-2"},{"level":3,"title":"\u65B0\u529F\u80FD","slug":"\u65B0\u529F\u80FD"},{"level":3,"title":"bug \u4FEE\u590D","slug":"bug-\u4FEE\u590D"},{"level":2,"title":"2022-7-18 (tag v1.0.3)","slug":"_2022-7-18-tag-v1-0-3"},{"level":2,"title":"2022-7-20 (tag v1.0.4)","slug":"_2022-7-20-tag-v1-0-4"},{"level":2,"title":"2022-7-24 (tag v1.0.5)","slug":"_2022-7-24-tag-v1-0-5"},{"level":2,"title":"2022-8-14 (tag v1.0.6)","slug":"_2022-8-14-tag-v1-0-6"}],"relativePath":"update/update.md"}'),p={name:"update/update.md"},e=l(`<h1 id="\u66F4\u65B0\u65E5\u5FD7" tabindex="-1">\u66F4\u65B0\u65E5\u5FD7 <a class="header-anchor" href="#\u66F4\u65B0\u65E5\u5FD7" aria-hidden="true">#</a></h1><h2 id="_2022-7-13-tag-v1-0-1" tabindex="-1">2022-7-13 (tag v1.0.1) <a class="header-anchor" href="#_2022-7-13-tag-v1-0-1" aria-hidden="true">#</a></h2><p>\u66F4\u65B0 <code>Aurora</code> golang \u6700\u4F4E\u652F\u6301\u7248\u672C\u517C\u5BB9\u81F4 go1.16 \uFF0C\u7248\u672C\u53F7\u8BF7\u5207\u6362\u5230 v0.5.0.1</p><h2 id="_2022-7-15-tag-v1-0-2" tabindex="-1">2022-7-15 (tag v1.0.2) <a class="header-anchor" href="#_2022-7-15-tag-v1-0-2" aria-hidden="true">#</a></h2><h3 id="\u65B0\u529F\u80FD" tabindex="-1">\u65B0\u529F\u80FD <a class="header-anchor" href="#\u65B0\u529F\u80FD" aria-hidden="true">#</a></h3><ul><li>\u65B0\u589E\u7CFB\u7EDF\u5904\u7406\u5668\u53C2\u6570\u6CE8\u518C \u793A\u4F8B:</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ccc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	Name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TestAurora</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">t </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">testing</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	a </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> aurora</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NewAurora</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/// \u6CE8\u518C\u4E00\u4E2A\u7CFB\u7EDF\u53D8\u91CF\uFF0C\u7C7B\u578B\u4E3A *Ccc</span></span>
<span class="line"><span style="color:#A6ACCD;">	a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SysVariable</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">Ccc</span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">proxy </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">aurora</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Proxy</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	    </span><span style="color:#676E95;font-style:italic;">// \u66F4\u5177\u4F7F\u7528\u60C5\u51B5 \u5BF9\u53D8\u91CF\u8FDB\u884C\u521D\u59CB\u5316\u5E76\u4E14\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">		c </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">Ccc</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> c</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// \u6267\u884C\u5904\u7406 ccc \u662F\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u65B9\u5F0F\u521D\u59CB\u5316\u597D\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">	a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">ccc </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Ccc</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> req </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Request</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">	aurora</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Run</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>\u7ED3\u6784\u4F53\u63A7\u5236\u5668\u7684\u521D\u59CB\u5316\u65F6\u673A\u53D8\u66F4\u5230 ioc \u521D\u59CB\u5316\u671F\u95F4</li><li>ioc \u521D\u59CB\u5316\u671F\u95F4\u652F\u6301\u7C7B\u578B\u5339\u914D\u6CE8\u5165\uFF0C\u672A\u627E\u5230\u5BF9\u5E94\u5339\u914D\u7C7B\u578B\u4E0D\u505A\u4EFB\u4F55\u5904\u7406</li><li>ioc \u521D\u59CB\u5316\u5BF9\u7EC4\u4EF6\u5C5E\u6027\u5DF2\u5B58\u5728\u8D4B\u503C\u7684\u9879\u4E0D\u5728\u8FDB\u884C\u521D\u59CB\u5316\u6CE8\u5165</li></ul><h3 id="bug-\u4FEE\u590D" tabindex="-1">bug \u4FEE\u590D <a class="header-anchor" href="#bug-\u4FEE\u590D" aria-hidden="true">#</a></h3><ul><li>\u7CFB\u7EDF\u53D8\u91CF\uFF0C <code>*http.Request</code> , <code>http.ResponseWritre</code> , <code>aurora.Ctx</code> , <code>*aurora.MultipartFile</code> \u521D\u59CB\u5316\u4E3A\u7A7A</li></ul><h2 id="_2022-7-18-tag-v1-0-3" tabindex="-1">2022-7-18 (tag v1.0.3) <a class="header-anchor" href="#_2022-7-18-tag-v1-0-3" aria-hidden="true">#</a></h2><p>\u6DFB\u52A0\u7CFB\u7EDF\u53C2\u6570\u7684\u7C7B\u578B\u6821\u9A8C\u68C0\u67E5\uFF0C\u4FEE\u590D \u9519\u8BEF\u6355\u6349\u7684\u7C7B\u578B\u5224\u65AD</p><h2 id="_2022-7-20-tag-v1-0-4" tabindex="-1">2022-7-20 (tag v1.0.4) <a class="header-anchor" href="#_2022-7-20-tag-v1-0-4" aria-hidden="true">#</a></h2><p>\u66F4\u65B0 \u4E2D\u95F4\u4EF6\u5904\u7406\u8DE8\u57DF\u5931\u6548\u95EE\u9898\uFF0C\u4FEE\u590D\u6DFB\u52A0\u7CFB\u7EDF\u53D8\u91CF\u5BFC\u81F4 \u6587\u4EF6\u4E0A\u4F20\u7684\u53D8\u91CF\u521D\u59CB\u5316\u5931\u8D25\u95EE\u9898</p><h2 id="_2022-7-24-tag-v1-0-5" tabindex="-1">2022-7-24 (tag v1.0.5) <a class="header-anchor" href="#_2022-7-24-tag-v1-0-5" aria-hidden="true">#</a></h2><p>\u66F4\u65B0 <code>Aurora</code> \u5BF9\u6587\u4EF6\u670D\u52A1\u5668\u7684\u8BBF\u95EE\u652F\u6301</p><h2 id="_2022-8-14-tag-v1-0-6" tabindex="-1">2022-8-14 (tag v1.0.6) <a class="header-anchor" href="#_2022-8-14-tag-v1-0-6" aria-hidden="true">#</a></h2><p>\u6B64\u7248\u672C\u66F4\u65B0\u8F83\u5927\uFF0C\u8C03\u6574\u4E86\u6574\u4F53\u9879\u76EE\u5F00\u53D1\u7684\u7ED3\u6784\uFF0C\u4E0E v1.x.x \u7248\u672C\u5B8C\u5168\u4E0D\u517C\u5BB9\u3002\u4E00\u4E0B\u662F\u5728\u672C\u6B64\u66F4\u65B0\u4E2D\u505A\u51FA\u7684\u6539\u52A8(\u975E\u6539\u52A8\u90E8\u5206\u4FDD\u6301\u4E0D\u53D8)\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u8BF7\u53C2\u8003\u6587\u6863\u5185\u5BB9</p><ul><li>\u66F4\u6539\u9879\u76EE\u542F\u52A8\u53C2\u6570\u7684\u63A5\u53E3\u96C6\uFF0C\u66F4\u6539\u4E4B\u540E\u65E0\u6CD5\u76F4\u63A5\u901A\u8FC7 <code>*aurora.Aaurora</code> \u5B9E\u4F8B\u6765\u76F4\u63A5\u542F\u52A8\u670D\u52A1\uFF0C\u800C\u662F\u5E94\u8BE5\u5D4C\u5957 <code>*aurora.Aaurora</code> \u5E76\u4E14\u53BB\u5B9E\u73B0\u989D\u5916\u7684\u63A5\u53E3</li><li>\u5220\u9664\u4E86\u7ED3\u6784\u4F53\u6CE8\u518C\u5668\uFF0C\u901A\u8FC7\u89E3\u6790\u7ED3\u6784\u4F53\u7ED1\u5B9A\u7684\u51FD\u6570\u8FDB\u884C\u6CE8\u518C\u7ED3\u6784API\u88AB\u5E9F\u9664</li><li>\u65B0\u589E\u4E86\u63A7\u5236\u5668\u6CE8\u518C\u7684\u6784\u9020\u5668\u7C7B\u578B\uFF0C\u901A\u8FC7\u6784\u9020\u5668\u5411ioc\u5BB9\u5668\u4E2D\u6CE8\u518C\u5E76\u4F7F\u7528</li></ul>`,19),o=[e];function t(r,c,D,i,F,y){return n(),a("div",null,o)}var u=s(p,[["render",t]]);export{C as __pageData,u as default};