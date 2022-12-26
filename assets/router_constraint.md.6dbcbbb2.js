import{_ as s,c as n,o as a,a as l}from"./app.c96cf21e.js";const C=JSON.parse('{"title":"\u53C2\u6570\u9A8C\u8BC1\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"router/constraint.md"}'),p={name:"router/constraint.md"},e=l(`<h1 id="\u53C2\u6570\u9A8C\u8BC1\u5668" tabindex="-1">\u53C2\u6570\u9A8C\u8BC1\u5668 <a class="header-anchor" href="#\u53C2\u6570\u9A8C\u8BC1\u5668" aria-hidden="true">#</a></h1><p>\u53C2\u6570\u9A8C\u8BC1\u5668\u53EF\u4EE5\u5BF9\u7ED3\u6784\u4F53\u5185\u7684\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\uFF0C\u901A\u8FC7 <code>tag</code> \u5C5E\u6027\u6765\u6807\u8BB0\u88AB\u68C0\u6D4B\u5B57\u6BB5\uFF0C\u53EF\u9009\u7684 <code>tag</code>\u5C5E\u6027\u4E3A\u4EE5\u4E0B</p><table><thead><tr><th style="text-align:left;">tag</th><th style="text-align:left;">\u529F\u80FD</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">empty</td><td style="text-align:left;">\u6821\u9A8C\u5B57\u6BB5\u662F\u5426\u662F\u96F6\u503C</td><td style="text-align:left;">aurora\u5185\u90E8\u81EA\u5E26\u7684\u4E00\u79CD\u6821\u9A8C</td></tr><tr><td style="text-align:left;">constraint</td><td style="text-align:left;">\u4F7F\u7528\u7EA6\u675F\u6821\u9A8C\u5668</td><td style="text-align:left;">\u9700\u8981\u5411aurora\u4E2D\u6DFB\u52A0\u7EA6\u675F\u6821\u9A8C\u5668\u5B9E\u73B0\uFF0C\u53EF\u652F\u6301\u591A\u4E2A(\u901A\u8FC7\u5206\u53F7\u9694\u5F00)</td></tr></tbody></table><p>\u5B9A\u4E49\u4E00\u4E2A\u8BF7\u6C42\u53C2\u6570</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	Name </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">empty:&quot;false&quot;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">	Age  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">constraint:&quot;check&quot;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>Name</code> \u5B57\u6BB5\u4F7F\u7528\u4E86 <code>empty</code>\u6807\u7B7E\u503C\u662F <code>false</code>\uFF0C\u8868\u793A \u5B57\u6BB5\u5728\u5230\u8FBE\u8BF7\u6C42\u63A7\u5236\u5668\u4E0D\u80FD\u4E3A\u7A7A(\u6216\u96F6\u503C), <code>Age</code> \u5B57\u6BB5\u5219\u4F7F\u7528\u4E86\u81EA\u5B9A\u4E49\u89E3\u6790 <code>check</code> \u5B9A\u4E49\u5982\u4E0B\uFF0C\u5982\u679C\u5E74\u9F84\u5B57\u6BB5\u5C0F\u4E8E0\u5219\u6839\u636E\u89C4\u5219\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u3002</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Server</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Constraint</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">check</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">value any</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">.(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> errors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">New</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error value is 0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5728 <code>Router</code> \u4E2D\u5B9A\u4E49\u63A5\u53E3\u5E76\u4F7F\u7528\u5B9A\u4E49\u7684\u8BF7\u6C42\u53C2\u6570</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Router</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">args GetArgs</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9),o=[e];function t(r,c,D,y,F,i){return a(),n("div",null,o)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};
