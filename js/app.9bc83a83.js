(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)r=o[u],i[r]&&f.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-60f5949d":"98810385","chunk-7e0239cb":"d92ffd5d"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-60f5949d":1,"chunk-7e0239cb":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-60f5949d":"abf031d6","chunk-7e0239cb":"2996c6f9"}[t]+".css",r=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var o=i[s],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===a||c===r))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){o=u[s],c=o.getAttribute("data-href");if(c===a||c===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,n(i)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=s);var c,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,l.nc&&f.setAttribute("nonce",l.nc),f.src=o(t),c=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:f})},12e4);f.onerror=f.onload=c,u.appendChild(f)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/travel/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("c21b"),r=n.n(a);r.a},"26ec":function(t,e,n){"use strict";var a=n("6f42"),r=n.n(a);r.a},3708:function(t,e,n){"use strict";var a=n("a3e2"),r=n.n(a);r.a},3983:function(t,e,n){"use strict";var a=n("6627"),r=n.n(a);r.a},"3e7a":function(t,e,n){"use strict";var a=n("3f4e"),r=n.n(a);r.a},"3f4e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1)],1)},i=[],s=(n("034f"),n("2877")),o={},l=Object(s["a"])(o,r,i,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gaodu"},[n("detail-banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,bannerImgs:t.bannerImgs}}),n("detail-header"),n("detail-list",{attrs:{list:t.list}})],1)},d=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"banner",on:{click:t.handleGallary}},[n("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),n("div",{staticClass:"banner-info"},[n("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),n("div",{staticClass:"banner-number iconfont"},[n("span",{staticClass:"banner-icon"},[t._v("")]),t._v("\n                "+t._s(this.bannerImgs.length)+"\n            ")])])]),n("fade-animation",[n("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{img:t.bannerImgs},on:{close:t.handleGallaryClose}})],1)],1)},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",on:{click:t.handkeGallaryClick}},[n("div",{staticClass:"wrapper"},[n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.img,function(t,e){return n("swiper-slide",[n("img",{key:e,staticClass:"gallary-img",attrs:{src:t}})])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},v=[],g={name:"CommonGallary",props:{img:{type:Array,default:function(){return[]}}},methods:{handkeGallaryClick:function(){this.$emit("close")}},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,paginationType:"fraction",observeParents:!0,observer:!0}}}},b=g,y=(n("afdf"),Object(s["a"])(b,m,v,!1,null,"6182c94a",null));y.options.__file="Gallary.vue";var w=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[t._t("default")],2)},C=[],k={name:"fadeAnimation"},x=k,j=(n("d575"),Object(s["a"])(x,_,C,!1,null,"66bc79ab",null));j.options.__file="fadeAnimation.vue";var S=j.exports,A={name:"banner",props:{bannerImgs:Array,bannerImg:String,sightName:String},data:function(){return{img:["//img1.qunarzz.com/sight/p0/1611/41/41201dec2253e684a3.water.jpg_600x330_22ae929c.jpg","https://imgs.qunarzz.com/sight/p0/1611/42/427f7aa12867f394a3.water.jpg_350x240_e91e9db0.jpg"],showGallary:!1}},methods:{handleGallary:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallary:w,fadeAnimation:S}},E=A,O=(n("3983"),Object(s["a"])(E,h,p,!1,null,"1569d221",null));O.options.__file="banner.vue";var I=O.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[n("div",{staticClass:"iconfont header-abs-back"},[t._v("")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"iconfont header-fixed-back"},[t._v("")])]),t._v("\n        景点详情\n    ")],1)],1)},N=[],D={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},T=D,P=(n("3e7a"),Object(s["a"])(T,G,N,!1,null,"004f71b8",null));P.options.__file="header.vue";var $=P.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list,function(e,a){return n("div",{key:a,staticClass:"item"},[n("div",{staticClass:"item-title"},[n("span",{staticClass:"item-title-icon"}),t._v("\n            "+t._s(e.title)+"\n        ")]),e.children?n("div",[n("detail-list",{staticClass:"item-children",attrs:{list:e.children}})],1):t._e()])}))},B=[],q={name:"DetailList",props:{list:Array}},z=q,M=(n("3708"),Object(s["a"])(z,L,B,!1,null,"19bde39e",null));M.options.__file="List.vue";var H=M.exports,J=n("bc3a"),F=n.n(J),K={name:"Detail",data:function(){return{sightName:"",bannerImg:"",bannerImgs:[],list:[]}},components:{DetailBanner:I,DetailHeader:$,DetailList:H},methods:{getDetailInfo:function(){F.a.get("/mock/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.list=e.categoryList,this.bannerImgs=e.gallaryImgs,this.bannerImg=e.bannerImg,this.sightName=e.sightName}}},mounted:function(){this.getDetailInfo()}},Q=K,R=(n("26ec"),Object(s["a"])(Q,f,d,!1,null,"005137fa",null));R.options.__file="Detail.vue";var U=R.exports;a["a"].use(u["a"]);var V=new u["a"]({mode:"history",base:"/travel/",routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-60f5949d").then(n.bind(null,"cb6d"))}},{path:"/city",name:"City",component:function(){return n.e("chunk-7e0239cb").then(n.bind(null,"2031"))}},{path:"/detail/:id",name:"Detail",component:U}],scrollBehavior:function(t,e,n){return{x:0,y:0}}}),W=n("fe3c"),X=n.n(W),Y=n("1f80"),Z=n.n(Y),tt=(n("7371"),n("b068"),n("dfa4"),n("2f62")),et="上海";try{localStorage.city&&(et=localStorage.city)}catch(t){}var nt={city:et},at={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};a["a"].use(tt["a"]);var rt=new tt["a"].Store({state:nt,mutations:at});a["a"].config.productionTip=!1,X.a.attach(document.body),a["a"].use(Z.a),new a["a"]({router:V,store:rt,render:function(t){return t(c)}}).$mount("#app")},6627:function(t,e,n){},"6f42":function(t,e,n){},7371:function(t,e,n){},"782a":function(t,e,n){},a3e2:function(t,e,n){},afdf:function(t,e,n){"use strict";var a=n("782a"),r=n.n(a);r.a},b068:function(t,e,n){},c21b:function(t,e,n){},ccaa:function(t,e,n){},d575:function(t,e,n){"use strict";var a=n("ccaa"),r=n.n(a);r.a}});
//# sourceMappingURL=app.9bc83a83.js.map