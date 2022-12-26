import{_ as s,c as n,o as a,a as l}from"./app.603ecaaf.js";const d=JSON.parse('{"title":"sgo","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89E3\u6790\u89C4\u5219","slug":"\u89E3\u6790\u89C4\u5219"},{"level":3,"title":"\u4E0A\u4E0B\u6587\u6570\u636E","slug":"\u4E0A\u4E0B\u6587\u6570\u636E"},{"level":3,"title":"\u6807\u7B7E\u8BE6\u60C5","slug":"\u6807\u7B7E\u8BE6\u60C5"},{"level":2,"title":"demo","slug":"demo"},{"level":3,"title":"xml\u89E3\u6790","slug":"xml\u89E3\u6790"}],"relativePath":"orm/gobatis.md"}'),p={name:"orm/sgo.md"},o=l(`<h1 id="sgo" tabindex="-1">sgo <a class="header-anchor" href="#sgo" aria-hidden="true">#</a></h1><p><code>sgo</code> \u662F\u53C2\u8003 <code>mybatis</code> \u7F16\u5199\u7684sql\u6807\u7B7E\u89E3\u6790\uFF0C<code>sgo</code>\u4EC5\u63D0\u4F9B\u5BF9 sql \u7684\u4E0A\u4E0B\u6587\u6570\u636E\u89E3\u6790\u586B\u5145\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u5BF9 sql \u8BED\u53E5\u7684\u8BED\u6CD5\u68C0\u67E5\u3002</p><h2 id="\u89E3\u6790\u89C4\u5219" tabindex="-1">\u89E3\u6790\u89C4\u5219 <a class="header-anchor" href="#\u89E3\u6790\u89C4\u5219" aria-hidden="true">#</a></h2><p><code>sgo</code> \u89E3\u6790 xml \u6587\u4EF6\u4E2D\u7684sql\u8BED\u53E5\uFF0C\u4F1A\u4E25\u683C\u68C0\u67E5\u4E0A\u4E0B\u6587\u4E2D\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\u53C2\u6570\u4F1A\u81EA\u5B9A\u6DFB\u52A0 <code>&#39;&#39;</code> \u5355\u5F15\u53F7\uFF0C\u5176\u4ED6\u57FA\u7840\u6570\u636E\u7C7B\u578B\u4E0D\u4F1A\u6DFB\u52A0\uFF0C\u5BF9\u4E8E\u590D\u6742\u6570\u636E\u7ED3\u6784(\u590D\u5408\u7ED3\u6784\uFF0C\u6CDB\u578B\u7ED3\u6784\u4F53\u7B49)\u4F1A\u6301\u7EED\u8DDF\u8FDB \uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u57FA\u7840\u6570\u636E\u7C7B\u578B\u3002</p><h3 id="\u4E0A\u4E0B\u6587\u6570\u636E" tabindex="-1">\u4E0A\u4E0B\u6587\u6570\u636E <a class="header-anchor" href="#\u4E0A\u4E0B\u6587\u6570\u636E" aria-hidden="true">#</a></h3><p>\u4E0A\u4E0B\u6587\u6570\u636E\u662F\u7531\u7528\u6237\u8C03\u7528\u65F6\u5019\u4F20\u9012\u63A5\uFF0C\u4EC5\u63A5\u53D7 map \u6216\u8005\u7ED3\u6784\u4F53\u5982\u4E0B\uFF1A</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">ctx </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">any</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">arr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">sgo </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> sgo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NewSgo</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">sgo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">LoadXml</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">sql</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> sgo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sql</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user.find</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Error</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sql</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u6807\u7B7E\u8BE6\u60C5" tabindex="-1">\u6807\u7B7E\u8BE6\u60C5 <a class="header-anchor" href="#\u6807\u7B7E\u8BE6\u60C5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u6807\u7B7E</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u529F\u80FD</th></tr></thead><tbody><tr><td style="text-align:left;"><code>&lt;mapper&gt;</code></td><td style="text-align:left;">\u6839\u8282\u70B9</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>&lt;insert&gt;</code></td><td style="text-align:left;">insert\u8BED\u53E5</td><td style="text-align:left;">\u751F\u6210\u63D2\u5165\u8BED\u53E5</td></tr><tr><td style="text-align:left;"><code>&lt;select&gt;</code></td><td style="text-align:left;">select\u8BED\u53E5</td><td style="text-align:left;">\u751F\u6210\u67E5\u8BE2\u8BED\u53E5</td></tr><tr><td style="text-align:left;"><code>&lt;update&gt;</code></td><td style="text-align:left;">update\u8BED\u53E5</td><td style="text-align:left;">\u751F\u6210\u66F4\u65B0\u8BED\u53E5</td></tr><tr><td style="text-align:left;"><code>&lt;delete&gt;</code></td><td style="text-align:left;">delete\u8BED\u53E5</td><td style="text-align:left;">\u751F\u6210\u5220\u9664\u8BED\u53E5</td></tr><tr><td style="text-align:left;"><code>&lt;for&gt;</code></td><td style="text-align:left;">for\u8FED\u4EE3</td><td style="text-align:left;">\u751F\u6210IN\u8BED\u53E5\uFF0C\u6307\u5B9A\u9700\u8981\u751F\u6210IN\u6761\u4EF6\u7684\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u751F\u6210\u5BF9\u5E94\u7684IN\u6761\u4EF6</td></tr><tr><td style="text-align:left;"><code>&lt;if&gt;</code></td><td style="text-align:left;">if\u6761\u4EF6</td><td style="text-align:left;">\u5224\u65AD\u662F\u5426\u6EE1\u8DB3\u5C5E\u6027\u8868\u8FBE\u5F0F\u7684\u6761\u4EF6\uFF0C\u6EE1\u8DB3\u6761\u4EF6\u5C31\u5BF9\u6807\u7B7E\u5185\u7684sql\u8FDB\u884C\u89E3\u6790</td></tr></tbody></table><h2 id="demo" tabindex="-1">demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-xml line-numbers-mode"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#F07178;">xml</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ISO-8859-1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F78C6C;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">mapper</span><span style="color:#89DDFF;"> SYSTEM &quot;https://gitee.com/aurora-engine/sgo/blob/master/sgo.dtd&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mapper</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">find</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        select * from student where sss={name}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">expr</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{arr}!=nil and {len(arr)}&gt;0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            and</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">for</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">slice</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{arr}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">item</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obj</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">column</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">open</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">separator</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">close</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {obj}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">for</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">expr</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{name}==&#39;aaa&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            and abc = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">expr</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1==1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                and 1=1</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">expr</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1!=1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    or 1!=1</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            or cba=1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        or  name = {name} and 1=1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mapper</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="xml\u89E3\u6790" tabindex="-1">xml\u89E3\u6790 <a class="header-anchor" href="#xml\u89E3\u6790" aria-hidden="true">#</a></h3><h4 id="\u7B2C\u4E00\u5C42" tabindex="-1">\u7B2C\u4E00\u5C42 <a class="header-anchor" href="#\u7B2C\u4E00\u5C42" aria-hidden="true">#</a></h4><p><code>&lt;mapper&gt;</code>\u6807\u7B7E\u662F\u6574\u4E2Axml\u7684\u6839 <code>namespace</code> \u5C5E\u6027\u5B9A\u4E49\u4E86 xml\u7684\u6807\u8BC6\u7B26\uFF0C\u8C03\u7528\u9636\u6BB5 <code>namespace</code>\u7684\u5C5E\u6027\u81F3\u5173\u91CD\u8981</p><h4 id="\u7B2C\u4E8C\u5C42" tabindex="-1">\u7B2C\u4E8C\u5C42 <a class="header-anchor" href="#\u7B2C\u4E8C\u5C42" aria-hidden="true">#</a></h4><p><code>&lt;select&gt;</code>\u6807\u7B7E\u5B9A\u4E49\u4E86 <code>id</code> \u5C5E\u6027\uFF0C <code>id</code> \u5C5E\u6027\u662F\u552F\u4E00\u6807\u8BC6\uFF0C\u7ED3\u5408 <code>namespace</code> \u80FD\u591F\u5B9A\u4F4D\uFF0C\u6807\u7B7E\u5185\u7684\u6240\u6709 <code>{xx}</code> \u6570\u636E\u90FD\u6765\u81EA\u4E8E\u4E0A\u4E0B\u6587\u6570\u636E\uFF0C<code>{xx}</code> \u5C06\u88AB\u89E3\u6790\u6210\u4E3A\u5177\u4F53\u7684\u503C</p><h4 id="\u7B2C\u4E09\u5C42" tabindex="-1">\u7B2C\u4E09\u5C42 <a class="header-anchor" href="#\u7B2C\u4E09\u5C42" aria-hidden="true">#</a></h4><p><code>&lt;if&gt;</code> \u6807\u7B7E \u5B9A\u4E49\u4E86 <code>expr</code> \u5C5E\u6027\uFF0C <code>expr</code> \u5C5E\u6027\u7684\u503C\u4E3A\u4E00\u4E32\u8868\u8FBE\u5F0F\uFF0C\u8868\u8FBE\u5F0F\u5E94\u8FD4\u56DE\u4E00\u4E2A <code>true</code> \u6216\u8005 <code>false</code>\uFF0C\u8868\u793A <code>&lt;if&gt;</code> \u6807\u7B7E\u5185\u7684\u5185\u5BB9\u662F\u5426\u53EF\u4EE5\u88AB\u89E3\u6790\uFF0C\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u5230\u4E0A\u4E0B\u6587\u6570\u636E\u7684\u4F4D\u7F6E\u4E00\u5B9A\u8981\u4F7F\u7528 <code>{}</code>\u5305\u88F9\u4F4F</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">gitee.com/aurora-engine/sgo</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	ctx </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">any</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">arr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	sgo </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> sgo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NewSgo</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	sgo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">LoadXml</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	sql</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> sgo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sql</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user.find</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Error</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sql</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4EE3\u7801\u521B\u5EFA\u4E86\u89E3\u6790\u5668\uFF0C\u5E76\u52A0\u8F7D\u4E86xml\uFF0C\u901A\u8FC7 <code>user.find</code> \u627E\u5230\u6211\u4EEC\u5B9A\u4E49\u7684 sql \u6807\u7B7E\uFF0C\u4F20\u9012\u4E86\u4E00\u4E2A\u4E0A\u4E0B\u6587\u6570\u636E <code>ctx</code>\uFF0C\u6807\u7B7E\u89E3\u6790\u671F\u95F4\u7684\u6570\u636E\u90FD\u6765\u6E90\u4E8E <code>ctx</code></p>`,20),e=[o];function t(r,c,D,F,y,i){return a(),n("div",null,e)}var A=s(p,[["render",t]]);export{d as __pageData,A as default};
