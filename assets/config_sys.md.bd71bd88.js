import{_ as s,c as n,o as a,a as l}from"./app.98058799.js";const C=JSON.parse('{"title":"\u7CFB\u7EDF\u53C2\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u6570\u5217\u8868","slug":"\u53C2\u6570\u5217\u8868"},{"level":2,"title":"\u4F7F\u7528\u793A\u4F8B","slug":"\u4F7F\u7528\u793A\u4F8B"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u53D8\u91CF","slug":"\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u53D8\u91CF"}],"relativePath":"config/sys.md"}'),p={name:"config/sys.md"},e=l(`<h1 id="\u7CFB\u7EDF\u53C2\u6570" tabindex="-1">\u7CFB\u7EDF\u53C2\u6570 <a class="header-anchor" href="#\u7CFB\u7EDF\u53C2\u6570" aria-hidden="true">#</a></h1><p>\u7CFB\u7EDF\u53C2\u6570\u662F <code>aurora</code> \u670D\u52A1\u5668\u4E2D\u63D0\u4F9B\u7684\u4FBF\u6377\u673A\u5236\uFF0C\u540C\u65F6\u7CFB\u7EDF\u53D8\u91CF\u4E5F\u63D0\u4F9B\u5230\u4E86\u7528\u6237\u7EA7\u522B\u6CE8\u518C\uFF0C\u5728 <code>aurora</code> \u4E2D\u6709\u51E0\u4E2A\u9ED8\u8BA4\u7684\u7CFB\u7EDF\u53D8\u91CF\uFF0C\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u3002</p><h2 id="\u53C2\u6570\u5217\u8868" tabindex="-1">\u53C2\u6570\u5217\u8868 <a class="header-anchor" href="#\u53C2\u6570\u5217\u8868" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53C2\u6570\u529F\u80FD</th><th style="text-align:left;">\u662F\u5426\u7CFB\u7EDF\u81EA\u5E26</th></tr></thead><tbody><tr><td style="text-align:left;">*http.Request</td><td style="text-align:left;">\u539F\u751Fhttp\u8BF7\u6C42\u4F53</td><td style="text-align:left;">\u662F</td></tr><tr><td style="text-align:left;">http.ResponseWritre</td><td style="text-align:left;">\u539F\u751Fhttp\u54CD\u5E94\u4F53</td><td style="text-align:left;">\u662F</td></tr><tr><td style="text-align:left;">web.Context</td><td style="text-align:left;">aurora\u4E2D\u95F4\u4EF6\u4E0A\u4E0B\u6587\u53C2\u6570</td><td style="text-align:left;">\u662F</td></tr><tr><td style="text-align:left;">*web.MultipartFile</td><td style="text-align:left;">Post\u8BF7\u6C42\u89E3\u6790\u6587\u4EF6\u53C2\u6570</td><td style="text-align:left;">\u662F</td></tr></tbody></table><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1">\u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u7CFB\u7EDF\u53D8\u91CF\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5728\u5904\u7406\u5668\u7684\u51FD\u6570\u53C2\u6570\u5217\u8868\u7684\u4EFB\u610F\u4F4D\u7F6E\u4F7F\u7528\u5373\u53EF\uFF0C\u53C2\u6570\u7684\u7C7B\u578B\u8981\u4E25\u683C\u5339\u914D</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">req </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Request</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">rew http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ResponseWritre</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">ctx ctx Context</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Post</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">file </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">web</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MultipartFile</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u53D8\u91CF" tabindex="-1">\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u53D8\u91CF <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u53D8\u91CF" aria-hidden="true">#</a></h2><p><code>aurora</code> \u63D0\u4F9B\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u53D8\u91CF\u6CE8\u518C\uFF0C\u53C2\u6570\u5217\u8868\u4E2D\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u9700\u8981\u4E25\u683C\u5339\u914D\u3002</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ccc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	Name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// \u6CE8\u518C\u4E00\u4E2A\u7CFB\u7EDF\u53D8\u91CF\uFF0C\u7C7B\u578B\u4E3A *Ccc</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Variate</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">Ccc</span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">ctx Context</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> any </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// \u66F4\u5177\u4F7F\u7528\u60C5\u51B5 \u5BF9\u53D8\u91CF\u8FDB\u884C\u521D\u59CB\u5316\u5E76\u4E14\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">	c </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">Ccc</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> c</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6267\u884C\u5904\u7406 ccc \u662F\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u65B9\u5F0F\u521D\u59CB\u5316\u597D\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">ccc </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Ccc</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> req </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Request</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,10),t=[e];function o(c,r,D,y,F,i){return a(),n("div",null,t)}var d=s(p,[["render",o]]);export{C as __pageData,d as default};
