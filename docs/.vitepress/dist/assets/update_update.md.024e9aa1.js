import{_ as a,c as s,o as n,a as l}from"./app.603ecaaf.js";const u=JSON.parse('{"title":"\u66F4\u65B0\u65E5\u5FD7","description":"","frontmatter":{},"headers":[{"level":2,"title":"2022-7-13 (tag v1.0.1)","slug":"_2022-7-13-tag-v1-0-1"},{"level":2,"title":"2022-7-15 (tag v1.0.2)","slug":"_2022-7-15-tag-v1-0-2"},{"level":3,"title":"\u65B0\u529F\u80FD","slug":"\u65B0\u529F\u80FD"},{"level":3,"title":"bug \u4FEE\u590D","slug":"bug-\u4FEE\u590D"},{"level":2,"title":"2022-7-18 (tag v1.0.3)","slug":"_2022-7-18-tag-v1-0-3"},{"level":2,"title":"2022-7-20 (tag v1.0.4)","slug":"_2022-7-20-tag-v1-0-4"},{"level":2,"title":"2022-7-24 (tag v1.0.5)","slug":"_2022-7-24-tag-v1-0-5"},{"level":2,"title":"2022-8-14 (tag v1.1.1)","slug":"_2022-8-14-tag-v1-1-1"},{"level":2,"title":"2022-8-27 (tag v1.1.2)","slug":"_2022-8-27-tag-v1-1-2"},{"level":2,"title":"2022-9-10 (tag v1.2.1)","slug":"_2022-9-10-tag-v1-2-1"},{"level":2,"title":"2022-9-22 (tag v1.2.2)","slug":"_2022-9-22-tag-v1-2-2"},{"level":2,"title":"2022-10-5 (tag v1.3.1)","slug":"_2022-10-5-tag-v1-3-1"},{"level":2,"title":"2022-10-5 (tag v1.3.5)","slug":"_2022-10-5-tag-v1-3-5"},{"level":2,"title":"2022-11-5 (tag v1.3.7)","slug":"_2022-11-5-tag-v1-3-7"}],"relativePath":"update/update.md"}'),e={name:"update/update.md"},p=l(`<h1 id="\u66F4\u65B0\u65E5\u5FD7" tabindex="-1">\u66F4\u65B0\u65E5\u5FD7 <a class="header-anchor" href="#\u66F4\u65B0\u65E5\u5FD7" aria-hidden="true">#</a></h1><h2 id="_2022-7-13-tag-v1-0-1" tabindex="-1">2022-7-13 (tag v1.0.1) <a class="header-anchor" href="#_2022-7-13-tag-v1-0-1" aria-hidden="true">#</a></h2><p>\u66F4\u65B0 <code>Aurora</code> golang \u6700\u4F4E\u652F\u6301\u7248\u672C\u517C\u5BB9\u81F4 go1.16 \uFF0C\u7248\u672C\u53F7\u8BF7\u5207\u6362\u5230 v0.5.0.1</p><h2 id="_2022-7-15-tag-v1-0-2" tabindex="-1">2022-7-15 (tag v1.0.2) <a class="header-anchor" href="#_2022-7-15-tag-v1-0-2" aria-hidden="true">#</a></h2><h3 id="\u65B0\u529F\u80FD" tabindex="-1">\u65B0\u529F\u80FD <a class="header-anchor" href="#\u65B0\u529F\u80FD" aria-hidden="true">#</a></h3><ul><li>\u65B0\u589E\u7CFB\u7EDF\u5904\u7406\u5668\u53C2\u6570\u6CE8\u518C \u793A\u4F8B:</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ccc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>\u7ED3\u6784\u4F53\u63A7\u5236\u5668\u7684\u521D\u59CB\u5316\u65F6\u673A\u53D8\u66F4\u5230 ioc \u521D\u59CB\u5316\u671F\u95F4</li><li>ioc \u521D\u59CB\u5316\u671F\u95F4\u652F\u6301\u7C7B\u578B\u5339\u914D\u6CE8\u5165\uFF0C\u672A\u627E\u5230\u5BF9\u5E94\u5339\u914D\u7C7B\u578B\u4E0D\u505A\u4EFB\u4F55\u5904\u7406</li><li>ioc \u521D\u59CB\u5316\u5BF9\u7EC4\u4EF6\u5C5E\u6027\u5DF2\u5B58\u5728\u8D4B\u503C\u7684\u9879\u4E0D\u5728\u8FDB\u884C\u521D\u59CB\u5316\u6CE8\u5165</li></ul><h3 id="bug-\u4FEE\u590D" tabindex="-1">bug \u4FEE\u590D <a class="header-anchor" href="#bug-\u4FEE\u590D" aria-hidden="true">#</a></h3><ul><li>\u7CFB\u7EDF\u53D8\u91CF\uFF0C <code>*http.Request</code> , <code>http.ResponseWritre</code> , <code>aurora.Ctx</code> , <code>*aurora.MultipartFile</code> \u521D\u59CB\u5316\u4E3A\u7A7A</li></ul><h2 id="_2022-7-18-tag-v1-0-3" tabindex="-1">2022-7-18 (tag v1.0.3) <a class="header-anchor" href="#_2022-7-18-tag-v1-0-3" aria-hidden="true">#</a></h2><p>\u6DFB\u52A0\u7CFB\u7EDF\u53C2\u6570\u7684\u7C7B\u578B\u6821\u9A8C\u68C0\u67E5\uFF0C\u4FEE\u590D \u9519\u8BEF\u6355\u6349\u7684\u7C7B\u578B\u5224\u65AD</p><h2 id="_2022-7-20-tag-v1-0-4" tabindex="-1">2022-7-20 (tag v1.0.4) <a class="header-anchor" href="#_2022-7-20-tag-v1-0-4" aria-hidden="true">#</a></h2><p>\u66F4\u65B0 \u4E2D\u95F4\u4EF6\u5904\u7406\u8DE8\u57DF\u5931\u6548\u95EE\u9898\uFF0C\u4FEE\u590D\u6DFB\u52A0\u7CFB\u7EDF\u53D8\u91CF\u5BFC\u81F4 \u6587\u4EF6\u4E0A\u4F20\u7684\u53D8\u91CF\u521D\u59CB\u5316\u5931\u8D25\u95EE\u9898</p><h2 id="_2022-7-24-tag-v1-0-5" tabindex="-1">2022-7-24 (tag v1.0.5) <a class="header-anchor" href="#_2022-7-24-tag-v1-0-5" aria-hidden="true">#</a></h2><p>\u66F4\u65B0 <code>Aurora</code> \u5BF9\u6587\u4EF6\u670D\u52A1\u5668\u7684\u8BBF\u95EE\u652F\u6301</p><h2 id="_2022-8-14-tag-v1-1-1" tabindex="-1">2022-8-14 (tag v1.1.1) <a class="header-anchor" href="#_2022-8-14-tag-v1-1-1" aria-hidden="true">#</a></h2><p>\u6B64\u7248\u672C\u66F4\u65B0\u8F83\u5927\uFF0C\u8C03\u6574\u4E86\u6574\u4F53\u9879\u76EE\u5F00\u53D1\u7684\u7ED3\u6784\uFF0C\u4E0E v1.x.x \u7248\u672C\u5B8C\u5168\u4E0D\u517C\u5BB9\u3002\u4E00\u4E0B\u662F\u5728\u672C\u6B64\u66F4\u65B0\u4E2D\u505A\u51FA\u7684\u6539\u52A8(\u975E\u6539\u52A8\u90E8\u5206\u4FDD\u6301\u4E0D\u53D8)\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u8BF7\u53C2\u8003\u6587\u6863\u5185\u5BB9</p><ul><li>\u66F4\u6539\u9879\u76EE\u542F\u52A8\u53C2\u6570\u7684\u63A5\u53E3\u96C6\uFF0C\u66F4\u6539\u4E4B\u540E\u65E0\u6CD5\u76F4\u63A5\u901A\u8FC7 <code>*aurora.Aaurora</code> \u5B9E\u4F8B\u6765\u76F4\u63A5\u542F\u52A8\u670D\u52A1\uFF0C\u800C\u662F\u5E94\u8BE5\u5D4C\u5957 <code>*aurora.Aaurora</code> \u5E76\u4E14\u53BB\u5B9E\u73B0\u989D\u5916\u7684\u63A5\u53E3</li><li>\u5220\u9664\u4E86\u7ED3\u6784\u4F53\u6CE8\u518C\u5668\uFF0C\u901A\u8FC7\u89E3\u6790\u7ED3\u6784\u4F53\u7ED1\u5B9A\u7684\u51FD\u6570\u8FDB\u884C\u6CE8\u518C\u7ED3\u6784API\u88AB\u5E9F\u9664</li><li>\u65B0\u589E\u4E86\u63A7\u5236\u5668\u6CE8\u518C\u7684\u6784\u9020\u5668\u7C7B\u578B\uFF0C\u901A\u8FC7\u6784\u9020\u5668\u5411ioc\u5BB9\u5668\u4E2D\u6CE8\u518C\u5E76\u4F7F\u7528</li></ul><h2 id="_2022-8-27-tag-v1-1-2" tabindex="-1">2022-8-27 (tag v1.1.2) <a class="header-anchor" href="#_2022-8-27-tag-v1-1-2" aria-hidden="true">#</a></h2><p>\u9700\u8981\u5BF9go\u7248\u672C\u5347\u7EA7\u52301.19\u7248\u672C\uFF0C\u63D0\u9AD8\u6846\u67B6\u5BF9\u8BF7\u6C42\u53C2\u6570\u89C4\u8303\u68C0\u67E5\uFF0C\u542F\u7528\u89C4\u8303\u68C0\u67E5\u907F\u514D\u65E0\u6CD5\u521D\u59CB\u5316\u7684\u5B57\u6BB5\u4F5C\u4E3A\u8BF7\u6C42\u53C2\u6570\uFF0C\u5BF9\u5185\u7F6E\u7684Time\u89E3\u6790\u5C06\u5728\u4E0B\u4E2A\u7248\u672C\u8FDB\u884C\u4FEE\u590D\uFF0C\u5F53\u524D\u7248\u672C\u5BF9\u65F6\u95F4\u7684\u63A5\u6536\u8FD8\u662F\u4EE5\u5B57\u7B26\u4E32\u7C7B\u578B\u4E3A\u4E3B</p><h2 id="_2022-9-10-tag-v1-2-1" tabindex="-1">2022-9-10 (tag v1.2.1) <a class="header-anchor" href="#_2022-9-10-tag-v1-2-1" aria-hidden="true">#</a></h2><p>\u65B0\u6DFB\u52A0 utils \u5DE5\u5177\u5305\u96C6\u6210\uFF0Corm\u5305\uFF0C\u6CDB\u578B\u6570\u636E\u7ED3\u6784\u5305\u7B49\uFF0C\u6CDB\u578B\u6570\u636E\u7ED3\u6784\u53EF\u7528\u4E8E\u8BF7\u6C42\u53C2\u6570\u7684\u89E3\u6790\u652F\u6301</p><h2 id="_2022-9-22-tag-v1-2-2" tabindex="-1">2022-9-22 (tag v1.2.2) <a class="header-anchor" href="#_2022-9-22-tag-v1-2-2" aria-hidden="true">#</a></h2><p>\u672C\u6B21\u66F4\u65B0\u9488\u5BF9\u89E3\u6790\u8BF7\u6C42\u53C2\u6570\u548CIoc\u65B9\u9762\u8FDB\u884C\u4E86\u53D8\u66F4</p><ul><li>\u5176\u4E2D\u5BF9go\u4E2D\u5E38\u7528\u7684 time.Time\u505A\u4E86\u652F\u6301\uFF0C\u540C\u65F6\u6269\u5145\u4E86\u5BF9\u7B2C\u4E09\u65B9\u5E93\u7684\u6570\u636E\u7ED3\u6784\u89E3\u6790\u505A\u4E86\u6269\u5C55\u9884\u7559\u3002</li><li>\u5386\u53F2\u7248\u672C\u4E2D\u7684ioc\u9ED8\u8BA4\u7684\u552F\u4E00key\u4F7F\u7528\u7684\u53CD\u5C04\u7C7B\u578B\u5B57\u7B26\u4E32\uFF0C\u5E76\u4E0D\u80FD\u8FBE\u5230\u552F\u4E00\u6807\u8BC6\uFF0C\u6B64\u7248\u672C\u4FEE\u590D\u4E86key\u7684\u751F\u6210\uFF0C\u91C7\u7528\u5305\u540D\u5168\u8DEF\u5F84\u7ED3\u5408 \u53CD\u5C04\u7684\u7C7B\u578B\u5B57\u7B26\u4E32\u8FDB\u884C\u552F\u4E00\u6807\u8BC6</li></ul><p>\u6587\u6863\u66F4\u65B0\u4E86\u4E00\u4E9B\u6709\u5173 utils\u5305\u4E2D\u7684\u5DE5\u5177\u4ECB\u7ECD\u548C\u6CDB\u578B\u7684\u89E3\u6790\u53C2\u8003</p><h2 id="_2022-10-5-tag-v1-3-1" tabindex="-1">2022-10-5 (tag v1.3.1) <a class="header-anchor" href="#_2022-10-5-tag-v1-3-1" aria-hidden="true">#</a></h2><p>\u672C\u6B21\u66F4\u65B0\u5185\u5BB9\u5BF9api\u7684\u4F7F\u7528\u6709\u5C11\u8BB8\u7684\u53D8\u52A8\uFF0C\u8FD9\u6B21\u66F4\u65B0\u63D0\u53D6\u4E86\u6846\u67B6\u516C\u5171\u4F9D\u8D56\uFF0C\u4EE5\u53CA\u5BF9\u5BB9\u5668\u6A21\u5757\uFF0C\u8DEF\u7531\u6A21\u5757\uFF0C\u7EC4\u4EF6\u6A21\u5757\u505A\u4E86\u5206\u5305\u5904\u7406\uFF0C\u4E00\u4E9B\u516C\u5171\u4F9D\u8D56\u4F1A\u653E\u5230web\u5305\u4E0B\uFF0C\u5177\u4F53\u53D8\u66F4\u7EC6\u8282\u5982\u4E0B\uFF1A</p><ul><li>\u5BB9\u5668\u88C5\u914D\u89C4\u5219\u53D8\u66F4</li><li>Use\u7EC4\u4EF6\u8BC6\u522B\u65B9\u5F0F\u53D8\u66F4\uFF0C\u4ECE\u539F\u6765\u7684\u7C7B\u578B\u8BC6\u522B\u6539\u4E3A\u548C\u5BB9\u5668\u552F\u4E00key(\u5305\u5168\u540D-\u7C7B\u578B\u5B57\u7B26\u4E32)\u65B9\u5F0F\u8FDB\u884C\u8BC6\u522B\u914D\u7F6E\u9879\uFF0C\u5E26\u6765\u7684\u7F3A\u70B9\u662F\u5FC5\u987B\u4E25\u683C\u6309\u7167\u7C7B\u578B\u6765\u52A0\u8F7D</li><li>\u516C\u5171\u4F9D\u8D56\u7684\u63D0\u53D6\u5230web\u5305\uFF0C<code>aurora.Ctx</code>\u53D8\u66F4\u4E3A<code>web.Context</code>, <code>aurora.Config</code>\u53D8\u66F4\u4E3A<code>web.Config</code> \u7B49...</li><li>\u6709\u53D8\u52A8\u7684api \u7CFB\u7EDF\u53C2\u6570\u7684\u6CE8\u518C\u53D8\u66F4\u4E3A <code>func (engine *Engine) Variate(v any, value web.Variate)</code></li><li>\u63A7\u5236\u5668\u53C2\u6570\u89E3\u6790\u6838\u5FC3\u5B9E\u73B0\u79FB\u52A8\u81F3 core \u5305\u4E0B</li><li>\u4E4B\u524D\u7248\u672C\u7684\u5BB9\u5668\u5BF9\u533F\u540D\u7684\u4F9D\u8D56\u88C5\u914D\u505A\u4E86\u4E00\u4E2A\u6709\u5219\u88C5\u914D\uFF0C\u6CA1\u6709\u4E5F\u4E0D\u4F1A\u6700\u505A\u51FA\u9519\u8BEF\u63D0\u793A\uFF0C\u73B0\u5728\u7248\u672C\u7684\u4E0D\u533A\u5206\u533F\u540D\u548C\u5177\u540D\uFF0C\u53EA\u8981\u6CA1\u6709\u627E\u5230\u53EF\u88C5\u914D\u4F9D\u8D56\u5C31\u63D0\u793A\u5BB9\u5668\u521D\u59CB\u5316\u5931\u8D25(\u540E\u7EED\u53EF\u80FD\u4F18\u5316)</li><li>\u5BB9\u5668\u88C5\u914D\u5931\u8D25\u4F18\u5316\u9519\u8BEF\u63D0\u793A\u65B9\u4FBF\u627E\u5230\u90A3\u4E2A\u5C5E\u6027\u521D\u59CB\u5316\u5931\u8D25</li></ul><h2 id="_2022-10-5-tag-v1-3-5" tabindex="-1">2022-10-5 (tag v1.3.5) <a class="header-anchor" href="#_2022-10-5-tag-v1-3-5" aria-hidden="true">#</a></h2><p>\u6DFB\u52A0\u8BF7\u6C42\u53C2\u6570\u81EA\u5B9A\u4E49\u7EA6\u675F\u68C0\u67E5</p><h2 id="_2022-11-5-tag-v1-3-7" tabindex="-1">2022-11-5 (tag v1.3.7) <a class="header-anchor" href="#_2022-11-5-tag-v1-3-7" aria-hidden="true">#</a></h2><p>\u6DFB\u52A0web\u8BF7\u6C42\u9636\u6BB5\u7684\u81EA\u5B9A\u4E49\u9519\u8BEF\u6355\u6349\u5668</p>`,34),t=[p];function o(r,c,i,D,d,y){return n(),s("div",null,t)}var A=a(e,[["render",o]]);export{u as __pageData,A as default};
