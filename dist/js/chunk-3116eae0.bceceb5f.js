(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3116eae0"],{"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0d58":function(t,e,r){var n=r("ce10"),o=r("e11e");t.exports=Object.keys||function(t){return n(t,o)}},"11e9":function(t,e,r){var n=r("52a7"),o=r("4630"),i=r("6821"),c=r("6a99"),a=r("69a8"),s=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=i(t),e=c(e,!0),s)try{return u(t,e)}catch(r){}if(a(t,e))return o(!n.f.call(t,e),t[e])}},1495:function(t,e,r){var n=r("86cc"),o=r("cb7c"),i=r("0d58");t.exports=r("9e1e")?Object.defineProperties:function(t,e){o(t);var r,c=i(e),a=c.length,s=0;while(a>s)n.f(t,r=c[s++],e[r]);return t}},"2aeb":function(t,e,r){var n=r("cb7c"),o=r("1495"),i=r("e11e"),c=r("613b")("IE_PROTO"),a=function(){},s="prototype",u=function(){var t,e=r("230e")("iframe"),n=i.length,o="<",c=">";e.style.display="none",r("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+c+"document.F=Object"+o+"/script"+c),t.close(),u=t.F;while(n--)delete u[s][i[n]];return u()};t.exports=Object.create||function(t,e){var r;return null!==t?(a[s]=n(t),r=new a,a[s]=null,r[c]=t):r=u(),void 0===e?r:o(r,e)}},"2d95":function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},"2fdb":function(t,e,r){"use strict";var n=r("5ca1"),o=r("d2c8"),i="includes";n(n.P+n.F*r("5147")(i),"String",{includes:function(t){return!!~o(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3846:function(t,e,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"4eb9":function(t,e,r){"use strict";var n=r("ddb4"),o=r.n(n);o.a},5147:function(t,e,r){var n=r("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(o){}}return!0}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,r){var n=r("d3f4"),o=r("8b97").set;t.exports=function(t,e,r){var i,c=e.constructor;return c!==r&&"function"==typeof c&&(i=c.prototype)!==r.prototype&&n(i)&&o&&o(t,i),t}},"5fa7":function(t,e,r){"use strict";var n=r("f9d0"),o=r.n(n);o.a},"613b":function(t,e,r){var n=r("5537")("keys"),o=r("ca5a");t.exports=function(t){return n[t]||(n[t]=o(t))}},"626a":function(t,e,r){var n=r("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},6762:function(t,e,r){"use strict";var n=r("5ca1"),o=r("c366")(!0);n(n.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},6821:function(t,e,r){var n=r("626a"),o=r("be13");t.exports=function(t){return n(o(t))}},"6b54":function(t,e,r){"use strict";r("3846");var n=r("cb7c"),o=r("0bfb"),i=r("9e1e"),c="toString",a=/./[c],s=function(t){r("2aba")(RegExp.prototype,c,t,!0)};r("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?s(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):a.name!=c&&s(function(){return a.call(this)})},"81b2":function(t,e,r){(function(r){
/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){"use strict";"object"==typeof self&&self.self===self&&self||"object"==typeof r&&r.global;var n=9007199254740991;function o(t){return!("number"!=typeof t||t!=t||t===1/0||t===-1/0)}function i(t){return"number"==typeof t&&Math.abs(t)<=n}var c=/(hundred|thousand|(m|b|tr|quadr)illion)$/,a=/teen$/,s=/y$/,u=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,f={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function l(t){return c.test(t)||a.test(t)?t+"th":s.test(t)?t.replace(s,"ieth"):u.test(t)?t.replace(u,d):t}function d(t,e){return f[e]}var p=10,h=100,v=1e3,b=1e6,g=1e9,y=1e12,m=1e15,_=9007199254740992,x=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],C=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function w(t,e){var r,n=parseInt(t,10);if(!o(n))throw new TypeError("Not a finite number: "+t+" ("+typeof t+")");if(!i(n))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return r=function t(e){var r,n,o=arguments[1];return 0===e?o?o.join(" ").replace(/,$/,""):"zero":(o||(o=[]),e<0&&(o.push("minus"),e=Math.abs(e)),e<20?(r=0,n=x[e]):e<h?(r=e%p,n=C[Math.floor(e/p)],r&&(n+="-"+x[r],r=0)):e<v?(r=e%h,n=t(Math.floor(e/h))+" hundred"):e<b?(r=e%v,n=t(Math.floor(e/v))+" thousand,"):e<g?(r=e%b,n=t(Math.floor(e/b))+" million,"):e<y?(r=e%g,n=t(Math.floor(e/g))+" billion,"):e<m?(r=e%y,n=t(Math.floor(e/y))+" trillion,"):e<=_&&(r=e%m,n=t(Math.floor(e/m))+" quadrillion,"),o.push(n),t(r,o))}(n),e?l(r):r}var E={toOrdinal:function(t){var e=parseInt(t,10);if(!o(e))throw new TypeError("Not a finite number: "+t+" ("+typeof t+")");if(!i(e))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var r=String(e),n=Math.abs(e%100),c=11<=n&&n<=13,a=r.charAt(r.length-1);return r+(c?"th":"1"===a?"st":"2"===a?"nd":"3"===a?"rd":"th")},toWords:w,toWordsOrdinal:function(t){return l(w(t))}};t.exports&&(e=t.exports=E),e.numberToWords=E}()}).call(this,r("c8ba"))},"8b97":function(t,e,r){var n=r("d3f4"),o=r("cb7c"),i=function(t,e){if(o(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,r){return i(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:i}},9093:function(t,e,r){var n=r("ce10"),o=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},"9f78":function(t,e,r){"use strict";var n=r("f39e"),o=r.n(n);o.a},aa77:function(t,e,r){var n=r("5ca1"),o=r("be13"),i=r("79e5"),c=r("fdef"),a="["+c+"]",s="​",u=RegExp("^"+a+a+"*"),f=RegExp(a+a+"*$"),l=function(t,e,r){var o={},a=i(function(){return!!c[t]()||s[t]()!=s}),u=o[t]=a?e(d):c[t];r&&(o[r]=u),n(n.P+n.F*a,"String",o)},d=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},aae3:function(t,e,r){var n=r("d3f4"),o=r("2d95"),i=r("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},c366:function(t,e,r){var n=r("6821"),o=r("9def"),i=r("77f1");t.exports=function(t){return function(e,r,c){var a,s=n(e),u=o(s.length),f=i(c,u);if(t&&r!=r){while(u>f)if(a=s[f++],a!=a)return!0}else for(;u>f;f++)if((t||f in s)&&s[f]===r)return t||f||0;return!t&&-1}}},c5f6:function(t,e,r){"use strict";var n=r("7726"),o=r("69a8"),i=r("2d95"),c=r("5dbc"),a=r("6a99"),s=r("79e5"),u=r("9093").f,f=r("11e9").f,l=r("86cc").f,d=r("aa77").trim,p="Number",h=n[p],v=h,b=h.prototype,g=i(r("2aeb")(b))==p,y="trim"in String.prototype,m=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():d(e,3);var r,n,o,i=e.charCodeAt(0);if(43===i||45===i){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var c,s=e.slice(2),u=0,f=s.length;u<f;u++)if(c=s.charCodeAt(u),c<48||c>o)return NaN;return parseInt(s,n)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof h&&(g?s(function(){b.valueOf.call(r)}):i(r)!=p)?c(new v(m(e)),r,h):m(e)};for(var _,x=r("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;x.length>C;C++)o(v,_=x[C])&&!o(h,_)&&l(h,_,f(v,_));h.prototype=b,b.constructor=h,r("2aba")(n,p,h)}},cbf2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"board"},[r("GameHeader",{attrs:{"current-player":t.currentPlayer}}),r("div",{staticClass:"board__content"},[r("div",{staticClass:"board__scores"},[r("Scores"),r("div",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.scores))])],1),r("div",{staticClass:"board__cards"},[r("CardsMatrix",{attrs:{cards:t.cards,"on-card-select":t.selectCard,"is-flipped":t.isCardFlipped}})],1)])],1)},o=[],i=(r("6762"),r("2fdb"),r("6b54"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"game-header"},[r("Title",{attrs:{text:t.title,color:"white"}})],1)}),c=[],a=(r("c5f6"),r("81b2")),s=r("43b3"),u={name:"GameHeader",components:{Title:s["a"]},props:{currentPlayer:{type:Number,default:1}},computed:{title:function(){return"Player ".concat(Object(a["toWords"])(this.currentPlayer),"'s turn")}}},f=u,l=(r("5fa7"),r("2877")),d=Object(l["a"])(f,i,c,!1,null,"9b039fdc",null),p=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cards"},t._l(t.cards,function(e,n){return r("div",{key:"card-"+n,staticClass:"card",class:{flipped:t.isFlipped(n,e.id)},on:{click:function(){return t.onCardSelect(n)}}},[r("div",{staticClass:"card__flipper"},[r("div",{staticClass:"card__placeholder"},[t._v("Dogemory")]),r("div",{staticClass:"card__img",style:{"background-image":"url('"+e.img+"')"}})])])}),0)},v=[],b={name:"CardsMatrix",components:{},props:{cards:{type:Array,default:function(){return[]}},isFlipped:{type:Function,default:function(){return!1}},onCardSelect:{type:Function,default:function(){}}},data:function(){return{selected:[]}},methods:{}},g=b,y=(r("4eb9"),Object(l["a"])(g,h,v,!1,null,"31991a8d",null)),m=y.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"scores",style:{color:t.color}},[t._v(t._s(t.text))])},x=[],C={name:"Scores",props:{scores:{type:Array,default:function(){return[0,0,0]}}}},w=C,E=(r("9f78"),Object(l["a"])(w,_,x,!1,null,"3908655d",null)),O=E.exports,S=r("6792"),I={name:"Home",components:{GameHeader:p,CardsMatrix:m,Scores:O},data:function(){return{selectedCards:[]}},computed:{cards:function(){return this.$store.state.game.pairs||[]},matchedPairs:function(){return this.$store.state.game.matchedPairs||[]},currentPlayer:function(){return this.$store.state.game.currentPlayer||1},scores:function(){return this.$store.state.game.scores.toString()||[].toString()}},methods:{selectCard:function(t){var e=this;if(this.selectedCards.length<2&&!this.selectedCards.includes(t)&&this.selectedCards.push(t),2===this.selectedCards.length){var r=this.cards[this.selectedCards[0]],n=this.cards[this.selectedCards[1]];r.id===n.id?(this.setMatchedPair(r.id),this.increaseCurrentPlayerScore()):this.changePlayer(),setTimeout(function(){e.clearSelectedCards()},1e3)}},clearSelectedCards:function(){this.selectedCards=[]},changePlayer:function(){this.$store.commit(S["f"])},increaseCurrentPlayerScore:function(){this.$store.commit(S["b"])},setMatchedPair:function(t){this.$store.commit(S["e"],t)},isCardFlipped:function(t,e){return this.matchedPairs.includes(e)||this.selectedCards.includes(t)}}},P=I,N=Object(l["a"])(P,n,o,!1,null,null,null);e["default"]=N.exports},ce10:function(t,e,r){var n=r("69a8"),o=r("6821"),i=r("c366")(!1),c=r("613b")("IE_PROTO");t.exports=function(t,e){var r,a=o(t),s=0,u=[];for(r in a)r!=c&&n(a,r)&&u.push(r);while(e.length>s)n(a,r=e[s++])&&(~i(u,r)||u.push(r));return u}},d2c8:function(t,e,r){var n=r("aae3"),o=r("be13");t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},ddb4:function(t,e,r){},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},f39e:function(t,e,r){},f9d0:function(t,e,r){},fab2:function(t,e,r){var n=r("7726").document;t.exports=n&&n.documentElement},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-3116eae0.bceceb5f.js.map