(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6815918c","chunk-2d21367b":"07325f11","chunk-3116eae0":"bceceb5f"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,"chunk-3116eae0":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"2029e1c2","chunk-2d21367b":"31d6cfe0","chunk-3116eae0":"c7d8531d"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"037f":function(e,t,n){"use strict";var a=n("3a83"),r=n.n(a);r.a},"12cd":function(e,t,n){"use strict";var a=n("e3d0"),r=n.n(a);r.a},"2a7d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"button",class:{"button--large":e.large},on:{click:e.onClick}},[e._v(e._s(e.text))])},r=[],o={name:"Button",props:{text:{type:String,default:""},large:Boolean,onClick:{type:Function,default:function(){}}}},c=o,i=(n("f2fe"),n("2877")),s=Object(i["a"])(c,a,r,!1,null,"5287729a",null);t["a"]=s.exports},"3a83":function(e,t,n){},"43b3":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title",style:{color:e.color}},[e._v(e._s(e.text))])},r=[],o={name:"Title",props:{text:{type:String,default:""},color:{type:String,default:""}}},c=o,i=(n("037f"),n("2877")),s=Object(i["a"])(c,a,r,!1,null,"598299b4",null);t["a"]=s.exports},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[n("div",{staticClass:"nav__logo"},[n("router-link",{attrs:{to:"/"}},[e._v("Dogemory")])],1),n("div",{staticClass:"nav__new-game",on:{click:e.setNewGame}},[e._v("New Game")])])},i=[],s=n("6792"),u={name:"Nav",methods:{setNewGame:function(){this.$store.dispatch(s["c"]),this.$router.push({name:"new"})}}},l=u,d=(n("d79f"),n("2877")),f=Object(d["a"])(l,c,i,!1,null,null,null),p=f.exports,m={name:"App",components:{Nav:p}},b=m,h=(n("5c0b"),Object(d["a"])(b,r,o,!1,null,null,null)),v=h.exports,g=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"home__header"},[n("Title",{attrs:{text:"Welcome to Dogemory!",color:"white"}}),n("div",{staticClass:"home__subtitle"},[n("Subtitle",{attrs:{text:"Stretch your brain with your favorite doggos 🐶",color:"white"}})],1)],1),n("div",{staticClass:"home__doge"},[n("Doge")],1),n("Button",{attrs:{text:"Get started!","on-click":e.newGame,large:""}})],1)},y=[],w=n("2a7d"),O=n("43b3"),C=n("5884"),j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"doge"},[n("div",{staticClass:"doge__trunk"}),n("div",{staticClass:"doge__tail"}),n("div",{staticClass:"doge__head"},[n("div",{staticClass:"head__left-ear"}),n("div",{staticClass:"head__right-ear"}),n("div",{staticClass:"head__left-eye"}),n("div",{staticClass:"head__right-eye"}),n("div",{staticClass:"head__mouth"}),n("div",{staticClass:"head__nose"})]),n("div",{staticClass:"doge__collar"},[n("div",{staticClass:"doge__medal"})]),n("div",{staticClass:"doge__front-left-paw"}),n("div",{staticClass:"doge__front-right-paw"}),n("div",{staticClass:"doge__back-left-paw"}),n("div",{staticClass:"doge__back-right-paw"})])}],x=(n("ebc5"),{}),S=Object(d["a"])(x,j,E,!1,null,"618773aa",null),k=S.exports,T={name:"Home",components:{Button:w["a"],Title:O["a"],Subtitle:C["a"],Doge:k},methods:{newGame:function(){this.$router.push({name:"new"})}}},P=T,N=(n("12cd"),Object(d["a"])(P,_,y,!1,null,"2be498ea",null)),A=N.exports;a["default"].use(g["a"]);var R,G,$=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:A},{path:"/new",name:"new",component:function(){return n.e("about").then(n.bind(null,"2871"))}},{path:"/board",name:"board",component:function(){return n.e("chunk-3116eae0").then(n.bind(null,"cbf2"))}},{path:"/summary",name:"summary",component:function(){return n.e("chunk-2d21367b").then(n.bind(null,"ad13"))}}]}),I=(n("96cf"),n("3b8d")),B=n("bd86"),D=n("a4bb"),M=n.n(D),F=n("75fc"),L=(n("6c7b"),n("cebc")),H=n("2f62"),q=n("bfa9"),W=n("bc3a"),J=n.n(W),Y=n("2ef0");a["default"].use(H["a"]);var U=new q["a"]({storage:window.localStorage,key:"dogemory_app_v1.0.0F"}),X={players:0,pairs:8,breed:"Random"},Z={currentPlayer:1,scores:[],pairs:[],matchedPairs:[],isFinished:!1},z=new H["a"].Store({state:{settings:X,game:Z,breeds:["Random"]},mutations:(R={},Object(B["a"])(R,s["c"],function(e){e.settings=X,e.game=Z}),Object(B["a"])(R,s["h"],function(e,t){e.settings=t,e.game=Object(L["a"])({},Z,{scores:new Array(t.players).fill(0)})}),Object(B["a"])(R,s["g"],function(e,t){e.game.pairs=t}),Object(B["a"])(R,s["d"],function(e,t){e.breeds=[].concat(Object(F["a"])(e.breeds),Object(F["a"])(M()(t)))}),Object(B["a"])(R,s["e"],function(e,t){e.game.matchedPairs.push(t)}),Object(B["a"])(R,s["f"],function(e){var t=e.settings.players;if(t>1){var n=e.game.currentPlayer+1;e.game.currentPlayer=n%t?n%t:n}}),Object(B["a"])(R,s["b"],function(e){var t=Object(F["a"])(e.game.scores),n=e.game.currentPlayer-1,a=++t[n];t[n]=a,e.game.scores=t}),R),actions:(G={},Object(B["a"])(G,s["i"],function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,o,c,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,a(s["h"],n),"Random"!==n.breed){e.next=8;break}return e.next=5,J.a.get("https://dog.ceo/api/breeds/image/random/".concat(n.pairs));case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,J.a.get("https://dog.ceo/api/breed/".concat(n.breed,"/images/random/").concat(n.pairs));case 10:r=e.sent;case 11:o=r.data.message,c=o.map(function(e){return{id:Object(Y["uniqueId"])(),img:e}}),i=Object(Y["shuffle"])([].concat(Object(F["a"])(c),Object(F["a"])(c))),a(s["g"],i);case 15:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),Object(B["a"])(G,s["a"],function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,J.a.get("https://dog.ceo/api/breeds/list/all");case 3:a=e.sent,n(s["d"],a.data.message);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),G),plugins:[U.plugin]});a["default"].config.productionTip=!1,new a["default"]({router:$,store:z,render:function(e){return e(v)}}).$mount("#app")},5884:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"subtitle",style:{color:e.color}},[e._v(e._s(e.text))])},r=[],o={name:"Subtitle",props:{text:{type:String,default:""},color:{type:String,default:""}}},c=o,i=(n("985b"),n("2877")),s=Object(i["a"])(c,a,r,!1,null,"7fb78b2a",null);t["a"]=s.exports},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},6792:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"i",function(){return c}),n.d(t,"g",function(){return i}),n.d(t,"h",function(){return s}),n.d(t,"f",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"e",function(){return d});var a="INITIALIZE_NEW_GAME",r="FETCH_DOGGOS",o="FETCH_DOGGOS",c="START_NEW_GAME",i="SET_PAIRS",s="SET_SETTINGS",u="SET_NEXT_PLAYER",l="INCREASE_CURRENT_PLAYER_SCORE",d="SET_MATCHED_PAIR"},"853f":function(e,t,n){},"985b":function(e,t,n){"use strict";var a=n("853f"),r=n.n(a);r.a},c314:function(e,t,n){},ca80:function(e,t,n){},d79f:function(e,t,n){"use strict";var a=n("ca80"),r=n.n(a);r.a},e26e:function(e,t,n){},e3d0:function(e,t,n){},ebc5:function(e,t,n){"use strict";var a=n("c314"),r=n.n(a);r.a},f2fe:function(e,t,n){"use strict";var a=n("e26e"),r=n.n(a);r.a}});
//# sourceMappingURL=app.7ae0c8d0.js.map