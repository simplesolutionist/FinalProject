(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var o=s[n];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},n={app:0},i={app:0},r=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1a361513"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var e=[],s={about:1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=new Promise((function(e,s){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"9555fc0d"}[t]+".css",i=l.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete n[t],d.parentNode.removeChild(d),s(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",p.name="ChunkLoadError",p.type=a,p.request=n,s[1](p)}i[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"2ab8":function(t,e,s){"use strict";var a=s("70d5"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e),s.d(e,"bus",(function(){return R}));s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("Nav"),s("router-view")],1)])},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar container is-fixed-top is-info",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.isActive=!t.isActive}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/exercises"}},[t._v("Exercises")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/progress"}},[t._v("Progress")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/achievements"}},[t._v("Achievements")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/friends"}},[t._v("Friends")]),t._m(1)],1),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("LoginBadge")],1)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-item"},[a("img",{attrs:{src:s("cf05"),height:"28"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link"},[t._v(" More ")]),s("div",{staticClass:"navbar-dropdown"},[s("a",{staticClass:"navbar-item"},[t._v(" Contact ")]),s("a",{staticClass:"navbar-item"},[t._v(" Newsletter ")]),s("a",{staticClass:"navbar-item"},[t._v(" Settings ")]),s("hr",{staticClass:"navbar-divider"}),s("a",{staticClass:"navbar-item"},[t._v(" Report an issue ")])])])}],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"LoginBadge"}},[t.session.user?s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:t.session.user.profile,alt:"Placeholder image"}})])]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"has-text-weight-bold"},[t._v(t._s(t.session.user.name))]),s("p",{staticClass:"is-size-7"},[t._v("@"+t._s(t.session.user.handle))])])]):s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button is-light",attrs:{to:"/signup"}},[t._v(" Sign Up ")]),s("router-link",{staticClass:"button is-light",attrs:{to:"/login"}},[t._v(" Log in ")])],1)])},c=[],u=(s("a434"),{user:null,notifications:[],addNotification:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.notifications.push({text:t,type:e})},deleteNotification:function(t){this.notifications.splice(t,1)}}),p=u,d={data:function(){return{session:p}}},f=d,m=(s("2ab8"),s("2877")),h=Object(m["a"])(f,l,c,!1,null,null,null),v=h.exports,b={data:function(){return{isActive:!1}},methods:{},components:{LoginBadge:v}},g=b,C=Object(m["a"])(g,r,o,!1,null,null,null),_=C.exports,x={components:{Nav:_}},y=x,w=Object(m["a"])(y,n,i,!1,null,null,null),E=w.exports,k=(s("d3b7"),s("8c4f")),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition-group",{attrs:{name:"fade",tag:"div"}},[t._l([t.currentIndex],(function(e){return s("div",{key:e},[s("img",{attrs:{src:t.currentImg}})])})),s("transition",{attrs:{name:"slide-fade"}})],2),s("a",{staticClass:"prev",attrs:{href:"#"},on:{click:t.prev}},[t._v("❮ Previous")]),s("a",{staticClass:"next",attrs:{href:"#"},on:{click:t.next}},[t._v("❯ Next")]),s("center",[s("button",{staticClass:"button is-info is-rounded"},[t._v("Get Started")])])],1)},A=[],O={name:"Slider",data:function(){return{images:["https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/1840394/pexels-photo-1840394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/939716/pexels-photo-939716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/378442/pexels-photo-378442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/3766209/pexels-photo-3766209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/2150109/pexels-photo-2150109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],timer:null,currentIndex:0}},mounted:function(){this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.next,5500)},next:function(){this.currentIndex+=1},prev:function(){this.currentIndex-=1}},computed:{currentImg:function(){return this.images[Math.abs(this.currentIndex)%this.images.length]}}},P=O,$=(s("cccb"),Object(m["a"])(P,j,A,!1,null,null,null)),S=$.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"level section"},[s("div",{staticClass:"level-item"},[s("form",[t._m(0),t._m(1),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v(" Login ")])])])])])])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input",attrs:{type:"email",placeholder:"Email"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})]),s("span",{staticClass:"icon is-small is-right"},[s("i",{staticClass:"fas fa-check"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])])])}],L={methods:{login:function(){p.user={name:"Ayman Ali",handle:"simplesolutionist",profile:"https://pbs.twimg.com/profile_images/1318718659808854018/DVBHPU4q_400x400.jpg"},p.addNotification("Yay! You logged in","success"),this.$router.push("home")}}},B=L,I=(s("d6db"),Object(m["a"])(B,N,T,!1,null,null,null)),D=I.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.signup(e)}}},[t._v(" Signup ")])])])])},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Name")]),s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Text input"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Username")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input is-success",attrs:{type:"text",placeholder:"Text input",value:"bulma"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})]),s("span",{staticClass:"icon is-small is-right"},[s("i",{staticClass:"fas fa-check"})])]),s("p",{staticClass:"help is-success"},[t._v("This username is available")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input is-danger",attrs:{type:"email",placeholder:"Email input",value:"hello@"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})]),s("span",{staticClass:"icon is-small is-right"},[s("i",{staticClass:"fas fa-exclamation-triangle"})])]),s("p",{staticClass:"help is-danger"},[t._v("This email is invalid")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"checkbox"}}),t._v(" I agree to the "),s("a",{attrs:{href:"#"}},[t._v("terms and conditions")])])])])}],U={methods:{signup:function(){p.user={name:"Ayman Ali",handle:"simplesolutionist",profile:"https://pbs.twimg.com/profile_images/1318718659808854018/DVBHPU4q_400x400.jpg"},p.addNotification("Yay! You signed in","success"),this.$router.push("home")}}},q=U,Y=(s("e42b"),Object(m["a"])(q,M,H,!1,null,null,null)),F=Y.exports;a["a"].use(k["a"]);var J=[{path:"/",name:"Home",component:S},{path:"/login",name:"Login",component:D},{path:"/signup",name:"Signup",component:F},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/exercises",name:"Exercises",component:function(){return s.e("about").then(s.bind(null,"b280"))}},{path:"/progress",name:"Progress",component:function(){return s.e("about").then(s.bind(null,"e65a"))}},{path:"/achievements",name:"Achievements",component:function(){return s.e("about").then(s.bind(null,"4e79"))}},{path:"/friends",name:"Friends",component:function(){return s.e("about").then(s.bind(null,"6c40"))}}],V=new k["a"]({mode:"history",base:"",routes:J}),z=V,G=(s("5abe"),s("15f5"),s("f309"));a["a"].use(G["a"]);var K=new G["a"]({}),R=new a["a"];a["a"].config.productionTip=!1,new a["a"]({router:z,vuetify:K,render:function(t){return t(E)}}).$mount("#app")},"5ced":function(t,e,s){},"70d5":function(t,e,s){},cccb:function(t,e,s){"use strict";var a=s("5ced"),n=s.n(a);n.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.0390b876.png"},cff3:function(t,e,s){},d6db:function(t,e,s){"use strict";var a=s("e67a"),n=s.n(a);n.a},e42b:function(t,e,s){"use strict";var a=s("cff3"),n=s.n(a);n.a},e67a:function(t,e,s){}});
//# sourceMappingURL=app.191c0258.js.map