(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{178:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Similarly to the "),s("router-link",{attrs:{to:"./components.html"}},[t._v("components")]),t._v(" convention, Vue-Autowire lets you provide 2 different "),s("code",[t._v("require.context")]),t._v(" instances when defining the views convention:")],1),t._v(" "),t._m(1),s("ul",[t._m(2),t._v(" "),s("li",[t._v("The second one, "),s("code",[t._v("requireAsyncContext")]),t._v(" lets you define the views that will be registerd within Vue as "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("async components"),s("OutboundLink")],1),t._v(", to be included on their "),s("strong",[t._v("own bundle")]),t._v(" by using the "),s("strong",[t._v("lazy")]),t._v(" mode of webpack's "),s("a",{attrs:{href:"https://webpack.js.org/api/module-methods/#requirecontext",target:"_blank",rel:"noopener noreferrer"}},[t._v("require.context"),s("OutboundLink")],1),t._v(" API.")])]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("The default convention will be used with either of these:")]),t._v(" "),t._m(4),s("p",[t._v("It is defined as follows:")]),t._v(" "),t._m(5),s("p",[t._v("Which means:")]),t._v(" "),s("ul",[s("li",[t._v("Assumes there is a "),s("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack alias"),s("OutboundLink")],1),t._v(" defined as "),s("code",[t._v("@")]),t._v(" which maps to the root source of the Vue application. "),s("em",[t._v("If you are using the Vue-CLI, this is already the case")])]),t._v(" "),t._m(6),t._v(" "),t._m(7)]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Given a folder structure like")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("Most likely, you will define views so they can be defined as the component of vue-router routes.\nUpdate your routes definition to use the components that Vue-Autowire will have registered:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"views"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#views","aria-hidden":"true"}},[this._v("#")]),this._v(" Views")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueAutowire"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  views"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    requireContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\/(?:[^.]+|(?!\\.local\\.vue$)|(?!\\.async\\.vue$))\\.vue$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    requireAsyncContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/async\\.vue$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lazy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("The first one, "),e("code",[this._v("requireContext")]),this._v(" lets you define the views that will be registered within Vue as regular sync components, to be included in the main webpack bundle.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"default-convention"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-convention","aria-hidden":"true"}},[this._v("#")]),this._v(" Default Convention")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use all of the default conventions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" defaultConventions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-autowire/src/conventions'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use only the views default convention")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" defaultViewConventions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-autowire/src/conventions/views'")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  views"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    requireContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\/(?:[^.]+|(?!\\.local\\.vue$)|(?!\\.async\\.vue$))\\.vue$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    requireAsyncContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/async\\.vue$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lazy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("With "),s("code",[t._v("requireContext")]),t._v(", all the files inside the "),s("code",[t._v("@/views")]),t._v(" folder that end with "),s("code",[t._v(".vue")]),t._v(" but not with "),s("code",[t._v(".local.vue")]),t._v(" nor "),s("code",[t._v(".async.vue")]),t._v(" will be found. They will be registered as Vue components within the Vue application and included in the main bundle.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("With "),s("code",[t._v("requireAsyncContext")]),t._v(", all the files inside the "),s("code",[t._v("@/views")]),t._v(" folder that end with "),s("code",[t._v("async.vue")]),t._v(" will be found. They will be registered as "),s("strong",[t._v("async")]),t._v(" Vue components within the Vue application and included in "),s("strong",[t._v("their own bundle")]),t._v(". (One bundle per each async view)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/src\n  /views\n    home.vue\n    about.async.vue\n    /profile-settings\n      profile-settings.async.vue\n      security-settings.local.vue  // manually imported from profile-settings.async.vue\n  /components\n    ...\n  /directives\n    ...\n  /mixins\n    ...\n  App.vue\n  main.js\n  router.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The default "),e("strong",[this._v("views convention")]),this._v(" will:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Register "),s("code",[t._v("home")]),t._v(" as Vue sync components, exactly with that names.")]),t._v(" "),s("li",[t._v("Include "),s("code",[t._v("home.vue")]),t._v(" in the main webpack bundle")]),t._v(" "),s("li",[t._v("Register "),s("code",[t._v("about")]),t._v(" and "),s("code",[t._v("profile-settings")]),t._v(" as Vue async components, exactly with those names.")]),t._v(" "),s("li",[t._v("Include "),s("code",[t._v("about.async.vue")]),t._v(" into its own webpack bundle")]),t._v(" "),s("li",[t._v("Include "),s("code",[t._v("profile-settings.async.vue")]),t._v(" and "),s("code",[t._v("security-settings.local.vue")]),t._v(" into its own webpack bundle (assuming you manually import "),s("code",[t._v("security-settings.local.vue")]),t._v(" from "),s("code",[t._v("profile-settings.async.vue")]),t._v(")")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"router-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-integration","aria-hidden":"true"}},[this._v("#")]),this._v(" Router integration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instead of manually importing here the component, use the one that Vue-Autowire registered")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The name is based on the file name")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("This will work even if you defined the view as an async one!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Then you want to make sure that Vue-Autowire is able to find and register all the views before you construct the routes.\nFor example, make sure the file where you create the "),e("code",[this._v("Router")]),this._v(" instance exports a function rather than the instance:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This way, in your main "),e("code",[this._v("app.js")]),this._v(" file, you can execute the function to get the router "),e("em",[this._v("only after")]),this._v(" Vue-Autowire has been registered:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueAutowire"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultConventions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#vue-holder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);