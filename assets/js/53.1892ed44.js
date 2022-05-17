(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{607:function(t,e,a){"use strict";a.r(e);var r=a(9),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("当 webpack 打包源代码时，可能会很难追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置。例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，而其中一个源文件包含一个错误，那么堆栈跟踪就会直接指向到 bundle.js。你可能需要准确地知道错误来自于哪个源文件，所以这种提示这通常不会提供太多帮助。")]),t._v(" "),a("p",[t._v("为了更容易地追踪 error 和 warning，JavaScript 提供了 source maps 功能，可以将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。\nsourceMap 通过配置中的 devtool 去配置，参数的含义大概有以下几种情况：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("devtool")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("source-map")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("生成 map 文件，错误精确到行和列")])]),t._v(" "),a("tr",[a("td",[t._v("inline-source-map")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("inline，不生成 map 文件，以 base64 形式嵌入js中，错误精确到行和列")])]),t._v(" "),a("tr",[a("td",[t._v("cheap-source-map")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cheap，错误只精确到行，且只针对业务代码，不包括第三方模块")])]),t._v(" "),a("tr",[a("td",[t._v("cheap-module-source-map")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cheap-module，错误只精确到行，且只针对业务代码，包括第三方模块")])]),t._v(" "),a("tr",[a("td",[t._v("eval-source-map")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("eval不生成 map 文件，在 js 中以 eval 方法的形式出现，但是复杂项目的提示是不全的")])]),t._v(" "),a("tr",[a("td",[t._v("cheap-module-eval-source-map")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("打包速度快，提示信息也全。")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);