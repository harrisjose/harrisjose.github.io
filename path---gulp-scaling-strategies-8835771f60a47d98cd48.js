webpackJsonp([0x841ad37319b5],{360:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Harris Jose",author:"Harris Jose"}},markdownRemark:{id:"/Users/harris/workspace/experiments/blog/src/pages/gulp-scaling-strategies/index.md absPath of file >>> MarkdownRemark",html:'<p>Gulp is a great tool for running tasks. It saves us loads of time while development and is very handy when it comes to building websites. We automate a lot of stuff using gulp (like transpiling JS using <a href="https://babeljs.io/">Babel</a> and auto-prefixing CSS using <a href="http://postcss.org/">PostCss</a>) and as our projects grew, the number of tasks we had to manage also grew.</p>\n<h2>The problem with Gulp</h2>\n<p>Soon we had two major problems at hand,</p>\n<ul>\n<li>The gulpfiles were huge, with common code scattered all over.</li>\n<li>Running these tasks took some time.</li>\n</ul>\n<p>This was a problem since changing something in a task meant changing it in ~10 projects. Also since tasks took sometime to complete, development no longer felt instant.</p>\n<p>While there seem to be very less literature regarding best practices when it comes to using gulp at scale, here are a few tips based on what we’re doing at work.</p>\n<h2>Moving tasks out into files</h2>\n<p>The easiest way to reduce the complexity is to move out all your tasks into separate files of their own. Also you could also extract out helpers for fetching third party files or any similar repetitive bits of code into an <code class="language-text">utils/</code> folder.</p>\n<p>An example task could look like,</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">/*\n* tasks/cleanFiles.js\n* Clean build artifacts and temp files\n*/</span>\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>gulp<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> rimraf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'rimraf\'</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> folders <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'build\'</span><span class="token punctuation">,</span> <span class="token string">\'tmp\'</span><span class="token punctuation">,</span> <span class="token string">\'public\'</span><span class="token punctuation">]</span>\n\n    folders<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>folder<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> path <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> folder<span class="token punctuation">)</span>\n      <span class="token keyword">return</span> <span class="token function">rimraf</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>folders<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2>Extracting configuration out of tasks</h2>\n<p>An easy way to make your tasks easier to maintain is by separating out folder paths, constants etc into a configuration file. A config file also makes it very easy to implement feature flags that you can use to toggle the behavior of certain tasks.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">/*\n* tasks/processJs.js\n* transpiles and lints JS files\n*/</span>\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>gulp<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'gulp-babel\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> eslint <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'gulp-eslint\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> babelOptions<span class="token punctuation">,</span> eslintOptions <span class="token punctuation">}</span> <span class="token operator">=</span> config<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">\'assets/js/*.js\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">eslint</span><span class="token punctuation">(</span>eslintOptions<span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">babel</span><span class="token punctuation">(</span>babelOptions<span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">\'dist/assets/js\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* gulpfile.js */</span>\n<span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'gulp\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'config\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> processJSFiles <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./tasks/processJs\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>gulp<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'js\'</span><span class="token punctuation">,</span> processJSFiles<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>The snippet above is a great example where moving configuration out of tasks is really useful. Having a configuration file means that you can define babel and eslint options inside that instead of specifying it inside your task. This is very handy when reusing the same gulpfiles for multiple projects.</p>\n<h2>Managing sequential and parallel tasks</h2>\n<p>The default task queuing syntax in gulp is usually very non-intuitive and hard to manage. <a href="https://www.npmjs.com/package/gulp-sequence">Gulp-sequence</a> is an excellent alternative.</p>\n<p>We usually don’t define task dependencies (tasks that should run before a task) and instead use gulp-sequence to run tasks exactly in the order we want them to (even if that means defining additional tasks that are a collection of other tasks).</p>\n<h2>Rebuild only changed files</h2>\n<p>A lot of tasks in gulp usually look like this,</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'transpile\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">\'assets/js/*.js\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">babel</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">\'dist/assets/js\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\ngulp<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">\'assets/js/*.js\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'transpile\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>This quickly starts slowing down your rebuilds as the number of files start increasing since all files are run through the task every time a change event is fired. An easy workaround for this is to use <a href="https://www.npmjs.com/package/gulp-newer">gulp-newer</a> (you could also try <a href="https://github.com/sindresorhus/gulp-changed">gulp-changed</a>) to process only files that have changed.</p>\n<h2>Write performance intensive tasks directly in Node</h2>\n<p>One of the biggest issues with gulp is that it isn’t very fast when it comes to things like copying a lot of files (around 10,000 of them) from one place to another. So instead of doing this,</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">\'assets/images/**/*.*\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">\'assets/images/**/*.*\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>do it like this,</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> copy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'cpy\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">await</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token string">\'assets/images/**/*.*\'</span><span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  parents<span class="token punctuation">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>In most cases, you can find a node module that does what you’re doing with gulp, exponentially faster. So find a package or get your hands dirty and write one.</p>\n<h2>Bundle it all into a module</h2>\n<p>If you’re using these same tasks across multiple projects, then you should really think about packaging your gulpfile and tasks into a node module and installing it as a dependency in your project. If you’ve already fleshed out a configuration file then things get even easier.</p>\n<p>There should be enough guides on how to create a node module but the gist is that you have to put all your stuff into a folder, npm init and follow through. In your <a href="https://docs.npmjs.com/files/package.json#bin">package.json</a> make sure you specify the the executable file (the gulpfile in most cases) in the <code class="language-text">bin</code> field.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"myGulpModule"</span><span class="token punctuation">,</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.0.1"</span><span class="token punctuation">,</span>\n  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"./gulpfile.js"</span><span class="token punctuation">,</span>\n  <span class="token property">"bin"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"myGulpModule"</span> <span class="token operator">:</span> <span class="token string">"./gulpfile.js"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>You can now add “myGulpModule” as a dependency on your projects and run it via</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">./node_modules/.bin/myGulpModule myTaskName</code></pre>\n      </div>\n<p>Oh wait, did I mention you just built an entire CLI now ? (ᵔᴥᵔ)</p>\n<h3>Related Reading</h3>\n<p><a href="http://www.drinchev.com/blog/let-s-scale-that-gulpfile-js/">Let’s scale that Gulpfile.js</a> - Ivan Drinchev<br>\n<a href="https://github.com/alferov/awesome-gulp">Awesome Gulp</a> - Philipp Alferov</p>',frontmatter:{title:"Strategies for Gulp.js at scale",date:"February 14, 2018"}}},pathContext:{slug:"/gulp-scaling-strategies/",previous:{fields:{slug:"/max-sum-kadanes-algorithm/"},frontmatter:{title:"Maximum Sum using Kadane's"}},next:{fields:{slug:"/revamping-the-blog-with-gatsby/"},frontmatter:{title:"Rewriting the blog with Gatsby"}}}}}});
//# sourceMappingURL=path---gulp-scaling-strategies-8835771f60a47d98cd48.js.map