/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});;(()=>{var __webpack_modules__={634:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval("/* harmony import */ var _src_panzoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);\n\nconsole.log('This is a demo version of Panzoom for testing.');\nconsole.log('It exposes a global (window.Panzoom) and should not be used in production.');\nwindow.Panzoom = _src_panzoom__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjM0LmpzIiwibWFwcGluZ3MiOiI7QUFBb0M7QUFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQztBQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLDRFQUE0RSxDQUFDO0FBT3pGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsMERBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcGFuem9vbS9wYW56b29tLy4vZGVtby9nbG9iYWwtcGFuem9vbS50cz83YjgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYW56b29tIGZyb20gJy4uL3NyYy9wYW56b29tJ1xuXG5jb25zb2xlLmxvZygnVGhpcyBpcyBhIGRlbW8gdmVyc2lvbiBvZiBQYW56b29tIGZvciB0ZXN0aW5nLicpXG5jb25zb2xlLmxvZygnSXQgZXhwb3NlcyBhIGdsb2JhbCAod2luZG93LlBhbnpvb20pIGFuZCBzaG91bGQgbm90IGJlIHVzZWQgaW4gcHJvZHVjdGlvbi4nKVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIFBhbnpvb206IHR5cGVvZiBQYW56b29tXG4gIH1cbn1cbndpbmRvdy5QYW56b29tID0gUGFuem9vbVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///634\n")},36:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"Z\": () => (/* binding */ panzoom)\n});\n\n// EXTERNAL MODULE: ./src/polyfills.js\nvar polyfills = __webpack_require__(252);\n;// CONCATENATED MODULE: ./src/pointers.ts\n/**\n * Utilites for working with multiple pointer events\n */\nfunction findEventIndex(pointers, event) {\n    var i = pointers.length;\n    while (i--) {\n        if (pointers[i].pointerId === event.pointerId) {\n            return i;\n        }\n    }\n    return -1;\n}\nfunction addPointer(pointers, event) {\n    var i;\n    // Add touches if applicable\n    if (event.touches) {\n        i = 0;\n        for (var _i = 0, _a = event.touches; _i < _a.length; _i++) {\n            var touch = _a[_i];\n            touch.pointerId = i++;\n            addPointer(pointers, touch);\n        }\n        return;\n    }\n    i = findEventIndex(pointers, event);\n    // Update if already present\n    if (i > -1) {\n        pointers.splice(i, 1);\n    }\n    pointers.push(event);\n}\nfunction removePointer(pointers, event) {\n    // Add touches if applicable\n    if (event.touches) {\n        // Remove all touches\n        while (pointers.length) {\n            pointers.pop();\n        }\n        return;\n    }\n    var i = findEventIndex(pointers, event);\n    if (i > -1) {\n        pointers.splice(i, 1);\n    }\n}\n/**\n * Calculates a center point between\n * the given pointer events, for panning\n * with multiple pointers.\n */\nfunction getMiddle(pointers) {\n    // Copy to avoid changing by reference\n    pointers = pointers.slice(0);\n    var event1 = pointers.pop();\n    var event2;\n    while ((event2 = pointers.pop())) {\n        event1 = {\n            clientX: (event2.clientX - event1.clientX) / 2 + event1.clientX,\n            clientY: (event2.clientY - event1.clientY) / 2 + event1.clientY\n        };\n    }\n    return event1;\n}\n/**\n * Calculates the distance between two points\n * for pinch zooming.\n * Limits to the first 2\n */\nfunction getDistance(pointers) {\n    if (pointers.length < 2) {\n        return 0;\n    }\n    var event1 = pointers[0];\n    var event2 = pointers[1];\n    return Math.sqrt(Math.pow(Math.abs(event2.clientX - event1.clientX), 2) +\n        Math.pow(Math.abs(event2.clientY - event1.clientY), 2));\n}\n\n;// CONCATENATED MODULE: ./src/events.ts\nvar events = {\n    down: 'mousedown',\n    move: 'mousemove',\n    up: 'mouseup mouseleave'\n};\nif (typeof window !== 'undefined') {\n    if (typeof window.PointerEvent === 'function') {\n        events = {\n            down: 'pointerdown',\n            move: 'pointermove',\n            up: 'pointerup pointerleave pointercancel'\n        };\n    }\n    else if (typeof window.TouchEvent === 'function') {\n        events = {\n            down: 'touchstart',\n            move: 'touchmove',\n            up: 'touchend touchcancel'\n        };\n    }\n}\n\nfunction onPointer(event, elem, handler, eventOpts) {\n    events[event].split(' ').forEach(function (name) {\n        ;\n        elem.addEventListener(name, handler, eventOpts);\n    });\n}\nfunction destroyPointer(event, elem, handler) {\n    events[event].split(' ').forEach(function (name) {\n        ;\n        elem.removeEventListener(name, handler);\n    });\n}\n\n;// CONCATENATED MODULE: ./src/css.ts\nvar isIE = typeof document !== 'undefined' && !!document.documentMode;\n/**\n * Lazy creation of a CSS style declaration\n */\nvar divStyle;\nfunction createStyle() {\n    if (divStyle) {\n        return divStyle;\n    }\n    return (divStyle = document.createElement('div').style);\n}\n/**\n * Proper prefixing for cross-browser compatibility\n */\nvar prefixes = ['webkit', 'moz', 'ms'];\nvar prefixCache = {};\nfunction getPrefixedName(name) {\n    if (prefixCache[name]) {\n        return prefixCache[name];\n    }\n    var divStyle = createStyle();\n    if (name in divStyle) {\n        return (prefixCache[name] = name);\n    }\n    var capName = name[0].toUpperCase() + name.slice(1);\n    var i = prefixes.length;\n    while (i--) {\n        var prefixedName = \"\" + prefixes[i] + capName;\n        if (prefixedName in divStyle) {\n            return (prefixCache[name] = prefixedName);\n        }\n    }\n}\n/**\n * Gets a style value expected to be a number\n */\nfunction getCSSNum(name, style) {\n    return parseFloat(style[getPrefixedName(name)]) || 0;\n}\nfunction getBoxStyle(elem, name, style) {\n    if (style === void 0) { style = window.getComputedStyle(elem); }\n    // Support: FF 68+\n    // Firefox requires specificity for border\n    var suffix = name === 'border' ? 'Width' : '';\n    return {\n        left: getCSSNum(name + \"Left\" + suffix, style),\n        right: getCSSNum(name + \"Right\" + suffix, style),\n        top: getCSSNum(name + \"Top\" + suffix, style),\n        bottom: getCSSNum(name + \"Bottom\" + suffix, style)\n    };\n}\n/**\n * Set a style using the properly prefixed name\n */\nfunction setStyle(elem, name, value) {\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    elem.style[getPrefixedName(name)] = value;\n}\n/**\n * Constructs the transition from panzoom options\n * and takes care of prefixing the transition and transform\n */\nfunction setTransition(elem, options) {\n    var transform = getPrefixedName('transform');\n    setStyle(elem, 'transition', transform + \" \" + options.duration + \"ms \" + options.easing);\n}\n/**\n * Set the transform using the proper prefix\n *\n * Override the transform setter.\n * This is exposed mostly so the user could\n * set other parts of a transform\n * aside from scale and translate.\n * Default is defined in src/css.ts.\n *\n * ```js\n * // This example always sets a rotation\n * // when setting the scale and translation\n * const panzoom = Panzoom(elem, {\n *   setTransform: (elem, { scale, x, y }) => {\n *     panzoom.setStyle('transform', `rotate(0.5turn) scale(${scale}) translate(${x}px, ${y}px)`)\n *   }\n * })\n * ```\n */\nfunction setTransform(elem, _a, _options) {\n    var x = _a.x, y = _a.y, scale = _a.scale, isSVG = _a.isSVG;\n    setStyle(elem, 'transform', \"scale(\" + scale + \") translate(\" + x + \"px, \" + y + \"px)\");\n    if (isSVG && isIE) {\n        var matrixValue = window.getComputedStyle(elem).getPropertyValue('transform');\n        elem.setAttribute('transform', matrixValue);\n    }\n}\n/**\n * Dimensions used in containment and focal point zooming\n */\nfunction getDimensions(elem) {\n    var parent = elem.parentNode;\n    var style = window.getComputedStyle(elem);\n    var parentStyle = window.getComputedStyle(parent);\n    var rectElem = elem.getBoundingClientRect();\n    var rectParent = parent.getBoundingClientRect();\n    return {\n        elem: {\n            style: style,\n            width: rectElem.width,\n            height: rectElem.height,\n            top: rectElem.top,\n            bottom: rectElem.bottom,\n            left: rectElem.left,\n            right: rectElem.right,\n            margin: getBoxStyle(elem, 'margin', style),\n            border: getBoxStyle(elem, 'border', style)\n        },\n        parent: {\n            style: parentStyle,\n            width: rectParent.width,\n            height: rectParent.height,\n            top: rectParent.top,\n            bottom: rectParent.bottom,\n            left: rectParent.left,\n            right: rectParent.right,\n            padding: getBoxStyle(parent, 'padding', parentStyle),\n            border: getBoxStyle(parent, 'border', parentStyle)\n        }\n    };\n}\n\n;// CONCATENATED MODULE: ./src/isAttached.ts\n/**\n * Determine if an element is attached to the DOM\n * Panzoom requires this so events work properly\n */\nfunction isAttached(elem) {\n    var doc = elem.ownerDocument;\n    var parent = elem.parentNode;\n    return (doc &&\n        parent &&\n        doc.nodeType === 9 &&\n        parent.nodeType === 1 &&\n        doc.documentElement.contains(parent));\n}\n\n;// CONCATENATED MODULE: ./src/isExcluded.ts\nfunction getClass(elem) {\n    return (elem.getAttribute('class') || '').trim();\n}\nfunction hasClass(elem, className) {\n    return elem.nodeType === 1 && (\" \" + getClass(elem) + \" \").indexOf(\" \" + className + \" \") > -1;\n}\nfunction isExcluded(elem, options) {\n    for (var cur = elem; cur != null; cur = cur.parentNode) {\n        if (hasClass(cur, options.excludeClass) || options.exclude.indexOf(cur) > -1) {\n            return true;\n        }\n    }\n    return false;\n}\n\n;// CONCATENATED MODULE: ./src/isSVGElement.ts\n/**\n * Determine if an element is SVG by checking the namespace\n * Exception: the <svg> element itself should be treated like HTML\n */\nvar rsvg = /^http:[\\w\\.\\/]+svg$/;\nfunction isSVGElement(elem) {\n    return rsvg.test(elem.namespaceURI) && elem.nodeName.toLowerCase() !== 'svg';\n}\n\n;// CONCATENATED MODULE: ./src/shallowClone.ts\nfunction shallowClone(obj) {\n    var clone = {};\n    for (var key in obj) {\n        if (obj.hasOwnProperty(key)) {\n            clone[key] = obj[key];\n        }\n    }\n    return clone;\n}\n\n;// CONCATENATED MODULE: ./src/panzoom.ts\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n/**\n * Panzoom for panning and zooming elements using CSS transforms\n * https://github.com/timmywil/panzoom\n *\n * Copyright Timmy Willison and other contributors\n * Released under the MIT license\n * https://github.com/timmywil/panzoom/blob/main/MIT-License.txt\n *\n */\n\n\n\n\n\n\n\n\nvar defaultOptions = {\n    animate: false,\n    canvas: false,\n    cursor: 'move',\n    disablePan: false,\n    disableZoom: false,\n    disableXAxis: false,\n    disableYAxis: false,\n    duration: 200,\n    easing: 'ease-in-out',\n    exclude: [],\n    excludeClass: 'panzoom-exclude',\n    handleStartEvent: function (e) {\n        e.preventDefault();\n        e.stopPropagation();\n    },\n    maxScale: 4,\n    minScale: 0.125,\n    overflow: 'hidden',\n    panOnlyWhenZoomed: false,\n    relative: false,\n    setTransform: setTransform,\n    startX: 0,\n    startY: 0,\n    startScale: 1,\n    step: 0.3,\n    touchAction: 'none'\n};\nfunction Panzoom(elem, options) {\n    if (!elem) {\n        throw new Error('Panzoom requires an element as an argument');\n    }\n    if (elem.nodeType !== 1) {\n        throw new Error('Panzoom requires an element with a nodeType of 1');\n    }\n    if (!isAttached(elem)) {\n        throw new Error('Panzoom should be called on elements that have been attached to the DOM');\n    }\n    options = __assign(__assign({}, defaultOptions), options);\n    var isSVG = isSVGElement(elem);\n    var parent = elem.parentNode;\n    // Set parent styles\n    parent.style.overflow = options.overflow;\n    parent.style.userSelect = 'none';\n    // This is important for mobile to\n    // prevent scrolling while panning\n    parent.style.touchAction = options.touchAction;\n    (options.canvas ? parent : elem).style.cursor = options.cursor;\n    // Set element styles\n    elem.style.userSelect = 'none';\n    elem.style.touchAction = options.touchAction;\n    // The default for HTML is '50% 50%'\n    // The default for SVG is '0 0'\n    // SVG can't be changed in IE\n    setStyle(elem, 'transformOrigin', typeof options.origin === 'string' ? options.origin : isSVG ? '0 0' : '50% 50%');\n    function resetStyle() {\n        parent.style.overflow = '';\n        parent.style.userSelect = '';\n        parent.style.touchAction = '';\n        parent.style.cursor = '';\n        elem.style.cursor = '';\n        elem.style.userSelect = '';\n        elem.style.touchAction = '';\n        setStyle(elem, 'transformOrigin', '');\n    }\n    function setOptions(opts) {\n        if (opts === void 0) { opts = {}; }\n        for (var key in opts) {\n            if (opts.hasOwnProperty(key)) {\n                options[key] = opts[key];\n            }\n        }\n        // Handle option side-effects\n        if (opts.hasOwnProperty('cursor') || opts.hasOwnProperty('canvas')) {\n            parent.style.cursor = elem.style.cursor = '';\n            (options.canvas ? parent : elem).style.cursor = options.cursor;\n        }\n        if (opts.hasOwnProperty('overflow')) {\n            parent.style.overflow = opts.overflow;\n        }\n        if (opts.hasOwnProperty('touchAction')) {\n            parent.style.touchAction = opts.touchAction;\n            elem.style.touchAction = opts.touchAction;\n        }\n        if (opts.hasOwnProperty('minScale') ||\n            opts.hasOwnProperty('maxScale') ||\n            opts.hasOwnProperty('contain')) {\n            setMinMax();\n        }\n    }\n    var x = 0;\n    var y = 0;\n    var scale = 1;\n    var isPanning = false;\n    zoom(options.startScale, { animate: false, force: true });\n    // Wait for scale to update\n    // for accurate dimensions\n    // to constrain initial values\n    setTimeout(function () {\n        setMinMax();\n        pan(options.startX, options.startY, { animate: false, force: true });\n    });\n    function trigger(eventName, detail, opts) {\n        if (opts.silent) {\n            return;\n        }\n        var event = new CustomEvent(eventName, { detail: detail });\n        elem.dispatchEvent(event);\n    }\n    function setTransformWithEvent(eventName, opts, originalEvent) {\n        var value = { x: x, y: y, scale: scale, isSVG: isSVG, originalEvent: originalEvent };\n        requestAnimationFrame(function () {\n            if (typeof opts.animate === 'boolean') {\n                if (opts.animate) {\n                    setTransition(elem, opts);\n                }\n                else {\n                    setStyle(elem, 'transition', 'none');\n                }\n            }\n            opts.setTransform(elem, value, opts);\n            trigger(eventName, value, opts);\n            trigger('panzoomchange', value, opts);\n        });\n        return value;\n    }\n    function setMinMax() {\n        if (options.contain) {\n            var dims = getDimensions(elem);\n            var parentWidth = dims.parent.width - dims.parent.border.left - dims.parent.border.right;\n            var parentHeight = dims.parent.height - dims.parent.border.top - dims.parent.border.bottom;\n            var elemWidth = dims.elem.width / scale;\n            var elemHeight = dims.elem.height / scale;\n            var elemScaledWidth = parentWidth / elemWidth;\n            var elemScaledHeight = parentHeight / elemHeight;\n            if (options.contain === 'inside') {\n                options.maxScale = Math.min(elemScaledWidth, elemScaledHeight);\n            }\n            else if (options.contain === 'outside') {\n                options.minScale = Math.max(elemScaledWidth, elemScaledHeight);\n            }\n        }\n    }\n    function constrainXY(toX, toY, toScale, panOptions) {\n        var opts = __assign(__assign({}, options), panOptions);\n        var result = { x: x, y: y, opts: opts };\n        if (!opts.force && (opts.disablePan || (opts.panOnlyWhenZoomed && scale === opts.startScale))) {\n            return result;\n        }\n        toX = parseFloat(toX);\n        toY = parseFloat(toY);\n        if (!opts.disableXAxis) {\n            result.x = (opts.relative ? x : 0) + toX;\n        }\n        if (!opts.disableYAxis) {\n            result.y = (opts.relative ? y : 0) + toY;\n        }\n        if (opts.contain) {\n            var dims = getDimensions(elem);\n            var realWidth = dims.elem.width / scale;\n            var realHeight = dims.elem.height / scale;\n            var scaledWidth = realWidth * toScale;\n            var scaledHeight = realHeight * toScale;\n            var diffHorizontal = (scaledWidth - realWidth) / 2;\n            var diffVertical = (scaledHeight - realHeight) / 2;\n            if (opts.contain === 'inside') {\n                var minX = (-dims.elem.margin.left - dims.parent.padding.left + diffHorizontal) / toScale;\n                var maxX = (dims.parent.width -\n                    scaledWidth -\n                    dims.parent.padding.left -\n                    dims.elem.margin.left -\n                    dims.parent.border.left -\n                    dims.parent.border.right +\n                    diffHorizontal) /\n                    toScale;\n                result.x = Math.max(Math.min(result.x, maxX), minX);\n                var minY = (-dims.elem.margin.top - dims.parent.padding.top + diffVertical) / toScale;\n                var maxY = (dims.parent.height -\n                    scaledHeight -\n                    dims.parent.padding.top -\n                    dims.elem.margin.top -\n                    dims.parent.border.top -\n                    dims.parent.border.bottom +\n                    diffVertical) /\n                    toScale;\n                result.y = Math.max(Math.min(result.y, maxY), minY);\n            }\n            else if (opts.contain === 'outside') {\n                var minX = (-(scaledWidth - dims.parent.width) -\n                    dims.parent.padding.left -\n                    dims.parent.border.left -\n                    dims.parent.border.right +\n                    diffHorizontal) /\n                    toScale;\n                var maxX = (diffHorizontal - dims.parent.padding.left) / toScale;\n                result.x = Math.max(Math.min(result.x, maxX), minX);\n                var minY = (-(scaledHeight - dims.parent.height) -\n                    dims.parent.padding.top -\n                    dims.parent.border.top -\n                    dims.parent.border.bottom +\n                    diffVertical) /\n                    toScale;\n                var maxY = (diffVertical - dims.parent.padding.top) / toScale;\n                result.y = Math.max(Math.min(result.y, maxY), minY);\n            }\n        }\n        return result;\n    }\n    function constrainScale(toScale, zoomOptions) {\n        var opts = __assign(__assign({}, options), zoomOptions);\n        var result = { scale: scale, opts: opts };\n        if (!opts.force && opts.disableZoom) {\n            return result;\n        }\n        result.scale = Math.min(Math.max(toScale, opts.minScale), opts.maxScale);\n        return result;\n    }\n    function pan(toX, toY, panOptions, originalEvent) {\n        var result = constrainXY(toX, toY, scale, panOptions);\n        var opts = result.opts;\n        x = result.x;\n        y = result.y;\n        return setTransformWithEvent('panzoompan', opts, originalEvent);\n    }\n    function zoom(toScale, zoomOptions, originalEvent) {\n        var result = constrainScale(toScale, zoomOptions);\n        var opts = result.opts;\n        if (!opts.force && opts.disableZoom) {\n            return;\n        }\n        toScale = result.scale;\n        var toX = x;\n        var toY = y;\n        if (opts.focal) {\n            // The difference between the point after the scale and the point before the scale\n            // plus the current translation after the scale\n            // neutralized to no scale (as the transform scale will apply to the translation)\n            var focal = opts.focal;\n            toX = (focal.x / toScale - focal.x / scale + x * toScale) / toScale;\n            toY = (focal.y / toScale - focal.y / scale + y * toScale) / toScale;\n        }\n        var panResult = constrainXY(toX, toY, toScale, { relative: false, force: true });\n        x = panResult.x;\n        y = panResult.y;\n        scale = toScale;\n        return setTransformWithEvent('panzoomzoom', opts, originalEvent);\n    }\n    function zoomInOut(isIn, zoomOptions) {\n        var opts = __assign(__assign(__assign({}, options), { animate: true }), zoomOptions);\n        return zoom(scale * Math.exp((isIn ? 1 : -1) * opts.step), opts);\n    }\n    function zoomIn(zoomOptions) {\n        return zoomInOut(true, zoomOptions);\n    }\n    function zoomOut(zoomOptions) {\n        return zoomInOut(false, zoomOptions);\n    }\n    function zoomToPoint(toScale, point, zoomOptions, originalEvent) {\n        var dims = getDimensions(elem);\n        // Instead of thinking of operating on the panzoom element,\n        // think of operating on the area inside the panzoom\n        // element's parent\n        // Subtract padding and border\n        var effectiveArea = {\n            width: dims.parent.width -\n                dims.parent.padding.left -\n                dims.parent.padding.right -\n                dims.parent.border.left -\n                dims.parent.border.right,\n            height: dims.parent.height -\n                dims.parent.padding.top -\n                dims.parent.padding.bottom -\n                dims.parent.border.top -\n                dims.parent.border.bottom\n        };\n        // Adjust the clientX/clientY to ignore the area\n        // outside the effective area\n        var clientX = point.clientX -\n            dims.parent.left -\n            dims.parent.padding.left -\n            dims.parent.border.left -\n            dims.elem.margin.left;\n        var clientY = point.clientY -\n            dims.parent.top -\n            dims.parent.padding.top -\n            dims.parent.border.top -\n            dims.elem.margin.top;\n        // Adjust the clientX/clientY for HTML elements,\n        // because they have a transform-origin of 50% 50%\n        if (!isSVG) {\n            clientX -= dims.elem.width / scale / 2;\n            clientY -= dims.elem.height / scale / 2;\n        }\n        // Convert the mouse point from it's position over the\n        // effective area before the scale to the position\n        // over the effective area after the scale.\n        var focal = {\n            x: (clientX / effectiveArea.width) * (effectiveArea.width * toScale),\n            y: (clientY / effectiveArea.height) * (effectiveArea.height * toScale)\n        };\n        return zoom(toScale, __assign(__assign({ animate: false }, zoomOptions), { focal: focal }), originalEvent);\n    }\n    function zoomWithWheel(event, zoomOptions) {\n        // Need to prevent the default here\n        // or it conflicts with regular page scroll\n        event.preventDefault();\n        var opts = __assign(__assign(__assign({}, options), zoomOptions), { animate: false });\n        // Normalize to deltaX in case shift modifier is used on Mac\n        var delta = event.deltaY === 0 && event.deltaX ? event.deltaX : event.deltaY;\n        var wheel = delta < 0 ? 1 : -1;\n        var toScale = constrainScale(scale * Math.exp((wheel * opts.step) / 3), opts).scale;\n        return zoomToPoint(toScale, event, opts);\n    }\n    function reset(resetOptions) {\n        var opts = __assign(__assign(__assign({}, options), { animate: true, force: true }), resetOptions);\n        scale = constrainScale(opts.startScale, opts).scale;\n        var panResult = constrainXY(opts.startX, opts.startY, scale, opts);\n        x = panResult.x;\n        y = panResult.y;\n        return setTransformWithEvent('panzoomreset', opts);\n    }\n    var origX;\n    var origY;\n    var startClientX;\n    var startClientY;\n    var startScale;\n    var startDistance;\n    var pointers = [];\n    function handleDown(event) {\n        // Don't handle this event if the target is excluded\n        if (isExcluded(event.target, options)) {\n            return;\n        }\n        addPointer(pointers, event);\n        isPanning = true;\n        options.handleStartEvent(event);\n        origX = x;\n        origY = y;\n        trigger('panzoomstart', { x: x, y: y, scale: scale, isSVG: isSVG, originalEvent: event }, options);\n        // This works whether there are multiple\n        // pointers or not\n        var point = getMiddle(pointers);\n        startClientX = point.clientX;\n        startClientY = point.clientY;\n        startScale = scale;\n        startDistance = getDistance(pointers);\n    }\n    function move(event) {\n        if (!isPanning ||\n            origX === undefined ||\n            origY === undefined ||\n            startClientX === undefined ||\n            startClientY === undefined) {\n            return;\n        }\n        addPointer(pointers, event);\n        var current = getMiddle(pointers);\n        if (pointers.length > 1) {\n            // A startDistance of 0 means\n            // that there weren't 2 pointers\n            // handled on start\n            if (startDistance === 0) {\n                startDistance = getDistance(pointers);\n            }\n            // Use the distance between the first 2 pointers\n            // to determine the current scale\n            var diff = getDistance(pointers) - startDistance;\n            var toScale = constrainScale((diff * options.step) / 80 + startScale).scale;\n            zoomToPoint(toScale, current);\n        }\n        else {\n            // Panning during pinch zoom can cause issues\n            // because the zoom has not always rendered in time\n            // for accurate calculations\n            // See https://github.com/timmywil/panzoom/issues/512\n            pan(origX + (current.clientX - startClientX) / scale, origY + (current.clientY - startClientY) / scale, {\n                animate: false\n            }, event);\n        }\n    }\n    function handleUp(event) {\n        // Don't call panzoomend when panning with 2 touches\n        // until both touches end\n        if (pointers.length === 1) {\n            trigger('panzoomend', { x: x, y: y, scale: scale, isSVG: isSVG, originalEvent: event }, options);\n        }\n        // Note: don't remove all pointers\n        // Can restart without having to reinitiate all of them\n        // Remove the pointer regardless of the isPanning state\n        removePointer(pointers, event);\n        if (!isPanning) {\n            return;\n        }\n        isPanning = false;\n        origX = origY = startClientX = startClientY = undefined;\n    }\n    var bound = false;\n    function bind() {\n        if (bound) {\n            return;\n        }\n        bound = true;\n        onPointer('down', options.canvas ? parent : elem, handleDown);\n        onPointer('move', document, move, { passive: true });\n        onPointer('up', document, handleUp, { passive: true });\n    }\n    function destroy() {\n        bound = false;\n        destroyPointer('down', options.canvas ? parent : elem, handleDown);\n        destroyPointer('move', document, move);\n        destroyPointer('up', document, handleUp);\n    }\n    if (!options.noBind) {\n        bind();\n    }\n    return {\n        bind: bind,\n        destroy: destroy,\n        eventNames: events,\n        getPan: function () { return ({ x: x, y: y }); },\n        getScale: function () { return scale; },\n        getOptions: function () { return shallowClone(options); },\n        pan: pan,\n        reset: reset,\n        resetStyle: resetStyle,\n        setOptions: setOptions,\n        setStyle: function (name, value) { return setStyle(elem, name, value); },\n        zoom: zoom,\n        zoomIn: zoomIn,\n        zoomOut: zoomOut,\n        zoomToPoint: zoomToPoint,\n        zoomWithWheel: zoomWithWheel\n    };\n}\nPanzoom.defaultOptions = defaultOptions;\n/* harmony default export */ const panzoom = (Panzoom);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFFSCxTQUFTLGNBQWMsQ0FBQyxRQUF3QixFQUFFLEtBQW1CO0lBQ25FLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNO0lBQ3ZCLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDVixJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUM3QyxPQUFPLENBQUM7U0FDVDtLQUNGO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRU0sU0FBUyxVQUFVLENBQUMsUUFBd0IsRUFBRSxLQUFtQjtJQUN0RSxJQUFJLENBQUM7SUFDTCw0QkFBNEI7SUFDNUIsSUFBSyxLQUFhLENBQUMsT0FBTyxFQUFFO1FBQzFCLENBQUMsR0FBRyxDQUFDO1FBQ0wsS0FBb0IsVUFBc0IsRUFBdEIsS0FBQyxLQUFhLENBQUMsT0FBTyxFQUF0QixjQUFzQixFQUF0QixJQUFzQixFQUFFO1lBQXZDLElBQU0sS0FBSztZQUNkLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1NBQzVCO1FBQ0QsT0FBTTtLQUNQO0lBQ0QsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO0lBQ25DLDRCQUE0QjtJQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNWLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN0QjtJQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3RCLENBQUM7QUFFTSxTQUFTLGFBQWEsQ0FBQyxRQUF3QixFQUFFLEtBQW1CO0lBQ3pFLDRCQUE0QjtJQUM1QixJQUFLLEtBQWEsQ0FBQyxPQUFPLEVBQUU7UUFDMUIscUJBQXFCO1FBQ3JCLE9BQU8sUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN0QixRQUFRLENBQUMsR0FBRyxFQUFFO1NBQ2Y7UUFDRCxPQUFNO0tBQ1A7SUFDRCxJQUFNLENBQUMsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztJQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNWLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN0QjtBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0ksU0FBUyxTQUFTLENBQUMsUUFBd0I7SUFDaEQsc0NBQXNDO0lBQ3RDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFJLE1BQU0sR0FBOEMsUUFBUSxDQUFDLEdBQUcsRUFBRTtJQUN0RSxJQUFJLE1BQW9CO0lBQ3hCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUU7UUFDaEMsTUFBTSxHQUFHO1lBQ1AsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQy9ELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTztTQUNoRTtLQUNGO0lBQ0QsT0FBTyxNQUFNO0FBQ2YsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSSxTQUFTLFdBQVcsQ0FBQyxRQUF3QjtJQUNsRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQztLQUNUO0lBQ0QsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FDZCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDekQ7QUFDSCxDQUFDOzs7QUNsRkQsSUFBSSxNQUFNLEdBQUc7SUFDWCxJQUFJLEVBQUUsV0FBVztJQUNqQixJQUFJLEVBQUUsV0FBVztJQUNqQixFQUFFLEVBQUUsb0JBQW9CO0NBQ3pCO0FBRUQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7SUFDakMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLEtBQUssVUFBVSxFQUFFO1FBQzdDLE1BQU0sR0FBRztZQUNQLElBQUksRUFBRSxhQUFhO1lBQ25CLElBQUksRUFBRSxhQUFhO1lBQ25CLEVBQUUsRUFBRSxzQ0FBc0M7U0FDM0M7S0FDRjtTQUFNLElBQUksT0FBTyxNQUFNLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtRQUNsRCxNQUFNLEdBQUc7WUFDUCxJQUFJLEVBQUUsWUFBWTtZQUNsQixJQUFJLEVBQUUsV0FBVztZQUNqQixFQUFFLEVBQUUsc0JBQXNCO1NBQzNCO0tBQ0Y7Q0FDRjtBQUU4QjtBQVN4QixTQUFTLFNBQVMsQ0FDdkIsS0FBNkIsRUFDN0IsSUFBeUMsRUFDekMsT0FBc0MsRUFDdEMsU0FBNkM7SUFFN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1FBQ3BDLENBQUM7UUFBQyxJQUFvQixDQUFDLGdCQUFnQixDQUNyQyxJQUF3QixFQUN4QixPQUFPLEVBQ1AsU0FBUyxDQUNWO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUM1QixLQUE2QixFQUM3QixJQUF5QyxFQUN6QyxPQUFzQztJQUV0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7UUFDcEMsQ0FBQztRQUFDLElBQW9CLENBQUMsbUJBQW1CLENBQW1CLElBQXdCLEVBQUUsT0FBTyxDQUFDO0lBQ2pHLENBQUMsQ0FBQztBQUNKLENBQUM7OztBQ3BERCxJQUFNLElBQUksR0FBRyxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksQ0FBQyxDQUFFLFFBQWdCLENBQUMsWUFBWTtBQUVoRjs7R0FFRztBQUNILElBQUksUUFBNkI7QUFDakMsU0FBUyxXQUFXO0lBQ2xCLElBQUksUUFBUSxFQUFFO1FBQ1osT0FBTyxRQUFRO0tBQ2hCO0lBQ0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN6RCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxJQUFNLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO0FBQ3hDLElBQU0sV0FBVyxHQUE4QixFQUFFO0FBQ2pELFNBQVMsZUFBZSxDQUFDLElBQVk7SUFDbkMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO0tBQ3pCO0lBQ0QsSUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFO0lBQzlCLElBQUksSUFBSSxJQUFJLFFBQVEsRUFBRTtRQUNwQixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNsQztJQUNELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRCxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTTtJQUN2QixPQUFPLENBQUMsRUFBRSxFQUFFO1FBQ1YsSUFBTSxZQUFZLEdBQUcsS0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBUztRQUMvQyxJQUFJLFlBQVksSUFBSSxRQUFRLEVBQUU7WUFDNUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7U0FDMUM7S0FDRjtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNJLFNBQVMsU0FBUyxDQUFDLElBQVksRUFBRSxLQUEwQjtJQUNoRSxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBUSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzdELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FDbEIsSUFBOEIsRUFDOUIsSUFBWSxFQUNaLEtBQTBEO0lBQTFELGdDQUE2QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0lBRTFELGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsSUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQy9DLE9BQU87UUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFJLElBQUksWUFBTyxNQUFRLEVBQUUsS0FBSyxDQUFDO1FBQzlDLEtBQUssRUFBRSxTQUFTLENBQUksSUFBSSxhQUFRLE1BQVEsRUFBRSxLQUFLLENBQUM7UUFDaEQsR0FBRyxFQUFFLFNBQVMsQ0FBSSxJQUFJLFdBQU0sTUFBUSxFQUFFLEtBQUssQ0FBQztRQUM1QyxNQUFNLEVBQUUsU0FBUyxDQUFJLElBQUksY0FBUyxNQUFRLEVBQUUsS0FBSyxDQUFDO0tBQ25EO0FBQ0gsQ0FBQztBQUVEOztHQUVHO0FBQ0ksU0FBUyxRQUFRLENBQUMsSUFBOEIsRUFBRSxJQUFZLEVBQUUsS0FBYTtJQUNsRiw4REFBOEQ7SUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFRLENBQUMsR0FBRyxLQUFLO0FBQ2xELENBQUM7QUFFRDs7O0dBR0c7QUFDSSxTQUFTLGFBQWEsQ0FBQyxJQUE4QixFQUFFLE9BQXVCO0lBQ25GLElBQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUM7SUFDOUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUssU0FBUyxTQUFJLE9BQU8sQ0FBQyxRQUFRLFdBQU0sT0FBTyxDQUFDLE1BQVEsQ0FBQztBQUN0RixDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNJLFNBQVMsWUFBWSxDQUMxQixJQUE4QixFQUM5QixFQUFxQyxFQUNyQyxRQUF5QjtRQUR2QixDQUFDLFNBQUUsQ0FBQyxTQUFFLEtBQUssYUFBRSxLQUFLO0lBR3BCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVMsS0FBSyxvQkFBZSxDQUFDLFlBQU8sQ0FBQyxRQUFLLENBQUM7SUFDeEUsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFDL0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO0tBQzVDO0FBQ0gsQ0FBQztBQUVEOztHQUVHO0FBQ0ksU0FBUyxhQUFhLENBQUMsSUFBOEI7SUFDMUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQXNDO0lBQzFELElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7SUFDM0MsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztJQUNuRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7SUFDN0MsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFO0lBRWpELE9BQU87UUFDTCxJQUFJLEVBQUU7WUFDSixLQUFLO1lBQ0wsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtZQUN2QixHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUc7WUFDakIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNO1lBQ3ZCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtZQUNuQixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7WUFDckIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztZQUMxQyxNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDO1NBQzNDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQ3ZCLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtZQUN6QixHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUc7WUFDbkIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1lBQ3pCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSTtZQUNyQixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7WUFDdkIsT0FBTyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQztZQUNwRCxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDO1NBQ25EO0tBQ0Y7QUFDSCxDQUFDOzs7QUMvSUQ7OztHQUdHO0FBQ1ksU0FBUyxVQUFVLENBQUMsSUFBeUM7SUFDMUUsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWE7SUFDOUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVU7SUFDOUIsT0FBTyxDQUNMLEdBQUc7UUFDSCxNQUFNO1FBQ04sR0FBRyxDQUFDLFFBQVEsS0FBSyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FDckM7QUFDSCxDQUFDOzs7QUNaRCxTQUFTLFFBQVEsQ0FBQyxJQUFhO0lBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUNsRCxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsSUFBYSxFQUFFLFNBQWlCO0lBQ2hELE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksT0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQUcsRUFBQyxPQUFPLENBQUMsTUFBSSxTQUFTLE1BQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRixDQUFDO0FBRWMsU0FBUyxVQUFVLENBQUMsSUFBYSxFQUFFLE9BQXVCO0lBQ3ZFLEtBQUssSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFxQixFQUFFO1FBQ2pFLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDNUUsT0FBTyxJQUFJO1NBQ1o7S0FDRjtJQUNELE9BQU8sS0FBSztBQUNkLENBQUM7OztBQ2pCRDs7O0dBR0c7QUFDSCxJQUFNLElBQUksR0FBRyxxQkFBcUI7QUFDbkIsU0FBUyxZQUFZLENBQUMsSUFBOEI7SUFDakUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUs7QUFDOUUsQ0FBQzs7O0FDUGMsU0FBUyxZQUFZLENBQUMsR0FBUTtJQUMzQyxJQUFNLEtBQUssR0FBUSxFQUFFO0lBQ3JCLEtBQUssSUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1FBQ3JCLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMzQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxLQUFLO0FBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNSRDs7Ozs7Ozs7R0FRRztBQUNpQjtBQVUwRDtBQUNkO0FBQ1k7QUFFdkM7QUFDQTtBQUNJO0FBQ0E7QUFFekMsSUFBTSxjQUFjLEdBQW1CO0lBQ3JDLE9BQU8sRUFBRSxLQUFLO0lBQ2QsTUFBTSxFQUFFLEtBQUs7SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFlBQVksRUFBRSxLQUFLO0lBQ25CLFlBQVksRUFBRSxLQUFLO0lBQ25CLFFBQVEsRUFBRSxHQUFHO0lBQ2IsTUFBTSxFQUFFLGFBQWE7SUFDckIsT0FBTyxFQUFFLEVBQUU7SUFDWCxZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLGdCQUFnQixFQUFFLFVBQUMsQ0FBUTtRQUN6QixDQUFDLENBQUMsY0FBYyxFQUFFO1FBQ2xCLENBQUMsQ0FBQyxlQUFlLEVBQUU7SUFDckIsQ0FBQztJQUNELFFBQVEsRUFBRSxDQUFDO0lBQ1gsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsWUFBWTtJQUNaLE1BQU0sRUFBRSxDQUFDO0lBQ1QsTUFBTSxFQUFFLENBQUM7SUFDVCxVQUFVLEVBQUUsQ0FBQztJQUNiLElBQUksRUFBRSxHQUFHO0lBQ1QsV0FBVyxFQUFFLE1BQU07Q0FDcEI7QUFFRCxTQUFTLE9BQU8sQ0FDZCxJQUE4QixFQUM5QixPQUF1QztJQUV2QyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztLQUM5RDtJQUNELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7UUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQztLQUNwRTtJQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQztLQUMzRjtJQUVELE9BQU8seUJBQ0YsY0FBYyxHQUNkLE9BQU8sQ0FDWDtJQUVELElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFFaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQXNDO0lBRTFELG9CQUFvQjtJQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUTtJQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNO0lBQ2hDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FFN0M7SUFBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTTtJQUUvRCxxQkFBcUI7SUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTTtJQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVztJQUM1QyxvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixRQUFRLENBQ04sSUFBSSxFQUNKLGlCQUFpQixFQUNqQixPQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUNoRjtJQUVELFNBQVMsVUFBVTtRQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUU7UUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRTtRQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUU7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRTtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFO1FBQzNCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUF3QztRQUF4QyxnQ0FBd0M7UUFDMUQsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUN6QjtTQUNGO1FBQ0QsNkJBQTZCO1FBQzdCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xFLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FDM0M7WUFBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTTtTQUNoRTtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtTQUN0QztRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVztZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVztTQUMxQztRQUNELElBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFDOUI7WUFDQSxTQUFTLEVBQUU7U0FDWjtJQUNILENBQUM7SUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNULElBQUksS0FBSyxHQUFHLENBQUM7SUFDYixJQUFJLFNBQVMsR0FBRyxLQUFLO0lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDekQsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsVUFBVSxDQUFDO1FBQ1QsU0FBUyxFQUFFO1FBQ1gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3RFLENBQUMsQ0FBQztJQUVGLFNBQVMsT0FBTyxDQUFDLFNBQXVCLEVBQUUsTUFBMEIsRUFBRSxJQUFvQjtRQUN4RixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFNO1NBQ1A7UUFDRCxJQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLFVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsU0FBUyxxQkFBcUIsQ0FDNUIsU0FBdUIsRUFDdkIsSUFBb0IsRUFDcEIsYUFBbUQ7UUFFbkQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUUsQ0FBQyxLQUFFLEtBQUssU0FBRSxLQUFLLFNBQUUsYUFBYSxpQkFBRTtRQUNuRCxxQkFBcUIsQ0FBQztZQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7aUJBQzFCO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQztpQkFDckM7YUFDRjtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7WUFDcEMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDRixPQUFPLEtBQUs7SUFDZCxDQUFDO0lBRUQsU0FBUyxTQUFTO1FBQ2hCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFNLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ2hDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQzFGLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQzVGLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7WUFDekMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSztZQUMzQyxJQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsU0FBUztZQUMvQyxJQUFNLGdCQUFnQixHQUFHLFlBQVksR0FBRyxVQUFVO1lBQ2xELElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7YUFDL0Q7aUJBQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDeEMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQzthQUMvRDtTQUNGO0lBQ0gsQ0FBQztJQUVELFNBQVMsV0FBVyxDQUNsQixHQUFvQixFQUNwQixHQUFvQixFQUNwQixPQUFlLEVBQ2YsVUFBdUI7UUFFdkIsSUFBTSxJQUFJLHlCQUFRLE9BQU8sR0FBSyxVQUFVLENBQUU7UUFDMUMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUUsQ0FBQyxLQUFFLElBQUksUUFBRTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQzdGLE9BQU8sTUFBTTtTQUNkO1FBQ0QsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFhLENBQUM7UUFDL0IsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFhLENBQUM7UUFFL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztTQUN6QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7U0FDekM7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNoQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1lBQ3pDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7WUFDM0MsSUFBTSxXQUFXLEdBQUcsU0FBUyxHQUFHLE9BQU87WUFDdkMsSUFBTSxZQUFZLEdBQUcsVUFBVSxHQUFHLE9BQU87WUFDekMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNwRCxJQUFNLFlBQVksR0FBRyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBRXBELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxHQUFHLE9BQU87Z0JBQzNGLElBQU0sSUFBSSxHQUNSLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUNoQixXQUFXO29CQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7b0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3hCLGNBQWMsQ0FBQztvQkFDakIsT0FBTztnQkFDVCxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFDbkQsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsT0FBTztnQkFDdkYsSUFBTSxJQUFJLEdBQ1IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07b0JBQ2pCLFlBQVk7b0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRztvQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRztvQkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTtvQkFDekIsWUFBWSxDQUFDO29CQUNmLE9BQU87Z0JBQ1QsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUM7YUFDcEQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDckMsSUFBTSxJQUFJLEdBQ1IsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO29CQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN4QixjQUFjLENBQUM7b0JBQ2pCLE9BQU87Z0JBQ1QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTztnQkFDbEUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUM7Z0JBQ25ELElBQU0sSUFBSSxHQUNSLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTtvQkFDekIsWUFBWSxDQUFDO29CQUNmLE9BQU87Z0JBQ1QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTztnQkFDL0QsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUM7YUFDcEQ7U0FDRjtRQUNELE9BQU8sTUFBTTtJQUNmLENBQUM7SUFFRCxTQUFTLGNBQWMsQ0FBQyxPQUFlLEVBQUUsV0FBeUI7UUFDaEUsSUFBTSxJQUFJLHlCQUFRLE9BQU8sR0FBSyxXQUFXLENBQUU7UUFDM0MsSUFBTSxNQUFNLEdBQUcsRUFBRSxLQUFLLFNBQUUsSUFBSSxRQUFFO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkMsT0FBTyxNQUFNO1NBQ2Q7UUFDRCxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEUsT0FBTyxNQUFNO0lBQ2YsQ0FBQztJQUVELFNBQVMsR0FBRyxDQUNWLEdBQW9CLEVBQ3BCLEdBQW9CLEVBQ3BCLFVBQXVCLEVBQ3ZCLGFBQW1EO1FBRW5ELElBQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUM7UUFDdkQsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUk7UUFFeEIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRVosT0FBTyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQztJQUNqRSxDQUFDO0lBRUQsU0FBUyxJQUFJLENBQ1gsT0FBZSxFQUNmLFdBQXlCLEVBQ3pCLGFBQW1EO1FBRW5ELElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO1FBQ25ELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkMsT0FBTTtTQUNQO1FBQ0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLO1FBQ3RCLElBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBRVgsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2Qsa0ZBQWtGO1lBQ2xGLCtDQUErQztZQUMvQyxpRkFBaUY7WUFDakYsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDeEIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU87WUFDbkUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU87U0FDcEU7UUFDRCxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNsRixDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDZixDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDZixLQUFLLEdBQUcsT0FBTztRQUNmLE9BQU8scUJBQXFCLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUM7SUFDbEUsQ0FBQztJQUVELFNBQVMsU0FBUyxDQUFDLElBQWEsRUFBRSxXQUF5QjtRQUN6RCxJQUFNLElBQUksa0NBQVEsT0FBTyxLQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssV0FBVyxDQUFFO1FBQzFELE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNsRSxDQUFDO0lBRUQsU0FBUyxNQUFNLENBQUMsV0FBeUI7UUFDdkMsT0FBTyxTQUFTLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztJQUNyQyxDQUFDO0lBRUQsU0FBUyxPQUFPLENBQUMsV0FBeUI7UUFDeEMsT0FBTyxTQUFTLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBRUQsU0FBUyxXQUFXLENBQ2xCLE9BQWUsRUFDZixLQUEyQyxFQUMzQyxXQUF5QixFQUN6QixhQUFtRDtRQUVuRCxJQUFNLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBRWhDLDJEQUEyRDtRQUMzRCxvREFBb0Q7UUFDcEQsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixJQUFNLGFBQWEsR0FBRztZQUNwQixLQUFLLEVBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQzFCLE1BQU0sRUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07Z0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUc7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07U0FDNUI7UUFFRCxnREFBZ0Q7UUFDaEQsNkJBQTZCO1FBQzdCLElBQUksT0FBTyxHQUNULEtBQUssQ0FBQyxPQUFPO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1FBQ3ZCLElBQUksT0FBTyxHQUNULEtBQUssQ0FBQyxPQUFPO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7UUFFdEIsZ0RBQWdEO1FBQ2hELGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQztTQUN4QztRQUVELHNEQUFzRDtRQUN0RCxrREFBa0Q7UUFDbEQsMkNBQTJDO1FBQzNDLElBQU0sS0FBSyxHQUFHO1lBQ1osQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3BFLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUN2RTtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sc0JBQUksT0FBTyxFQUFFLEtBQUssSUFBSyxXQUFXLEtBQUUsS0FBSyxZQUFJLGFBQWEsQ0FBQztJQUNoRixDQUFDO0lBRUQsU0FBUyxhQUFhLENBQUMsS0FBaUIsRUFBRSxXQUF5QjtRQUNqRSxtQ0FBbUM7UUFDbkMsMkNBQTJDO1FBQzNDLEtBQUssQ0FBQyxjQUFjLEVBQUU7UUFFdEIsSUFBTSxJQUFJLGtDQUFRLE9BQU8sR0FBSyxXQUFXLEtBQUUsT0FBTyxFQUFFLEtBQUssR0FBRTtRQUUzRCw0REFBNEQ7UUFDNUQsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07UUFDOUUsSUFBTSxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLO1FBRXJGLE9BQU8sV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFFRCxTQUFTLEtBQUssQ0FBQyxZQUE2QjtRQUMxQyxJQUFNLElBQUksa0NBQVEsT0FBTyxLQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxZQUFZLENBQUU7UUFDeEUsS0FBSyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUs7UUFDbkQsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQ3BFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNmLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNmLE9BQU8scUJBQXFCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxLQUFhO0lBQ2pCLElBQUksS0FBYTtJQUNqQixJQUFJLFlBQW9CO0lBQ3hCLElBQUksWUFBb0I7SUFDeEIsSUFBSSxVQUFrQjtJQUN0QixJQUFJLGFBQXFCO0lBQ3pCLElBQU0sUUFBUSxHQUFtQixFQUFFO0lBRW5DLFNBQVMsVUFBVSxDQUFDLEtBQW1CO1FBQ3JDLG9EQUFvRDtRQUNwRCxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBaUIsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNoRCxPQUFNO1NBQ1A7UUFDRCxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztRQUMzQixTQUFTLEdBQUcsSUFBSTtRQUNoQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQy9CLEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxHQUFHLENBQUM7UUFFVCxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxLQUFFLENBQUMsS0FBRSxLQUFLLFNBQUUsS0FBSyxTQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLENBQUM7UUFFOUUsd0NBQXdDO1FBQ3hDLGtCQUFrQjtRQUNsQixJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2pDLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTztRQUM1QixZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU87UUFDNUIsVUFBVSxHQUFHLEtBQUs7UUFDbEIsYUFBYSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVELFNBQVMsSUFBSSxDQUFDLEtBQW1CO1FBQy9CLElBQ0UsQ0FBQyxTQUFTO1lBQ1YsS0FBSyxLQUFLLFNBQVM7WUFDbkIsS0FBSyxLQUFLLFNBQVM7WUFDbkIsWUFBWSxLQUFLLFNBQVM7WUFDMUIsWUFBWSxLQUFLLFNBQVMsRUFDMUI7WUFDQSxPQUFNO1NBQ1A7UUFDRCxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztRQUMzQixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsNkJBQTZCO1lBQzdCLGdDQUFnQztZQUNoQyxtQkFBbUI7WUFDbkIsSUFBSSxhQUFhLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixhQUFhLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN0QztZQUNELGdEQUFnRDtZQUNoRCxpQ0FBaUM7WUFDakMsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQWE7WUFDbEQsSUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsS0FBSztZQUM3RSxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztTQUM5QjthQUFNO1lBQ0wsNkNBQTZDO1lBQzdDLG1EQUFtRDtZQUNuRCw0QkFBNEI7WUFDNUIscURBQXFEO1lBQ3JELEdBQUcsQ0FDRCxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxHQUFHLEtBQUssRUFDaEQsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsR0FBRyxLQUFLLEVBQ2hEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2FBQ2YsRUFDRCxLQUFLLENBQ047U0FDRjtJQUNILENBQUM7SUFFRCxTQUFTLFFBQVEsQ0FBQyxLQUFtQjtRQUNuQyxvREFBb0Q7UUFDcEQseUJBQXlCO1FBQ3pCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsS0FBRSxDQUFDLEtBQUUsS0FBSyxTQUFFLEtBQUssU0FBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxDQUFDO1NBQzdFO1FBQ0Qsa0NBQWtDO1FBQ2xDLHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLE9BQU07U0FDUDtRQUNELFNBQVMsR0FBRyxLQUFLO1FBQ2pCLEtBQUssR0FBRyxLQUFLLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxTQUFTO0lBQ3pELENBQUM7SUFFRCxJQUFJLEtBQUssR0FBRyxLQUFLO0lBQ2pCLFNBQVMsSUFBSTtRQUNYLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTTtTQUNQO1FBQ0QsS0FBSyxHQUFHLElBQUk7UUFDWixTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQztRQUM3RCxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDcEQsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFFRCxTQUFTLE9BQU87UUFDZCxLQUFLLEdBQUcsS0FBSztRQUNiLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO1FBQ2xFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztRQUN0QyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQ25CLElBQUksRUFBRTtLQUNQO0lBRUQsT0FBTztRQUNMLElBQUk7UUFDSixPQUFPO1FBQ1AsVUFBVTtRQUNWLE1BQU0sRUFBRSxjQUFNLFFBQUMsRUFBRSxDQUFDLEtBQUUsQ0FBQyxLQUFFLENBQUMsRUFBVixDQUFVO1FBQ3hCLFFBQVEsRUFBRSxjQUFNLFlBQUssRUFBTCxDQUFLO1FBQ3JCLFVBQVUsRUFBRSxjQUFNLG1CQUFZLENBQUMsT0FBTyxDQUFDLEVBQXJCLENBQXFCO1FBQ3ZDLEdBQUc7UUFDSCxLQUFLO1FBQ0wsVUFBVTtRQUNWLFVBQVU7UUFDVixRQUFRLEVBQUUsVUFBQyxJQUFZLEVBQUUsS0FBYSxJQUFLLGVBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUEzQixDQUEyQjtRQUN0RSxJQUFJO1FBQ0osTUFBTTtRQUNOLE9BQU87UUFDUCxXQUFXO1FBQ1gsYUFBYTtLQUNkO0FBQ0gsQ0FBQztBQUVELE9BQU8sQ0FBQyxjQUFjLEdBQUcsY0FBYztBQUd2Qyw4Q0FBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBhbnpvb20vcGFuem9vbS8uL3NyYy9wb2ludGVycy50cz9kMDU4Iiwid2VicGFjazovL0BwYW56b29tL3Bhbnpvb20vLi9zcmMvZXZlbnRzLnRzPzA1ZDEiLCJ3ZWJwYWNrOi8vQHBhbnpvb20vcGFuem9vbS8uL3NyYy9jc3MudHM/ODE0MyIsIndlYnBhY2s6Ly9AcGFuem9vbS9wYW56b29tLy4vc3JjL2lzQXR0YWNoZWQudHM/YTAzYiIsIndlYnBhY2s6Ly9AcGFuem9vbS9wYW56b29tLy4vc3JjL2lzRXhjbHVkZWQudHM/NTQzMiIsIndlYnBhY2s6Ly9AcGFuem9vbS9wYW56b29tLy4vc3JjL2lzU1ZHRWxlbWVudC50cz80NjI4Iiwid2VicGFjazovL0BwYW56b29tL3Bhbnpvb20vLi9zcmMvc2hhbGxvd0Nsb25lLnRzP2U0NzYiLCJ3ZWJwYWNrOi8vQHBhbnpvb20vcGFuem9vbS8uL3NyYy9wYW56b29tLnRzP2I4ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVdGlsaXRlcyBmb3Igd29ya2luZyB3aXRoIG11bHRpcGxlIHBvaW50ZXIgZXZlbnRzXG4gKi9cblxuZnVuY3Rpb24gZmluZEV2ZW50SW5kZXgocG9pbnRlcnM6IFBvaW50ZXJFdmVudFtdLCBldmVudDogUG9pbnRlckV2ZW50KSB7XG4gIGxldCBpID0gcG9pbnRlcnMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAocG9pbnRlcnNbaV0ucG9pbnRlcklkID09PSBldmVudC5wb2ludGVySWQpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICB9XG4gIHJldHVybiAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRlcihwb2ludGVyczogUG9pbnRlckV2ZW50W10sIGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgbGV0IGlcbiAgLy8gQWRkIHRvdWNoZXMgaWYgYXBwbGljYWJsZVxuICBpZiAoKGV2ZW50IGFzIGFueSkudG91Y2hlcykge1xuICAgIGkgPSAwXG4gICAgZm9yIChjb25zdCB0b3VjaCBvZiAoZXZlbnQgYXMgYW55KS50b3VjaGVzKSB7XG4gICAgICB0b3VjaC5wb2ludGVySWQgPSBpKytcbiAgICAgIGFkZFBvaW50ZXIocG9pbnRlcnMsIHRvdWNoKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBpID0gZmluZEV2ZW50SW5kZXgocG9pbnRlcnMsIGV2ZW50KVxuICAvLyBVcGRhdGUgaWYgYWxyZWFkeSBwcmVzZW50XG4gIGlmIChpID4gLTEpIHtcbiAgICBwb2ludGVycy5zcGxpY2UoaSwgMSlcbiAgfVxuICBwb2ludGVycy5wdXNoKGV2ZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUG9pbnRlcihwb2ludGVyczogUG9pbnRlckV2ZW50W10sIGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgLy8gQWRkIHRvdWNoZXMgaWYgYXBwbGljYWJsZVxuICBpZiAoKGV2ZW50IGFzIGFueSkudG91Y2hlcykge1xuICAgIC8vIFJlbW92ZSBhbGwgdG91Y2hlc1xuICAgIHdoaWxlIChwb2ludGVycy5sZW5ndGgpIHtcbiAgICAgIHBvaW50ZXJzLnBvcCgpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGkgPSBmaW5kRXZlbnRJbmRleChwb2ludGVycywgZXZlbnQpXG4gIGlmIChpID4gLTEpIHtcbiAgICBwb2ludGVycy5zcGxpY2UoaSwgMSlcbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSBjZW50ZXIgcG9pbnQgYmV0d2VlblxuICogdGhlIGdpdmVuIHBvaW50ZXIgZXZlbnRzLCBmb3IgcGFubmluZ1xuICogd2l0aCBtdWx0aXBsZSBwb2ludGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1pZGRsZShwb2ludGVyczogUG9pbnRlckV2ZW50W10pIHtcbiAgLy8gQ29weSB0byBhdm9pZCBjaGFuZ2luZyBieSByZWZlcmVuY2VcbiAgcG9pbnRlcnMgPSBwb2ludGVycy5zbGljZSgwKVxuICBsZXQgZXZlbnQxOiBQaWNrPFBvaW50ZXJFdmVudCwgJ2NsaWVudFgnIHwgJ2NsaWVudFknPiA9IHBvaW50ZXJzLnBvcCgpXG4gIGxldCBldmVudDI6IFBvaW50ZXJFdmVudFxuICB3aGlsZSAoKGV2ZW50MiA9IHBvaW50ZXJzLnBvcCgpKSkge1xuICAgIGV2ZW50MSA9IHtcbiAgICAgIGNsaWVudFg6IChldmVudDIuY2xpZW50WCAtIGV2ZW50MS5jbGllbnRYKSAvIDIgKyBldmVudDEuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IChldmVudDIuY2xpZW50WSAtIGV2ZW50MS5jbGllbnRZKSAvIDIgKyBldmVudDEuY2xpZW50WVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXZlbnQxXG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9pbnRzXG4gKiBmb3IgcGluY2ggem9vbWluZy5cbiAqIExpbWl0cyB0byB0aGUgZmlyc3QgMlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocG9pbnRlcnM6IFBvaW50ZXJFdmVudFtdKSB7XG4gIGlmIChwb2ludGVycy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBjb25zdCBldmVudDEgPSBwb2ludGVyc1swXVxuICBjb25zdCBldmVudDIgPSBwb2ludGVyc1sxXVxuICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgIE1hdGgucG93KE1hdGguYWJzKGV2ZW50Mi5jbGllbnRYIC0gZXZlbnQxLmNsaWVudFgpLCAyKSArXG4gICAgICBNYXRoLnBvdyhNYXRoLmFicyhldmVudDIuY2xpZW50WSAtIGV2ZW50MS5jbGllbnRZKSwgMilcbiAgKVxufVxuIiwibGV0IGV2ZW50cyA9IHtcbiAgZG93bjogJ21vdXNlZG93bicsXG4gIG1vdmU6ICdtb3VzZW1vdmUnLFxuICB1cDogJ21vdXNldXAgbW91c2VsZWF2ZSdcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93LlBvaW50ZXJFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50cyA9IHtcbiAgICAgIGRvd246ICdwb2ludGVyZG93bicsXG4gICAgICBtb3ZlOiAncG9pbnRlcm1vdmUnLFxuICAgICAgdXA6ICdwb2ludGVydXAgcG9pbnRlcmxlYXZlIHBvaW50ZXJjYW5jZWwnXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cuVG91Y2hFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50cyA9IHtcbiAgICAgIGRvd246ICd0b3VjaHN0YXJ0JyxcbiAgICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgICAgdXA6ICd0b3VjaGVuZCB0b3VjaGNhbmNlbCdcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgZXZlbnRzIGFzIGV2ZW50TmFtZXMgfVxuXG50eXBlIFBvaW50ZXJFdmVudE5hbWUgPVxuICB8ICdwb2ludGVyZG93bidcbiAgfCAncG9pbnRlcm1vdmUnXG4gIHwgJ3BvaW50ZXJ1cCdcbiAgfCAncG9pbnRlcmxlYXZlJ1xuICB8ICdwb2ludGVyY2FuY2VsJ1xuXG5leHBvcnQgZnVuY3Rpb24gb25Qb2ludGVyKFxuICBldmVudDogJ2Rvd24nIHwgJ21vdmUnIHwgJ3VwJyxcbiAgZWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50IHwgRG9jdW1lbnQsXG4gIGhhbmRsZXI6IChldmVudDogUG9pbnRlckV2ZW50KSA9PiB2b2lkLFxuICBldmVudE9wdHM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnNcbikge1xuICBldmVudHNbZXZlbnRdLnNwbGl0KCcgJykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIDsoZWxlbSBhcyBIVE1MRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcjxQb2ludGVyRXZlbnROYW1lPihcbiAgICAgIG5hbWUgYXMgUG9pbnRlckV2ZW50TmFtZSxcbiAgICAgIGhhbmRsZXIsXG4gICAgICBldmVudE9wdHNcbiAgICApXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95UG9pbnRlcihcbiAgZXZlbnQ6ICdkb3duJyB8ICdtb3ZlJyB8ICd1cCcsXG4gIGVsZW06IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudCB8IERvY3VtZW50LFxuICBoYW5kbGVyOiAoZXZlbnQ6IFBvaW50ZXJFdmVudCkgPT4gdm9pZFxuKSB7XG4gIGV2ZW50c1tldmVudF0uc3BsaXQoJyAnKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgOyhlbGVtIGFzIEhUTUxFbGVtZW50KS5yZW1vdmVFdmVudExpc3RlbmVyPFBvaW50ZXJFdmVudE5hbWU+KG5hbWUgYXMgUG9pbnRlckV2ZW50TmFtZSwgaGFuZGxlcilcbiAgfSlcbn1cbiIsImltcG9ydCB7IEN1cnJlbnRWYWx1ZXMsIFBhbnpvb21PcHRpb25zIH0gZnJvbSAnLi90eXBlcydcblxuY29uc3QgaXNJRSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGVcblxuLyoqXG4gKiBMYXp5IGNyZWF0aW9uIG9mIGEgQ1NTIHN0eWxlIGRlY2xhcmF0aW9uXG4gKi9cbmxldCBkaXZTdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvblxuZnVuY3Rpb24gY3JlYXRlU3R5bGUoKSB7XG4gIGlmIChkaXZTdHlsZSkge1xuICAgIHJldHVybiBkaXZTdHlsZVxuICB9XG4gIHJldHVybiAoZGl2U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZSlcbn1cblxuLyoqXG4gKiBQcm9wZXIgcHJlZml4aW5nIGZvciBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHlcbiAqL1xuY29uc3QgcHJlZml4ZXMgPSBbJ3dlYmtpdCcsICdtb3onLCAnbXMnXVxuY29uc3QgcHJlZml4Q2FjaGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuZnVuY3Rpb24gZ2V0UHJlZml4ZWROYW1lKG5hbWU6IHN0cmluZykge1xuICBpZiAocHJlZml4Q2FjaGVbbmFtZV0pIHtcbiAgICByZXR1cm4gcHJlZml4Q2FjaGVbbmFtZV1cbiAgfVxuICBjb25zdCBkaXZTdHlsZSA9IGNyZWF0ZVN0eWxlKClcbiAgaWYgKG5hbWUgaW4gZGl2U3R5bGUpIHtcbiAgICByZXR1cm4gKHByZWZpeENhY2hlW25hbWVdID0gbmFtZSlcbiAgfVxuICBjb25zdCBjYXBOYW1lID0gbmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKVxuICBsZXQgaSA9IHByZWZpeGVzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3QgcHJlZml4ZWROYW1lID0gYCR7cHJlZml4ZXNbaV19JHtjYXBOYW1lfWBcbiAgICBpZiAocHJlZml4ZWROYW1lIGluIGRpdlN0eWxlKSB7XG4gICAgICByZXR1cm4gKHByZWZpeENhY2hlW25hbWVdID0gcHJlZml4ZWROYW1lKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdldHMgYSBzdHlsZSB2YWx1ZSBleHBlY3RlZCB0byBiZSBhIG51bWJlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q1NTTnVtKG5hbWU6IHN0cmluZywgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3R5bGVbZ2V0UHJlZml4ZWROYW1lKG5hbWUpIGFzIGFueV0pIHx8IDBcbn1cblxuZnVuY3Rpb24gZ2V0Qm94U3R5bGUoXG4gIGVsZW06IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudCxcbiAgbmFtZTogc3RyaW5nLFxuICBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pXG4pIHtcbiAgLy8gU3VwcG9ydDogRkYgNjgrXG4gIC8vIEZpcmVmb3ggcmVxdWlyZXMgc3BlY2lmaWNpdHkgZm9yIGJvcmRlclxuICBjb25zdCBzdWZmaXggPSBuYW1lID09PSAnYm9yZGVyJyA/ICdXaWR0aCcgOiAnJ1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IGdldENTU051bShgJHtuYW1lfUxlZnQke3N1ZmZpeH1gLCBzdHlsZSksXG4gICAgcmlnaHQ6IGdldENTU051bShgJHtuYW1lfVJpZ2h0JHtzdWZmaXh9YCwgc3R5bGUpLFxuICAgIHRvcDogZ2V0Q1NTTnVtKGAke25hbWV9VG9wJHtzdWZmaXh9YCwgc3R5bGUpLFxuICAgIGJvdHRvbTogZ2V0Q1NTTnVtKGAke25hbWV9Qm90dG9tJHtzdWZmaXh9YCwgc3R5bGUpXG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgYSBzdHlsZSB1c2luZyB0aGUgcHJvcGVybHkgcHJlZml4ZWQgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGUoZWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgZWxlbS5zdHlsZVtnZXRQcmVmaXhlZE5hbWUobmFtZSkgYXMgYW55XSA9IHZhbHVlXG59XG5cbi8qKlxuICogQ29uc3RydWN0cyB0aGUgdHJhbnNpdGlvbiBmcm9tIHBhbnpvb20gb3B0aW9uc1xuICogYW5kIHRha2VzIGNhcmUgb2YgcHJlZml4aW5nIHRoZSB0cmFuc2l0aW9uIGFuZCB0cmFuc2Zvcm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50LCBvcHRpb25zOiBQYW56b29tT3B0aW9ucykge1xuICBjb25zdCB0cmFuc2Zvcm0gPSBnZXRQcmVmaXhlZE5hbWUoJ3RyYW5zZm9ybScpXG4gIHNldFN0eWxlKGVsZW0sICd0cmFuc2l0aW9uJywgYCR7dHJhbnNmb3JtfSAke29wdGlvbnMuZHVyYXRpb259bXMgJHtvcHRpb25zLmVhc2luZ31gKVxufVxuXG4vKipcbiAqIFNldCB0aGUgdHJhbnNmb3JtIHVzaW5nIHRoZSBwcm9wZXIgcHJlZml4XG4gKlxuICogT3ZlcnJpZGUgdGhlIHRyYW5zZm9ybSBzZXR0ZXIuXG4gKiBUaGlzIGlzIGV4cG9zZWQgbW9zdGx5IHNvIHRoZSB1c2VyIGNvdWxkXG4gKiBzZXQgb3RoZXIgcGFydHMgb2YgYSB0cmFuc2Zvcm1cbiAqIGFzaWRlIGZyb20gc2NhbGUgYW5kIHRyYW5zbGF0ZS5cbiAqIERlZmF1bHQgaXMgZGVmaW5lZCBpbiBzcmMvY3NzLnRzLlxuICpcbiAqIGBgYGpzXG4gKiAvLyBUaGlzIGV4YW1wbGUgYWx3YXlzIHNldHMgYSByb3RhdGlvblxuICogLy8gd2hlbiBzZXR0aW5nIHRoZSBzY2FsZSBhbmQgdHJhbnNsYXRpb25cbiAqIGNvbnN0IHBhbnpvb20gPSBQYW56b29tKGVsZW0sIHtcbiAqICAgc2V0VHJhbnNmb3JtOiAoZWxlbSwgeyBzY2FsZSwgeCwgeSB9KSA9PiB7XG4gKiAgICAgcGFuem9vbS5zZXRTdHlsZSgndHJhbnNmb3JtJywgYHJvdGF0ZSgwLjV0dXJuKSBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWApXG4gKiAgIH1cbiAqIH0pXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zZm9ybShcbiAgZWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50LFxuICB7IHgsIHksIHNjYWxlLCBpc1NWRyB9OiBDdXJyZW50VmFsdWVzLFxuICBfb3B0aW9ucz86IFBhbnpvb21PcHRpb25zXG4pIHtcbiAgc2V0U3R5bGUoZWxlbSwgJ3RyYW5zZm9ybScsIGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWApXG4gIGlmIChpc1NWRyAmJiBpc0lFKSB7XG4gICAgY29uc3QgbWF0cml4VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKVxuICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBtYXRyaXhWYWx1ZSlcbiAgfVxufVxuXG4vKipcbiAqIERpbWVuc2lvbnMgdXNlZCBpbiBjb250YWlubWVudCBhbmQgZm9jYWwgcG9pbnQgem9vbWluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyhlbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQpIHtcbiAgY29uc3QgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudFxuICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pXG4gIGNvbnN0IHBhcmVudFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVxuICBjb25zdCByZWN0RWxlbSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3QgcmVjdFBhcmVudCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIHJldHVybiB7XG4gICAgZWxlbToge1xuICAgICAgc3R5bGUsXG4gICAgICB3aWR0aDogcmVjdEVsZW0ud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3RFbGVtLmhlaWdodCxcbiAgICAgIHRvcDogcmVjdEVsZW0udG9wLFxuICAgICAgYm90dG9tOiByZWN0RWxlbS5ib3R0b20sXG4gICAgICBsZWZ0OiByZWN0RWxlbS5sZWZ0LFxuICAgICAgcmlnaHQ6IHJlY3RFbGVtLnJpZ2h0LFxuICAgICAgbWFyZ2luOiBnZXRCb3hTdHlsZShlbGVtLCAnbWFyZ2luJywgc3R5bGUpLFxuICAgICAgYm9yZGVyOiBnZXRCb3hTdHlsZShlbGVtLCAnYm9yZGVyJywgc3R5bGUpXG4gICAgfSxcbiAgICBwYXJlbnQ6IHtcbiAgICAgIHN0eWxlOiBwYXJlbnRTdHlsZSxcbiAgICAgIHdpZHRoOiByZWN0UGFyZW50LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0UGFyZW50LmhlaWdodCxcbiAgICAgIHRvcDogcmVjdFBhcmVudC50b3AsXG4gICAgICBib3R0b206IHJlY3RQYXJlbnQuYm90dG9tLFxuICAgICAgbGVmdDogcmVjdFBhcmVudC5sZWZ0LFxuICAgICAgcmlnaHQ6IHJlY3RQYXJlbnQucmlnaHQsXG4gICAgICBwYWRkaW5nOiBnZXRCb3hTdHlsZShwYXJlbnQsICdwYWRkaW5nJywgcGFyZW50U3R5bGUpLFxuICAgICAgYm9yZGVyOiBnZXRCb3hTdHlsZShwYXJlbnQsICdib3JkZXInLCBwYXJlbnRTdHlsZSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgYXR0YWNoZWQgdG8gdGhlIERPTVxuICogUGFuem9vbSByZXF1aXJlcyB0aGlzIHNvIGV2ZW50cyB3b3JrIHByb3Blcmx5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXR0YWNoZWQoZWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50IHwgRG9jdW1lbnQpIHtcbiAgY29uc3QgZG9jID0gZWxlbS5vd25lckRvY3VtZW50XG4gIGNvbnN0IHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZVxuICByZXR1cm4gKFxuICAgIGRvYyAmJlxuICAgIHBhcmVudCAmJlxuICAgIGRvYy5ub2RlVHlwZSA9PT0gOSAmJlxuICAgIHBhcmVudC5ub2RlVHlwZSA9PT0gMSAmJlxuICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMocGFyZW50KVxuICApXG59XG4iLCJpbXBvcnQgeyBQYW56b29tT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnXG5cbmZ1bmN0aW9uIGdldENsYXNzKGVsZW06IEVsZW1lbnQpIHtcbiAgcmV0dXJuIChlbGVtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykudHJpbSgpXG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW06IEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBlbGVtLm5vZGVUeXBlID09PSAxICYmIGAgJHtnZXRDbGFzcyhlbGVtKX0gYC5pbmRleE9mKGAgJHtjbGFzc05hbWV9IGApID4gLTFcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFeGNsdWRlZChlbGVtOiBFbGVtZW50LCBvcHRpb25zOiBQYW56b29tT3B0aW9ucykge1xuICBmb3IgKGxldCBjdXIgPSBlbGVtOyBjdXIgIT0gbnVsbDsgY3VyID0gY3VyLnBhcmVudE5vZGUgYXMgRWxlbWVudCkge1xuICAgIGlmIChoYXNDbGFzcyhjdXIsIG9wdGlvbnMuZXhjbHVkZUNsYXNzKSB8fCBvcHRpb25zLmV4Y2x1ZGUuaW5kZXhPZihjdXIpID4gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuIiwiLyoqXG4gKiBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBTVkcgYnkgY2hlY2tpbmcgdGhlIG5hbWVzcGFjZVxuICogRXhjZXB0aW9uOiB0aGUgPHN2Zz4gZWxlbWVudCBpdHNlbGYgc2hvdWxkIGJlIHRyZWF0ZWQgbGlrZSBIVE1MXG4gKi9cbmNvbnN0IHJzdmcgPSAvXmh0dHA6W1xcd1xcLlxcL10rc3ZnJC9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU1ZHRWxlbWVudChlbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQpIHtcbiAgcmV0dXJuIHJzdmcudGVzdChlbGVtLm5hbWVzcGFjZVVSSSkgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnc3ZnJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhbGxvd0Nsb25lKG9iajogYW55KSB7XG4gIGNvbnN0IGNsb25lOiBhbnkgPSB7fVxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNsb25lW2tleV0gPSBvYmpba2V5XVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2xvbmVcbn1cbiIsIi8qKlxuICogUGFuem9vbSBmb3IgcGFubmluZyBhbmQgem9vbWluZyBlbGVtZW50cyB1c2luZyBDU1MgdHJhbnNmb3Jtc1xuICogaHR0cHM6Ly9naXRodWIuY29tL3RpbW15d2lsL3Bhbnpvb21cbiAqXG4gKiBDb3B5cmlnaHQgVGltbXkgV2lsbGlzb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGltbXl3aWwvcGFuem9vbS9ibG9iL21haW4vTUlULUxpY2Vuc2UudHh0XG4gKlxuICovXG5pbXBvcnQgJy4vcG9seWZpbGxzJ1xuXG5pbXBvcnQge1xuICBQYW5PcHRpb25zLFxuICBQYW56b29tRXZlbnQsXG4gIFBhbnpvb21FdmVudERldGFpbCxcbiAgUGFuem9vbU9iamVjdCxcbiAgUGFuem9vbU9wdGlvbnMsXG4gIFpvb21PcHRpb25zXG59IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBhZGRQb2ludGVyLCBnZXREaXN0YW5jZSwgZ2V0TWlkZGxlLCByZW1vdmVQb2ludGVyIH0gZnJvbSAnLi9wb2ludGVycydcbmltcG9ydCB7IGRlc3Ryb3lQb2ludGVyLCBldmVudE5hbWVzLCBvblBvaW50ZXIgfSBmcm9tICcuL2V2ZW50cydcbmltcG9ydCB7IGdldERpbWVuc2lvbnMsIHNldFN0eWxlLCBzZXRUcmFuc2Zvcm0sIHNldFRyYW5zaXRpb24gfSBmcm9tICcuL2NzcydcblxuaW1wb3J0IGlzQXR0YWNoZWQgZnJvbSAnLi9pc0F0dGFjaGVkJ1xuaW1wb3J0IGlzRXhjbHVkZWQgZnJvbSAnLi9pc0V4Y2x1ZGVkJ1xuaW1wb3J0IGlzU1ZHRWxlbWVudCBmcm9tICcuL2lzU1ZHRWxlbWVudCdcbmltcG9ydCBzaGFsbG93Q2xvbmUgZnJvbSAnLi9zaGFsbG93Q2xvbmUnXG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zOiBQYW56b29tT3B0aW9ucyA9IHtcbiAgYW5pbWF0ZTogZmFsc2UsXG4gIGNhbnZhczogZmFsc2UsXG4gIGN1cnNvcjogJ21vdmUnLFxuICBkaXNhYmxlUGFuOiBmYWxzZSxcbiAgZGlzYWJsZVpvb206IGZhbHNlLFxuICBkaXNhYmxlWEF4aXM6IGZhbHNlLFxuICBkaXNhYmxlWUF4aXM6IGZhbHNlLFxuICBkdXJhdGlvbjogMjAwLFxuICBlYXNpbmc6ICdlYXNlLWluLW91dCcsXG4gIGV4Y2x1ZGU6IFtdLFxuICBleGNsdWRlQ2xhc3M6ICdwYW56b29tLWV4Y2x1ZGUnLFxuICBoYW5kbGVTdGFydEV2ZW50OiAoZTogRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH0sXG4gIG1heFNjYWxlOiA0LFxuICBtaW5TY2FsZTogMC4xMjUsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcGFuT25seVdoZW5ab29tZWQ6IGZhbHNlLFxuICByZWxhdGl2ZTogZmFsc2UsXG4gIHNldFRyYW5zZm9ybSxcbiAgc3RhcnRYOiAwLFxuICBzdGFydFk6IDAsXG4gIHN0YXJ0U2NhbGU6IDEsXG4gIHN0ZXA6IDAuMyxcbiAgdG91Y2hBY3Rpb246ICdub25lJ1xufVxuXG5mdW5jdGlvbiBQYW56b29tKFxuICBlbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQsXG4gIG9wdGlvbnM/OiBPbWl0PFBhbnpvb21PcHRpb25zLCAnZm9yY2UnPlxuKTogUGFuem9vbU9iamVjdCB7XG4gIGlmICghZWxlbSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFuem9vbSByZXF1aXJlcyBhbiBlbGVtZW50IGFzIGFuIGFyZ3VtZW50JylcbiAgfVxuICBpZiAoZWxlbS5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFuem9vbSByZXF1aXJlcyBhbiBlbGVtZW50IHdpdGggYSBub2RlVHlwZSBvZiAxJylcbiAgfVxuICBpZiAoIWlzQXR0YWNoZWQoZWxlbSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bhbnpvb20gc2hvdWxkIGJlIGNhbGxlZCBvbiBlbGVtZW50cyB0aGF0IGhhdmUgYmVlbiBhdHRhY2hlZCB0byB0aGUgRE9NJylcbiAgfVxuXG4gIG9wdGlvbnMgPSB7XG4gICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgLi4ub3B0aW9uc1xuICB9XG5cbiAgY29uc3QgaXNTVkcgPSBpc1NWR0VsZW1lbnQoZWxlbSlcblxuICBjb25zdCBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50XG5cbiAgLy8gU2V0IHBhcmVudCBzdHlsZXNcbiAgcGFyZW50LnN0eWxlLm92ZXJmbG93ID0gb3B0aW9ucy5vdmVyZmxvd1xuICBwYXJlbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJ1xuICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgbW9iaWxlIHRvXG4gIC8vIHByZXZlbnQgc2Nyb2xsaW5nIHdoaWxlIHBhbm5pbmdcbiAgcGFyZW50LnN0eWxlLnRvdWNoQWN0aW9uID0gb3B0aW9ucy50b3VjaEFjdGlvblxuICAvLyBTZXQgdGhlIGN1cnNvciBzdHlsZSBvbiB0aGUgcGFyZW50IGlmIHdlJ3JlIGluIGNhbnZhcyBtb2RlXG4gIDsob3B0aW9ucy5jYW52YXMgPyBwYXJlbnQgOiBlbGVtKS5zdHlsZS5jdXJzb3IgPSBvcHRpb25zLmN1cnNvclxuXG4gIC8vIFNldCBlbGVtZW50IHN0eWxlc1xuICBlbGVtLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSdcbiAgZWxlbS5zdHlsZS50b3VjaEFjdGlvbiA9IG9wdGlvbnMudG91Y2hBY3Rpb25cbiAgLy8gVGhlIGRlZmF1bHQgZm9yIEhUTUwgaXMgJzUwJSA1MCUnXG4gIC8vIFRoZSBkZWZhdWx0IGZvciBTVkcgaXMgJzAgMCdcbiAgLy8gU1ZHIGNhbid0IGJlIGNoYW5nZWQgaW4gSUVcbiAgc2V0U3R5bGUoXG4gICAgZWxlbSxcbiAgICAndHJhbnNmb3JtT3JpZ2luJyxcbiAgICB0eXBlb2Ygb3B0aW9ucy5vcmlnaW4gPT09ICdzdHJpbmcnID8gb3B0aW9ucy5vcmlnaW4gOiBpc1NWRyA/ICcwIDAnIDogJzUwJSA1MCUnXG4gIClcblxuICBmdW5jdGlvbiByZXNldFN0eWxlKCkge1xuICAgIHBhcmVudC5zdHlsZS5vdmVyZmxvdyA9ICcnXG4gICAgcGFyZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnJ1xuICAgIHBhcmVudC5zdHlsZS50b3VjaEFjdGlvbiA9ICcnXG4gICAgcGFyZW50LnN0eWxlLmN1cnNvciA9ICcnXG4gICAgZWxlbS5zdHlsZS5jdXJzb3IgPSAnJ1xuICAgIGVsZW0uc3R5bGUudXNlclNlbGVjdCA9ICcnXG4gICAgZWxlbS5zdHlsZS50b3VjaEFjdGlvbiA9ICcnXG4gICAgc2V0U3R5bGUoZWxlbSwgJ3RyYW5zZm9ybU9yaWdpbicsICcnKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRzOiBPbWl0PFBhbnpvb21PcHRpb25zLCAnZm9yY2UnPiA9IHt9KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0cykge1xuICAgICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlIG9wdGlvbiBzaWRlLWVmZmVjdHNcbiAgICBpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eSgnY3Vyc29yJykgfHwgb3B0cy5oYXNPd25Qcm9wZXJ0eSgnY2FudmFzJykpIHtcbiAgICAgIHBhcmVudC5zdHlsZS5jdXJzb3IgPSBlbGVtLnN0eWxlLmN1cnNvciA9ICcnXG4gICAgICA7KG9wdGlvbnMuY2FudmFzID8gcGFyZW50IDogZWxlbSkuc3R5bGUuY3Vyc29yID0gb3B0aW9ucy5jdXJzb3JcbiAgICB9XG4gICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkoJ292ZXJmbG93JykpIHtcbiAgICAgIHBhcmVudC5zdHlsZS5vdmVyZmxvdyA9IG9wdHMub3ZlcmZsb3dcbiAgICB9XG4gICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkoJ3RvdWNoQWN0aW9uJykpIHtcbiAgICAgIHBhcmVudC5zdHlsZS50b3VjaEFjdGlvbiA9IG9wdHMudG91Y2hBY3Rpb25cbiAgICAgIGVsZW0uc3R5bGUudG91Y2hBY3Rpb24gPSBvcHRzLnRvdWNoQWN0aW9uXG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9wdHMuaGFzT3duUHJvcGVydHkoJ21pblNjYWxlJykgfHxcbiAgICAgIG9wdHMuaGFzT3duUHJvcGVydHkoJ21heFNjYWxlJykgfHxcbiAgICAgIG9wdHMuaGFzT3duUHJvcGVydHkoJ2NvbnRhaW4nKVxuICAgICkge1xuICAgICAgc2V0TWluTWF4KClcbiAgICB9XG4gIH1cblxuICBsZXQgeCA9IDBcbiAgbGV0IHkgPSAwXG4gIGxldCBzY2FsZSA9IDFcbiAgbGV0IGlzUGFubmluZyA9IGZhbHNlXG4gIHpvb20ob3B0aW9ucy5zdGFydFNjYWxlLCB7IGFuaW1hdGU6IGZhbHNlLCBmb3JjZTogdHJ1ZSB9KVxuICAvLyBXYWl0IGZvciBzY2FsZSB0byB1cGRhdGVcbiAgLy8gZm9yIGFjY3VyYXRlIGRpbWVuc2lvbnNcbiAgLy8gdG8gY29uc3RyYWluIGluaXRpYWwgdmFsdWVzXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNldE1pbk1heCgpXG4gICAgcGFuKG9wdGlvbnMuc3RhcnRYLCBvcHRpb25zLnN0YXJ0WSwgeyBhbmltYXRlOiBmYWxzZSwgZm9yY2U6IHRydWUgfSlcbiAgfSlcblxuICBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50TmFtZTogUGFuem9vbUV2ZW50LCBkZXRhaWw6IFBhbnpvb21FdmVudERldGFpbCwgb3B0czogUGFuem9vbU9wdGlvbnMpIHtcbiAgICBpZiAob3B0cy5zaWxlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgZGV0YWlsIH0pXG4gICAgZWxlbS5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0VHJhbnNmb3JtV2l0aEV2ZW50KFxuICAgIGV2ZW50TmFtZTogUGFuem9vbUV2ZW50LFxuICAgIG9wdHM6IFBhbnpvb21PcHRpb25zLFxuICAgIG9yaWdpbmFsRXZlbnQ/OiBQYW56b29tRXZlbnREZXRhaWxbJ29yaWdpbmFsRXZlbnQnXVxuICApIHtcbiAgICBjb25zdCB2YWx1ZSA9IHsgeCwgeSwgc2NhbGUsIGlzU1ZHLCBvcmlnaW5hbEV2ZW50IH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBvcHRzLmFuaW1hdGUgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAob3B0cy5hbmltYXRlKSB7XG4gICAgICAgICAgc2V0VHJhbnNpdGlvbihlbGVtLCBvcHRzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFN0eWxlKGVsZW0sICd0cmFuc2l0aW9uJywgJ25vbmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvcHRzLnNldFRyYW5zZm9ybShlbGVtLCB2YWx1ZSwgb3B0cylcbiAgICAgIHRyaWdnZXIoZXZlbnROYW1lLCB2YWx1ZSwgb3B0cylcbiAgICAgIHRyaWdnZXIoJ3Bhbnpvb21jaGFuZ2UnLCB2YWx1ZSwgb3B0cylcbiAgICB9KVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0TWluTWF4KCkge1xuICAgIGlmIChvcHRpb25zLmNvbnRhaW4pIHtcbiAgICAgIGNvbnN0IGRpbXMgPSBnZXREaW1lbnNpb25zKGVsZW0pXG4gICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IGRpbXMucGFyZW50LndpZHRoIC0gZGltcy5wYXJlbnQuYm9yZGVyLmxlZnQgLSBkaW1zLnBhcmVudC5ib3JkZXIucmlnaHRcbiAgICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IGRpbXMucGFyZW50LmhlaWdodCAtIGRpbXMucGFyZW50LmJvcmRlci50b3AgLSBkaW1zLnBhcmVudC5ib3JkZXIuYm90dG9tXG4gICAgICBjb25zdCBlbGVtV2lkdGggPSBkaW1zLmVsZW0ud2lkdGggLyBzY2FsZVxuICAgICAgY29uc3QgZWxlbUhlaWdodCA9IGRpbXMuZWxlbS5oZWlnaHQgLyBzY2FsZVxuICAgICAgY29uc3QgZWxlbVNjYWxlZFdpZHRoID0gcGFyZW50V2lkdGggLyBlbGVtV2lkdGhcbiAgICAgIGNvbnN0IGVsZW1TY2FsZWRIZWlnaHQgPSBwYXJlbnRIZWlnaHQgLyBlbGVtSGVpZ2h0XG4gICAgICBpZiAob3B0aW9ucy5jb250YWluID09PSAnaW5zaWRlJykge1xuICAgICAgICBvcHRpb25zLm1heFNjYWxlID0gTWF0aC5taW4oZWxlbVNjYWxlZFdpZHRoLCBlbGVtU2NhbGVkSGVpZ2h0KVxuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmNvbnRhaW4gPT09ICdvdXRzaWRlJykge1xuICAgICAgICBvcHRpb25zLm1pblNjYWxlID0gTWF0aC5tYXgoZWxlbVNjYWxlZFdpZHRoLCBlbGVtU2NhbGVkSGVpZ2h0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN0cmFpblhZKFxuICAgIHRvWDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHRvWTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHRvU2NhbGU6IG51bWJlcixcbiAgICBwYW5PcHRpb25zPzogUGFuT3B0aW9uc1xuICApIHtcbiAgICBjb25zdCBvcHRzID0geyAuLi5vcHRpb25zLCAuLi5wYW5PcHRpb25zIH1cbiAgICBjb25zdCByZXN1bHQgPSB7IHgsIHksIG9wdHMgfVxuICAgIGlmICghb3B0cy5mb3JjZSAmJiAob3B0cy5kaXNhYmxlUGFuIHx8IChvcHRzLnBhbk9ubHlXaGVuWm9vbWVkICYmIHNjYWxlID09PSBvcHRzLnN0YXJ0U2NhbGUpKSkge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgICB0b1ggPSBwYXJzZUZsb2F0KHRvWCBhcyBzdHJpbmcpXG4gICAgdG9ZID0gcGFyc2VGbG9hdCh0b1kgYXMgc3RyaW5nKVxuXG4gICAgaWYgKCFvcHRzLmRpc2FibGVYQXhpcykge1xuICAgICAgcmVzdWx0LnggPSAob3B0cy5yZWxhdGl2ZSA/IHggOiAwKSArIHRvWFxuICAgIH1cblxuICAgIGlmICghb3B0cy5kaXNhYmxlWUF4aXMpIHtcbiAgICAgIHJlc3VsdC55ID0gKG9wdHMucmVsYXRpdmUgPyB5IDogMCkgKyB0b1lcbiAgICB9XG5cbiAgICBpZiAob3B0cy5jb250YWluKSB7XG4gICAgICBjb25zdCBkaW1zID0gZ2V0RGltZW5zaW9ucyhlbGVtKVxuICAgICAgY29uc3QgcmVhbFdpZHRoID0gZGltcy5lbGVtLndpZHRoIC8gc2NhbGVcbiAgICAgIGNvbnN0IHJlYWxIZWlnaHQgPSBkaW1zLmVsZW0uaGVpZ2h0IC8gc2NhbGVcbiAgICAgIGNvbnN0IHNjYWxlZFdpZHRoID0gcmVhbFdpZHRoICogdG9TY2FsZVxuICAgICAgY29uc3Qgc2NhbGVkSGVpZ2h0ID0gcmVhbEhlaWdodCAqIHRvU2NhbGVcbiAgICAgIGNvbnN0IGRpZmZIb3Jpem9udGFsID0gKHNjYWxlZFdpZHRoIC0gcmVhbFdpZHRoKSAvIDJcbiAgICAgIGNvbnN0IGRpZmZWZXJ0aWNhbCA9IChzY2FsZWRIZWlnaHQgLSByZWFsSGVpZ2h0KSAvIDJcblxuICAgICAgaWYgKG9wdHMuY29udGFpbiA9PT0gJ2luc2lkZScpIHtcbiAgICAgICAgY29uc3QgbWluWCA9ICgtZGltcy5lbGVtLm1hcmdpbi5sZWZ0IC0gZGltcy5wYXJlbnQucGFkZGluZy5sZWZ0ICsgZGlmZkhvcml6b250YWwpIC8gdG9TY2FsZVxuICAgICAgICBjb25zdCBtYXhYID1cbiAgICAgICAgICAoZGltcy5wYXJlbnQud2lkdGggLVxuICAgICAgICAgICAgc2NhbGVkV2lkdGggLVxuICAgICAgICAgICAgZGltcy5wYXJlbnQucGFkZGluZy5sZWZ0IC1cbiAgICAgICAgICAgIGRpbXMuZWxlbS5tYXJnaW4ubGVmdCAtXG4gICAgICAgICAgICBkaW1zLnBhcmVudC5ib3JkZXIubGVmdCAtXG4gICAgICAgICAgICBkaW1zLnBhcmVudC5ib3JkZXIucmlnaHQgK1xuICAgICAgICAgICAgZGlmZkhvcml6b250YWwpIC9cbiAgICAgICAgICB0b1NjYWxlXG4gICAgICAgIHJlc3VsdC54ID0gTWF0aC5tYXgoTWF0aC5taW4ocmVzdWx0LngsIG1heFgpLCBtaW5YKVxuICAgICAgICBjb25zdCBtaW5ZID0gKC1kaW1zLmVsZW0ubWFyZ2luLnRvcCAtIGRpbXMucGFyZW50LnBhZGRpbmcudG9wICsgZGlmZlZlcnRpY2FsKSAvIHRvU2NhbGVcbiAgICAgICAgY29uc3QgbWF4WSA9XG4gICAgICAgICAgKGRpbXMucGFyZW50LmhlaWdodCAtXG4gICAgICAgICAgICBzY2FsZWRIZWlnaHQgLVxuICAgICAgICAgICAgZGltcy5wYXJlbnQucGFkZGluZy50b3AgLVxuICAgICAgICAgICAgZGltcy5lbGVtLm1hcmdpbi50b3AgLVxuICAgICAgICAgICAgZGltcy5wYXJlbnQuYm9yZGVyLnRvcCAtXG4gICAgICAgICAgICBkaW1zLnBhcmVudC5ib3JkZXIuYm90dG9tICtcbiAgICAgICAgICAgIGRpZmZWZXJ0aWNhbCkgL1xuICAgICAgICAgIHRvU2NhbGVcbiAgICAgICAgcmVzdWx0LnkgPSBNYXRoLm1heChNYXRoLm1pbihyZXN1bHQueSwgbWF4WSksIG1pblkpXG4gICAgICB9IGVsc2UgaWYgKG9wdHMuY29udGFpbiA9PT0gJ291dHNpZGUnKSB7XG4gICAgICAgIGNvbnN0IG1pblggPVxuICAgICAgICAgICgtKHNjYWxlZFdpZHRoIC0gZGltcy5wYXJlbnQud2lkdGgpIC1cbiAgICAgICAgICAgIGRpbXMucGFyZW50LnBhZGRpbmcubGVmdCAtXG4gICAgICAgICAgICBkaW1zLnBhcmVudC5ib3JkZXIubGVmdCAtXG4gICAgICAgICAgICBkaW1zLnBhcmVudC5ib3JkZXIucmlnaHQgK1xuICAgICAgICAgICAgZGlmZkhvcml6b250YWwpIC9cbiAgICAgICAgICB0b1NjYWxlXG4gICAgICAgIGNvbnN0IG1heFggPSAoZGlmZkhvcml6b250YWwgLSBkaW1zLnBhcmVudC5wYWRkaW5nLmxlZnQpIC8gdG9TY2FsZVxuICAgICAgICByZXN1bHQueCA9IE1hdGgubWF4KE1hdGgubWluKHJlc3VsdC54LCBtYXhYKSwgbWluWClcbiAgICAgICAgY29uc3QgbWluWSA9XG4gICAgICAgICAgKC0oc2NhbGVkSGVpZ2h0IC0gZGltcy5wYXJlbnQuaGVpZ2h0KSAtXG4gICAgICAgICAgICBkaW1zLnBhcmVudC5wYWRkaW5nLnRvcCAtXG4gICAgICAgICAgICBkaW1zLnBhcmVudC5ib3JkZXIudG9wIC1cbiAgICAgICAgICAgIGRpbXMucGFyZW50LmJvcmRlci5ib3R0b20gK1xuICAgICAgICAgICAgZGlmZlZlcnRpY2FsKSAvXG4gICAgICAgICAgdG9TY2FsZVxuICAgICAgICBjb25zdCBtYXhZID0gKGRpZmZWZXJ0aWNhbCAtIGRpbXMucGFyZW50LnBhZGRpbmcudG9wKSAvIHRvU2NhbGVcbiAgICAgICAgcmVzdWx0LnkgPSBNYXRoLm1heChNYXRoLm1pbihyZXN1bHQueSwgbWF4WSksIG1pblkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN0cmFpblNjYWxlKHRvU2NhbGU6IG51bWJlciwgem9vbU9wdGlvbnM/OiBab29tT3B0aW9ucykge1xuICAgIGNvbnN0IG9wdHMgPSB7IC4uLm9wdGlvbnMsIC4uLnpvb21PcHRpb25zIH1cbiAgICBjb25zdCByZXN1bHQgPSB7IHNjYWxlLCBvcHRzIH1cbiAgICBpZiAoIW9wdHMuZm9yY2UgJiYgb3B0cy5kaXNhYmxlWm9vbSkge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgICByZXN1bHQuc2NhbGUgPSBNYXRoLm1pbihNYXRoLm1heCh0b1NjYWxlLCBvcHRzLm1pblNjYWxlKSwgb3B0cy5tYXhTY2FsZSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBmdW5jdGlvbiBwYW4oXG4gICAgdG9YOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgdG9ZOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgcGFuT3B0aW9ucz86IFBhbk9wdGlvbnMsXG4gICAgb3JpZ2luYWxFdmVudD86IFBhbnpvb21FdmVudERldGFpbFsnb3JpZ2luYWxFdmVudCddXG4gICkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvbnN0cmFpblhZKHRvWCwgdG9ZLCBzY2FsZSwgcGFuT3B0aW9ucylcbiAgICBjb25zdCBvcHRzID0gcmVzdWx0Lm9wdHNcblxuICAgIHggPSByZXN1bHQueFxuICAgIHkgPSByZXN1bHQueVxuXG4gICAgcmV0dXJuIHNldFRyYW5zZm9ybVdpdGhFdmVudCgncGFuem9vbXBhbicsIG9wdHMsIG9yaWdpbmFsRXZlbnQpXG4gIH1cblxuICBmdW5jdGlvbiB6b29tKFxuICAgIHRvU2NhbGU6IG51bWJlcixcbiAgICB6b29tT3B0aW9ucz86IFpvb21PcHRpb25zLFxuICAgIG9yaWdpbmFsRXZlbnQ/OiBQYW56b29tRXZlbnREZXRhaWxbJ29yaWdpbmFsRXZlbnQnXVxuICApIHtcbiAgICBjb25zdCByZXN1bHQgPSBjb25zdHJhaW5TY2FsZSh0b1NjYWxlLCB6b29tT3B0aW9ucylcbiAgICBjb25zdCBvcHRzID0gcmVzdWx0Lm9wdHNcbiAgICBpZiAoIW9wdHMuZm9yY2UgJiYgb3B0cy5kaXNhYmxlWm9vbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRvU2NhbGUgPSByZXN1bHQuc2NhbGVcbiAgICBsZXQgdG9YID0geFxuICAgIGxldCB0b1kgPSB5XG5cbiAgICBpZiAob3B0cy5mb2NhbCkge1xuICAgICAgLy8gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgcG9pbnQgYWZ0ZXIgdGhlIHNjYWxlIGFuZCB0aGUgcG9pbnQgYmVmb3JlIHRoZSBzY2FsZVxuICAgICAgLy8gcGx1cyB0aGUgY3VycmVudCB0cmFuc2xhdGlvbiBhZnRlciB0aGUgc2NhbGVcbiAgICAgIC8vIG5ldXRyYWxpemVkIHRvIG5vIHNjYWxlIChhcyB0aGUgdHJhbnNmb3JtIHNjYWxlIHdpbGwgYXBwbHkgdG8gdGhlIHRyYW5zbGF0aW9uKVxuICAgICAgY29uc3QgZm9jYWwgPSBvcHRzLmZvY2FsXG4gICAgICB0b1ggPSAoZm9jYWwueCAvIHRvU2NhbGUgLSBmb2NhbC54IC8gc2NhbGUgKyB4ICogdG9TY2FsZSkgLyB0b1NjYWxlXG4gICAgICB0b1kgPSAoZm9jYWwueSAvIHRvU2NhbGUgLSBmb2NhbC55IC8gc2NhbGUgKyB5ICogdG9TY2FsZSkgLyB0b1NjYWxlXG4gICAgfVxuICAgIGNvbnN0IHBhblJlc3VsdCA9IGNvbnN0cmFpblhZKHRvWCwgdG9ZLCB0b1NjYWxlLCB7IHJlbGF0aXZlOiBmYWxzZSwgZm9yY2U6IHRydWUgfSlcbiAgICB4ID0gcGFuUmVzdWx0LnhcbiAgICB5ID0gcGFuUmVzdWx0LnlcbiAgICBzY2FsZSA9IHRvU2NhbGVcbiAgICByZXR1cm4gc2V0VHJhbnNmb3JtV2l0aEV2ZW50KCdwYW56b29tem9vbScsIG9wdHMsIG9yaWdpbmFsRXZlbnQpXG4gIH1cblxuICBmdW5jdGlvbiB6b29tSW5PdXQoaXNJbjogYm9vbGVhbiwgem9vbU9wdGlvbnM/OiBab29tT3B0aW9ucykge1xuICAgIGNvbnN0IG9wdHMgPSB7IC4uLm9wdGlvbnMsIGFuaW1hdGU6IHRydWUsIC4uLnpvb21PcHRpb25zIH1cbiAgICByZXR1cm4gem9vbShzY2FsZSAqIE1hdGguZXhwKChpc0luID8gMSA6IC0xKSAqIG9wdHMuc3RlcCksIG9wdHMpXG4gIH1cblxuICBmdW5jdGlvbiB6b29tSW4oem9vbU9wdGlvbnM/OiBab29tT3B0aW9ucykge1xuICAgIHJldHVybiB6b29tSW5PdXQodHJ1ZSwgem9vbU9wdGlvbnMpXG4gIH1cblxuICBmdW5jdGlvbiB6b29tT3V0KHpvb21PcHRpb25zPzogWm9vbU9wdGlvbnMpIHtcbiAgICByZXR1cm4gem9vbUluT3V0KGZhbHNlLCB6b29tT3B0aW9ucylcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21Ub1BvaW50KFxuICAgIHRvU2NhbGU6IG51bWJlcixcbiAgICBwb2ludDogeyBjbGllbnRYOiBudW1iZXI7IGNsaWVudFk6IG51bWJlciB9LFxuICAgIHpvb21PcHRpb25zPzogWm9vbU9wdGlvbnMsXG4gICAgb3JpZ2luYWxFdmVudD86IFBhbnpvb21FdmVudERldGFpbFsnb3JpZ2luYWxFdmVudCddXG4gICkge1xuICAgIGNvbnN0IGRpbXMgPSBnZXREaW1lbnNpb25zKGVsZW0pXG5cbiAgICAvLyBJbnN0ZWFkIG9mIHRoaW5raW5nIG9mIG9wZXJhdGluZyBvbiB0aGUgcGFuem9vbSBlbGVtZW50LFxuICAgIC8vIHRoaW5rIG9mIG9wZXJhdGluZyBvbiB0aGUgYXJlYSBpbnNpZGUgdGhlIHBhbnpvb21cbiAgICAvLyBlbGVtZW50J3MgcGFyZW50XG4gICAgLy8gU3VidHJhY3QgcGFkZGluZyBhbmQgYm9yZGVyXG4gICAgY29uc3QgZWZmZWN0aXZlQXJlYSA9IHtcbiAgICAgIHdpZHRoOlxuICAgICAgICBkaW1zLnBhcmVudC53aWR0aCAtXG4gICAgICAgIGRpbXMucGFyZW50LnBhZGRpbmcubGVmdCAtXG4gICAgICAgIGRpbXMucGFyZW50LnBhZGRpbmcucmlnaHQgLVxuICAgICAgICBkaW1zLnBhcmVudC5ib3JkZXIubGVmdCAtXG4gICAgICAgIGRpbXMucGFyZW50LmJvcmRlci5yaWdodCxcbiAgICAgIGhlaWdodDpcbiAgICAgICAgZGltcy5wYXJlbnQuaGVpZ2h0IC1cbiAgICAgICAgZGltcy5wYXJlbnQucGFkZGluZy50b3AgLVxuICAgICAgICBkaW1zLnBhcmVudC5wYWRkaW5nLmJvdHRvbSAtXG4gICAgICAgIGRpbXMucGFyZW50LmJvcmRlci50b3AgLVxuICAgICAgICBkaW1zLnBhcmVudC5ib3JkZXIuYm90dG9tXG4gICAgfVxuXG4gICAgLy8gQWRqdXN0IHRoZSBjbGllbnRYL2NsaWVudFkgdG8gaWdub3JlIHRoZSBhcmVhXG4gICAgLy8gb3V0c2lkZSB0aGUgZWZmZWN0aXZlIGFyZWFcbiAgICBsZXQgY2xpZW50WCA9XG4gICAgICBwb2ludC5jbGllbnRYIC1cbiAgICAgIGRpbXMucGFyZW50LmxlZnQgLVxuICAgICAgZGltcy5wYXJlbnQucGFkZGluZy5sZWZ0IC1cbiAgICAgIGRpbXMucGFyZW50LmJvcmRlci5sZWZ0IC1cbiAgICAgIGRpbXMuZWxlbS5tYXJnaW4ubGVmdFxuICAgIGxldCBjbGllbnRZID1cbiAgICAgIHBvaW50LmNsaWVudFkgLVxuICAgICAgZGltcy5wYXJlbnQudG9wIC1cbiAgICAgIGRpbXMucGFyZW50LnBhZGRpbmcudG9wIC1cbiAgICAgIGRpbXMucGFyZW50LmJvcmRlci50b3AgLVxuICAgICAgZGltcy5lbGVtLm1hcmdpbi50b3BcblxuICAgIC8vIEFkanVzdCB0aGUgY2xpZW50WC9jbGllbnRZIGZvciBIVE1MIGVsZW1lbnRzLFxuICAgIC8vIGJlY2F1c2UgdGhleSBoYXZlIGEgdHJhbnNmb3JtLW9yaWdpbiBvZiA1MCUgNTAlXG4gICAgaWYgKCFpc1NWRykge1xuICAgICAgY2xpZW50WCAtPSBkaW1zLmVsZW0ud2lkdGggLyBzY2FsZSAvIDJcbiAgICAgIGNsaWVudFkgLT0gZGltcy5lbGVtLmhlaWdodCAvIHNjYWxlIC8gMlxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdGhlIG1vdXNlIHBvaW50IGZyb20gaXQncyBwb3NpdGlvbiBvdmVyIHRoZVxuICAgIC8vIGVmZmVjdGl2ZSBhcmVhIGJlZm9yZSB0aGUgc2NhbGUgdG8gdGhlIHBvc2l0aW9uXG4gICAgLy8gb3ZlciB0aGUgZWZmZWN0aXZlIGFyZWEgYWZ0ZXIgdGhlIHNjYWxlLlxuICAgIGNvbnN0IGZvY2FsID0ge1xuICAgICAgeDogKGNsaWVudFggLyBlZmZlY3RpdmVBcmVhLndpZHRoKSAqIChlZmZlY3RpdmVBcmVhLndpZHRoICogdG9TY2FsZSksXG4gICAgICB5OiAoY2xpZW50WSAvIGVmZmVjdGl2ZUFyZWEuaGVpZ2h0KSAqIChlZmZlY3RpdmVBcmVhLmhlaWdodCAqIHRvU2NhbGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHpvb20odG9TY2FsZSwgeyBhbmltYXRlOiBmYWxzZSwgLi4uem9vbU9wdGlvbnMsIGZvY2FsIH0sIG9yaWdpbmFsRXZlbnQpXG4gIH1cblxuICBmdW5jdGlvbiB6b29tV2l0aFdoZWVsKGV2ZW50OiBXaGVlbEV2ZW50LCB6b29tT3B0aW9ucz86IFpvb21PcHRpb25zKSB7XG4gICAgLy8gTmVlZCB0byBwcmV2ZW50IHRoZSBkZWZhdWx0IGhlcmVcbiAgICAvLyBvciBpdCBjb25mbGljdHMgd2l0aCByZWd1bGFyIHBhZ2Ugc2Nyb2xsXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3Qgb3B0cyA9IHsgLi4ub3B0aW9ucywgLi4uem9vbU9wdGlvbnMsIGFuaW1hdGU6IGZhbHNlIH1cblxuICAgIC8vIE5vcm1hbGl6ZSB0byBkZWx0YVggaW4gY2FzZSBzaGlmdCBtb2RpZmllciBpcyB1c2VkIG9uIE1hY1xuICAgIGNvbnN0IGRlbHRhID0gZXZlbnQuZGVsdGFZID09PSAwICYmIGV2ZW50LmRlbHRhWCA/IGV2ZW50LmRlbHRhWCA6IGV2ZW50LmRlbHRhWVxuICAgIGNvbnN0IHdoZWVsID0gZGVsdGEgPCAwID8gMSA6IC0xXG4gICAgY29uc3QgdG9TY2FsZSA9IGNvbnN0cmFpblNjYWxlKHNjYWxlICogTWF0aC5leHAoKHdoZWVsICogb3B0cy5zdGVwKSAvIDMpLCBvcHRzKS5zY2FsZVxuXG4gICAgcmV0dXJuIHpvb21Ub1BvaW50KHRvU2NhbGUsIGV2ZW50LCBvcHRzKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQocmVzZXRPcHRpb25zPzogUGFuem9vbU9wdGlvbnMpIHtcbiAgICBjb25zdCBvcHRzID0geyAuLi5vcHRpb25zLCBhbmltYXRlOiB0cnVlLCBmb3JjZTogdHJ1ZSwgLi4ucmVzZXRPcHRpb25zIH1cbiAgICBzY2FsZSA9IGNvbnN0cmFpblNjYWxlKG9wdHMuc3RhcnRTY2FsZSwgb3B0cykuc2NhbGVcbiAgICBjb25zdCBwYW5SZXN1bHQgPSBjb25zdHJhaW5YWShvcHRzLnN0YXJ0WCwgb3B0cy5zdGFydFksIHNjYWxlLCBvcHRzKVxuICAgIHggPSBwYW5SZXN1bHQueFxuICAgIHkgPSBwYW5SZXN1bHQueVxuICAgIHJldHVybiBzZXRUcmFuc2Zvcm1XaXRoRXZlbnQoJ3Bhbnpvb21yZXNldCcsIG9wdHMpXG4gIH1cblxuICBsZXQgb3JpZ1g6IG51bWJlclxuICBsZXQgb3JpZ1k6IG51bWJlclxuICBsZXQgc3RhcnRDbGllbnRYOiBudW1iZXJcbiAgbGV0IHN0YXJ0Q2xpZW50WTogbnVtYmVyXG4gIGxldCBzdGFydFNjYWxlOiBudW1iZXJcbiAgbGV0IHN0YXJ0RGlzdGFuY2U6IG51bWJlclxuICBjb25zdCBwb2ludGVyczogUG9pbnRlckV2ZW50W10gPSBbXVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURvd24oZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgIC8vIERvbid0IGhhbmRsZSB0aGlzIGV2ZW50IGlmIHRoZSB0YXJnZXQgaXMgZXhjbHVkZWRcbiAgICBpZiAoaXNFeGNsdWRlZChldmVudC50YXJnZXQgYXMgRWxlbWVudCwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBhZGRQb2ludGVyKHBvaW50ZXJzLCBldmVudClcbiAgICBpc1Bhbm5pbmcgPSB0cnVlXG4gICAgb3B0aW9ucy5oYW5kbGVTdGFydEV2ZW50KGV2ZW50KVxuICAgIG9yaWdYID0geFxuICAgIG9yaWdZID0geVxuXG4gICAgdHJpZ2dlcigncGFuem9vbXN0YXJ0JywgeyB4LCB5LCBzY2FsZSwgaXNTVkcsIG9yaWdpbmFsRXZlbnQ6IGV2ZW50IH0sIG9wdGlvbnMpXG5cbiAgICAvLyBUaGlzIHdvcmtzIHdoZXRoZXIgdGhlcmUgYXJlIG11bHRpcGxlXG4gICAgLy8gcG9pbnRlcnMgb3Igbm90XG4gICAgY29uc3QgcG9pbnQgPSBnZXRNaWRkbGUocG9pbnRlcnMpXG4gICAgc3RhcnRDbGllbnRYID0gcG9pbnQuY2xpZW50WFxuICAgIHN0YXJ0Q2xpZW50WSA9IHBvaW50LmNsaWVudFlcbiAgICBzdGFydFNjYWxlID0gc2NhbGVcbiAgICBzdGFydERpc3RhbmNlID0gZ2V0RGlzdGFuY2UocG9pbnRlcnMpXG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICAhaXNQYW5uaW5nIHx8XG4gICAgICBvcmlnWCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICBvcmlnWSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICBzdGFydENsaWVudFggPT09IHVuZGVmaW5lZCB8fFxuICAgICAgc3RhcnRDbGllbnRZID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBhZGRQb2ludGVyKHBvaW50ZXJzLCBldmVudClcbiAgICBjb25zdCBjdXJyZW50ID0gZ2V0TWlkZGxlKHBvaW50ZXJzKVxuICAgIGlmIChwb2ludGVycy5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBBIHN0YXJ0RGlzdGFuY2Ugb2YgMCBtZWFuc1xuICAgICAgLy8gdGhhdCB0aGVyZSB3ZXJlbid0IDIgcG9pbnRlcnNcbiAgICAgIC8vIGhhbmRsZWQgb24gc3RhcnRcbiAgICAgIGlmIChzdGFydERpc3RhbmNlID09PSAwKSB7XG4gICAgICAgIHN0YXJ0RGlzdGFuY2UgPSBnZXREaXN0YW5jZShwb2ludGVycylcbiAgICAgIH1cbiAgICAgIC8vIFVzZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZmlyc3QgMiBwb2ludGVyc1xuICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBjdXJyZW50IHNjYWxlXG4gICAgICBjb25zdCBkaWZmID0gZ2V0RGlzdGFuY2UocG9pbnRlcnMpIC0gc3RhcnREaXN0YW5jZVxuICAgICAgY29uc3QgdG9TY2FsZSA9IGNvbnN0cmFpblNjYWxlKChkaWZmICogb3B0aW9ucy5zdGVwKSAvIDgwICsgc3RhcnRTY2FsZSkuc2NhbGVcbiAgICAgIHpvb21Ub1BvaW50KHRvU2NhbGUsIGN1cnJlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFBhbm5pbmcgZHVyaW5nIHBpbmNoIHpvb20gY2FuIGNhdXNlIGlzc3Vlc1xuICAgICAgLy8gYmVjYXVzZSB0aGUgem9vbSBoYXMgbm90IGFsd2F5cyByZW5kZXJlZCBpbiB0aW1lXG4gICAgICAvLyBmb3IgYWNjdXJhdGUgY2FsY3VsYXRpb25zXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3RpbW15d2lsL3Bhbnpvb20vaXNzdWVzLzUxMlxuICAgICAgcGFuKFxuICAgICAgICBvcmlnWCArIChjdXJyZW50LmNsaWVudFggLSBzdGFydENsaWVudFgpIC8gc2NhbGUsXG4gICAgICAgIG9yaWdZICsgKGN1cnJlbnQuY2xpZW50WSAtIHN0YXJ0Q2xpZW50WSkgLyBzY2FsZSxcbiAgICAgICAge1xuICAgICAgICAgIGFuaW1hdGU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVXAoZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgIC8vIERvbid0IGNhbGwgcGFuem9vbWVuZCB3aGVuIHBhbm5pbmcgd2l0aCAyIHRvdWNoZXNcbiAgICAvLyB1bnRpbCBib3RoIHRvdWNoZXMgZW5kXG4gICAgaWYgKHBvaW50ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdHJpZ2dlcigncGFuem9vbWVuZCcsIHsgeCwgeSwgc2NhbGUsIGlzU1ZHLCBvcmlnaW5hbEV2ZW50OiBldmVudCB9LCBvcHRpb25zKVxuICAgIH1cbiAgICAvLyBOb3RlOiBkb24ndCByZW1vdmUgYWxsIHBvaW50ZXJzXG4gICAgLy8gQ2FuIHJlc3RhcnQgd2l0aG91dCBoYXZpbmcgdG8gcmVpbml0aWF0ZSBhbGwgb2YgdGhlbVxuICAgIC8vIFJlbW92ZSB0aGUgcG9pbnRlciByZWdhcmRsZXNzIG9mIHRoZSBpc1Bhbm5pbmcgc3RhdGVcbiAgICByZW1vdmVQb2ludGVyKHBvaW50ZXJzLCBldmVudClcbiAgICBpZiAoIWlzUGFubmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlzUGFubmluZyA9IGZhbHNlXG4gICAgb3JpZ1ggPSBvcmlnWSA9IHN0YXJ0Q2xpZW50WCA9IHN0YXJ0Q2xpZW50WSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgbGV0IGJvdW5kID0gZmFsc2VcbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICBpZiAoYm91bmQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBib3VuZCA9IHRydWVcbiAgICBvblBvaW50ZXIoJ2Rvd24nLCBvcHRpb25zLmNhbnZhcyA/IHBhcmVudCA6IGVsZW0sIGhhbmRsZURvd24pXG4gICAgb25Qb2ludGVyKCdtb3ZlJywgZG9jdW1lbnQsIG1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIG9uUG9pbnRlcigndXAnLCBkb2N1bWVudCwgaGFuZGxlVXAsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBib3VuZCA9IGZhbHNlXG4gICAgZGVzdHJveVBvaW50ZXIoJ2Rvd24nLCBvcHRpb25zLmNhbnZhcyA/IHBhcmVudCA6IGVsZW0sIGhhbmRsZURvd24pXG4gICAgZGVzdHJveVBvaW50ZXIoJ21vdmUnLCBkb2N1bWVudCwgbW92ZSlcbiAgICBkZXN0cm95UG9pbnRlcigndXAnLCBkb2N1bWVudCwgaGFuZGxlVXApXG4gIH1cblxuICBpZiAoIW9wdGlvbnMubm9CaW5kKSB7XG4gICAgYmluZCgpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJpbmQsXG4gICAgZGVzdHJveSxcbiAgICBldmVudE5hbWVzLFxuICAgIGdldFBhbjogKCkgPT4gKHsgeCwgeSB9KSxcbiAgICBnZXRTY2FsZTogKCkgPT4gc2NhbGUsXG4gICAgZ2V0T3B0aW9uczogKCkgPT4gc2hhbGxvd0Nsb25lKG9wdGlvbnMpLFxuICAgIHBhbixcbiAgICByZXNldCxcbiAgICByZXNldFN0eWxlLFxuICAgIHNldE9wdGlvbnMsXG4gICAgc2V0U3R5bGU6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHNldFN0eWxlKGVsZW0sIG5hbWUsIHZhbHVlKSxcbiAgICB6b29tLFxuICAgIHpvb21JbixcbiAgICB6b29tT3V0LFxuICAgIHpvb21Ub1BvaW50LFxuICAgIHpvb21XaXRoV2hlZWxcbiAgfVxufVxuXG5QYW56b29tLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnNcblxuZXhwb3J0IHsgUGFuem9vbU9iamVjdCwgUGFuem9vbU9wdGlvbnMgfVxuZXhwb3J0IGRlZmF1bHQgUGFuem9vbVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n")},252:()=>{eval("/* eslint-disable no-var */\nif (typeof window !== 'undefined') {\n  // Support: IE11 only\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = Array.prototype.forEach\n  }\n  // Support: IE11 only\n  // CustomEvent is an object instead of a constructor\n  if (typeof window.CustomEvent !== 'function') {\n    window.CustomEvent = function CustomEvent(event, params) {\n      params = params || { bubbles: false, cancelable: false, detail: null }\n      var evt = document.createEvent('CustomEvent')\n      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)\n      return evt\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYW56b29tL3Bhbnpvb20vLi9zcmMvcG9seWZpbGxzLmpzPzA2NzQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gU3VwcG9ydDogSUUxMSBvbmx5XG4gIGlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaFxuICB9XG4gIC8vIFN1cHBvcnQ6IElFMTEgb25seVxuICAvLyBDdXN0b21FdmVudCBpcyBhbiBvYmplY3QgaW5zdGVhZCBvZiBhIGNvbnN0cnVjdG9yXG4gIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgd2luZG93LkN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IG51bGwgfVxuICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpXG4gICAgICByZXR1cm4gZXZ0XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///252\n")}},__webpack_module_cache__={},inProgress,dataWebpackPrefix;function __webpack_require__(Q){var U=__webpack_module_cache__[Q];if(void 0!==U){if(void 0!==U.error)throw U.error;return U.exports}var F=__webpack_module_cache__[Q]={exports:{}};try{var B={id:Q,module:F,factory:__webpack_modules__[Q],require:__webpack_require__};__webpack_require__.i.forEach((function(Q){Q(B)})),F=B.module,B.factory.call(F.exports,F,F.exports,B.require)}catch(Q){throw F.error=Q,Q}return F.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.i=[],__webpack_require__.d=(Q,U)=>{for(var F in U)__webpack_require__.o(U,F)&&!__webpack_require__.o(Q,F)&&Object.defineProperty(Q,F,{enumerable:!0,get:U[F]})},__webpack_require__.hu=Q=>Q+"."+__webpack_require__.h()+".hot-update.js",__webpack_require__.hmrF=()=>"panzoom."+__webpack_require__.h()+".hot-update.json",__webpack_require__.h=()=>"c924bc5f344e046074f0",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,U)=>Object.prototype.hasOwnProperty.call(Q,U),inProgress={},dataWebpackPrefix="@panzoom/panzoom:",__webpack_require__.l=(Q,U,F,B)=>{if(inProgress[Q])inProgress[Q].push(U);else{var n,e;if(void 0!==F)for(var s=document.getElementsByTagName("script"),t=0;t<s.length;t++){var l=s[t];if(l.getAttribute("src")==Q||l.getAttribute("data-webpack")==dataWebpackPrefix+F){n=l;break}}n||(e=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",dataWebpackPrefix+F),n.src=Q),inProgress[Q]=[U];var c=(U,F)=>{n.onerror=n.onload=null,clearTimeout(i);var B=inProgress[Q];if(delete inProgress[Q],n.parentNode&&n.parentNode.removeChild(n),B&&B.forEach((Q=>Q(F))),U)return U(F)},i=setTimeout(c.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=c.bind(null,n.onerror),n.onload=c.bind(null,n.onload),e&&document.head.appendChild(n)}},(()=>{var Q,U,F,B,n={},e=__webpack_require__.c,s=[],t=[],l="idle";function c(Q){l=Q;for(var U=[],F=0;F<t.length;F++)U[F]=t[F].call(null,Q);return Promise.all(U)}function i(Q){if(0===U.length)return Q();var F=U;return U=[],Promise.all(F).then((function(){return i(Q)}))}function g(Q){if("idle"!==l)throw new Error("check() is only allowed in idle status");return c("check").then(__webpack_require__.hmrM).then((function(B){return B?c("prepare").then((function(){var n=[];return U=[],F=[],Promise.all(Object.keys(__webpack_require__.hmrC).reduce((function(Q,U){return __webpack_require__.hmrC[U](B.c,B.r,B.m,Q,F,n),Q}),[])).then((function(){return i((function(){return Q?d(Q):c("ready").then((function(){return n}))}))}))})):c(I()?"ready":"idle").then((function(){return null}))}))}function b(Q){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):d(Q)}function d(Q){Q=Q||{},I();var U=F.map((function(U){return U(Q)}));F=void 0;var n=U.map((function(Q){return Q.error})).filter(Boolean);if(n.length>0)return c("abort").then((function(){throw n[0]}));var e=c("dispose");U.forEach((function(Q){Q.dispose&&Q.dispose()}));var s,t=c("apply"),l=function(Q){s||(s=Q)},i=[];return U.forEach((function(Q){if(Q.apply){var U=Q.apply(l);if(U)for(var F=0;F<U.length;F++)i.push(U[F])}})),Promise.all([e,t]).then((function(){return s?c("fail").then((function(){throw s})):B?d(Q).then((function(Q){return i.forEach((function(U){Q.indexOf(U)<0&&Q.push(U)})),Q})):c("idle").then((function(){return i}))}))}function I(){if(B)return F||(F=[]),Object.keys(__webpack_require__.hmrI).forEach((function(Q){B.forEach((function(U){__webpack_require__.hmrI[Q](U,F)}))})),B=void 0,!0}__webpack_require__.hmrD=n,__webpack_require__.i.push((function(d){var I,x,a,o,L=d.module,r=function(F,B){var n=e[B];if(!n)return F;var t=function(U){if(n.hot.active){if(e[U]){var t=e[U].parents;-1===t.indexOf(B)&&t.push(B)}else s=[B],Q=U;-1===n.children.indexOf(U)&&n.children.push(U)}else console.warn("[HMR] unexpected require("+U+") from disposed module "+B),s=[];return F(U)},g=function(Q){return{configurable:!0,enumerable:!0,get:function(){return F[Q]},set:function(U){F[Q]=U}}};for(var b in F)Object.prototype.hasOwnProperty.call(F,b)&&"e"!==b&&Object.defineProperty(t,b,g(b));return t.e=function(Q){return function(Q){switch(l){case"ready":return c("prepare"),U.push(Q),i((function(){return c("ready")})),Q;case"prepare":return U.push(Q),Q;default:return Q}}(F.e(Q))},t}(d.require,d.id);L.hot=(I=d.id,x=L,o={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a=Q!==I,_requireSelf:function(){s=x.parents.slice(),Q=a?void 0:I,__webpack_require__(I)},active:!0,accept:function(Q,U,F){if(void 0===Q)o._selfAccepted=!0;else if("function"==typeof Q)o._selfAccepted=Q;else if("object"==typeof Q&&null!==Q)for(var B=0;B<Q.length;B++)o._acceptedDependencies[Q[B]]=U||function(){},o._acceptedErrorHandlers[Q[B]]=F;else o._acceptedDependencies[Q]=U||function(){},o._acceptedErrorHandlers[Q]=F},decline:function(Q){if(void 0===Q)o._selfDeclined=!0;else if("object"==typeof Q&&null!==Q)for(var U=0;U<Q.length;U++)o._declinedDependencies[Q[U]]=!0;else o._declinedDependencies[Q]=!0},dispose:function(Q){o._disposeHandlers.push(Q)},addDisposeHandler:function(Q){o._disposeHandlers.push(Q)},removeDisposeHandler:function(Q){var U=o._disposeHandlers.indexOf(Q);U>=0&&o._disposeHandlers.splice(U,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":F=[],Object.keys(__webpack_require__.hmrI).forEach((function(Q){__webpack_require__.hmrI[Q](I,F)})),c("ready");break;case"ready":Object.keys(__webpack_require__.hmrI).forEach((function(Q){__webpack_require__.hmrI[Q](I,F)}));break;case"prepare":case"check":case"dispose":case"apply":(B=B||[]).push(I)}},check:g,apply:b,status:function(Q){if(!Q)return l;t.push(Q)},addStatusHandler:function(Q){t.push(Q)},removeStatusHandler:function(Q){var U=t.indexOf(Q);U>=0&&t.splice(U,1)},data:n[I]},Q=void 0,o),L.parents=s,L.children=[],s=[],d.require=r})),__webpack_require__.hmrC={},__webpack_require__.hmrI={}})(),(()=>{var Q;__webpack_require__.g.importScripts&&(Q=__webpack_require__.g.location+"");var U=__webpack_require__.g.document;if(!Q&&U&&(U.currentScript&&(Q=U.currentScript.src),!Q)){var F=U.getElementsByTagName("script");F.length&&(Q=F[F.length-1].src)}if(!Q)throw new Error("Automatic publicPath is not supported in this browser");Q=Q.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=Q})(),(()=>{var Q,U,F,B,n={478:0},e={};function s(Q){return new Promise(((U,F)=>{e[Q]=U;var B=__webpack_require__.p+__webpack_require__.hu(Q),n=new Error;__webpack_require__.l(B,(U=>{if(e[Q]){e[Q]=void 0;var B=U&&("load"===U.type?"missing":U.type),s=U&&U.target&&U.target.src;n.message="Loading hot update chunk "+Q+" failed.\n("+B+": "+s+")",n.name="ChunkLoadError",n.type=B,n.request=s,F(n)}}))}))}function t(e){function s(Q){for(var U=[Q],F={},B=U.map((function(Q){return{chain:[Q],id:Q}}));B.length>0;){var n=B.pop(),e=n.id,s=n.chain,l=__webpack_require__.c[e];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:e};if(l.hot._main)return{type:"unaccepted",chain:s,moduleId:e};for(var c=0;c<l.parents.length;c++){var i=l.parents[c],g=__webpack_require__.c[i];if(g){if(g.hot._declinedDependencies[e])return{type:"declined",chain:s.concat([i]),moduleId:e,parentId:i};-1===U.indexOf(i)&&(g.hot._acceptedDependencies[e]?(F[i]||(F[i]=[]),t(F[i],[e])):(delete F[i],U.push(i),B.push({chain:s.concat([i]),id:i})))}}}}return{type:"accepted",moduleId:Q,outdatedModules:U,outdatedDependencies:F}}function t(Q,U){for(var F=0;F<U.length;F++){var B=U[F];-1===Q.indexOf(B)&&Q.push(B)}}__webpack_require__.f&&delete __webpack_require__.f.jsonpHmr,Q=void 0;var l={},c=[],i={},g=function(Q){console.warn("[HMR] unexpected require("+Q.id+") to disposed module")};for(var b in U)if(__webpack_require__.o(U,b)){var d,I=U[b],x=!1,a=!1,o=!1,L="";switch((d=I?s(b):{type:"disposed",moduleId:b}).chain&&(L="\nUpdate propagation: "+d.chain.join(" -> ")),d.type){case"self-declined":e.onDeclined&&e.onDeclined(d),e.ignoreDeclined||(x=new Error("Aborted because of self decline: "+d.moduleId+L));break;case"declined":e.onDeclined&&e.onDeclined(d),e.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+d.moduleId+" in "+d.parentId+L));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(d),e.ignoreUnaccepted||(x=new Error("Aborted because "+b+" is not accepted"+L));break;case"accepted":e.onAccepted&&e.onAccepted(d),a=!0;break;case"disposed":e.onDisposed&&e.onDisposed(d),o=!0;break;default:throw new Error("Unexception type "+d.type)}if(x)return{error:x};if(a)for(b in i[b]=I,t(c,d.outdatedModules),d.outdatedDependencies)__webpack_require__.o(d.outdatedDependencies,b)&&(l[b]||(l[b]=[]),t(l[b],d.outdatedDependencies[b]));o&&(t(c,[d.moduleId]),i[b]=g)}U=void 0;for(var r,u=[],C=0;C<c.length;C++){var G=c[C],y=__webpack_require__.c[G];y&&(y.hot._selfAccepted||y.hot._main)&&i[G]!==g&&!y.hot._selfInvalidated&&u.push({module:G,require:y.hot._requireSelf,errorHandler:y.hot._selfAccepted})}return{dispose:function(){var Q;F.forEach((function(Q){delete n[Q]})),F=void 0;for(var U,B=c.slice();B.length>0;){var e=B.pop(),s=__webpack_require__.c[e];if(s){var t={},i=s.hot._disposeHandlers;for(C=0;C<i.length;C++)i[C].call(null,t);for(__webpack_require__.hmrD[e]=t,s.hot.active=!1,delete __webpack_require__.c[e],delete l[e],C=0;C<s.children.length;C++){var g=__webpack_require__.c[s.children[C]];g&&(Q=g.parents.indexOf(e))>=0&&g.parents.splice(Q,1)}}}for(var b in l)if(__webpack_require__.o(l,b)&&(s=__webpack_require__.c[b]))for(r=l[b],C=0;C<r.length;C++)U=r[C],(Q=s.children.indexOf(U))>=0&&s.children.splice(Q,1)},apply:function(Q){for(var U in i)__webpack_require__.o(i,U)&&(__webpack_require__.m[U]=i[U]);for(var F=0;F<B.length;F++)B[F](__webpack_require__);for(var n in l)if(__webpack_require__.o(l,n)){var s=__webpack_require__.c[n];if(s){r=l[n];for(var t=[],g=[],b=[],d=0;d<r.length;d++){var I=r[d],x=s.hot._acceptedDependencies[I],a=s.hot._acceptedErrorHandlers[I];if(x){if(-1!==t.indexOf(x))continue;t.push(x),g.push(a),b.push(I)}}for(var o=0;o<t.length;o++)try{t[o].call(null,r)}catch(U){if("function"==typeof g[o])try{g[o](U,{moduleId:n,dependencyId:b[o]})}catch(F){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:n,dependencyId:b[o],error:F,originalError:U}),e.ignoreErrored||(Q(F),Q(U))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:n,dependencyId:b[o],error:U}),e.ignoreErrored||Q(U)}}}for(var L=0;L<u.length;L++){var C=u[L],G=C.module;try{C.require(G)}catch(U){if("function"==typeof C.errorHandler)try{C.errorHandler(U,{moduleId:G,module:__webpack_require__.c[G]})}catch(F){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:G,error:F,originalError:U}),e.ignoreErrored||(Q(F),Q(U))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:G,error:U}),e.ignoreErrored||Q(U)}}return c}}}self.webpackHotUpdate_panzoom_panzoom=(Q,F,n)=>{for(var s in F)__webpack_require__.o(F,s)&&(U[s]=F[s]);n&&B.push(n),e[Q]&&(e[Q](),e[Q]=void 0)},__webpack_require__.hmrI.jsonp=function(Q,n){U||(U={},B=[],F=[],n.push(t)),__webpack_require__.o(U,Q)||(U[Q]=__webpack_require__.m[Q])},__webpack_require__.hmrC.jsonp=function(e,l,c,i,g,b){g.push(t),Q={},F=l,U=c.reduce((function(Q,U){return Q[U]=!1,Q}),{}),B=[],e.forEach((function(U){__webpack_require__.o(n,U)&&void 0!==n[U]&&(i.push(s(U)),Q[U]=!0)})),__webpack_require__.f&&(__webpack_require__.f.jsonpHmr=function(U,F){Q&&!__webpack_require__.o(Q,U)&&__webpack_require__.o(n,U)&&void 0!==n[U]&&(F.push(s(U)),Q[U]=!0)})},__webpack_require__.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(__webpack_require__.p+__webpack_require__.hmrF()).then((Q=>{if(404!==Q.status){if(!Q.ok)throw new Error("Failed to fetch update manifest "+Q.statusText);return Q.json()}}))}})();var __webpack_exports__=__webpack_require__(634)})();;/*!
  * vue-router v4.0.5
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
var VueRouter = (function (exports, vue) {
  'use strict';

  const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
  const PolySymbol = (name) => 
  // vr = vue router
  hasSymbol
      ? Symbol('[vue-router]: ' + name )
      : ('[vue-router]: ' ) + name;
  // rvlm = Router View Location Matched
  /**
   * RouteRecord being rendered by the closest ancestor Router View. Used for
   * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
   * Location Matched
   *
   * @internal
   */
  const matchedRouteKey = /*#__PURE__*/ PolySymbol('router view location matched' );
  /**
   * Allows overriding the router view depth to control which component in
   * `matched` is rendered. rvd stands for Router View Depth
   *
   * @internal
   */
  const viewDepthKey = /*#__PURE__*/ PolySymbol('router view depth' );
  /**
   * Allows overriding the router instance returned by `useRouter` in tests. r
   * stands for router
   *
   * @internal
   */
  const routerKey = /*#__PURE__*/ PolySymbol('router' );
  /**
   * Allows overriding the current route returned by `useRoute` in tests. rl
   * stands for route location
   *
   * @internal
   */
  const routeLocationKey = /*#__PURE__*/ PolySymbol('route location' );
  /**
   * Allows overriding the current route used by router-view. Internally this is
   * used when the `route` prop is passed.
   *
   * @internal
   */
  const routerViewLocationKey = /*#__PURE__*/ PolySymbol('router view location' );

  const isBrowser = typeof window !== 'undefined';

  function isESModule(obj) {
      return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
      const newParams = {};
      for (const key in params) {
          const value = params[key];
          newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
      }
      return newParams;
  }
  let noop = () => { };

  function warn(msg) {
      // avoid using ...args as it breaks in older Edge builds
      const args = Array.from(arguments).slice(1);
      console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
  }

  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, '');
  /**
   * Transforms an URI into a normalized history location
   *
   * @param parseQuery
   * @param location - URI to normalize
   * @param currentLocation - current absolute location. Allows resolving relative
   * paths. Must start with `/`. Defaults to `/`
   * @returns a normalized history location
   */
  function parseURL(parseQuery, location, currentLocation = '/') {
      let path, query = {}, searchString = '', hash = '';
      // Could use URL and URLSearchParams but IE 11 doesn't support it
      const searchPos = location.indexOf('?');
      const hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);
      if (searchPos > -1) {
          path = location.slice(0, searchPos);
          searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
          query = parseQuery(searchString);
      }
      if (hashPos > -1) {
          path = path || location.slice(0, hashPos);
          // keep the # character
          hash = location.slice(hashPos, location.length);
      }
      // no search and no query
      path = resolveRelativePath(path != null ? path : location, currentLocation);
      // empty path means a relative query or hash `?foo=f`, `#thing`
      return {
          fullPath: path + (searchString && '?') + searchString + hash,
          path,
          query,
          hash,
      };
  }
  /**
   * Stringifies a URL object
   *
   * @param stringifyQuery
   * @param location
   */
  function stringifyURL(stringifyQuery, location) {
      let query = location.query ? stringifyQuery(location.query) : '';
      return location.path + (query && '?') + query + (location.hash || '');
  }
  /**
   * Strips off the base from the beginning of a location.pathname in a non
   * case-sensitive way.
   *
   * @param pathname - location.pathname
   * @param base - base to strip off
   */
  function stripBase(pathname, base) {
      // no base or base is not found at the beginning
      if (!base || pathname.toLowerCase().indexOf(base.toLowerCase()))
          return pathname;
      return pathname.slice(base.length) || '/';
  }
  /**
   * Checks if two RouteLocation are equal. This means that both locations are
   * pointing towards the same {@link RouteRecord} and that all `params`, `query`
   * parameters and `hash` are the same
   *
   * @param a - first {@link RouteLocation}
   * @param b - second {@link RouteLocation}
   */
  function isSameRouteLocation(stringifyQuery, a, b) {
      let aLastIndex = a.matched.length - 1;
      let bLastIndex = b.matched.length - 1;
      return (aLastIndex > -1 &&
          aLastIndex === bLastIndex &&
          isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) &&
          isSameRouteLocationParams(a.params, b.params) &&
          stringifyQuery(a.query) === stringifyQuery(b.query) &&
          a.hash === b.hash);
  }
  /**
   * Check if two `RouteRecords` are equal. Takes into account aliases: they are
   * considered equal to the `RouteRecord` they are aliasing.
   *
   * @param a - first {@link RouteRecord}
   * @param b - second {@link RouteRecord}
   */
  function isSameRouteRecord(a, b) {
      // since the original record has an undefined value for aliasOf
      // but all aliases point to the original record, this will always compare
      // the original record
      return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
      if (Object.keys(a).length !== Object.keys(b).length)
          return false;
      for (let key in a) {
          if (!isSameRouteLocationParamsValue(a[key], b[key]))
              return false;
      }
      return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
      return Array.isArray(a)
          ? isEquivalentArray(a, b)
          : Array.isArray(b)
              ? isEquivalentArray(b, a)
              : a === b;
  }
  /**
   * Check if two arrays are the same or if an array with one single entry is the
   * same as another primitive value. Used to check query and parameters
   *
   * @param a - array of values
   * @param b - array of values or a single value
   */
  function isEquivalentArray(a, b) {
      return Array.isArray(b)
          ? a.length === b.length && a.every((value, i) => value === b[i])
          : a.length === 1 && a[0] === b;
  }
  /**
   * Resolves a relative path that starts with `.`.
   *
   * @param to - path location we are resolving
   * @param from - currentLocation.path, should start with `/`
   */
  function resolveRelativePath(to, from) {
      if (to.startsWith('/'))
          return to;
      if (!from.startsWith('/')) {
          warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
          return to;
      }
      if (!to)
          return from;
      const fromSegments = from.split('/');
      const toSegments = to.split('/');
      let position = fromSegments.length - 1;
      let toPosition;
      let segment;
      for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
          segment = toSegments[toPosition];
          // can't go below zero
          if (position === 1 || segment === '.')
              continue;
          if (segment === '..')
              position--;
          // found something that is not relative path
          else
              break;
      }
      return (fromSegments.slice(0, position).join('/') +
          '/' +
          toSegments
              .slice(toPosition - (toPosition === toSegments.length ? 1 : 0))
              .join('/'));
  }

  var NavigationType;
  (function (NavigationType) {
      NavigationType["pop"] = "pop";
      NavigationType["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function (NavigationDirection) {
      NavigationDirection["back"] = "back";
      NavigationDirection["forward"] = "forward";
      NavigationDirection["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  /**
   * Starting location for Histories
   */
  const START = '';
  // Generic utils
  /**
   * Normalizes a base by removing any trailing slash and reading the base tag if
   * present.
   *
   * @param base - base to normalize
   */
  function normalizeBase(base) {
      if (!base) {
          if (isBrowser) {
              // respect <base> tag
              const baseEl = document.querySelector('base');
              base = (baseEl && baseEl.getAttribute('href')) || '/';
              // strip full URL origin
              base = base.replace(/^\w+:\/\/[^\/]+/, '');
          }
          else {
              base = '/';
          }
      }
      // ensure leading slash when it was removed by the regex above avoid leading
      // slash with hash because the file could be read from the disk like file://
      // and the leading slash would cause problems
      if (base[0] !== '/' && base[0] !== '#')
          base = '/' + base;
      // remove the trailing slash so all other method can just do `base + fullPath`
      // to build an href
      return removeTrailingSlash(base);
  }
  // remove any character before the hash
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location) {
      return base.replace(BEFORE_HASH_RE, '#') + location;
  }

  function getElementPosition(el, offset) {
      const docRect = document.documentElement.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      return {
          behavior: offset.behavior,
          left: elRect.left - docRect.left - (offset.left || 0),
          top: elRect.top - docRect.top - (offset.top || 0),
      };
  }
  const computeScrollPosition = () => ({
      left: window.pageXOffset,
      top: window.pageYOffset,
  });
  function scrollToPosition(position) {
      let scrollToOptions;
      if ('el' in position) {
          let positionEl = position.el;
          const isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
          /**
           * `id`s can accept pretty much any characters, including CSS combinators
           * like `>` or `~`. It's still possible to retrieve elements using
           * `document.getElementById('~')` but it needs to be escaped when using
           * `document.querySelector('#\\~')` for it to be valid. The only
           * requirements for `id`s are them to be unique on the page and to not be
           * empty (`id=""`). Because of that, when passing an id selector, it should
           * be properly escaped for it to work with `querySelector`. We could check
           * for the id selector to be simple (no CSS combinators `+ >~`) but that
           * would make things inconsistent since they are valid characters for an
           * `id` but would need to be escaped when using `querySelector`, breaking
           * their usage and ending up in no selector returned. Selectors need to be
           * escaped:
           *
           * - `#1-thing` becomes `#\31 -thing`
           * - `#with~symbols` becomes `#with\\~symbols`
           *
           * - More information about  the topic can be found at
           *   https://mathiasbynens.be/notes/html5-id-class.
           * - Practical example: https://mathiasbynens.be/demo/html5-id
           */
          if (typeof position.el === 'string') {
              if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
                  try {
                      let foundEl = document.querySelector(position.el);
                      if (isIdSelector && foundEl) {
                          warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
                          // return to avoid other warnings
                          return;
                      }
                  }
                  catch (err) {
                      warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
                      // return to avoid other warnings
                      return;
                  }
              }
          }
          const el = typeof positionEl === 'string'
              ? isIdSelector
                  ? document.getElementById(positionEl.slice(1))
                  : document.querySelector(positionEl)
              : positionEl;
          if (!el) {
              warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
              return;
          }
          scrollToOptions = getElementPosition(el, position);
      }
      else {
          scrollToOptions = position;
      }
      if ('scrollBehavior' in document.documentElement.style)
          window.scrollTo(scrollToOptions);
      else {
          window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
      }
  }
  function getScrollKey(path, delta) {
      const position = history.state ? history.state.position - delta : -1;
      return position + path;
  }
  const scrollPositions = new Map();
  function saveScrollPosition(key, scrollPosition) {
      scrollPositions.set(key, scrollPosition);
  }
  function getSavedScrollPosition(key) {
      const scroll = scrollPositions.get(key);
      // consume it so it's not used again
      scrollPositions.delete(key);
      return scroll;
  }
  // TODO: RFC about how to save scroll position
  /**
   * ScrollBehavior instance used by the router to compute and restore the scroll
   * position when navigating.
   */
  // export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
  //   // returns a scroll position that can be saved in history
  //   compute(): ScrollPositionEntry
  //   // can take an extended ScrollPositionEntry
  //   scroll(position: ScrollPosition): void
  // }
  // export const scrollHandler: ScrollHandler<ScrollPosition> = {
  //   compute: computeScroll,
  //   scroll: scrollToPosition,
  // }

  let createBaseLocation = () => location.protocol + '//' + location.host;
  /**
   * Creates a normalized history location from a window.location object
   * @param location -
   */
  function createCurrentLocation(base, location) {
      const { pathname, search, hash } = location;
      // allows hash based url
      const hashPos = base.indexOf('#');
      if (hashPos > -1) {
          // prepend the starting slash to hash so the url starts with /#
          let pathFromHash = hash.slice(1);
          if (pathFromHash[0] !== '/')
              pathFromHash = '/' + pathFromHash;
          return stripBase(pathFromHash, '');
      }
      const path = stripBase(pathname, base);
      return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
      let listeners = [];
      let teardowns = [];
      // TODO: should it be a stack? a Dict. Check if the popstate listener
      // can trigger twice
      let pauseState = null;
      const popStateHandler = ({ state, }) => {
          const to = createCurrentLocation(base, location);
          const from = currentLocation.value;
          const fromState = historyState.value;
          let delta = 0;
          if (state) {
              currentLocation.value = to;
              historyState.value = state;
              // ignore the popstate and reset the pauseState
              if (pauseState && pauseState === from) {
                  pauseState = null;
                  return;
              }
              delta = fromState ? state.position - fromState.position : 0;
          }
          else {
              replace(to);
          }
          // console.log({ deltaFromCurrent })
          // Here we could also revert the navigation by calling history.go(-delta)
          // this listener will have to be adapted to not trigger again and to wait for the url
          // to be updated before triggering the listeners. Some kind of validation function would also
          // need to be passed to the listeners so the navigation can be accepted
          // call all listeners
          listeners.forEach(listener => {
              listener(currentLocation.value, from, {
                  delta,
                  type: NavigationType.pop,
                  direction: delta
                      ? delta > 0
                          ? NavigationDirection.forward
                          : NavigationDirection.back
                      : NavigationDirection.unknown,
              });
          });
      };
      function pauseListeners() {
          pauseState = currentLocation.value;
      }
      function listen(callback) {
          // setup the listener and prepare teardown callbacks
          listeners.push(callback);
          const teardown = () => {
              const index = listeners.indexOf(callback);
              if (index > -1)
                  listeners.splice(index, 1);
          };
          teardowns.push(teardown);
          return teardown;
      }
      function beforeUnloadListener() {
          const { history } = window;
          if (!history.state)
              return;
          history.replaceState(assign({}, history.state, { scroll: computeScrollPosition() }), '');
      }
      function destroy() {
          for (const teardown of teardowns)
              teardown();
          teardowns = [];
          window.removeEventListener('popstate', popStateHandler);
          window.removeEventListener('beforeunload', beforeUnloadListener);
      }
      // setup the listeners and prepare teardown callbacks
      window.addEventListener('popstate', popStateHandler);
      window.addEventListener('beforeunload', beforeUnloadListener);
      return {
          pauseListeners,
          listen,
          destroy,
      };
  }
  /**
   * Creates a state object
   */
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
      return {
          back,
          current,
          forward,
          replaced,
          position: window.history.length,
          scroll: computeScroll ? computeScrollPosition() : null,
      };
  }
  function useHistoryStateNavigation(base) {
      const { history, location } = window;
      // private variables
      let currentLocation = {
          value: createCurrentLocation(base, location),
      };
      let historyState = { value: history.state };
      // build current history entry as this is a fresh navigation
      if (!historyState.value) {
          changeLocation(currentLocation.value, {
              back: null,
              current: currentLocation.value,
              forward: null,
              // the length is off by one, we need to decrease it
              position: history.length - 1,
              replaced: true,
              // don't add a scroll as the user may have an anchor and we want
              // scrollBehavior to be triggered without a saved position
              scroll: null,
          }, true);
      }
      function changeLocation(to, state, replace) {
          /**
           * if a base tag is provided and we are on a normal domain, we have to
           * respect the provided `base` attribute because pushState() will use it and
           * potentially erase anything before the `#` like at
           * https://github.com/vuejs/vue-router-next/issues/685 where a base of
           * `/folder/#` but a base of `/` would erase the `/folder/` section. If
           * there is no host, the `<base>` tag makes no sense and if there isn't a
           * base tag we can just use everything after the `#`.
           */
          const hashIndex = base.indexOf('#');
          const url = hashIndex > -1
              ? (location.host && document.querySelector('base')
                  ? base
                  : base.slice(hashIndex)) + to
              : createBaseLocation() + base + to;
          try {
              // BROWSER QUIRK
              // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
              history[replace ? 'replaceState' : 'pushState'](state, '', url);
              historyState.value = state;
          }
          catch (err) {
              {
                  warn('Error with push/replace State', err);
              }
              // Force the navigation, this also resets the call count
              location[replace ? 'replace' : 'assign'](url);
          }
      }
      function replace(to, data) {
          const state = assign({}, history.state, buildState(historyState.value.back, 
          // keep back and forward entries but override current position
          to, historyState.value.forward, true), data, { position: historyState.value.position });
          changeLocation(to, state, true);
          currentLocation.value = to;
      }
      function push(to, data) {
          // Add to current entry the information of where we are going
          // as well as saving the current position
          const currentState = assign({}, 
          // use current history state to gracefully handle a wrong call to
          // history.replaceState
          // https://github.com/vuejs/vue-router-next/issues/366
          historyState.value, history.state, {
              forward: to,
              scroll: computeScrollPosition(),
          });
          if (!history.state) {
              warn(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n` +
                  `history.replaceState(history.state, '', url)\n\n` +
                  `You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`);
          }
          changeLocation(currentState.current, currentState, true);
          const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
          changeLocation(to, state, false);
          currentLocation.value = to;
      }
      return {
          location: currentLocation,
          state: historyState,
          push,
          replace,
      };
  }
  /**
   * Creates an HTML5 history. Most common history for single page applications.
   *
   * @param base -
   */
  function createWebHistory(base) {
      base = normalizeBase(base);
      const historyNavigation = useHistoryStateNavigation(base);
      const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
      function go(delta, triggerListeners = true) {
          if (!triggerListeners)
              historyListeners.pauseListeners();
          history.go(delta);
      }
      const routerHistory = assign({
          // it's overridden right after
          location: '',
          base,
          go,
          createHref: createHref.bind(null, base),
      }, historyNavigation, historyListeners);
      Object.defineProperty(routerHistory, 'location', {
          get: () => historyNavigation.location.value,
      });
      Object.defineProperty(routerHistory, 'state', {
          get: () => historyNavigation.state.value,
      });
      return routerHistory;
  }

  /**
   * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
   * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
   *
   * @param base - Base applied to all urls, defaults to '/'
   * @returns a history object that can be passed to the router constructor
   */
  function createMemoryHistory(base = '') {
      let listeners = [];
      let queue = [START];
      let position = 0;
      function setLocation(location) {
          position++;
          if (position === queue.length) {
              // we are at the end, we can simply append a new entry
              queue.push(location);
          }
          else {
              // we are in the middle, we remove everything from here in the queue
              queue.splice(position);
              queue.push(location);
          }
      }
      function triggerListeners(to, from, { direction, delta }) {
          const info = {
              direction,
              delta,
              type: NavigationType.pop,
          };
          for (let callback of listeners) {
              callback(to, from, info);
          }
      }
      const routerHistory = {
          // rewritten by Object.defineProperty
          location: START,
          state: {},
          base,
          createHref: createHref.bind(null, base),
          replace(to) {
              // remove current entry and decrement position
              queue.splice(position--, 1);
              setLocation(to);
          },
          push(to, data) {
              setLocation(to);
          },
          listen(callback) {
              listeners.push(callback);
              return () => {
                  const index = listeners.indexOf(callback);
                  if (index > -1)
                      listeners.splice(index, 1);
              };
          },
          destroy() {
              listeners = [];
          },
          go(delta, shouldTrigger = true) {
              const from = this.location;
              const direction = 
              // we are considering delta === 0 going forward, but in abstract mode
              // using 0 for the delta doesn't make sense like it does in html5 where
              // it reloads the page
              delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
              position = Math.max(0, Math.min(position + delta, queue.length - 1));
              if (shouldTrigger) {
                  triggerListeners(this.location, from, {
                      direction,
                      delta,
                  });
              }
          },
      };
      Object.defineProperty(routerHistory, 'location', {
          get: () => queue[position],
      });
      return routerHistory;
  }

  /**
   * Creates a hash history. Useful for web applications with no host (e.g.
   * `file://`) or when configuring a server to handle any URL is not possible.
   *
   * @param base - optional base to provide. Defaults to `location.pathname +
   * location.search` If there is a `<base>` tag in the `head`, its value will be
   * ignored in favor of this parameter **but note it affects all the
   * history.pushState() calls**, meaning that if you use a `<base>` tag, it's
   * `href` value **has to match this parameter** (ignoring anything after the
   * `#`).
   *
   * @example
   * ```js
   * // at https://example.com/folder
   * createWebHashHistory() // gives a url of `https://example.com/folder#`
   * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
   * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
   * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
   * // you should avoid doing this because it changes the original url and breaks copying urls
   * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
   *
   * // at file:///usr/etc/folder/index.html
   * // for locations with no `host`, the base is ignored
   * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
   * ```
   */
  function createWebHashHistory(base) {
      // Make sure this implementation is fine in terms of encoding, specially for IE11
      // for `file://`, directly use the pathname and ignore the base
      // location.pathname contains an initial `/` even at the root: `https://example.com`
      base = location.host ? base || location.pathname + location.search : '';
      // allow the user to provide a `#` in the middle: `/base/#/app`
      if (base.indexOf('#') < 0)
          base += '#';
      if (!base.endsWith('#/') && !base.endsWith('#')) {
          warn(`A hash base must end with a "#":\n"${base}" should be "${base.replace(/#.*$/, '#')}".`);
      }
      return createWebHistory(base);
  }

  function isRouteLocation(route) {
      return typeof route === 'string' || (route && typeof route === 'object');
  }
  function isRouteName(name) {
      return typeof name === 'string' || typeof name === 'symbol';
  }

  /**
   * Initial route location where the router is. Can be used in navigation guards
   * to differentiate the initial navigation.
   *
   * @example
   * ```js
   * import { START_LOCATION } from 'vue-router'
   *
   * router.beforeEach((to, from) => {
   *   if (from === START_LOCATION) {
   *     // initial navigation
   *   }
   * })
   * ```
   */
  const START_LOCATION_NORMALIZED = {
      path: '/',
      name: undefined,
      params: {},
      query: {},
      hash: '',
      fullPath: '/',
      matched: [],
      meta: {},
      redirectedFrom: undefined,
  };

  const NavigationFailureSymbol = /*#__PURE__*/ PolySymbol('navigation failure' );
  /**
   * Enumeration with all possible types for navigation failures. Can be passed to
   * {@link isNavigationFailure} to check for specific failures.
   */
  exports.NavigationFailureType = void 0;
  (function (NavigationFailureType) {
      /**
       * An aborted navigation is a navigation that failed because a navigation
       * guard returned `false` or called `next(false)`
       */
      NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
      /**
       * A cancelled navigation is a navigation that failed because a more recent
       * navigation finished started (not necessarily finished).
       */
      NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
      /**
       * A duplicated navigation is a navigation that failed because it was
       * initiated while already being at the exact same location.
       */
      NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  // DEV only debug messages
  const ErrorTypeMessages = {
      [1 /* MATCHER_NOT_FOUND */]({ location, currentLocation }) {
          return `No match for\n ${JSON.stringify(location)}${currentLocation
            ? '\nwhile being at\n' + JSON.stringify(currentLocation)
            : ''}`;
      },
      [2 /* NAVIGATION_GUARD_REDIRECT */]({ from, to, }) {
          return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
      },
      [4 /* NAVIGATION_ABORTED */]({ from, to }) {
          return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
      },
      [8 /* NAVIGATION_CANCELLED */]({ from, to }) {
          return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
      },
      [16 /* NAVIGATION_DUPLICATED */]({ from, to }) {
          return `Avoided redundant navigation to current location: "${from.fullPath}".`;
      },
  };
  function createRouterError(type, params) {
      {
          return assign(new Error(ErrorTypeMessages[type](params)), {
              type,
              [NavigationFailureSymbol]: true,
          }, params);
      }
  }
  function isNavigationFailure(error, type) {
      return (error instanceof Error &&
          NavigationFailureSymbol in error &&
          (type == null || !!(error.type & type)));
  }
  const propertiesToLog = ['params', 'query', 'hash'];
  function stringifyRoute(to) {
      if (typeof to === 'string')
          return to;
      if ('path' in to)
          return to.path;
      const location = {};
      for (const key of propertiesToLog) {
          if (key in to)
              location[key] = to[key];
      }
      return JSON.stringify(location, null, 2);
  }

  // default pattern for a param: non greedy everything but /
  const BASE_PARAM_PATTERN = '[^/]+?';
  const BASE_PATH_PARSER_OPTIONS = {
      sensitive: false,
      strict: false,
      start: true,
      end: true,
  };
  // Special Regex characters that must be escaped in static tokens
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  /**
   * Creates a path parser from an array of Segments (a segment is an array of Tokens)
   *
   * @param segments - array of segments returned by tokenizePath
   * @param extraOptions - optional options for the regexp
   * @returns a PathParser
   */
  function tokensToParser(segments, extraOptions) {
      const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
      // the amount of scores is the same as the length of segments except for the root segment "/"
      let score = [];
      // the regexp as a string
      let pattern = options.start ? '^' : '';
      // extracted keys
      const keys = [];
      for (const segment of segments) {
          // the root segment needs special treatment
          const segmentScores = segment.length ? [] : [90 /* Root */];
          // allow trailing slash
          if (options.strict && !segment.length)
              pattern += '/';
          for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
              const token = segment[tokenIndex];
              // resets the score if we are inside a sub segment /:a-other-:b
              let subSegmentScore = 40 /* Segment */ +
                  (options.sensitive ? 0.25 /* BonusCaseSensitive */ : 0);
              if (token.type === 0 /* Static */) {
                  // prepend the slash if we are starting a new segment
                  if (!tokenIndex)
                      pattern += '/';
                  pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
                  subSegmentScore += 40 /* Static */;
              }
              else if (token.type === 1 /* Param */) {
                  const { value, repeatable, optional, regexp } = token;
                  keys.push({
                      name: value,
                      repeatable,
                      optional,
                  });
                  const re = regexp ? regexp : BASE_PARAM_PATTERN;
                  // the user provided a custom regexp /:id(\\d+)
                  if (re !== BASE_PARAM_PATTERN) {
                      subSegmentScore += 10 /* BonusCustomRegExp */;
                      // make sure the regexp is valid before using it
                      try {
                          new RegExp(`(${re})`);
                      }
                      catch (err) {
                          throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` +
                              err.message);
                      }
                  }
                  // when we repeat we must take care of the repeating leading slash
                  let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                  // prepend the slash if we are starting a new segment
                  if (!tokenIndex)
                      subPattern =
                          // avoid an optional / if there are more segments e.g. /:p?-static
                          // or /:p?-:p2
                          optional && segment.length < 2
                              ? `(?:/${subPattern})`
                              : '/' + subPattern;
                  if (optional)
                      subPattern += '?';
                  pattern += subPattern;
                  subSegmentScore += 20 /* Dynamic */;
                  if (optional)
                      subSegmentScore += -8 /* BonusOptional */;
                  if (repeatable)
                      subSegmentScore += -20 /* BonusRepeatable */;
                  if (re === '.*')
                      subSegmentScore += -50 /* BonusWildcard */;
              }
              segmentScores.push(subSegmentScore);
          }
          // an empty array like /home/ -> [[{home}], []]
          // if (!segment.length) pattern += '/'
          score.push(segmentScores);
      }
      // only apply the strict bonus to the last score
      if (options.strict && options.end) {
          const i = score.length - 1;
          score[i][score[i].length - 1] += 0.7000000000000001 /* BonusStrict */;
      }
      // TODO: dev only warn double trailing slash
      if (!options.strict)
          pattern += '/?';
      if (options.end)
          pattern += '$';
      // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
      else if (options.strict)
          pattern += '(?:/|$)';
      const re = new RegExp(pattern, options.sensitive ? '' : 'i');
      function parse(path) {
          const match = path.match(re);
          const params = {};
          if (!match)
              return null;
          for (let i = 1; i < match.length; i++) {
              const value = match[i] || '';
              const key = keys[i - 1];
              params[key.name] = value && key.repeatable ? value.split('/') : value;
          }
          return params;
      }
      function stringify(params) {
          let path = '';
          // for optional parameters to allow to be empty
          let avoidDuplicatedSlash = false;
          for (const segment of segments) {
              if (!avoidDuplicatedSlash || !path.endsWith('/'))
                  path += '/';
              avoidDuplicatedSlash = false;
              for (const token of segment) {
                  if (token.type === 0 /* Static */) {
                      path += token.value;
                  }
                  else if (token.type === 1 /* Param */) {
                      const { value, repeatable, optional } = token;
                      const param = value in params ? params[value] : '';
                      if (Array.isArray(param) && !repeatable)
                          throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                      const text = Array.isArray(param) ? param.join('/') : param;
                      if (!text) {
                          if (optional) {
                              // if we have more than one optional param like /:a?-static we
                              // don't need to care about the optional param
                              if (segment.length < 2) {
                                  // remove the last slash as we could be at the end
                                  if (path.endsWith('/'))
                                      path = path.slice(0, -1);
                                  // do not append a slash on the next iteration
                                  else
                                      avoidDuplicatedSlash = true;
                              }
                          }
                          else
                              throw new Error(`Missing required param "${value}"`);
                      }
                      path += text;
                  }
              }
          }
          return path;
      }
      return {
          re,
          score,
          keys,
          parse,
          stringify,
      };
  }
  /**
   * Compares an array of numbers as used in PathParser.score and returns a
   * number. This function can be used to `sort` an array
   * @param a - first array of numbers
   * @param b - second array of numbers
   * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
   * should be sorted first
   */
  function compareScoreArray(a, b) {
      let i = 0;
      while (i < a.length && i < b.length) {
          const diff = b[i] - a[i];
          // only keep going if diff === 0
          if (diff)
              return diff;
          i++;
      }
      // if the last subsegment was Static, the shorter segments should be sorted first
      // otherwise sort the longest segment first
      if (a.length < b.length) {
          return a.length === 1 && a[0] === 40 /* Static */ + 40 /* Segment */
              ? -1
              : 1;
      }
      else if (a.length > b.length) {
          return b.length === 1 && b[0] === 40 /* Static */ + 40 /* Segment */
              ? 1
              : -1;
      }
      return 0;
  }
  /**
   * Compare function that can be used with `sort` to sort an array of PathParser
   * @param a - first PathParser
   * @param b - second PathParser
   * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
   */
  function comparePathParserScore(a, b) {
      let i = 0;
      const aScore = a.score;
      const bScore = b.score;
      while (i < aScore.length && i < bScore.length) {
          const comp = compareScoreArray(aScore[i], bScore[i]);
          // do not return if both are equal
          if (comp)
              return comp;
          i++;
      }
      // if a and b share the same score entries but b has more, sort b first
      return bScore.length - aScore.length;
      // this is the ternary version
      // return aScore.length < bScore.length
      //   ? 1
      //   : aScore.length > bScore.length
      //   ? -1
      //   : 0
  }

  const ROOT_TOKEN = {
      type: 0 /* Static */,
      value: '',
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  // After some profiling, the cache seems to be unnecessary because tokenizePath
  // (the slowest part of adding a route) is very fast
  // const tokenCache = new Map<string, Token[][]>()
  function tokenizePath(path) {
      if (!path)
          return [[]];
      if (path === '/')
          return [[ROOT_TOKEN]];
      if (!path.startsWith('/')) {
          throw new Error(`Route paths should start with a "/": "${path}" should be "/${path}".`
              );
      }
      // if (tokenCache.has(path)) return tokenCache.get(path)!
      function crash(message) {
          throw new Error(`ERR (${state})/"${buffer}": ${message}`);
      }
      let state = 0 /* Static */;
      let previousState = state;
      const tokens = [];
      // the segment will always be valid because we get into the initial state
      // with the leading /
      let segment;
      function finalizeSegment() {
          if (segment)
              tokens.push(segment);
          segment = [];
      }
      // index on the path
      let i = 0;
      // char at index
      let char;
      // buffer of the value read
      let buffer = '';
      // custom regexp for a param
      let customRe = '';
      function consumeBuffer() {
          if (!buffer)
              return;
          if (state === 0 /* Static */) {
              segment.push({
                  type: 0 /* Static */,
                  value: buffer,
              });
          }
          else if (state === 1 /* Param */ ||
              state === 2 /* ParamRegExp */ ||
              state === 3 /* ParamRegExpEnd */) {
              if (segment.length > 1 && (char === '*' || char === '+'))
                  crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
              segment.push({
                  type: 1 /* Param */,
                  value: buffer,
                  regexp: customRe,
                  repeatable: char === '*' || char === '+',
                  optional: char === '*' || char === '?',
              });
          }
          else {
              crash('Invalid state to consume buffer');
          }
          buffer = '';
      }
      function addCharToBuffer() {
          buffer += char;
      }
      while (i < path.length) {
          char = path[i++];
          if (char === '\\' && state !== 2 /* ParamRegExp */) {
              previousState = state;
              state = 4 /* EscapeNext */;
              continue;
          }
          switch (state) {
              case 0 /* Static */:
                  if (char === '/') {
                      if (buffer) {
                          consumeBuffer();
                      }
                      finalizeSegment();
                  }
                  else if (char === ':') {
                      consumeBuffer();
                      state = 1 /* Param */;
                  }
                  else {
                      addCharToBuffer();
                  }
                  break;
              case 4 /* EscapeNext */:
                  addCharToBuffer();
                  state = previousState;
                  break;
              case 1 /* Param */:
                  if (char === '(') {
                      state = 2 /* ParamRegExp */;
                  }
                  else if (VALID_PARAM_RE.test(char)) {
                      addCharToBuffer();
                  }
                  else {
                      consumeBuffer();
                      state = 0 /* Static */;
                      // go back one character if we were not modifying
                      if (char !== '*' && char !== '?' && char !== '+')
                          i--;
                  }
                  break;
              case 2 /* ParamRegExp */:
                  // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
                  // it already works by escaping the closing )
                  // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
                  // is this really something people need since you can also write
                  // /prefix_:p()_suffix
                  if (char === ')') {
                      // handle the escaped )
                      if (customRe[customRe.length - 1] == '\\')
                          customRe = customRe.slice(0, -1) + char;
                      else
                          state = 3 /* ParamRegExpEnd */;
                  }
                  else {
                      customRe += char;
                  }
                  break;
              case 3 /* ParamRegExpEnd */:
                  // same as finalizing a param
                  consumeBuffer();
                  state = 0 /* Static */;
                  // go back one character if we were not modifying
                  if (char !== '*' && char !== '?' && char !== '+')
                      i--;
                  customRe = '';
                  break;
              default:
                  crash('Unknown state');
                  break;
          }
      }
      if (state === 2 /* ParamRegExp */)
          crash(`Unfinished custom RegExp for param "${buffer}"`);
      consumeBuffer();
      finalizeSegment();
      // tokenCache.set(path, tokens)
      return tokens;
  }

  function createRouteRecordMatcher(record, parent, options) {
      const parser = tokensToParser(tokenizePath(record.path), options);
      // warn against params with the same name
      {
          const existingKeys = new Set();
          for (const key of parser.keys) {
              if (existingKeys.has(key.name))
                  warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
              existingKeys.add(key.name);
          }
      }
      const matcher = assign(parser, {
          record,
          parent,
          // these needs to be populated by the parent
          children: [],
          alias: [],
      });
      if (parent) {
          // both are aliases or both are not aliases
          // we don't want to mix them because the order is used when
          // passing originalRecord in Matcher.addRoute
          if (!matcher.record.aliasOf === !parent.record.aliasOf)
              parent.children.push(matcher);
      }
      return matcher;
  }

  /**
   * Creates a Router Matcher.
   *
   * @internal
   * @param routes - array of initial routes
   * @param globalOptions - global route options
   */
  function createRouterMatcher(routes, globalOptions) {
      // normalized ordered array of matchers
      const matchers = [];
      const matcherMap = new Map();
      globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
      function getRecordMatcher(name) {
          return matcherMap.get(name);
      }
      function addRoute(record, parent, originalRecord) {
          // used later on to remove by name
          let isRootAdd = !originalRecord;
          let mainNormalizedRecord = normalizeRouteRecord(record);
          // we might be the child of an alias
          mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
          const options = mergeOptions(globalOptions, record);
          // generate an array of records to correctly handle aliases
          const normalizedRecords = [
              mainNormalizedRecord,
          ];
          if ('alias' in record) {
              const aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
              for (const alias of aliases) {
                  normalizedRecords.push(assign({}, mainNormalizedRecord, {
                      // this allows us to hold a copy of the `components` option
                      // so that async components cache is hold on the original record
                      components: originalRecord
                          ? originalRecord.record.components
                          : mainNormalizedRecord.components,
                      path: alias,
                      // we might be the child of an alias
                      aliasOf: originalRecord
                          ? originalRecord.record
                          : mainNormalizedRecord,
                      // the aliases are always of the same kind as the original since they
                      // are defined on the same record
                  }));
              }
          }
          let matcher;
          let originalMatcher;
          for (const normalizedRecord of normalizedRecords) {
              let { path } = normalizedRecord;
              // Build up the path for nested routes if the child isn't an absolute
              // route. Only add the / delimiter if the child path isn't empty and if the
              // parent path doesn't have a trailing slash
              if (parent && path[0] !== '/') {
                  let parentPath = parent.record.path;
                  let connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
                  normalizedRecord.path =
                      parent.record.path + (path && connectingSlash + path);
              }
              if (normalizedRecord.path === '*') {
                  throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\n' +
                      'See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
              }
              // create the object before hand so it can be passed to children
              matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
              if (parent && path[0] === '/')
                  checkMissingParamsInAbsolutePath(matcher, parent);
              // if we are an alias we must tell the original record that we exist
              // so we can be removed
              if (originalRecord) {
                  originalRecord.alias.push(matcher);
                  {
                      checkSameParams(originalRecord, matcher);
                  }
              }
              else {
                  // otherwise, the first record is the original and others are aliases
                  originalMatcher = originalMatcher || matcher;
                  if (originalMatcher !== matcher)
                      originalMatcher.alias.push(matcher);
                  // remove the route if named and only for the top record (avoid in nested calls)
                  // this works because the original record is the first one
                  if (isRootAdd && record.name && !isAliasRecord(matcher))
                      removeRoute(record.name);
              }
              if ('children' in mainNormalizedRecord) {
                  let children = mainNormalizedRecord.children;
                  for (let i = 0; i < children.length; i++) {
                      addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
                  }
              }
              // if there was no original record, then the first one was not an alias and all
              // other alias (if any) need to reference this record when adding children
              originalRecord = originalRecord || matcher;
              // TODO: add normalized records for more flexibility
              // if (parent && isAliasRecord(originalRecord)) {
              //   parent.children.push(originalRecord)
              // }
              insertMatcher(matcher);
          }
          return originalMatcher
              ? () => {
                  // since other matchers are aliases, they should be removed by the original matcher
                  removeRoute(originalMatcher);
              }
              : noop;
      }
      function removeRoute(matcherRef) {
          if (isRouteName(matcherRef)) {
              const matcher = matcherMap.get(matcherRef);
              if (matcher) {
                  matcherMap.delete(matcherRef);
                  matchers.splice(matchers.indexOf(matcher), 1);
                  matcher.children.forEach(removeRoute);
                  matcher.alias.forEach(removeRoute);
              }
          }
          else {
              let index = matchers.indexOf(matcherRef);
              if (index > -1) {
                  matchers.splice(index, 1);
                  if (matcherRef.record.name)
                      matcherMap.delete(matcherRef.record.name);
                  matcherRef.children.forEach(removeRoute);
                  matcherRef.alias.forEach(removeRoute);
              }
          }
      }
      function getRoutes() {
          return matchers;
      }
      function insertMatcher(matcher) {
          let i = 0;
          // console.log('i is', { i })
          while (i < matchers.length &&
              comparePathParserScore(matcher, matchers[i]) >= 0)
              i++;
          // console.log('END i is', { i })
          // while (i < matchers.length && matcher.score <= matchers[i].score) i++
          matchers.splice(i, 0, matcher);
          // only add the original record to the name map
          if (matcher.record.name && !isAliasRecord(matcher))
              matcherMap.set(matcher.record.name, matcher);
      }
      function resolve(location, currentLocation) {
          let matcher;
          let params = {};
          let path;
          let name;
          if ('name' in location && location.name) {
              matcher = matcherMap.get(location.name);
              if (!matcher)
                  throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
                      location,
                  });
              name = matcher.record.name;
              params = assign(
              // paramsFromLocation is a new object
              paramsFromLocation(currentLocation.params, 
              // only keep params that exist in the resolved location
              // TODO: only keep optional params coming from a parent record
              matcher.keys.filter(k => !k.optional).map(k => k.name)), location.params);
              // throws if cannot be stringified
              path = matcher.stringify(params);
          }
          else if ('path' in location) {
              // no need to resolve the path with the matcher as it was provided
              // this also allows the user to control the encoding
              path = location.path;
              if (!path.startsWith('/')) {
                  warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-router-next.`);
              }
              matcher = matchers.find(m => m.re.test(path));
              // matcher should have a value after the loop
              if (matcher) {
                  // TODO: dev warning of unused params if provided
                  // we know the matcher works because we tested the regexp
                  params = matcher.parse(path);
                  name = matcher.record.name;
              }
              // location is a relative path
          }
          else {
              // match by name or path of current route
              matcher = currentLocation.name
                  ? matcherMap.get(currentLocation.name)
                  : matchers.find(m => m.re.test(currentLocation.path));
              if (!matcher)
                  throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
                      location,
                      currentLocation,
                  });
              name = matcher.record.name;
              // since we are navigating to the same location, we don't need to pick the
              // params like when `name` is provided
              params = assign({}, currentLocation.params, location.params);
              path = matcher.stringify(params);
          }
          const matched = [];
          let parentMatcher = matcher;
          while (parentMatcher) {
              // reversed order so parents are at the beginning
              matched.unshift(parentMatcher.record);
              parentMatcher = parentMatcher.parent;
          }
          return {
              name,
              path,
              params,
              matched,
              meta: mergeMetaFields(matched),
          };
      }
      // add initial routes
      routes.forEach(route => addRoute(route));
      return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
      let newParams = {};
      for (let key of keys) {
          if (key in params)
              newParams[key] = params[key];
      }
      return newParams;
  }
  /**
   * Normalizes a RouteRecordRaw. Creates a copy
   *
   * @param record
   * @returns the normalized version
   */
  function normalizeRouteRecord(record) {
      return {
          path: record.path,
          redirect: record.redirect,
          name: record.name,
          meta: record.meta || {},
          aliasOf: undefined,
          beforeEnter: record.beforeEnter,
          props: normalizeRecordProps(record),
          children: record.children || [],
          instances: {},
          leaveGuards: new Set(),
          updateGuards: new Set(),
          enterCallbacks: {},
          components: 'components' in record
              ? record.components || {}
              : { default: record.component },
      };
  }
  /**
   * Normalize the optional `props` in a record to always be an object similar to
   * components. Also accept a boolean for components.
   * @param record
   */
  function normalizeRecordProps(record) {
      const propsObject = {};
      // props does not exist on redirect records but we can set false directly
      const props = record.props || false;
      if ('component' in record) {
          propsObject.default = props;
      }
      else {
          // NOTE: we could also allow a function to be applied to every component.
          // Would need user feedback for use cases
          for (let name in record.components)
              propsObject[name] = typeof props === 'boolean' ? props : props[name];
      }
      return propsObject;
  }
  /**
   * Checks if a record or any of its parent is an alias
   * @param record
   */
  function isAliasRecord(record) {
      while (record) {
          if (record.record.aliasOf)
              return true;
          record = record.parent;
      }
      return false;
  }
  /**
   * Merge meta fields of an array of records
   *
   * @param matched - array of matched records
   */
  function mergeMetaFields(matched) {
      return matched.reduce((meta, record) => assign(meta, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
      let options = {};
      for (let key in defaults) {
          options[key] =
              key in partialOptions ? partialOptions[key] : defaults[key];
      }
      return options;
  }
  function isSameParam(a, b) {
      return (a.name === b.name &&
          a.optional === b.optional &&
          a.repeatable === b.repeatable);
  }
  /**
   * Check if a path and its alias have the same required params
   *
   * @param a - original record
   * @param b - alias record
   */
  function checkSameParams(a, b) {
      for (let key of a.keys) {
          if (!key.optional && !b.keys.find(isSameParam.bind(null, key)))
              return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
      }
      for (let key of b.keys) {
          if (!key.optional && !a.keys.find(isSameParam.bind(null, key)))
              return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
      }
  }
  function checkMissingParamsInAbsolutePath(record, parent) {
      for (let key of parent.keys) {
          if (!record.keys.find(isSameParam.bind(null, key)))
              return warn(`Absolute path "${record.record.path}" should have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
      }
  }

  /**
   * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
   * < > `
   *
   * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
   * defines some extra characters to be encoded. Most browsers do not encode them
   * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
   * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
   * plus `-._~`. This extra safety should be applied to query by patching the
   * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
   * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
   * into a `/` if directly typed in. The _backtick_ (`````) should also be
   * encoded everywhere because some browsers like FF encode it when directly
   * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
   */
  // const EXTRA_RESERVED_RE = /[!'()*]/g
  // const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
  const HASH_RE = /#/g; // %23
  const AMPERSAND_RE = /&/g; // %26
  const SLASH_RE = /\//g; // %2F
  const EQUAL_RE = /=/g; // %3D
  const IM_RE = /\?/g; // %3F
  const PLUS_RE = /\+/g; // %2B
  /**
   * NOTE: It's not clear to me if we should encode the + symbol in queries, it
   * seems to be less flexible than not doing so and I can't find out the legacy
   * systems requiring this for regular requests like text/html. In the standard,
   * the encoding of the plus character is only mentioned for
   * application/x-www-form-urlencoded
   * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
   * leave the plus character as is in queries. To be more flexible, we allow the
   * plus character on the query but it can also be manually encoded by the user.
   *
   * Resources:
   * - https://url.spec.whatwg.org/#urlencoded-parsing
   * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
   */
  const ENC_BRACKET_OPEN_RE = /%5B/g; // [
  const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
  const ENC_CARET_RE = /%5E/g; // ^
  const ENC_BACKTICK_RE = /%60/g; // `
  const ENC_CURLY_OPEN_RE = /%7B/g; // {
  const ENC_PIPE_RE = /%7C/g; // |
  const ENC_CURLY_CLOSE_RE = /%7D/g; // }
  const ENC_SPACE_RE = /%20/g; // }
  /**
   * Encode characters that need to be encoded on the path, search and hash
   * sections of the URL.
   *
   * @internal
   * @param text - string to encode
   * @returns encoded string
   */
  function commonEncode(text) {
      return encodeURI('' + text)
          .replace(ENC_PIPE_RE, '|')
          .replace(ENC_BRACKET_OPEN_RE, '[')
          .replace(ENC_BRACKET_CLOSE_RE, ']');
  }
  /**
   * Encode characters that need to be encoded on the hash section of the URL.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodeHash(text) {
      return commonEncode(text)
          .replace(ENC_CURLY_OPEN_RE, '{')
          .replace(ENC_CURLY_CLOSE_RE, '}')
          .replace(ENC_CARET_RE, '^');
  }
  /**
   * Encode characters that need to be encoded query values on the query
   * section of the URL.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodeQueryValue(text) {
      return (commonEncode(text)
          // Encode the space as +, encode the + to differentiate it from the space
          .replace(PLUS_RE, '%2B')
          .replace(ENC_SPACE_RE, '+')
          .replace(HASH_RE, '%23')
          .replace(AMPERSAND_RE, '%26')
          .replace(ENC_BACKTICK_RE, '`')
          .replace(ENC_CURLY_OPEN_RE, '{')
          .replace(ENC_CURLY_CLOSE_RE, '}')
          .replace(ENC_CARET_RE, '^'));
  }
  /**
   * Like `encodeQueryValue` but also encodes the `=` character.
   *
   * @param text - string to encode
   */
  function encodeQueryKey(text) {
      return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
  }
  /**
   * Encode characters that need to be encoded on the path section of the URL.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodePath(text) {
      return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
  }
  /**
   * Encode characters that need to be encoded on the path section of the URL as a
   * param. This function encodes everything {@link encodePath} does plus the
   * slash (`/`) character.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodeParam(text) {
      return encodePath(text).replace(SLASH_RE, '%2F');
  }
  /**
   * Decode text using `decodeURIComponent`. Returns the original text if it
   * fails.
   *
   * @param text - string to decode
   * @returns decoded string
   */
  function decode(text) {
      try {
          return decodeURIComponent('' + text);
      }
      catch (err) {
          warn(`Error decoding "${text}". Using original value`);
      }
      return '' + text;
  }

  /**
   * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
   * version with the leading `?` and without Should work as URLSearchParams

   * @internal
   *
   * @param search - search string to parse
   * @returns a query object
   */
  function parseQuery(search) {
      const query = {};
      // avoid creating an object with an empty key and empty value
      // because of split('&')
      if (search === '' || search === '?')
          return query;
      const hasLeadingIM = search[0] === '?';
      const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
      for (let i = 0; i < searchParams.length; ++i) {
          // pre decode the + into space
          const searchParam = searchParams[i].replace(PLUS_RE, ' ');
          // allow the = character
          let eqPos = searchParam.indexOf('=');
          let key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
          let value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
          if (key in query) {
              // an extra variable for ts types
              let currentValue = query[key];
              if (!Array.isArray(currentValue)) {
                  currentValue = query[key] = [currentValue];
              }
              currentValue.push(value);
          }
          else {
              query[key] = value;
          }
      }
      return query;
  }
  /**
   * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
   * doesn't prepend a `?`
   *
   * @internal
   *
   * @param query - query object to stringify
   * @returns string version of the query without the leading `?`
   */
  function stringifyQuery(query) {
      let search = '';
      for (let key in query) {
          if (search.length)
              search += '&';
          const value = query[key];
          key = encodeQueryKey(key);
          if (value == null) {
              // only null adds the value
              if (value !== undefined)
                  search += key;
              continue;
          }
          // keep null values
          let values = Array.isArray(value)
              ? value.map(v => v && encodeQueryValue(v))
              : [value && encodeQueryValue(value)];
          for (let i = 0; i < values.length; i++) {
              // only append & with i > 0
              search += (i ? '&' : '') + key;
              if (values[i] != null)
                  search += ('=' + values[i]);
          }
      }
      return search;
  }
  /**
   * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
   * numbers into strings, removing keys with an undefined value and replacing
   * undefined with null in arrays
   *
   * @param query - query object to normalize
   * @returns a normalized query object
   */
  function normalizeQuery(query) {
      const normalizedQuery = {};
      for (let key in query) {
          let value = query[key];
          if (value !== undefined) {
              normalizedQuery[key] = Array.isArray(value)
                  ? value.map(v => (v == null ? null : '' + v))
                  : value == null
                      ? value
                      : '' + value;
          }
      }
      return normalizedQuery;
  }

  /**
   * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
   */
  function useCallbacks() {
      let handlers = [];
      function add(handler) {
          handlers.push(handler);
          return () => {
              const i = handlers.indexOf(handler);
              if (i > -1)
                  handlers.splice(i, 1);
          };
      }
      function reset() {
          handlers = [];
      }
      return {
          add,
          list: () => handlers,
          reset,
      };
  }

  function registerGuard(record, name, guard) {
      const removeFromList = () => {
          record[name].delete(guard);
      };
      vue.onUnmounted(removeFromList);
      vue.onDeactivated(removeFromList);
      vue.onActivated(() => {
          record[name].add(guard);
      });
      record[name].add(guard);
  }
  /**
   * Add a navigation guard that triggers whenever the component for the current
   * location is about to be left. Similar to {@link beforeRouteLeave} but can be
   * used in any component. The guard is removed when the component is unmounted.
   *
   * @param leaveGuard - {@link NavigationGuard}
   */
  function onBeforeRouteLeave(leaveGuard) {
      if (!vue.getCurrentInstance()) {
          warn('getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function');
          return;
      }
      const activeRecord = vue.inject(matchedRouteKey, {}).value;
      if (!activeRecord) {
          warn('No active route record was found. Are you missing a <router-view> component?');
          return;
      }
      registerGuard(activeRecord, 'leaveGuards', leaveGuard);
  }
  /**
   * Add a navigation guard that triggers whenever the current location is about
   * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
   * component. The guard is removed when the component is unmounted.
   *
   * @param updateGuard - {@link NavigationGuard}
   */
  function onBeforeRouteUpdate(updateGuard) {
      if (!vue.getCurrentInstance()) {
          warn('getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function');
          return;
      }
      const activeRecord = vue.inject(matchedRouteKey, {}).value;
      if (!activeRecord) {
          warn('No active route record was found. Are you missing a <router-view> component?');
          return;
      }
      registerGuard(activeRecord, 'updateGuards', updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
      // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
      const enterCallbackArray = record &&
          // name is defined if record is because of the function overload
          (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
      return () => new Promise((resolve, reject) => {
          const next = (valid) => {
              if (valid === false)
                  reject(createRouterError(4 /* NAVIGATION_ABORTED */, {
                      from,
                      to,
                  }));
              else if (valid instanceof Error) {
                  reject(valid);
              }
              else if (isRouteLocation(valid)) {
                  reject(createRouterError(2 /* NAVIGATION_GUARD_REDIRECT */, {
                      from: to,
                      to: valid,
                  }));
              }
              else {
                  if (enterCallbackArray &&
                      // since enterCallbackArray is truthy, both record and name also are
                      record.enterCallbacks[name] === enterCallbackArray &&
                      typeof valid === 'function')
                      enterCallbackArray.push(valid);
                  resolve();
              }
          };
          // wrapping with Promise.resolve allows it to work with both async and sync guards
          const guardReturn = guard.call(record && record.instances[name], to, from, canOnlyBeCalledOnce(next, to, from) );
          let guardCall = Promise.resolve(guardReturn);
          if (guard.length < 3)
              guardCall = guardCall.then(next);
          if (guard.length > 2) {
              const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ''}:\n${guard.toString()}\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
              if (typeof guardReturn === 'object' && 'then' in guardReturn) {
                  guardCall = guardCall.then(resolvedValue => {
                      // @ts-ignore: _called is added at canOnlyBeCalledOnce
                      if (!next._called) {
                          warn(message);
                          return Promise.reject(new Error('Invalid navigation guard'));
                      }
                      return resolvedValue;
                  });
                  // TODO: test me!
              }
              else if (guardReturn !== undefined) {
                  // @ts-ignore: _called is added at canOnlyBeCalledOnce
                  if (!next._called) {
                      warn(message);
                      reject(new Error('Invalid navigation guard'));
                      return;
                  }
              }
          }
          guardCall.catch(err => reject(err));
      });
  }
  function canOnlyBeCalledOnce(next, to, from) {
      let called = 0;
      return function () {
          if (called++ === 1)
              warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
          // @ts-ignore: we put it in the original one because it's easier to check
          next._called = true;
          if (called === 1)
              next.apply(null, arguments);
      };
  }
  function extractComponentsGuards(matched, guardType, to, from) {
      const guards = [];
      for (const record of matched) {
          for (const name in record.components) {
              let rawComponent = record.components[name];
              {
                  if (!rawComponent ||
                      (typeof rawComponent !== 'object' &&
                          typeof rawComponent !== 'function')) {
                      warn(`Component "${name}" in record with path "${record.path}" is not` +
                          ` a valid component. Received "${String(rawComponent)}".`);
                      // throw to ensure we stop here but warn to ensure the message isn't
                      // missed by the user
                      throw new Error('Invalid route component');
                  }
                  else if ('then' in rawComponent) {
                      // warn if user wrote import('/component.vue') instead of () =>
                      // import('./component.vue')
                      warn(`Component "${name}" in record with path "${record.path}" is a ` +
                          `Promise instead of a function that returns a Promise. Did you ` +
                          `write "import('./MyPage.vue')" instead of ` +
                          `"() => import('./MyPage.vue')" ? This will break in ` +
                          `production if not fixed.`);
                      let promise = rawComponent;
                      rawComponent = () => promise;
                  }
                  else if (rawComponent.__asyncLoader &&
                      // warn only once per component
                      !rawComponent.__warnedDefineAsync) {
                      rawComponent.__warnedDefineAsync = true;
                      warn(`Component "${name}" in record with path "${record.path}" is defined ` +
                          `using "defineAsyncComponent()". ` +
                          `Write "() => import('./MyPage.vue')" instead of ` +
                          `"defineAsyncComponent(() => import('./MyPage.vue'))".`);
                  }
              }
              // skip update and leave guards if the route component is not mounted
              if (guardType !== 'beforeRouteEnter' && !record.instances[name])
                  continue;
              if (isRouteComponent(rawComponent)) {
                  // __vccOpts is added by vue-class-component and contain the regular options
                  let options = rawComponent.__vccOpts || rawComponent;
                  const guard = options[guardType];
                  guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
              }
              else {
                  // start requesting the chunk already
                  let componentPromise = rawComponent();
                  if (!('catch' in componentPromise)) {
                      warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
                      componentPromise = Promise.resolve(componentPromise);
                  }
                  else {
                      // display the error if any
                      componentPromise = componentPromise.catch(console.error);
                  }
                  guards.push(() => componentPromise.then(resolved => {
                      if (!resolved)
                          return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
                      const resolvedComponent = isESModule(resolved)
                          ? resolved.default
                          : resolved;
                      // replace the function with the resolved component
                      record.components[name] = resolvedComponent;
                      // __vccOpts is added by vue-class-component and contain the regular options
                      let options = resolvedComponent.__vccOpts || resolvedComponent;
                      const guard = options[guardType];
                      return guard && guardToPromiseFn(guard, to, from, record, name)();
                  }));
              }
          }
      }
      return guards;
  }
  /**
   * Allows differentiating lazy components from functional components and vue-class-component
   * @param component
   */
  function isRouteComponent(component) {
      return (typeof component === 'object' ||
          'displayName' in component ||
          'props' in component ||
          '__vccOpts' in component);
  }

  // TODO: we could allow currentRoute as a prop to expose `isActive` and
  // `isExactActive` behavior should go through an RFC
  function useLink(props) {
      const router = vue.inject(routerKey);
      const currentRoute = vue.inject(routeLocationKey);
      const route = vue.computed(() => router.resolve(vue.unref(props.to)));
      const activeRecordIndex = vue.computed(() => {
          let { matched } = route.value;
          let { length } = matched;
          const routeMatched = matched[length - 1];
          let currentMatched = currentRoute.matched;
          if (!routeMatched || !currentMatched.length)
              return -1;
          let index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
          if (index > -1)
              return index;
          // possible parent record
          let parentRecordPath = getOriginalPath(matched[length - 2]);
          return (
          // we are dealing with nested routes
          length > 1 &&
              // if the parent and matched route have the same path, this link is
              // referring to the empty child. Or we currently are on a different
              // child of the same parent
              getOriginalPath(routeMatched) === parentRecordPath &&
              // avoid comparing the child with its parent
              currentMatched[currentMatched.length - 1].path !== parentRecordPath
              ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2]))
              : index);
      });
      const isActive = vue.computed(() => activeRecordIndex.value > -1 &&
          includesParams(currentRoute.params, route.value.params));
      const isExactActive = vue.computed(() => activeRecordIndex.value > -1 &&
          activeRecordIndex.value === currentRoute.matched.length - 1 &&
          isSameRouteLocationParams(currentRoute.params, route.value.params));
      function navigate(e = {}) {
          if (guardEvent(e))
              return router[vue.unref(props.replace) ? 'replace' : 'push'](vue.unref(props.to));
          return Promise.resolve();
      }
      return {
          route,
          href: vue.computed(() => route.value.href),
          isActive,
          isExactActive,
          navigate,
      };
  }
  const RouterLinkImpl = /*#__PURE__*/ vue.defineComponent({
      name: 'RouterLink',
      props: {
          to: {
              type: [String, Object],
              required: true,
          },
          replace: Boolean,
          activeClass: String,
          // inactiveClass: String,
          exactActiveClass: String,
          custom: Boolean,
          ariaCurrentValue: {
              type: String,
              default: 'page',
          },
      },
      setup(props, { slots, attrs }) {
          const link = vue.reactive(useLink(props));
          const { options } = vue.inject(routerKey);
          const elClass = vue.computed(() => ({
              [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
              // [getLinkClass(
              //   props.inactiveClass,
              //   options.linkInactiveClass,
              //   'router-link-inactive'
              // )]: !link.isExactActive,
              [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive,
          }));
          {
              const instance = vue.getCurrentInstance();
              vue.watchEffect(() => {
                  if (!instance)
                      return;
                  instance.__vrl_route = link.route;
              });
              vue.watchEffect(() => {
                  if (!instance)
                      return;
                  instance.__vrl_active = link.isActive;
                  instance.__vrl_exactActive = link.isExactActive;
              });
          }
          return () => {
              const children = slots.default && slots.default(link);
              return props.custom
                  ? children
                  : vue.h('a', assign({
                      'aria-current': link.isExactActive
                          ? props.ariaCurrentValue
                          : null,
                      onClick: link.navigate,
                      href: link.href,
                  }, attrs, {
                      class: elClass.value,
                  }), children);
          };
      },
  });
  // export the public type for h/tsx inference
  // also to avoid inline import() in generated d.ts files
  /**
   * Component to render a link that triggers a navigation on click.
   */
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
      // don't redirect with control keys
      if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
          return;
      // don't redirect when preventDefault called
      if (e.defaultPrevented)
          return;
      // don't redirect on right click
      if (e.button !== undefined && e.button !== 0)
          return;
      // don't redirect if `target="_blank"`
      // @ts-ignore getAttribute does exist
      if (e.currentTarget && e.currentTarget.getAttribute) {
          // @ts-ignore getAttribute exists
          const target = e.currentTarget.getAttribute('target');
          if (/\b_blank\b/i.test(target))
              return;
      }
      // this may be a Weex event which doesn't have this method
      if (e.preventDefault)
          e.preventDefault();
      return true;
  }
  function includesParams(outer, inner) {
      for (let key in inner) {
          let innerValue = inner[key];
          let outerValue = outer[key];
          if (typeof innerValue === 'string') {
              if (innerValue !== outerValue)
                  return false;
          }
          else {
              if (!Array.isArray(outerValue) ||
                  outerValue.length !== innerValue.length ||
                  innerValue.some((value, i) => value !== outerValue[i]))
                  return false;
          }
      }
      return true;
  }
  /**
   * Get the original path value of a record by following its aliasOf
   * @param record
   */
  function getOriginalPath(record) {
      return record ? (record.aliasOf ? record.aliasOf.path : record.path) : '';
  }
  /**
   * Utility class to get the active class based on defaults.
   * @param propClass
   * @param globalClass
   * @param defaultClass
   */
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null
      ? propClass
      : globalClass != null
          ? globalClass
          : defaultClass;

  const RouterViewImpl = /*#__PURE__*/ vue.defineComponent({
      name: 'RouterView',
      // #674 we manually inherit them
      inheritAttrs: false,
      props: {
          name: {
              type: String,
              default: 'default',
          },
          route: Object,
      },
      setup(props, { attrs, slots }) {
          warnDeprecatedUsage();
          const injectedRoute = vue.inject(routerViewLocationKey);
          const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
          const depth = vue.inject(viewDepthKey, 0);
          const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth]);
          vue.provide(viewDepthKey, depth + 1);
          vue.provide(matchedRouteKey, matchedRouteRef);
          vue.provide(routerViewLocationKey, routeToDisplay);
          const viewRef = vue.ref();
          // watch at the same time the component instance, the route record we are
          // rendering, and the name
          vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
              // copy reused instances
              if (to) {
                  // this will update the instance for new instances as well as reused
                  // instances when navigating to a new route
                  to.instances[name] = instance;
                  // the component instance is reused for a different route or name so
                  // we copy any saved update or leave guards. With async setup, the
                  // mounting component will mount before the matchedRoute changes,
                  // making instance === oldInstance, so we check if guards have been
                  // added before. This works because we remove guards when
                  // unmounting/deactivating components
                  if (from && from !== to && instance && instance === oldInstance) {
                      if (!to.leaveGuards.size) {
                          to.leaveGuards = from.leaveGuards;
                      }
                      if (!to.updateGuards.size) {
                          to.updateGuards = from.updateGuards;
                      }
                  }
              }
              // trigger beforeRouteEnter next callbacks
              if (instance &&
                  to &&
                  // if there is no instance but to and from are the same this might be
                  // the first visit
                  (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
                  (to.enterCallbacks[name] || []).forEach(callback => callback(instance));
              }
          }, { flush: 'post' });
          return () => {
              const route = routeToDisplay.value;
              const matchedRoute = matchedRouteRef.value;
              const ViewComponent = matchedRoute && matchedRoute.components[props.name];
              // we need the value at the time we render because when we unmount, we
              // navigated to a different location so the value is different
              const currentName = props.name;
              if (!ViewComponent) {
                  return normalizeSlot(slots.default, { Component: ViewComponent, route });
              }
              // props from route configuration
              const routePropsOption = matchedRoute.props[props.name];
              const routeProps = routePropsOption
                  ? routePropsOption === true
                      ? route.params
                      : typeof routePropsOption === 'function'
                          ? routePropsOption(route)
                          : routePropsOption
                  : null;
              const onVnodeUnmounted = vnode => {
                  // remove the instance reference to prevent leak
                  if (vnode.component.isUnmounted) {
                      matchedRoute.instances[currentName] = null;
                  }
              };
              const component = vue.h(ViewComponent, assign({}, routeProps, attrs, {
                  onVnodeUnmounted,
                  ref: viewRef,
              }));
              return (
              // pass the vnode to the slot as a prop.
              // h and <component :is="..."> both accept vnodes
              normalizeSlot(slots.default, { Component: component, route }) ||
                  component);
          };
      },
  });
  function normalizeSlot(slot, data) {
      if (!slot)
          return null;
      const slotContent = slot(data);
      return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  // export the public type for h/tsx inference
  // also to avoid inline import() in generated d.ts files
  /**
   * Component to display the current route the user is at.
   */
  const RouterView = RouterViewImpl;
  // warn against deprecated usage with <transition> & <keep-alive>
  // due to functional component being no longer eager in Vue 3
  function warnDeprecatedUsage() {
      const instance = vue.getCurrentInstance();
      const parentName = instance.parent && instance.parent.type.name;
      if (parentName &&
          (parentName === 'KeepAlive' || parentName.includes('Transition'))) {
          const comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
          warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n` +
              `Use slot props instead:\n\n` +
              `<router-view v-slot="{ Component }">\n` +
              `  <${comp}>\n` +
              `    <component :is="Component" />\n` +
              `  </${comp}>\n` +
              `</router-view>`);
      }
  }

  function getDevtoolsGlobalHook() {
      return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
      // @ts-ignore
      return typeof navigator !== 'undefined'
          ? window
          : typeof global !== 'undefined'
              ? global
              : {};
  }

  const HOOK_SETUP = 'devtools-plugin:setup';

  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
      const hook = getDevtoolsGlobalHook();
      if (hook) {
          hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
      }
      else {
          const target = getTarget();
          const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
          list.push({
              pluginDescriptor,
              setupFn
          });
      }
  }

  function formatRouteLocation(routeLocation, tooltip) {
      const copy = assign({}, routeLocation, {
          // remove variables that can contain vue instances
          matched: routeLocation.matched.map(matched => omit(matched, ['instances', 'children', 'aliasOf'])),
      });
      return {
          _custom: {
              type: null,
              readOnly: true,
              display: routeLocation.fullPath,
              tooltip,
              value: copy,
          },
      };
  }
  function formatDisplay(display) {
      return {
          _custom: {
              display,
          },
      };
  }
  // to support multiple router instances
  let routerId = 0;
  function addDevtools(app, router, matcher) {
      // Take over router.beforeEach and afterEach
      // make sure we are not registering the devtool twice
      if (router.__hasDevtools)
          return;
      router.__hasDevtools = true;
      // increment to support multiple router instances
      const id = routerId++;
      setupDevtoolsPlugin({
          id: 'org.vuejs.router' + (id ? '.' + id : ''),
          label: 'Vue Router',
          packageName: 'vue-router',
          homepage: 'https://next.router.vuejs.org/',
          logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
          componentStateTypes: ['Routing'],
          app,
      }, api => {
          // display state added by the router
          api.on.inspectComponent((payload, ctx) => {
              if (payload.instanceData) {
                  payload.instanceData.state.push({
                      type: 'Routing',
                      key: '$route',
                      editable: false,
                      value: formatRouteLocation(router.currentRoute.value, 'Current Route'),
                  });
              }
          });
          // mark router-link as active
          api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
              if (node.name === 'RouterLink') {
                  if (componentInstance.__vrl_route) {
                      node.tags.push({
                          label: componentInstance.__vrl_route.path,
                          textColor: 0,
                          backgroundColor: ORANGE_400,
                      });
                  }
                  if (componentInstance.__vrl_exactActive) {
                      node.tags.push({
                          label: 'exact',
                          textColor: 0,
                          backgroundColor: LIME_500,
                      });
                  }
                  if (componentInstance.__vrl_active) {
                      node.tags.push({
                          label: 'active',
                          textColor: 0,
                          backgroundColor: BLUE_600,
                      });
                  }
              }
          });
          vue.watch(router.currentRoute, () => {
              // refresh active state
              refreshRoutesView();
              api.notifyComponentUpdate();
              api.sendInspectorTree(routerInspectorId);
          });
          const navigationsLayerId = 'router:navigations:' + id;
          api.addTimelineLayer({
              id: navigationsLayerId,
              label: `Router${id ? ' ' + id : ''} Navigations`,
              color: 0x40a8c4,
          });
          // const errorsLayerId = 'router:errors'
          // api.addTimelineLayer({
          //   id: errorsLayerId,
          //   label: 'Router Errors',
          //   color: 0xea5455,
          // })
          router.onError(error => {
              api.addTimelineEvent({
                  layerId: navigationsLayerId,
                  event: {
                      title: 'Error',
                      subtitle: 'An uncaught error happened during navigation',
                      logType: 'error',
                      time: Date.now(),
                      data: { error },
                  },
              });
          });
          // attached to `meta` and used to group events
          let navigationId = 0;
          router.beforeEach((to, from) => {
              const data = {
                  guard: formatDisplay('beforeEach'),
                  from: formatRouteLocation(from, 'Current Location during this navigation'),
                  to: formatRouteLocation(to, 'Target location'),
              };
              // Used to group navigations together, hide from devtools
              Object.defineProperty(to.meta, '__navigationId', {
                  value: navigationId++,
              });
              api.addTimelineEvent({
                  layerId: navigationsLayerId,
                  event: {
                      time: Date.now(),
                      title: 'Start of navigation',
                      data,
                      groupId: to.meta.__navigationId,
                  },
              });
          });
          router.afterEach((to, from, failure) => {
              const data = {
                  guard: formatDisplay('afterEach'),
              };
              if (failure) {
                  data.failure = {
                      _custom: {
                          type: Error,
                          readOnly: true,
                          display: failure ? failure.message : '',
                          tooltip: 'Navigation Failure',
                          value: failure,
                      },
                  };
                  data.status = formatDisplay('❌');
              }
              else {
                  data.status = formatDisplay('✅');
              }
              // we set here to have the right order
              data.from = formatRouteLocation(from, 'Current Location during this navigation');
              data.to = formatRouteLocation(to, 'Target location');
              api.addTimelineEvent({
                  layerId: navigationsLayerId,
                  event: {
                      title: 'End of navigation',
                      time: Date.now(),
                      data,
                      logType: failure ? 'warning' : 'default',
                      groupId: to.meta.__navigationId,
                  },
              });
          });
          /**
           * Inspector of Existing routes
           */
          const routerInspectorId = 'router-inspector:' + id;
          api.addInspector({
              id: routerInspectorId,
              label: 'Routes' + (id ? ' ' + id : ''),
              icon: 'book',
              treeFilterPlaceholder: 'Search routes',
          });
          function refreshRoutesView() {
              // the routes view isn't active
              if (!activeRoutesPayload)
                  return;
              const payload = activeRoutesPayload;
              // children routes will appear as nested
              let routes = matcher.getRoutes().filter(route => !route.parent);
              // reset match state to false
              routes.forEach(resetMatchStateOnRouteRecord);
              // apply a match state if there is a payload
              if (payload.filter) {
                  routes = routes.filter(route => 
                  // save matches state based on the payload
                  isRouteMatching(route, payload.filter.toLowerCase()));
              }
              // mark active routes
              routes.forEach(route => markRouteRecordActive(route, router.currentRoute.value));
              payload.rootNodes = routes.map(formatRouteRecordForInspector);
          }
          let activeRoutesPayload;
          api.on.getInspectorTree(payload => {
              activeRoutesPayload = payload;
              if (payload.app === app && payload.inspectorId === routerInspectorId) {
                  refreshRoutesView();
              }
          });
          /**
           * Display information about the currently selected route record
           */
          api.on.getInspectorState(payload => {
              if (payload.app === app && payload.inspectorId === routerInspectorId) {
                  const routes = matcher.getRoutes();
                  const route = routes.find(route => route.record.__vd_id === payload.nodeId);
                  if (route) {
                      payload.state = {
                          options: formatRouteRecordMatcherForStateInspector(route),
                      };
                  }
              }
          });
          api.sendInspectorTree(routerInspectorId);
          api.sendInspectorState(routerInspectorId);
      });
  }
  function modifierForKey(key) {
      if (key.optional) {
          return key.repeatable ? '*' : '?';
      }
      else {
          return key.repeatable ? '+' : '';
      }
  }
  function formatRouteRecordMatcherForStateInspector(route) {
      const { record } = route;
      const fields = [
          { editable: false, key: 'path', value: record.path },
      ];
      if (record.name != null) {
          fields.push({
              editable: false,
              key: 'name',
              value: record.name,
          });
      }
      fields.push({ editable: false, key: 'regexp', value: route.re });
      if (route.keys.length) {
          fields.push({
              editable: false,
              key: 'keys',
              value: {
                  _custom: {
                      type: null,
                      readOnly: true,
                      display: route.keys
                          .map(key => `${key.name}${modifierForKey(key)}`)
                          .join(' '),
                      tooltip: 'Param keys',
                      value: route.keys,
                  },
              },
          });
      }
      if (record.redirect != null) {
          fields.push({
              editable: false,
              key: 'redirect',
              value: record.redirect,
          });
      }
      if (route.alias.length) {
          fields.push({
              editable: false,
              key: 'aliases',
              value: route.alias.map(alias => alias.record.path),
          });
      }
      fields.push({
          key: 'score',
          editable: false,
          value: {
              _custom: {
                  type: null,
                  readOnly: true,
                  display: route.score.map(score => score.join(', ')).join(' | '),
                  tooltip: 'Score used to sort routes',
                  value: route.score,
              },
          },
      });
      return fields;
  }
  /**
   * Extracted from tailwind palette
   */
  const PINK_500 = 0xec4899;
  const BLUE_600 = 0x2563eb;
  const LIME_500 = 0x84cc16;
  const CYAN_400 = 0x22d3ee;
  const ORANGE_400 = 0xfb923c;
  // const GRAY_100 = 0xf4f4f5
  const DARK = 0x666666;
  function formatRouteRecordForInspector(route) {
      const tags = [];
      const { record } = route;
      if (record.name != null) {
          tags.push({
              label: String(record.name),
              textColor: 0,
              backgroundColor: CYAN_400,
          });
      }
      if (record.aliasOf) {
          tags.push({
              label: 'alias',
              textColor: 0,
              backgroundColor: ORANGE_400,
          });
      }
      if (route.__vd_match) {
          tags.push({
              label: 'matches',
              textColor: 0,
              backgroundColor: PINK_500,
          });
      }
      if (route.__vd_exactActive) {
          tags.push({
              label: 'exact',
              textColor: 0,
              backgroundColor: LIME_500,
          });
      }
      if (route.__vd_active) {
          tags.push({
              label: 'active',
              textColor: 0,
              backgroundColor: BLUE_600,
          });
      }
      if (record.redirect) {
          tags.push({
              label: 'redirect: ' +
                  (typeof record.redirect === 'string' ? record.redirect : 'Object'),
              textColor: 0xffffff,
              backgroundColor: DARK,
          });
      }
      // add an id to be able to select it. Using the `path` is not possible because
      // empty path children would collide with their parents
      let id = String(routeRecordId++);
      record.__vd_id = id;
      return {
          id,
          label: record.path,
          tags,
          children: route.children.map(formatRouteRecordForInspector),
      };
  }
  //  incremental id for route records and inspector state
  let routeRecordId = 0;
  const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
  function markRouteRecordActive(route, currentRoute) {
      // no route will be active if matched is empty
      // reset the matching state
      const isExactActive = currentRoute.matched.length &&
          isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
      route.__vd_exactActive = route.__vd_active = isExactActive;
      if (!isExactActive) {
          route.__vd_active = currentRoute.matched.some(match => isSameRouteRecord(match, route.record));
      }
      route.children.forEach(childRoute => markRouteRecordActive(childRoute, currentRoute));
  }
  function resetMatchStateOnRouteRecord(route) {
      route.__vd_match = false;
      route.children.forEach(resetMatchStateOnRouteRecord);
  }
  function isRouteMatching(route, filter) {
      const found = String(route.re).match(EXTRACT_REGEXP_RE);
      route.__vd_match = false;
      if (!found || found.length < 3) {
          return false;
      }
      // use a regexp without $ at the end to match nested routes better
      const nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);
      if (nonEndingRE.test(filter)) {
          // mark children as matches
          route.children.forEach(child => isRouteMatching(child, filter));
          // exception case: `/`
          if (route.record.path !== '/' || filter === '/') {
              route.__vd_match = route.re.test(filter);
              return true;
          }
          // hide the / route
          return false;
      }
      const path = route.record.path.toLowerCase();
      const decodedPath = decode(path);
      // also allow partial matching on the path
      if (!filter.startsWith('/') &&
          (decodedPath.includes(filter) || path.includes(filter)))
          return true;
      if (decodedPath.startsWith(filter) || path.startsWith(filter))
          return true;
      if (route.record.name && String(route.record.name).includes(filter))
          return true;
      return route.children.some(child => isRouteMatching(child, filter));
  }
  function omit(obj, keys) {
      const ret = {};
      for (let key in obj) {
          if (!keys.includes(key)) {
              // @ts-ignore
              ret[key] = obj[key];
          }
      }
      return ret;
  }

  /**
   * Creates a Router instance that can be used by a Vue app.
   *
   * @param options - {@link RouterOptions}
   */
  function createRouter(options) {
      const matcher = createRouterMatcher(options.routes, options);
      let parseQuery$1 = options.parseQuery || parseQuery;
      let stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
      let routerHistory = options.history;
      const beforeGuards = useCallbacks();
      const beforeResolveGuards = useCallbacks();
      const afterGuards = useCallbacks();
      const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
      let pendingLocation = START_LOCATION_NORMALIZED;
      // leave the scrollRestoration if no scrollBehavior is provided
      if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
      }
      const normalizeParams = applyToParams.bind(null, paramValue => '' + paramValue);
      const encodeParams = applyToParams.bind(null, encodeParam);
      const decodeParams = applyToParams.bind(null, decode);
      function addRoute(parentOrRoute, route) {
          let parent;
          let record;
          if (isRouteName(parentOrRoute)) {
              parent = matcher.getRecordMatcher(parentOrRoute);
              record = route;
          }
          else {
              record = parentOrRoute;
          }
          return matcher.addRoute(record, parent);
      }
      function removeRoute(name) {
          let recordMatcher = matcher.getRecordMatcher(name);
          if (recordMatcher) {
              matcher.removeRoute(recordMatcher);
          }
          else {
              warn(`Cannot remove non-existent route "${String(name)}"`);
          }
      }
      function getRoutes() {
          return matcher.getRoutes().map(routeMatcher => routeMatcher.record);
      }
      function hasRoute(name) {
          return !!matcher.getRecordMatcher(name);
      }
      function resolve(rawLocation, currentLocation) {
          // const objectLocation = routerLocationAsObject(rawLocation)
          // we create a copy to modify it later
          currentLocation = assign({}, currentLocation || currentRoute.value);
          if (typeof rawLocation === 'string') {
              let locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
              let matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
              let href = routerHistory.createHref(locationNormalized.fullPath);
              {
                  if (href.startsWith('//'))
                      warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
                  else if (!matchedRoute.matched.length) {
                      warn(`No match found for location with path "${rawLocation}"`);
                  }
              }
              // locationNormalized is always a new object
              return assign(locationNormalized, matchedRoute, {
                  params: decodeParams(matchedRoute.params),
                  hash: decode(locationNormalized.hash),
                  redirectedFrom: undefined,
                  href,
              });
          }
          let matcherLocation;
          // path could be relative in object as well
          if ('path' in rawLocation) {
              if ('params' in rawLocation &&
                  !('name' in rawLocation) &&
                  Object.keys(rawLocation.params).length) {
                  warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
              }
              matcherLocation = assign({}, rawLocation, {
                  path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path,
              });
          }
          else {
              // pass encoded values to the matcher so it can produce encoded path and fullPath
              matcherLocation = assign({}, rawLocation, {
                  params: encodeParams(rawLocation.params),
              });
              // current location params are decoded, we need to encode them in case the
              // matcher merges the params
              currentLocation.params = encodeParams(currentLocation.params);
          }
          let matchedRoute = matcher.resolve(matcherLocation, currentLocation);
          const hash = rawLocation.hash || '';
          if (hash && !hash.startsWith('#')) {
              warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
          }
          // decoding them) the matcher might have merged current location params so
          // we need to run the decoding again
          matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
          const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
              hash: encodeHash(hash),
              path: matchedRoute.path,
          }));
          let href = routerHistory.createHref(fullPath);
          {
              if (href.startsWith('//')) {
                  warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
              }
              else if (!matchedRoute.matched.length) {
                  warn(`No match found for location with path "${'path' in rawLocation ? rawLocation.path : rawLocation}"`);
              }
          }
          return assign({
              fullPath,
              // keep the hash encoded so fullPath is effectively path + encodedQuery +
              // hash
              hash,
              query: 
              // if the user is using a custom query lib like qs, we might have
              // nested objects, so we keep the query as is, meaning it can contain
              // numbers at `$route.query`, but at the point, the user will have to
              // use their own type anyway.
              // https://github.com/vuejs/vue-router-next/issues/328#issuecomment-649481567
              stringifyQuery$1 === stringifyQuery
                  ? normalizeQuery(rawLocation.query)
                  : rawLocation.query,
          }, matchedRoute, {
              redirectedFrom: undefined,
              href,
          });
      }
      function locationAsObject(to) {
          return typeof to === 'string'
              ? parseURL(parseQuery$1, to, currentRoute.value.path)
              : assign({}, to);
      }
      function checkCanceledNavigation(to, from) {
          if (pendingLocation !== to) {
              return createRouterError(8 /* NAVIGATION_CANCELLED */, {
                  from,
                  to,
              });
          }
      }
      function push(to) {
          return pushWithRedirect(to);
      }
      function replace(to) {
          return push(assign(locationAsObject(to), { replace: true }));
      }
      function handleRedirectRecord(to) {
          const lastMatched = to.matched[to.matched.length - 1];
          if (lastMatched && lastMatched.redirect) {
              const { redirect } = lastMatched;
              let newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;
              if (typeof newTargetLocation === 'string') {
                  newTargetLocation =
                      newTargetLocation.indexOf('?') > -1 ||
                          newTargetLocation.indexOf('#') > -1
                          ? (newTargetLocation = locationAsObject(newTargetLocation))
                          : { path: newTargetLocation };
              }
              if (!('path' in newTargetLocation) &&
                  !('name' in newTargetLocation)) {
                  warn(`Invalid redirect found:\n${JSON.stringify(newTargetLocation, null, 2)}\n when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
                  throw new Error('Invalid redirect');
              }
              return assign({
                  query: to.query,
                  hash: to.hash,
                  params: to.params,
              }, newTargetLocation);
          }
      }
      function pushWithRedirect(to, redirectedFrom) {
          const targetLocation = (pendingLocation = resolve(to));
          const from = currentRoute.value;
          const data = to.state;
          const force = to.force;
          // to could be a string where `replace` is a function
          const replace = to.replace === true;
          const shouldRedirect = handleRedirectRecord(targetLocation);
          if (shouldRedirect)
              return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
                  state: data,
                  force,
                  replace,
              }), 
              // keep original redirectedFrom if it exists
              redirectedFrom || targetLocation);
          // if it was a redirect we already called `pushWithRedirect` above
          const toLocation = targetLocation;
          toLocation.redirectedFrom = redirectedFrom;
          let failure;
          if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
              failure = createRouterError(16 /* NAVIGATION_DUPLICATED */, { to: toLocation, from });
              // trigger scroll to allow scrolling to the same anchor
              handleScroll(from, from, 
              // this is a push, the only way for it to be triggered from a
              // history.listen is with a redirect, which makes it become a push
              true, 
              // This cannot be the first navigation because the initial location
              // cannot be manually navigated to
              false);
          }
          return (failure ? Promise.resolve(failure) : navigate(toLocation, from))
              .catch((error) => isNavigationFailure(error)
              ? error
              : // reject any unknown error
                  triggerError(error))
              .then((failure) => {
              if (failure) {
                  if (isNavigationFailure(failure, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
                      if (// we are redirecting to the same location we were already at
                          isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) &&
                          // and we have done it a couple of times
                          redirectedFrom &&
                          // @ts-ignore
                          (redirectedFrom._count = redirectedFrom._count
                              ? // @ts-ignore
                                  redirectedFrom._count + 1
                              : 1) > 10) {
                          warn(`Detected an infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`);
                          return Promise.reject(new Error('Infinite redirect in navigation guard'));
                      }
                      return pushWithRedirect(
                      // keep options
                      assign(locationAsObject(failure.to), {
                          state: data,
                          force,
                          replace,
                      }), 
                      // preserve the original redirectedFrom if any
                      redirectedFrom || toLocation);
                  }
              }
              else {
                  // if we fail we don't finalize the navigation
                  failure = finalizeNavigation(toLocation, from, true, replace, data);
              }
              triggerAfterEach(toLocation, from, failure);
              return failure;
          });
      }
      /**
       * Helper to reject and skip all navigation guards if a new navigation happened
       * @param to
       * @param from
       */
      function checkCanceledNavigationAndReject(to, from) {
          const error = checkCanceledNavigation(to, from);
          return error ? Promise.reject(error) : Promise.resolve();
      }
      // TODO: refactor the whole before guards by internally using router.beforeEach
      function navigate(to, from) {
          let guards;
          const [leavingRecords, updatingRecords, enteringRecords,] = extractChangingRecords(to, from);
          // all components here have been resolved once because we are leaving
          guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from);
          // leavingRecords is already reversed
          for (const record of leavingRecords) {
              record.leaveGuards.forEach(guard => {
                  guards.push(guardToPromiseFn(guard, to, from));
              });
          }
          const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
          guards.push(canceledNavigationCheck);
          // run the queue of per route beforeRouteLeave guards
          return (runGuardQueue(guards)
              .then(() => {
              // check global guards beforeEach
              guards = [];
              for (const guard of beforeGuards.list()) {
                  guards.push(guardToPromiseFn(guard, to, from));
              }
              guards.push(canceledNavigationCheck);
              return runGuardQueue(guards);
          })
              .then(() => {
              // check in components beforeRouteUpdate
              guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);
              for (const record of updatingRecords) {
                  record.updateGuards.forEach(guard => {
                      guards.push(guardToPromiseFn(guard, to, from));
                  });
              }
              guards.push(canceledNavigationCheck);
              // run the queue of per route beforeEnter guards
              return runGuardQueue(guards);
          })
              .then(() => {
              // check the route beforeEnter
              guards = [];
              for (const record of to.matched) {
                  // do not trigger beforeEnter on reused views
                  if (record.beforeEnter && from.matched.indexOf(record) < 0) {
                      if (Array.isArray(record.beforeEnter)) {
                          for (const beforeEnter of record.beforeEnter)
                              guards.push(guardToPromiseFn(beforeEnter, to, from));
                      }
                      else {
                          guards.push(guardToPromiseFn(record.beforeEnter, to, from));
                      }
                  }
              }
              guards.push(canceledNavigationCheck);
              // run the queue of per route beforeEnter guards
              return runGuardQueue(guards);
          })
              .then(() => {
              // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
              // clear existing enterCallbacks, these are added by extractComponentsGuards
              to.matched.forEach(record => (record.enterCallbacks = {}));
              // check in-component beforeRouteEnter
              guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
              guards.push(canceledNavigationCheck);
              // run the queue of per route beforeEnter guards
              return runGuardQueue(guards);
          })
              .then(() => {
              // check global guards beforeResolve
              guards = [];
              for (const guard of beforeResolveGuards.list()) {
                  guards.push(guardToPromiseFn(guard, to, from));
              }
              guards.push(canceledNavigationCheck);
              return runGuardQueue(guards);
          })
              // catch any navigation canceled
              .catch(err => isNavigationFailure(err, 8 /* NAVIGATION_CANCELLED */)
              ? err
              : Promise.reject(err)));
      }
      function triggerAfterEach(to, from, failure) {
          // navigation is confirmed, call afterGuards
          // TODO: wrap with error handlers
          for (const guard of afterGuards.list())
              guard(to, from, failure);
      }
      /**
       * - Cleans up any navigation guards
       * - Changes the url if necessary
       * - Calls the scrollBehavior
       */
      function finalizeNavigation(toLocation, from, isPush, replace, data) {
          // a more recent navigation took place
          const error = checkCanceledNavigation(toLocation, from);
          if (error)
              return error;
          // only consider as push if it's not the first navigation
          const isFirstNavigation = from === START_LOCATION_NORMALIZED;
          const state = !isBrowser ? {} : history.state;
          // change URL only if the user did a push/replace and if it's not the initial navigation because
          // it's just reflecting the url
          if (isPush) {
              // on the initial navigation, we want to reuse the scroll position from
              // history state if it exists
              if (replace || isFirstNavigation)
                  routerHistory.replace(toLocation.fullPath, assign({
                      scroll: isFirstNavigation && state && state.scroll,
                  }, data));
              else
                  routerHistory.push(toLocation.fullPath, data);
          }
          // accept current navigation
          currentRoute.value = toLocation;
          handleScroll(toLocation, from, isPush, isFirstNavigation);
          markAsReady();
      }
      let removeHistoryListener;
      // attach listener to history to trigger navigations
      function setupListeners() {
          removeHistoryListener = routerHistory.listen((to, _from, info) => {
              // cannot be a redirect route because it was in history
              let toLocation = resolve(to);
              // due to dynamic routing, and to hash history with manual navigation
              // (manually changing the url or calling history.hash = '#/somewhere'),
              // there could be a redirect record in history
              const shouldRedirect = handleRedirectRecord(toLocation);
              if (shouldRedirect) {
                  pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
                  return;
              }
              pendingLocation = toLocation;
              const from = currentRoute.value;
              // TODO: should be moved to web history?
              if (isBrowser) {
                  saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
              }
              navigate(toLocation, from)
                  .catch((error) => {
                  if (isNavigationFailure(error, 4 /* NAVIGATION_ABORTED */ | 8 /* NAVIGATION_CANCELLED */)) {
                      return error;
                  }
                  if (isNavigationFailure(error, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
                      // Here we could call if (info.delta) routerHistory.go(-info.delta,
                      // false) but this is bug prone as we have no way to wait the
                      // navigation to be finished before calling pushWithRedirect. Using
                      // a setTimeout of 16ms seems to work but there is not guarantee for
                      // it to work on every browser. So Instead we do not restore the
                      // history entry and trigger a new navigation as requested by the
                      // navigation guard.
                      // the error is already handled by router.push we just want to avoid
                      // logging the error
                      pushWithRedirect(error.to, toLocation
                      // avoid an uncaught rejection, let push call triggerError
                      ).catch(noop);
                      // avoid the then branch
                      return Promise.reject();
                  }
                  // do not restore history on unknown direction
                  if (info.delta)
                      routerHistory.go(-info.delta, false);
                  // unrecognized error, transfer to the global handler
                  return triggerError(error);
              })
                  .then((failure) => {
                  failure =
                      failure ||
                          finalizeNavigation(
                          // after navigation, all matched components are resolved
                          toLocation, from, false);
                  // revert the navigation
                  if (failure && info.delta)
                      routerHistory.go(-info.delta, false);
                  triggerAfterEach(toLocation, from, failure);
              })
                  .catch(noop);
          });
      }
      // Initialization and Errors
      let readyHandlers = useCallbacks();
      let errorHandlers = useCallbacks();
      let ready;
      /**
       * Trigger errorHandlers added via onError and throws the error as well
       * @param error - error to throw
       * @returns the error as a rejected promise
       */
      function triggerError(error) {
          markAsReady(error);
          errorHandlers.list().forEach(handler => handler(error));
          return Promise.reject(error);
      }
      function isReady() {
          if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
              return Promise.resolve();
          return new Promise((resolve, reject) => {
              readyHandlers.add([resolve, reject]);
          });
      }
      /**
       * Mark the router as ready, resolving the promised returned by isReady(). Can
       * only be called once, otherwise does nothing.
       * @param err - optional error
       */
      function markAsReady(err) {
          if (ready)
              return;
          ready = true;
          setupListeners();
          readyHandlers
              .list()
              .forEach(([resolve, reject]) => (err ? reject(err) : resolve()));
          readyHandlers.reset();
      }
      // Scroll behavior
      function handleScroll(to, from, isPush, isFirstNavigation) {
          const { scrollBehavior } = options;
          if (!isBrowser || !scrollBehavior)
              return Promise.resolve();
          let scrollPosition = (!isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0))) ||
              ((isFirstNavigation || !isPush) &&
                  history.state &&
                  history.state.scroll) ||
              null;
          return vue.nextTick()
              .then(() => scrollBehavior(to, from, scrollPosition))
              .then(position => position && scrollToPosition(position))
              .catch(triggerError);
      }
      const go = (delta) => routerHistory.go(delta);
      let started;
      const installedApps = new Set();
      const router = {
          currentRoute,
          addRoute,
          removeRoute,
          hasRoute,
          getRoutes,
          resolve,
          options,
          push,
          replace,
          go,
          back: () => go(-1),
          forward: () => go(1),
          beforeEach: beforeGuards.add,
          beforeResolve: beforeResolveGuards.add,
          afterEach: afterGuards.add,
          onError: errorHandlers.add,
          isReady,
          install(app) {
              const router = this;
              app.component('RouterLink', RouterLink);
              app.component('RouterView', RouterView);
              app.config.globalProperties.$router = router;
              Object.defineProperty(app.config.globalProperties, '$route', {
                  get: () => vue.unref(currentRoute),
              });
              // this initial navigation is only necessary on client, on server it doesn't
              // make sense because it will create an extra unnecessary navigation and could
              // lead to problems
              if (isBrowser &&
                  // used for the initial navigation client side to avoid pushing
                  // multiple times when the router is used in multiple apps
                  !started &&
                  currentRoute.value === START_LOCATION_NORMALIZED) {
                  // see above
                  started = true;
                  push(routerHistory.location).catch(err => {
                      warn('Unexpected error when starting the router:', err);
                  });
              }
              const reactiveRoute = {};
              for (let key in START_LOCATION_NORMALIZED) {
                  // @ts-ignore: the key matches
                  reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
              }
              app.provide(routerKey, router);
              app.provide(routeLocationKey, vue.reactive(reactiveRoute));
              app.provide(routerViewLocationKey, currentRoute);
              let unmountApp = app.unmount;
              installedApps.add(app);
              app.unmount = function () {
                  installedApps.delete(app);
                  if (installedApps.size < 1) {
                      removeHistoryListener();
                      currentRoute.value = START_LOCATION_NORMALIZED;
                      started = false;
                      ready = false;
                  }
                  unmountApp();
              };
              {
                  addDevtools(app, router, matcher);
              }
          },
      };
      return router;
  }
  function runGuardQueue(guards) {
      return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
      const leavingRecords = [];
      const updatingRecords = [];
      const enteringRecords = [];
      const len = Math.max(from.matched.length, to.matched.length);
      for (let i = 0; i < len; i++) {
          const recordFrom = from.matched[i];
          if (recordFrom) {
              if (to.matched.find(record => isSameRouteRecord(record, recordFrom)))
                  updatingRecords.push(recordFrom);
              else
                  leavingRecords.push(recordFrom);
          }
          const recordTo = to.matched[i];
          if (recordTo) {
              // the type doesn't matter because we are comparing per reference
              if (!from.matched.find(record => isSameRouteRecord(record, recordTo))) {
                  enteringRecords.push(recordTo);
              }
          }
      }
      return [leavingRecords, updatingRecords, enteringRecords];
  }

  /**
   * Returns the router instance. Equivalent to using `$router` inside
   * templates.
   */
  function useRouter() {
      return vue.inject(routerKey);
  }
  /**
   * Returns the current route location. Equivalent to using `$route` inside
   * templates.
   */
  function useRoute() {
      return vue.inject(routeLocationKey);
  }

  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute;
  exports.useRouter = useRouter;
  exports.viewDepthKey = viewDepthKey;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}, Vue));
;/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i], vm);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
    if (!valid && haveExpectedTypes) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

  function assertType (value, type, vm) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      try {
        valid = value instanceof type;
      } catch (e) {
        warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
        valid = false;
      }
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  var functionTypeCheckRE = /^\s*function (\w+)/;

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(functionTypeCheckRE);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    // check if we need to specify expected value
    if (
      expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      isExplicable(typeof value) &&
      !isBoolean(expectedType, receivedType)
    ) {
      message += " with value " + (styleValue(value, expectedType));
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + (styleValue(value, receivedType)) + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
  function isExplicable (value) {
    return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals. ' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      var vnode = res && res[0];
      return res && (
        !vnode ||
        (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallbackRender,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes =
        scopedSlotFn(props) ||
        (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
    } else {
      nodes =
        this.$slots[name] ||
        (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
    return eventKeyCode === undefined
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a special value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    // we know it's MountedComponentVNode but flow doesn't
    vnode,
    // activeInstance in lifecycle state
    parent
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        if (isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
          warn(
            ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
            context
          );
        }
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack because all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
      (!newScopedSlots && vm.$scopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          var info = "callback for watcher \"" + (this.expression) + "\"";
          invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        } else if (vm.$options.methods && key in vm.$options.methods) {
          warn(("The computed property \"" + key + "\" is already defined as a method."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
        pushTarget();
        invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
        popTarget();
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */





  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var entry = cache[key];
      if (entry) {
        var name = entry.name;
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var entry = cache[key];
    if (entry && (!current || entry.tag !== current.tag)) {
      entry.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    methods: {
      cacheVNode: function cacheVNode() {
        var ref = this;
        var cache = ref.cache;
        var keys = ref.keys;
        var vnodeToCache = ref.vnodeToCache;
        var keyToCache = ref.keyToCache;
        if (vnodeToCache) {
          var tag = vnodeToCache.tag;
          var componentInstance = vnodeToCache.componentInstance;
          var componentOptions = vnodeToCache.componentOptions;
          cache[keyToCache] = {
            name: getComponentName(componentOptions),
            tag: tag,
            componentInstance: componentInstance,
          };
          keys.push(keyToCache);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
          this.vnodeToCache = null;
        }
      }
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.cacheVNode();
      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    updated: function updated () {
      this.cacheVNode();
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          // delay setting the cache until update
          this.vnodeToCache = vnode;
          this.keyToCache = key;
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.14';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key &&
      a.asyncFactory === b.asyncFactory && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes([oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur, vnode.data.pre);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value, isInPre) {
    if (isInPre || el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */



  /* eslint-disable no-unused-vars */
  function baseWarn (msg, range) {
    console.error(("[Vue compiler]: " + msg));
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr (el, name, value, range, dynamic) {
    var attrs = dynamic
      ? (el.dynamicAttrs || (el.dynamicAttrs = []))
      : (el.attrs || (el.attrs = []));
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    isDynamicArg,
    modifiers,
    range
  ) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker (symbol, name, dynamic) {
    return dynamic
      ? ("_p(" + name + ",\"" + symbol + "\")")
      : symbol + name // mark the event as captured
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn,
    range,
    dynamic
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.',
        range
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr (
    el,
    name
  ) {
    return el.rawAttrsMap[':' + name] ||
      el.rawAttrsMap['v-bind:' + name] ||
      el.rawAttrsMap[name]
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  function getAndRemoveAttrByRegex (
    el,
    name
  ) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr
      }
    }
  }

  function rangeSetItem (
    item,
    range
  ) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead.",
          el.rawAttrsMap['v-model']
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.',
        el.rawAttrsMap['v-model']
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally',
          el.rawAttrsMap[binding]
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
          el.rawAttrsMap['class']
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
            el.rawAttrsMap['style']
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being passed as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag."),
              { start: stack[i].start, end: stack[i].end }
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:|^#/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /[ \f\t\r\n]+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) { return !!(
      el.component ||
      el.attrsMap[':is'] ||
      el.attrsMap['v-bind:is'] ||
      !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag))
    ); };
    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement (element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead.",
            { start: element.start }
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) { return !(c).slotScope; });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace (el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while (
          (lastNode = el.children[el.children.length - 1]) &&
          lastNode.type === 3 &&
          lastNode.text === ' '
        ) {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints (el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce(
          "Cannot use <" + (el.tag) + "> as component root element because it may " +
          'contain multiple nodes.',
          { start: el.start }
        );
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce(
          'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
          el.rawAttrsMap['v-for']
        );
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start (tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2(
                "Invalid dynamic argument expression: attribute names cannot contain " +
                "spaces, quotes, <, >, / or =.",
                {
                  start: attr.start + attr.name.indexOf("["),
                  end: attr.start + attr.name.length
                }
              );
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.',
            { start: element.start }
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end (tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars (text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.',
                { start: start }
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored."),
                { start: start }
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment (text, start, end) {
        // adding anything as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (
    element,
    options
  ) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = (
      !element.key &&
      !element.scopedSlots &&
      !element.attrsList.length
    );

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2(
            "<template> cannot be keyed. Place the key on real elements instead.",
            getRawBindingAttr(el, 'key')
          );
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys.",
              getRawBindingAttr(el, 'key'),
              true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp),
          el.rawAttrsMap['v-for']
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if.",
        el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored.",
            children[i]
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent (el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          el.rawAttrsMap['scope'],
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          el.rawAttrsMap['slot-scope'],
          true
        );
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2(
                "<template v-slot> can only appear at the root level inside " +
                "the receiving component",
                el
              );
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2(
                "v-slot can only be used on components or <template>.",
                slotBinding$1
              );
            }
            if (el.slotScope || el.slotTarget) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.scopedSlots) {
              warn$2(
                "To avoid scope ambiguity, the default slot should also use " +
                "<template> syntax when there are other named slots.",
                slotBinding$1
              );
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName (binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2(
          "v-slot shorthand syntax requires a slot name.",
          binding
        );
      }
    }
    return dynamicArgRE.test(name)
      // dynamic [name]
      ? { name: name.slice(1, -1), dynamic: true }
      // static name
      : { name: ("\"" + name + "\""), dynamic: false }
  }

  // handle <slot/> outlets
  function processSlotOutlet (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead.",
          getRawBindingAttr(el, 'key')
        );
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(
                    el,
                    ("update:" + (hyphenate(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                }
              } else {
                // handler w/ dynamic event name
                addHandler(
                  el,
                  ("\"update:\"+(" + name + ")"),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i],
                  true // dynamic
                );
              }
            }
          }
          if ((modifiers && modifiers.prop) || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
              list[i]
            );
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead.",
          el.rawAttrsMap['v-model']
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
    } else {
      return prefix + staticHandlers
    }
  }

  function genHandler (handler) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + ".apply(null, arguments)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ").apply(null, arguments)")
          : isFunctionInvocation
            ? ("return " + (handler.value))
            : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
      (keys.map(genFilterCode).join('&&')) + ")return null;"
    )
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    // fix #11483, Root level <script> tags should not be rendered.
    var code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. ",
          el.rawAttrsMap['v-once']
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        el.rawAttrsMap['v-for'],
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + (genProps(el.attrs)) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + (genProps(el.props)) + ",";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn(
        'Inline-template components must have exactly one child element.',
        { start: el.start }
      );
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    el,
    slots,
    state
  ) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return (
        slot.slotTargetDynamic ||
        slot.if ||
        slot.for ||
        containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      )
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (
          (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
          parent.for
        ) {
          needsForceUpdate = true;
          break
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots)
      .map(function (key) { return genScopedSlot(slots[key], state); })
      .join(',');

    return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }

  function containsSlotChild (el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true
      }
      return el.children.some(containsSlotChild)
    }
    return false
  }

  function genScopedSlot (
    el,
    state
  ) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null")
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot)
    }
    var slotScope = el.slotScope === emptySlotScopeToken
      ? ""
      : String(el.slotScope);
    var fn = "function(" + slotScope + "){" +
      "return " + (el.tag === 'template'
        ? el.if && isLegacySyntax
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? (",function(){return " + children + "}") : '');
    var attrs = el.attrs || el.dynamicAttrs
      ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
          // slot props are camelized
          name: camelize(attr.name),
          value: attr.value,
          dynamic: attr.dynamic
        }); }))
      : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += (prop.name) + "," + value + ",";
      } else {
        staticProps += "\"" + (prop.name) + "\":" + value + ",";
      }
    }
    staticProps = "{" + (staticProps.slice(0, -1)) + "}";
    if (dynamicProps) {
      return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
    } else {
      return staticProps
    }
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode (node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), warn, range);
            } else if (name === 'v-slot' || name[0] === '#') {
              checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), warn, range);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent (exp, text, warn, range) {
    var stripped = exp.replace(stripStringRE, '');
    var keywordMatch = stripped.match(unaryOperatorsRE);
    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
      warn(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
        range
      );
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor (node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    warn,
    range
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
      }
    }
  }

  function checkExpression (exp, text, warn, range) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
          range
        );
      } else {
        warn(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n",
          range
        );
      }
    }
  }

  function checkFunctionParameterExpression (exp, text, warn, range) {
    try {
      new Function(exp, '');
    } catch (e) {
      warn(
        "invalid function parameter expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame (
    source,
    start,
    end
  ) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) { continue }
          res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break
      }
    }
    return res.join('\n')
  }

  function repeat$1 (str, n) {
    var result = '';
    if (n > 0) {
      while (true) { // eslint-disable-line
        if (n & 1) { result += str; }
        n >>>= 1;
        if (n <= 0) { break }
        str += str;
      }
    }
    return result
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1(
                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                generateCodeFrame(template, e.start, e.end),
                vm
              );
            });
          } else {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
          } else {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

}));
;/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Vue=t()}(this,function(){"use strict";var e=Object.freeze({});function t(e){return null==e}function n(e){return null!=e}function r(e){return!0===e}function i(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}var a=Object.prototype.toString;function s(e){return"[object Object]"===a.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return n(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function l(e){return null==e?"":Array.isArray(e)||s(e)&&e.toString===a?JSON.stringify(e,null,2):String(e)}function f(e){var t=parseFloat(e);return isNaN(t)?e:t}function p(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var d=p("slot,component",!0),v=p("key,ref,slot,slot-scope,is");function h(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function y(e,t){return m.call(e,t)}function g(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var _=/-(\w)/g,b=g(function(e){return e.replace(_,function(e,t){return t?t.toUpperCase():""})}),$=g(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),w=/\B([A-Z])/g,C=g(function(e){return e.replace(w,"-$1").toLowerCase()});var x=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function k(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function A(e,t){for(var n in t)e[n]=t[n];return e}function O(e){for(var t={},n=0;n<e.length;n++)e[n]&&A(t,e[n]);return t}function S(e,t,n){}var T=function(e,t,n){return!1},N=function(e){return e};function E(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return E(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return E(e[n],t[n])})}catch(e){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(E(e[n],t))return n;return-1}function D(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var L="data-server-rendered",I=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:S,parsePlatformTagName:N,mustUseProp:T,async:!0,_lifecycleHooks:M},P=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function R(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+P.source+".$_\\d]");var B,U="__proto__"in{},V="undefined"!=typeof window,z="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=z&&WXEnvironment.platform.toLowerCase(),J=V&&window.navigator.userAgent.toLowerCase(),q=J&&/msie|trident/.test(J),W=J&&J.indexOf("msie 9.0")>0,Z=J&&J.indexOf("edge/")>0,G=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),X=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/)),Y={}.watch,Q=!1;if(V)try{var ee={};Object.defineProperty(ee,"passive",{get:function(){Q=!0}}),window.addEventListener("test-passive",null,ee)}catch(e){}var te=function(){return void 0===B&&(B=!V&&!z&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),B},ne=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"==typeof e&&/native code/.test(e.toString())}var ie,oe="undefined"!=typeof Symbol&&re(Symbol)&&"undefined"!=typeof Reflect&&re(Reflect.ownKeys);ie="undefined"!=typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ae=S,se=0,ce=function(){this.id=se++,this.subs=[]};ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){h(this.subs,e)},ce.prototype.depend=function(){ce.target&&ce.target.addDep(this)},ce.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},ce.target=null;var ue=[];function le(e){ue.push(e),ce.target=e}function fe(){ue.pop(),ce.target=ue[ue.length-1]}var pe=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,de);var ve=function(e){void 0===e&&(e="");var t=new pe;return t.text=e,t.isComment=!0,t};function he(e){return new pe(void 0,void 0,void 0,String(e))}function me(e){var t=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ye=Array.prototype,ge=Object.create(ye);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ye[e];R(ge,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var _e=Object.getOwnPropertyNames(ge),be=!0;function $e(e){be=e}var we=function(e){var t;this.value=e,this.dep=new ce,this.vmCount=0,R(e,"__ob__",this),Array.isArray(e)?(U?(t=ge,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];R(e,o,t[o])}}(e,ge,_e),this.observeArray(e)):this.walk(e)};function Ce(e,t){var n;if(o(e)&&!(e instanceof pe))return y(e,"__ob__")&&e.__ob__ instanceof we?n=e.__ob__:be&&!te()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new we(e)),t&&n&&n.vmCount++,n}function xe(e,t,n,r,i){var o=new ce,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Ce(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return ce.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!=t&&r!=r||s&&!c||(c?c.call(e,t):n=t,u=!i&&Ce(t),o.notify())}})}}function ke(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(xe(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Ae(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||y(e,t)&&(delete e[t],n&&n.dep.notify())}}we.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)xe(e,t[n])},we.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ce(e[t])};var Oe=F.optionMergeStrategies;function Se(e,t){if(!t)return e;for(var n,r,i,o=oe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)"__ob__"!==(n=o[a])&&(r=e[n],i=t[n],y(e,n)?r!==i&&s(r)&&s(i)&&Se(r,i):ke(e,n,i));return e}function Te(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?Se(r,i):i}:t?e?function(){return Se("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Ne(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Ee(e,t,n,r){var i=Object.create(e||null);return t?A(i,t):i}Oe.data=function(e,t,n){return n?Te(e,t,n):t&&"function"!=typeof t?e:Te(e,t)},M.forEach(function(e){Oe[e]=Ne}),I.forEach(function(e){Oe[e+"s"]=Ee}),Oe.watch=function(e,t,n,r){if(e===Y&&(e=void 0),t===Y&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in A(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Oe.props=Oe.methods=Oe.inject=Oe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return A(i,e),t&&A(i,t),i},Oe.provide=Te;var je=function(e,t){return void 0===t?e:t};function De(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[b(i)]={type:null});else if(s(n))for(var a in n)i=n[a],o[b(a)]=s(i)?i:{type:i};e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(s(n))for(var o in n){var a=n[o];r[o]=s(a)?A({from:o},a):{from:a}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=De(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=De(e,t.mixins[r],n);var o,a={};for(o in e)c(o);for(o in t)y(e,o)||c(o);function c(r){var i=Oe[r]||je;a[r]=i(e[r],t[r],n,r)}return a}function Le(e,t,n,r){if("string"==typeof n){var i=e[t];if(y(i,n))return i[n];var o=b(n);if(y(i,o))return i[o];var a=$(o);return y(i,a)?i[a]:i[n]||i[o]||i[a]}}function Ie(e,t,n,r){var i=t[e],o=!y(n,e),a=n[e],s=Re(Boolean,i.type);if(s>-1)if(o&&!y(i,"default"))a=!1;else if(""===a||a===C(e)){var c=Re(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!y(t,"default"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Fe(t.type)?r.call(e):r}(r,i,e);var u=be;$e(!0),Ce(a),$e(u)}return a}var Me=/^\s*function (\w+)/;function Fe(e){var t=e&&e.toString().match(Me);return t?t[1]:""}function Pe(e,t){return Fe(e)===Fe(t)}function Re(e,t){if(!Array.isArray(t))return Pe(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Pe(t[n],e))return n;return-1}function He(e,t,n){le();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Ue(e,r,"errorCaptured hook")}}Ue(e,t,n)}finally{fe()}}function Be(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&u(o)&&!o._handled&&(o.catch(function(e){return He(e,r,i+" (Promise/async)")}),o._handled=!0)}catch(e){He(e,r,i)}return o}function Ue(e,t,n){if(F.errorHandler)try{return F.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Ve(t,null,"config.errorHandler")}Ve(e,t,n)}function Ve(e,t,n){if(!V&&!z||"undefined"==typeof console)throw e;console.error(e)}var ze,Ke=!1,Je=[],qe=!1;function We(){qe=!1;var e=Je.slice(0);Je.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&re(Promise)){var Ze=Promise.resolve();ze=function(){Ze.then(We),G&&setTimeout(S)},Ke=!0}else if(q||"undefined"==typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ze="undefined"!=typeof setImmediate&&re(setImmediate)?function(){setImmediate(We)}:function(){setTimeout(We,0)};else{var Ge=1,Xe=new MutationObserver(We),Ye=document.createTextNode(String(Ge));Xe.observe(Ye,{characterData:!0}),ze=function(){Ge=(Ge+1)%2,Ye.data=String(Ge)},Ke=!0}function Qe(e,t){var n;if(Je.push(function(){if(e)try{e.call(t)}catch(e){He(e,t,"nextTick")}else n&&n(t)}),qe||(qe=!0,ze()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var et=new ie;function tt(e){!function e(t,n){var r,i;var a=Array.isArray(t);if(!a&&!o(t)||Object.isFrozen(t)||t instanceof pe)return;if(t.__ob__){var s=t.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(a)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,et),et.clear()}var nt=g(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function rt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return Be(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Be(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function it(e,n,i,o,a,s){var c,u,l,f;for(c in e)u=e[c],l=n[c],f=nt(c),t(u)||(t(l)?(t(u.fns)&&(u=e[c]=rt(u,s)),r(f.once)&&(u=e[c]=a(f.name,u,f.capture)),i(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,e[c]=l));for(c in n)t(e[c])&&o((f=nt(c)).name,n[c],f.capture)}function ot(e,i,o){var a;e instanceof pe&&(e=e.data.hook||(e.data.hook={}));var s=e[i];function c(){o.apply(this,arguments),h(a.fns,c)}t(s)?a=rt([c]):n(s.fns)&&r(s.merged)?(a=s).fns.push(c):a=rt([s,c]),a.merged=!0,e[i]=a}function at(e,t,r,i,o){if(n(t)){if(y(t,r))return e[r]=t[r],o||delete t[r],!0;if(y(t,i))return e[r]=t[i],o||delete t[i],!0}return!1}function st(e){return i(e)?[he(e)]:Array.isArray(e)?function e(o,a){var s=[];var c,u,l,f;for(c=0;c<o.length;c++)t(u=o[c])||"boolean"==typeof u||(l=s.length-1,f=s[l],Array.isArray(u)?u.length>0&&(ct((u=e(u,(a||"")+"_"+c))[0])&&ct(f)&&(s[l]=he(f.text+u[0].text),u.shift()),s.push.apply(s,u)):i(u)?ct(f)?s[l]=he(f.text+u):""!==u&&s.push(he(u)):ct(u)&&ct(f)?s[l]=he(f.text+u.text):(r(o._isVList)&&n(u.tag)&&t(u.key)&&n(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(e):void 0}function ct(e){return n(e)&&n(e.text)&&!1===e.isComment}function ut(e,t){if(e){for(var n=Object.create(null),r=oe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var a=e[o].from,s=t;s;){if(s._provided&&y(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}}return n}}function lt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(ft)&&delete n[u];return n}function ft(e){return e.isComment&&!e.asyncFactory||" "===e.text}function pt(e){return e.isComment&&e.asyncFactory}function dt(t,n,r){var i,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==e&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=vt(n,c,t[c]))}else i={};for(var u in n)u in i||(i[u]=ht(n,u));return t&&Object.isExtensible(t)&&(t._normalized=i),R(i,"$stable",a),R(i,"$key",s),R(i,"$hasNormal",o),i}function vt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({}),t=(e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:st(e))&&e[0];return e&&(!t||1===e.length&&t.isComment&&!pt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function ht(e,t){return function(){return e[t]}}function mt(e,t){var r,i,a,s,c;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=t(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=t(i+1,i);else if(o(e))if(oe&&e[Symbol.iterator]){r=[];for(var u=e[Symbol.iterator](),l=u.next();!l.done;)r.push(t(l.value,r.length)),l=u.next()}else for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=t(e[c],c,i);return n(r)||(r=[]),r._isVList=!0,r}function yt(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=A(A({},r),n)),i=o(n)||("function"==typeof t?t():t)):i=this.$slots[e]||("function"==typeof t?t():t);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function gt(e){return Le(this.$options,"filters",e)||N}function _t(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function bt(e,t,n,r,i){var o=F.keyCodes[t]||n;return i&&r&&!F.keyCodes[t]?_t(i,r):o?_t(o,e):r?C(r)!==t:void 0===e}function $t(e,t,n,r,i){if(n)if(o(n)){var a;Array.isArray(n)&&(n=O(n));var s=function(o){if("class"===o||"style"===o||v(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||F.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=b(o),u=C(o);c in a||u in a||(a[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))};for(var c in n)s(c)}else;return e}function wt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(xt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r)}function Ct(e,t,n){return xt(e,"__once__"+t+(n?"_"+n:""),!0),e}function xt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&kt(e[r],t+"_"+r,n);else kt(e,t,n)}function kt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function At(e,t){if(t)if(s(t)){var n=e.on=e.on?A({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Ot(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Ot(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function St(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Tt(e,t){return"string"==typeof e?t+e:e}function Nt(e){e._o=Ct,e._n=f,e._s=l,e._l=mt,e._t=yt,e._q=E,e._i=j,e._m=wt,e._f=gt,e._k=bt,e._b=$t,e._v=he,e._e=ve,e._u=Ot,e._g=At,e._d=St,e._p=Tt}function Et(t,n,i,o,a){var s,c=this,u=a.options;y(o,"_uid")?(s=Object.create(o))._original=o:(s=o,o=o._original);var l=r(u._compiled),f=!l;this.data=t,this.props=n,this.children=i,this.parent=o,this.listeners=t.on||e,this.injections=ut(u.inject,o),this.slots=function(){return c.$slots||dt(t.scopedSlots,c.$slots=lt(i,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return dt(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=dt(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var i=Ht(s,e,t,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return Ht(s,e,t,n,r,f)}}function jt(e,t,n,r,i){var o=me(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function Dt(e,t){for(var n in t)e[b(n)]=t[n]}Nt(Et.prototype);var Lt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;Lt.prepatch(r,r)}else{(e.componentInstance=function(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;n(i)&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns);return new e.componentOptions.Ctor(r)}(e,Zt)).$mount(t?e.elm:void 0,t)}},prepatch:function(t,n){var r=n.componentOptions;!function(t,n,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==e&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key||!a&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=o,t.$attrs=i.data.attrs||e,t.$listeners=r||e,n&&t.$options.props){$e(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],v=t.$options.props;l[d]=Ie(d,v,n,t)}$e(!0),t.$options.propsData=n}r=r||e;var h=t.$options._parentListeners;t.$options._parentListeners=r,Wt(t,r,h),u&&(t.$slots=lt(o,i.context),t.$forceUpdate())}(n.componentInstance=t.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Qt(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,tn.push(t)):Yt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,Xt(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);Qt(t,"deactivated")}}(t,!0):t.$destroy())}},It=Object.keys(Lt);function Mt(i,a,s,c,l){if(!t(i)){var f=s.$options._base;if(o(i)&&(i=f.extend(i)),"function"==typeof i){var p;if(t(i.cid)&&void 0===(i=function(e,i){if(r(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=Ut;a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a);if(r(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var s=e.owners=[a],c=!0,l=null,f=null;a.$on("hook:destroyed",function(){return h(s,a)});var p=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0,null!==l&&(clearTimeout(l),l=null),null!==f&&(clearTimeout(f),f=null))},d=D(function(t){e.resolved=Vt(t,i),c?s.length=0:p(!0)}),v=D(function(t){n(e.errorComp)&&(e.error=!0,p(!0))}),m=e(d,v);return o(m)&&(u(m)?t(e.resolved)&&m.then(d,v):u(m.component)&&(m.component.then(d,v),n(m.error)&&(e.errorComp=Vt(m.error,i)),n(m.loading)&&(e.loadingComp=Vt(m.loading,i),0===m.delay?e.loading=!0:l=setTimeout(function(){l=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,p(!1))},m.delay||200)),n(m.timeout)&&(f=setTimeout(function(){f=null,t(e.resolved)&&v(null)},m.timeout)))),c=!1,e.loading?e.loadingComp:e.resolved}}(p=i,f)))return function(e,t,n,r,i){var o=ve();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(p,a,s,c,l);a=a||{},wn(i),n(a.model)&&function(e,t){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var o=t.on||(t.on={}),a=o[i],s=t.model.callback;n(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}(i.options,a);var d=function(e,r,i){var o=r.options.props;if(!t(o)){var a={},s=e.attrs,c=e.props;if(n(s)||n(c))for(var u in o){var l=C(u);at(a,c,u,l,!0)||at(a,s,u,l,!1)}return a}}(a,i);if(r(i.options.functional))return function(t,r,i,o,a){var s=t.options,c={},u=s.props;if(n(u))for(var l in u)c[l]=Ie(l,u,r||e);else n(i.attrs)&&Dt(c,i.attrs),n(i.props)&&Dt(c,i.props);var f=new Et(i,c,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof pe)return jt(p,i,f.parent,s);if(Array.isArray(p)){for(var d=st(p)||[],v=new Array(d.length),h=0;h<d.length;h++)v[h]=jt(d[h],i,f.parent,s);return v}}(i,d,a,s,c);var v=a.on;if(a.on=a.nativeOn,r(i.options.abstract)){var m=a.slot;a={},m&&(a.slot=m)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<It.length;n++){var r=It[n],i=t[r],o=Lt[r];i===o||i&&i._merged||(t[r]=i?Ft(o,i):o)}}(a);var y=i.options.name||l;return new pe("vue-component-"+i.cid+(y?"-"+y:""),a,void 0,void 0,void 0,s,{Ctor:i,propsData:d,listeners:v,tag:l,children:c},p)}}}function Ft(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}var Pt=1,Rt=2;function Ht(e,a,s,c,u,l){return(Array.isArray(s)||i(s))&&(u=c,c=s,s=void 0),r(l)&&(u=Rt),function(e,i,a,s,c){if(n(a)&&n(a.__ob__))return ve();n(a)&&n(a.is)&&(i=a.is);if(!i)return ve();Array.isArray(s)&&"function"==typeof s[0]&&((a=a||{}).scopedSlots={default:s[0]},s.length=0);c===Rt?s=st(s):c===Pt&&(s=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(s));var u,l;if("string"==typeof i){var f;l=e.$vnode&&e.$vnode.ns||F.getTagNamespace(i),u=F.isReservedTag(i)?new pe(F.parsePlatformTagName(i),a,s,void 0,void 0,e):a&&a.pre||!n(f=Le(e.$options,"components",i))?new pe(i,a,s,void 0,void 0,e):Mt(f,a,e,s,i)}else u=Mt(i,a,e,s);return Array.isArray(u)?u:n(u)?(n(l)&&function e(i,o,a){i.ns=o;"foreignObject"===i.tag&&(o=void 0,a=!0);if(n(i.children))for(var s=0,c=i.children.length;s<c;s++){var u=i.children[s];n(u.tag)&&(t(u.ns)||r(a)&&"svg"!==u.tag)&&e(u,o,a)}}(u,l),n(a)&&function(e){o(e.style)&&tt(e.style);o(e.class)&&tt(e.class)}(a),u):ve()}(e,a,s,c,u)}var Bt,Ut=null;function Vt(e,t){return(e.__esModule||oe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function zt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var r=e[t];if(n(r)&&(n(r.componentOptions)||pt(r)))return r}}function Kt(e,t){Bt.$on(e,t)}function Jt(e,t){Bt.$off(e,t)}function qt(e,t){var n=Bt;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function Wt(e,t,n){Bt=e,it(t,n||{},Kt,Jt,qt,e),Bt=void 0}var Zt=null;function Gt(e){var t=Zt;return Zt=e,function(){Zt=t}}function Xt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Yt(e,t){if(t){if(e._directInactive=!1,Xt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Yt(e.$children[n]);Qt(e,"activated")}}function Qt(e,t){le();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Be(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),fe()}var en=[],tn=[],nn={},rn=!1,on=!1,an=0;var sn=0,cn=Date.now;if(V&&!q){var un=window.performance;un&&"function"==typeof un.now&&cn()>document.createEvent("Event").timeStamp&&(cn=function(){return un.now()})}function ln(){var e,t;for(sn=cn(),on=!0,en.sort(function(e,t){return e.id-t.id}),an=0;an<en.length;an++)(e=en[an]).before&&e.before(),t=e.id,nn[t]=null,e.run();var n=tn.slice(),r=en.slice();an=en.length=tn.length=0,nn={},rn=on=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Yt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Qt(r,"updated")}}(r),ne&&F.devtools&&ne.emit("flush")}var fn=0,pn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++fn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ie,this.newDepIds=new ie,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!H.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=S)),this.value=this.lazy?void 0:this.get()};pn.prototype.get=function(){var e;le(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;He(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&tt(e),fe(),this.cleanupDeps()}return e},pn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},pn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},pn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==nn[t]){if(nn[t]=!0,on){for(var n=en.length-1;n>an&&en[n].id>e.id;)n--;en.splice(n+1,0,e)}else en.push(e);rn||(rn=!0,Qe(ln))}}(this)},pn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';Be(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},pn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},pn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},pn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var dn={enumerable:!0,configurable:!0,get:S,set:S};function vn(e,t,n){dn.get=function(){return this[t][n]},dn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,dn)}function hn(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&$e(!1);var o=function(o){i.push(o);var a=Ie(o,t,n,e);xe(r,o,a),o in e||vn(e,"_props",o)};for(var a in t)o(a);$e(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?S:x(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;s(t=e._data="function"==typeof t?function(e,t){le();try{return e.call(t,t)}catch(e){return He(e,t,"data()"),{}}finally{fe()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];r&&y(r,o)||(a=void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&vn(e,"_data",o))}var a;Ce(t,!0)}(e):Ce(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=te();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new pn(e,a||S,S,mn)),i in e||yn(e,i,o)}}(e,t.computed),t.watch&&t.watch!==Y&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)bn(e,n,r[i]);else bn(e,n,r)}}(e,t.watch)}var mn={lazy:!0};function yn(e,t,n){var r=!te();"function"==typeof n?(dn.get=r?gn(t):_n(n),dn.set=S):(dn.get=n.get?r&&!1!==n.cache?gn(t):_n(n.get):S,dn.set=n.set||S),Object.defineProperty(e,t,dn)}function gn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ce.target&&t.depend(),t.value}}function _n(e){return function(){return e.call(this,this)}}function bn(e,t,n,r){return s(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var $n=0;function wn(e){var t=e.options;if(e.super){var n=wn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&A(e.extendOptions,r),(t=e.options=De(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function Cn(e){this._init(e)}function xn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=De(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)vn(e.prototype,"_props",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)yn(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,I.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=A({},a.options),i[r]=a,a}}function kn(e){return e&&(e.Ctor.options.name||e.tag)}function An(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:(n=e,"[object RegExp]"===a.call(n)&&e.test(t));var n}function On(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=a.name;s&&!t(s)&&Sn(n,o,r,i)}}}function Sn(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,h(n,t)}!function(t){t.prototype._init=function(t){var n=this;n._uid=$n++,n._isVue=!0,t&&t._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(n,t):n.$options=De(wn(n.constructor),t||{},n),n._renderProxy=n,n._self=n,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(n),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Wt(e,t)}(n),function(t){t._vnode=null,t._staticTrees=null;var n=t.$options,r=t.$vnode=n._parentVnode,i=r&&r.context;t.$slots=lt(n._renderChildren,i),t.$scopedSlots=e,t._c=function(e,n,r,i){return Ht(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Ht(t,e,n,r,i,!0)};var o=r&&r.data;xe(t,"$attrs",o&&o.attrs||e,null,!0),xe(t,"$listeners",n._parentListeners||e,null,!0)}(n),Qt(n,"beforeCreate"),function(e){var t=ut(e.$options.inject,e);t&&($e(!1),Object.keys(t).forEach(function(n){xe(e,n,t[n])}),$e(!0))}(n),hn(n),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(n),Qt(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}(Cn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=ke,e.prototype.$delete=Ae,e.prototype.$watch=function(e,t,n){if(s(t))return bn(this,e,t,n);(n=n||{}).user=!0;var r=new pn(this,e,t,n);if(n.immediate){var i='callback for immediate watcher "'+r.expression+'"';le(),Be(t,this,[r.value],this,i),fe()}return function(){r.teardown()}}}(Cn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var s=a.length;s--;)if((o=a[s])===t||o.fn===t){a.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this._events[e];if(t){t=t.length>1?k(t):t;for(var n=k(arguments,1),r='event handler for "'+e+'"',i=0,o=t.length;i<o;i++)Be(t[i],this,n,this,r)}return this}}(Cn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Gt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Qt(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||h(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Qt(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(Cn),function(e){Nt(e.prototype),e.prototype.$nextTick=function(e){return Qe(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=dt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Ut=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){He(n,t,"render"),e=t._vnode}finally{Ut=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=ve()),e.parent=i,e}}(Cn);var Tn=[String,RegExp,Array],Nn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Tn,exclude:Tn,max:[String,Number]},methods:{cacheVNode:function(){var e=this.cache,t=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var i=n.tag,o=n.componentInstance,a=n.componentOptions;e[r]={name:kn(a),tag:i,componentInstance:o},t.push(r),this.max&&t.length>parseInt(this.max)&&Sn(e,t[0],t,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Sn(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(t){On(e,function(e){return An(t,e)})}),this.$watch("exclude",function(t){On(e,function(e){return!An(t,e)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=zt(e),n=t&&t.componentOptions;if(n){var r=kn(n),i=this.include,o=this.exclude;if(i&&(!r||!An(i,r))||o&&r&&An(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,h(s,c),s.push(c)):(this.vnodeToCache=t,this.keyToCache=c),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return F}};Object.defineProperty(e,"config",t),e.util={warn:ae,extend:A,mergeOptions:De,defineReactive:xe},e.set=ke,e.delete=Ae,e.nextTick=Qe,e.observable=function(e){return Ce(e),e},e.options=Object.create(null),I.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,A(e.options.components,Nn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=De(this.options,e),this}}(e),xn(e),function(e){I.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&s(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}(e)}(Cn),Object.defineProperty(Cn.prototype,"$isServer",{get:te}),Object.defineProperty(Cn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Cn,"FunctionalRenderContext",{value:Et}),Cn.version="2.6.14";var En=p("style,class"),jn=p("input,textarea,option,select,progress"),Dn=function(e,t,n){return"value"===n&&jn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Ln=p("contenteditable,draggable,spellcheck"),In=p("events,caret,typing,plaintext-only"),Mn=function(e,t){return Bn(t)||"false"===t?"false":"contenteditable"===e&&In(t)?t:"true"},Fn=p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Pn="http://www.w3.org/1999/xlink",Rn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Hn=function(e){return Rn(e)?e.slice(6,e.length):""},Bn=function(e){return null==e||!1===e};function Un(e){for(var t=e.data,r=e,i=e;n(i.componentInstance);)(i=i.componentInstance._vnode)&&i.data&&(t=Vn(i.data,t));for(;n(r=r.parent);)r&&r.data&&(t=Vn(t,r.data));return function(e,t){if(n(e)||n(t))return zn(e,Kn(t));return""}(t.staticClass,t.class)}function Vn(e,t){return{staticClass:zn(e.staticClass,t.staticClass),class:n(e.class)?[e.class,t.class]:t.class}}function zn(e,t){return e?t?e+" "+t:e:t||""}function Kn(e){return Array.isArray(e)?function(e){for(var t,r="",i=0,o=e.length;i<o;i++)n(t=Kn(e[i]))&&""!==t&&(r&&(r+=" "),r+=t);return r}(e):o(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Jn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},qn=p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Wn=p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Zn=function(e){return qn(e)||Wn(e)};function Gn(e){return Wn(e)?"svg":"math"===e?"math":void 0}var Xn=Object.create(null);var Yn=p("text,number,password,search,email,tel,url");function Qn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var er=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(Jn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),tr={create:function(e,t){nr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(nr(e,!0),nr(t))},destroy:function(e){nr(e,!0)}};function nr(e,t){var r=e.data.ref;if(n(r)){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[r])?h(a[r],o):a[r]===o&&(a[r]=void 0):e.data.refInFor?Array.isArray(a[r])?a[r].indexOf(o)<0&&a[r].push(o):a[r]=[o]:a[r]=o}}var rr=new pe("",{},[]),ir=["create","activate","update","remove","destroy"];function or(e,i){return e.key===i.key&&e.asyncFactory===i.asyncFactory&&(e.tag===i.tag&&e.isComment===i.isComment&&n(e.data)===n(i.data)&&function(e,t){if("input"!==e.tag)return!0;var r,i=n(r=e.data)&&n(r=r.attrs)&&r.type,o=n(r=t.data)&&n(r=r.attrs)&&r.type;return i===o||Yn(i)&&Yn(o)}(e,i)||r(e.isAsyncPlaceholder)&&t(i.asyncFactory.error))}function ar(e,t,r){var i,o,a={};for(i=t;i<=r;++i)n(o=e[i].key)&&(a[o]=i);return a}var sr={create:cr,update:cr,destroy:function(e){cr(e,rr)}};function cr(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===rr,a=t===rr,s=lr(e.data.directives,e.context),c=lr(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,pr(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(pr(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)pr(u[n],"inserted",t,e)};o?ot(t,"insert",f):f()}l.length&&ot(t,"postpatch",function(){for(var n=0;n<l.length;n++)pr(l[n],"componentUpdated",t,e)});if(!o)for(n in s)c[n]||pr(s[n],"unbind",e,e,a)}(e,t)}var ur=Object.create(null);function lr(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=ur),i[fr(r)]=r,r.def=Le(t.$options,"directives",r.name);return i}function fr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function pr(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){He(r,n.context,"directive "+e.name+" "+t+" hook")}}var dr=[tr,sr];function vr(e,r){var i=r.componentOptions;if(!(n(i)&&!1===i.Ctor.options.inheritAttrs||t(e.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=e.data.attrs||{},u=r.data.attrs||{};for(o in n(u.__ob__)&&(u=r.data.attrs=A({},u)),u)a=u[o],c[o]!==a&&hr(s,o,a,r.data.pre);for(o in(q||Z)&&u.value!==c.value&&hr(s,"value",u.value),c)t(u[o])&&(Rn(o)?s.removeAttributeNS(Pn,Hn(o)):Ln(o)||s.removeAttribute(o))}}function hr(e,t,n,r){r||e.tagName.indexOf("-")>-1?mr(e,t,n):Fn(t)?Bn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Ln(t)?e.setAttribute(t,Mn(t,n)):Rn(t)?Bn(n)?e.removeAttributeNS(Pn,Hn(t)):e.setAttributeNS(Pn,t,n):mr(e,t,n)}function mr(e,t,n){if(Bn(n))e.removeAttribute(t);else{if(q&&!W&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var yr={create:vr,update:vr};function gr(e,r){var i=r.elm,o=r.data,a=e.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Un(r),c=i._transitionClasses;n(c)&&(s=zn(s,Kn(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}var _r,br,$r,wr,Cr,xr,kr={create:gr,update:gr},Ar=/[\w).+\-_$\]]/;function Or(e){var t,n,r,i,o,a=!1,s=!1,c=!1,u=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(u)47===t&&92!==n&&(u=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var v=r-1,h=void 0;v>=0&&" "===(h=e.charAt(v));v--);h&&Ar.test(h)||(u=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Sr(i,o[r]);return i}function Sr(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function Tr(e,t){console.error("[Vue compiler]: "+e)}function Nr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Er(e,t,n,r,i){(e.props||(e.props=[])).push(Hr({name:t,value:n,dynamic:i},r)),e.plain=!1}function jr(e,t,n,r,i){(i?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Hr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Dr(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(Hr({name:t,value:n},r))}function Lr(e,t,n,r,i,o,a,s){(e.directives||(e.directives=[])).push(Hr({name:t,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:a},s)),e.plain=!1}function Ir(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function Mr(t,n,r,i,o,a,s,c){var u;(i=i||e).right?c?n="("+n+")==='click'?'contextmenu':("+n+")":"click"===n&&(n="contextmenu",delete i.right):i.middle&&(c?n="("+n+")==='click'?'mouseup':("+n+")":"click"===n&&(n="mouseup")),i.capture&&(delete i.capture,n=Ir("!",n,c)),i.once&&(delete i.once,n=Ir("~",n,c)),i.passive&&(delete i.passive,n=Ir("&",n,c)),i.native?(delete i.native,u=t.nativeEvents||(t.nativeEvents={})):u=t.events||(t.events={});var l=Hr({value:r.trim(),dynamic:c},s);i!==e&&(l.modifiers=i);var f=u[n];Array.isArray(f)?o?f.unshift(l):f.push(l):u[n]=f?o?[l,f]:[f,l]:l,t.plain=!1}function Fr(e,t,n){var r=Pr(e,":"+t)||Pr(e,"v-bind:"+t);if(null!=r)return Or(r);if(!1!==n){var i=Pr(e,t);if(null!=i)return JSON.stringify(i)}}function Pr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Rr(e,t){for(var n=e.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(t.test(o.name))return n.splice(r,1),o}}function Hr(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Br(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=Ur(t,o);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+a+"}"}}function Ur(e,t){var n=function(e){if(e=e.trim(),_r=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<_r-1)return(wr=e.lastIndexOf("."))>-1?{exp:e.slice(0,wr),key:'"'+e.slice(wr+1)+'"'}:{exp:e,key:null};br=e,wr=Cr=xr=0;for(;!zr();)Kr($r=Vr())?qr($r):91===$r&&Jr($r);return{exp:e.slice(0,Cr),key:e.slice(Cr+1,xr)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Vr(){return br.charCodeAt(++wr)}function zr(){return wr>=_r}function Kr(e){return 34===e||39===e}function Jr(e){var t=1;for(Cr=wr;!zr();)if(Kr(e=Vr()))qr(e);else if(91===e&&t++,93===e&&t--,0===t){xr=wr;break}}function qr(e){for(var t=e;!zr()&&(e=Vr())!==t;);}var Wr,Zr="__r",Gr="__c";function Xr(e,t,n){var r=Wr;return function i(){null!==t.apply(null,arguments)&&ei(e,i,n,r)}}var Yr=Ke&&!(X&&Number(X[1])<=53);function Qr(e,t,n,r){if(Yr){var i=sn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}Wr.addEventListener(e,t,Q?{capture:n,passive:r}:n)}function ei(e,t,n,r){(r||Wr).removeEventListener(e,t._wrapper||t,n)}function ti(e,r){if(!t(e.data.on)||!t(r.data.on)){var i=r.data.on||{},o=e.data.on||{};Wr=r.elm,function(e){if(n(e[Zr])){var t=q?"change":"input";e[t]=[].concat(e[Zr],e[t]||[]),delete e[Zr]}n(e[Gr])&&(e.change=[].concat(e[Gr],e.change||[]),delete e[Gr])}(i),it(i,o,Qr,ei,Xr,r.context),Wr=void 0}}var ni,ri={create:ti,update:ti};function ii(e,r){if(!t(e.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=e.data.domProps||{},c=r.data.domProps||{};for(i in n(c.__ob__)&&(c=r.data.domProps=A({},c)),s)i in c||(a[i]="");for(i in c){if(o=c[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i&&"PROGRESS"!==a.tagName){a._value=o;var u=t(o)?"":String(o);oi(a,u)&&(a.value=u)}else if("innerHTML"===i&&Wn(a.tagName)&&t(a.innerHTML)){(ni=ni||document.createElement("div")).innerHTML="<svg>"+o+"</svg>";for(var l=ni.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}else if(o!==s[i])try{a[i]=o}catch(e){}}}}function oi(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var r=e.value,i=e._vModifiers;if(n(i)){if(i.number)return f(r)!==f(t);if(i.trim)return r.trim()!==t.trim()}return r!==t}(e,t))}var ai={create:ii,update:ii},si=g(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function ci(e){var t=ui(e.style);return e.staticStyle?A(e.staticStyle,t):t}function ui(e){return Array.isArray(e)?O(e):"string"==typeof e?si(e):e}var li,fi=/^--/,pi=/\s*!important$/,di=function(e,t,n){if(fi.test(t))e.style.setProperty(t,n);else if(pi.test(n))e.style.setProperty(C(t),n.replace(pi,""),"important");else{var r=hi(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},vi=["Webkit","Moz","ms"],hi=g(function(e){if(li=li||document.createElement("div").style,"filter"!==(e=b(e))&&e in li)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<vi.length;n++){var r=vi[n]+t;if(r in li)return r}});function mi(e,r){var i=r.data,o=e.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=ui(r.data.style)||{};r.data.normalizedStyle=n(p.__ob__)?A({},p):p;var d=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=ci(i.data))&&A(r,n);(n=ci(e.data))&&A(r,n);for(var o=e;o=o.parent;)o.data&&(n=ci(o.data))&&A(r,n);return r}(r,!0);for(s in f)t(d[s])&&di(c,s,"");for(s in d)(a=d[s])!==f[s]&&di(c,s,null==a?"":a)}}var yi={create:mi,update:mi},gi=/\s+/;function _i(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(gi).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function bi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(gi).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function $i(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&A(t,wi(e.name||"v")),A(t,e),t}return"string"==typeof e?wi(e):void 0}}var wi=g(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Ci=V&&!W,xi="transition",ki="animation",Ai="transition",Oi="transitionend",Si="animation",Ti="animationend";Ci&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ai="WebkitTransition",Oi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Si="WebkitAnimation",Ti="webkitAnimationEnd"));var Ni=V?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ei(e){Ni(function(){Ni(e)})}function ji(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),_i(e,t))}function Di(e,t){e._transitionClasses&&h(e._transitionClasses,t),bi(e,t)}function Li(e,t,n){var r=Mi(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===xi?Oi:Ti,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}var Ii=/\b(transform|all)(,|$)/;function Mi(e,t){var n,r=window.getComputedStyle(e),i=(r[Ai+"Delay"]||"").split(", "),o=(r[Ai+"Duration"]||"").split(", "),a=Fi(i,o),s=(r[Si+"Delay"]||"").split(", "),c=(r[Si+"Duration"]||"").split(", "),u=Fi(s,c),l=0,f=0;return t===xi?a>0&&(n=xi,l=a,f=o.length):t===ki?u>0&&(n=ki,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?xi:ki:null)?n===xi?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===xi&&Ii.test(r[Ai+"Property"])}}function Fi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Pi(t)+Pi(e[n])}))}function Pi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ri(e,r){var i=e.elm;n(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=$i(e.data.transition);if(!t(a)&&!n(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,l=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,C=a.appearCancelled,x=a.duration,k=Zt,A=Zt.$vnode;A&&A.parent;)k=A.context,A=A.parent;var O=!k._isMounted||!e.isRootInsert;if(!O||$||""===$){var S=O&&d?d:u,T=O&&h?h:p,N=O&&v?v:l,E=O&&b||m,j=O&&"function"==typeof $?$:y,L=O&&w||g,I=O&&C||_,M=f(o(x)?x.enter:x),F=!1!==s&&!W,P=Ui(j),R=i._enterCb=D(function(){F&&(Di(i,N),Di(i,T)),R.cancelled?(F&&Di(i,S),I&&I(i)):L&&L(i),i._enterCb=null});e.data.show||ot(e,"insert",function(){var t=i.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(i,R)}),E&&E(i),F&&(ji(i,S),ji(i,T),Ei(function(){Di(i,S),R.cancelled||(ji(i,N),P||(Bi(M)?setTimeout(R,M):Li(i,c,R)))})),e.data.show&&(r&&r(),j&&j(i,R)),F||P||R()}}}function Hi(e,r){var i=e.elm;n(i._enterCb)&&(i._enterCb.cancelled=!0,i._enterCb());var a=$i(e.data.transition);if(t(a)||1!==i.nodeType)return r();if(!n(i._leaveCb)){var s=a.css,c=a.type,u=a.leaveClass,l=a.leaveToClass,p=a.leaveActiveClass,d=a.beforeLeave,v=a.leave,h=a.afterLeave,m=a.leaveCancelled,y=a.delayLeave,g=a.duration,_=!1!==s&&!W,b=Ui(v),$=f(o(g)?g.leave:g),w=i._leaveCb=D(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(Di(i,l),Di(i,p)),w.cancelled?(_&&Di(i,u),m&&m(i)):(r(),h&&h(i)),i._leaveCb=null});y?y(C):C()}function C(){w.cancelled||(!e.data.show&&i.parentNode&&((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),d&&d(i),_&&(ji(i,u),ji(i,p),Ei(function(){Di(i,u),w.cancelled||(ji(i,l),b||(Bi($)?setTimeout(w,$):Li(i,c,w)))})),v&&v(i,w),_||b||w())}}function Bi(e){return"number"==typeof e&&!isNaN(e)}function Ui(e){if(t(e))return!1;var r=e.fns;return n(r)?Ui(Array.isArray(r)?r[0]:r):(e._length||e.length)>1}function Vi(e,t){!0!==t.data.show&&Ri(t)}var zi=function(e){var o,a,s={},c=e.modules,u=e.nodeOps;for(o=0;o<ir.length;++o)for(s[ir[o]]=[],a=0;a<c.length;++a)n(c[a][ir[o]])&&s[ir[o]].push(c[a][ir[o]]);function l(e){var t=u.parentNode(e);n(t)&&u.removeChild(t,e)}function f(e,t,i,o,a,c,l){if(n(e.elm)&&n(c)&&(e=c[l]=me(e)),e.isRootInsert=!a,!function(e,t,i,o){var a=e.data;if(n(a)){var c=n(e.componentInstance)&&a.keepAlive;if(n(a=a.hook)&&n(a=a.init)&&a(e,!1),n(e.componentInstance))return d(e,t),v(i,e.elm,o),r(c)&&function(e,t,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,n(o=a.data)&&n(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](rr,a);t.push(a);break}v(r,e.elm,i)}(e,t,i,o),!0}}(e,t,i,o)){var f=e.data,p=e.children,m=e.tag;n(m)?(e.elm=e.ns?u.createElementNS(e.ns,m):u.createElement(m,e),g(e),h(e,p,t),n(f)&&y(e,t),v(i,e.elm,o)):r(e.isComment)?(e.elm=u.createComment(e.text),v(i,e.elm,o)):(e.elm=u.createTextNode(e.text),v(i,e.elm,o))}}function d(e,t){n(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,m(e)?(y(e,t),g(e)):(nr(e),t.push(e))}function v(e,t,r){n(e)&&(n(r)?u.parentNode(r)===e&&u.insertBefore(e,t,r):u.appendChild(e,t))}function h(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r);else i(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function m(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return n(e.tag)}function y(e,t){for(var r=0;r<s.create.length;++r)s.create[r](rr,e);n(o=e.data.hook)&&(n(o.create)&&o.create(rr,e),n(o.insert)&&t.push(e))}function g(e){var t;if(n(t=e.fnScopeId))u.setStyleScope(e.elm,t);else for(var r=e;r;)n(t=r.context)&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),r=r.parent;n(t=Zt)&&t!==e.context&&t!==e.fnContext&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function _(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function b(e){var t,r,i=e.data;if(n(i))for(n(t=i.hook)&&n(t=t.destroy)&&t(e),t=0;t<s.destroy.length;++t)s.destroy[t](e);if(n(t=e.children))for(r=0;r<e.children.length;++r)b(e.children[r])}function $(e,t,r){for(;t<=r;++t){var i=e[t];n(i)&&(n(i.tag)?(w(i),b(i)):l(i.elm))}}function w(e,t){if(n(t)||n(e.data)){var r,i=s.remove.length+1;for(n(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),n(r=e.componentInstance)&&n(r=r._vnode)&&n(r.data)&&w(r,t),r=0;r<s.remove.length;++r)s.remove[r](e,t);n(r=e.data.hook)&&n(r=r.remove)?r(e,t):t()}else l(e.elm)}function C(e,t,r,i){for(var o=r;o<i;o++){var a=t[o];if(n(a)&&or(e,a))return o}}function x(e,i,o,a,c,l){if(e!==i){n(i.elm)&&n(a)&&(i=a[c]=me(i));var p=i.elm=e.elm;if(r(e.isAsyncPlaceholder))n(i.asyncFactory.resolved)?O(e.elm,i,o):i.isAsyncPlaceholder=!0;else if(r(i.isStatic)&&r(e.isStatic)&&i.key===e.key&&(r(i.isCloned)||r(i.isOnce)))i.componentInstance=e.componentInstance;else{var d,v=i.data;n(v)&&n(d=v.hook)&&n(d=d.prepatch)&&d(e,i);var h=e.children,y=i.children;if(n(v)&&m(i)){for(d=0;d<s.update.length;++d)s.update[d](e,i);n(d=v.hook)&&n(d=d.update)&&d(e,i)}t(i.text)?n(h)&&n(y)?h!==y&&function(e,r,i,o,a){for(var s,c,l,p=0,d=0,v=r.length-1,h=r[0],m=r[v],y=i.length-1,g=i[0],b=i[y],w=!a;p<=v&&d<=y;)t(h)?h=r[++p]:t(m)?m=r[--v]:or(h,g)?(x(h,g,o,i,d),h=r[++p],g=i[++d]):or(m,b)?(x(m,b,o,i,y),m=r[--v],b=i[--y]):or(h,b)?(x(h,b,o,i,y),w&&u.insertBefore(e,h.elm,u.nextSibling(m.elm)),h=r[++p],b=i[--y]):or(m,g)?(x(m,g,o,i,d),w&&u.insertBefore(e,m.elm,h.elm),m=r[--v],g=i[++d]):(t(s)&&(s=ar(r,p,v)),t(c=n(g.key)?s[g.key]:C(g,r,p,v))?f(g,o,e,h.elm,!1,i,d):or(l=r[c],g)?(x(l,g,o,i,d),r[c]=void 0,w&&u.insertBefore(e,l.elm,h.elm)):f(g,o,e,h.elm,!1,i,d),g=i[++d]);p>v?_(e,t(i[y+1])?null:i[y+1].elm,i,d,y,o):d>y&&$(r,p,v)}(p,h,y,o,l):n(y)?(n(e.text)&&u.setTextContent(p,""),_(p,null,y,0,y.length-1,o)):n(h)?$(h,0,h.length-1):n(e.text)&&u.setTextContent(p,""):e.text!==i.text&&u.setTextContent(p,i.text),n(v)&&n(d=v.hook)&&n(d=d.postpatch)&&d(e,i)}}}function k(e,t,i){if(r(i)&&n(e.parent))e.parent.data.pendingInsert=t;else for(var o=0;o<t.length;++o)t[o].data.hook.insert(t[o])}var A=p("attrs,class,staticClass,staticStyle,key");function O(e,t,i,o){var a,s=t.tag,c=t.data,u=t.children;if(o=o||c&&c.pre,t.elm=e,r(t.isComment)&&n(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(n(c)&&(n(a=c.hook)&&n(a=a.init)&&a(t,!0),n(a=t.componentInstance)))return d(t,i),!0;if(n(s)){if(n(u))if(e.hasChildNodes())if(n(a=c)&&n(a=a.domProps)&&n(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var l=!0,f=e.firstChild,p=0;p<u.length;p++){if(!f||!O(f,u[p],i,o)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(t,u,i);if(n(c)){var v=!1;for(var m in c)if(!A(m)){v=!0,y(t,i);break}!v&&c.class&&tt(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,i,o,a){if(!t(i)){var c,l=!1,p=[];if(t(e))l=!0,f(i,p);else{var d=n(e.nodeType);if(!d&&or(e,i))x(e,i,p,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(L)&&(e.removeAttribute(L),o=!0),r(o)&&O(e,i,p))return k(i,p,!0),e;c=e,e=new pe(u.tagName(c).toLowerCase(),{},[],void 0,c)}var v=e.elm,h=u.parentNode(v);if(f(i,p,v._leaveCb?null:h,u.nextSibling(v)),n(i.parent))for(var y=i.parent,g=m(i);y;){for(var _=0;_<s.destroy.length;++_)s.destroy[_](y);if(y.elm=i.elm,g){for(var w=0;w<s.create.length;++w)s.create[w](rr,y);var C=y.data.hook.insert;if(C.merged)for(var A=1;A<C.fns.length;A++)C.fns[A]()}else nr(y);y=y.parent}n(h)?$([e],0,0):n(e.tag)&&b(e)}}return k(i,p,l),i.elm}n(e)&&b(e)}}({nodeOps:er,modules:[yr,kr,ri,ai,yi,V?{create:Vi,activate:Vi,remove:function(e,t){!0!==e.data.show?Hi(e,t):t()}}:{}].concat(dr)});W&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Yi(e,"input")});var Ki={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ot(n,"postpatch",function(){Ki.componentUpdated(e,t,n)}):Ji(e,t,n.context),e._vOptions=[].map.call(e.options,Zi)):("textarea"===n.tag||Yn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Gi),e.addEventListener("compositionend",Xi),e.addEventListener("change",Xi),W&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ji(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Zi);if(i.some(function(e,t){return!E(e,r[t])}))(e.multiple?t.value.some(function(e){return Wi(e,i)}):t.value!==t.oldValue&&Wi(t.value,i))&&Yi(e,"change")}}};function Ji(e,t,n){qi(e,t,n),(q||Z)&&setTimeout(function(){qi(e,t,n)},0)}function qi(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=j(r,Zi(a))>-1,a.selected!==o&&(a.selected=o);else if(E(Zi(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Wi(e,t){return t.every(function(t){return!E(t,e)})}function Zi(e){return"_value"in e?e._value:e.value}function Gi(e){e.target.composing=!0}function Xi(e){e.target.composing&&(e.target.composing=!1,Yi(e.target,"input"))}function Yi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Qi(e){return!e.componentInstance||e.data&&e.data.transition?e:Qi(e.componentInstance._vnode)}var eo={model:Ki,show:{bind:function(e,t,n){var r=t.value,i=(n=Qi(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ri(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Qi(n)).data&&n.data.transition?(n.data.show=!0,r?Ri(n,function(){e.style.display=e.__vOriginalDisplay}):Hi(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},to={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function no(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?no(zt(t.children)):e}function ro(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[b(o)]=i[o];return t}function io(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var oo=function(e){return e.tag||pt(e)},ao=function(e){return"show"===e.name},so={name:"transition",props:to,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(oo)).length){var r=this.mode,o=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return o;var a=no(o);if(!a)return o;if(this._leaving)return io(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=ro(this),u=this._vnode,l=no(u);if(a.data.directives&&a.data.directives.some(ao)&&(a.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(a,l)&&!pt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=A({},c);if("out-in"===r)return this._leaving=!0,ot(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),io(e,o);if("in-out"===r){if(pt(a))return u;var p,d=function(){p()};ot(c,"afterEnter",d),ot(c,"enterCancelled",d),ot(f,"delayLeave",function(e){p=e})}}return o}}},co=A({tag:String,moveClass:String},to);function uo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function lo(e){e.data.newPos=e.elm.getBoundingClientRect()}function fo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete co.mode;var po={Transition:so,TransitionGroup:{props:co,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Gt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=ro(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(uo),e.forEach(lo),e.forEach(fo),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;ji(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Oi,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Oi,e),n._moveCb=null,Di(n,t))})}}))},methods:{hasMove:function(e,t){if(!Ci)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){bi(n,e)}),_i(n,t),n.style.display="none",this.$el.appendChild(n);var r=Mi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Cn.config.mustUseProp=Dn,Cn.config.isReservedTag=Zn,Cn.config.isReservedAttr=En,Cn.config.getTagNamespace=Gn,Cn.config.isUnknownElement=function(e){if(!V)return!0;if(Zn(e))return!1;if(e=e.toLowerCase(),null!=Xn[e])return Xn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Xn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Xn[e]=/HTMLUnknownElement/.test(t.toString())},A(Cn.options.directives,eo),A(Cn.options.components,po),Cn.prototype.__patch__=V?zi:S,Cn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ve),Qt(e,"beforeMount"),r=function(){e._update(e._render(),n)},new pn(e,r,S,{before:function(){e._isMounted&&!e._isDestroyed&&Qt(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Qt(e,"mounted")),e}(this,e=e&&V?Qn(e):void 0,t)},V&&setTimeout(function(){F.devtools&&ne&&ne.emit("init",Cn)},0);var vo=/\{\{((?:.|\r?\n)+?)\}\}/g,ho=/[-.*+?^${}()|[\]\/\\]/g,mo=g(function(e){var t=e[0].replace(ho,"\\$&"),n=e[1].replace(ho,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});var yo={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Pr(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Fr(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var go,_o={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Pr(e,"style");n&&(e.staticStyle=JSON.stringify(si(n)));var r=Fr(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},bo=function(e){return(go=go||document.createElement("div")).innerHTML=e,go.textContent},$o=p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),wo=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Co=p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),xo=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,ko=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Ao="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+P.source+"]*",Oo="((?:"+Ao+"\\:)?"+Ao+")",So=new RegExp("^<"+Oo),To=/^\s*(\/?)>/,No=new RegExp("^<\\/"+Oo+"[^>]*>"),Eo=/^<!DOCTYPE [^>]+>/i,jo=/^<!\--/,Do=/^<!\[/,Lo=p("script,style,textarea",!0),Io={},Mo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Fo=/&(?:lt|gt|quot|amp|#39);/g,Po=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Ro=p("pre,textarea",!0),Ho=function(e,t){return e&&Ro(e)&&"\n"===t[0]};function Bo(e,t){var n=t?Po:Fo;return e.replace(n,function(e){return Mo[e]})}var Uo,Vo,zo,Ko,Jo,qo,Wo,Zo,Go=/^@|^v-on:/,Xo=/^v-|^@|^:|^#/,Yo=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Qo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,ea=/^\(|\)$/g,ta=/^\[.*\]$/,na=/:(.*)$/,ra=/^:|^\.|^v-bind:/,ia=/\.[^.\]]+(?=[^\]]*$)/g,oa=/^v-slot(:|$)|^#/,aa=/[\r\n]/,sa=/[ \f\t\r\n]+/g,ca=g(bo),ua="_empty_";function la(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:ya(t),rawAttrsMap:{},parent:n,children:[]}}function fa(e,t){Uo=t.warn||Tr,qo=t.isPreTag||T,Wo=t.mustUseProp||T,Zo=t.getTagNamespace||T;t.isReservedTag;zo=Nr(t.modules,"transformNode"),Ko=Nr(t.modules,"preTransformNode"),Jo=Nr(t.modules,"postTransformNode"),Vo=t.delimiters;var n,r,i=[],o=!1!==t.preserveWhitespace,a=t.whitespace,s=!1,c=!1;function u(e){if(l(e),s||e.processed||(e=pa(e,t)),i.length||e===n||n.if&&(e.elseif||e.else)&&va(n,{exp:e.elseif,block:e}),r&&!e.forbidden)if(e.elseif||e.else)a=e,(u=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(r.children))&&u.if&&va(u,{exp:a.elseif,block:a});else{if(e.slotScope){var o=e.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[o]=e}r.children.push(e),e.parent=r}var a,u;e.children=e.children.filter(function(e){return!e.slotScope}),l(e),e.pre&&(s=!1),qo(e.tag)&&(c=!1);for(var f=0;f<Jo.length;f++)Jo[f](e,t)}function l(e){if(!c)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}return function(e,t){for(var n,r,i=[],o=t.expectHTML,a=t.isUnaryTag||T,s=t.canBeLeftOpenTag||T,c=0;e;){if(n=e,r&&Lo(r)){var u=0,l=r.toLowerCase(),f=Io[l]||(Io[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=e.replace(f,function(e,n,r){return u=r.length,Lo(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ho(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});c+=e.length-p.length,e=p,A(l,c-u,c)}else{var d=e.indexOf("<");if(0===d){if(jo.test(e)){var v=e.indexOf("--\x3e");if(v>=0){t.shouldKeepComment&&t.comment(e.substring(4,v),c,c+v+3),C(v+3);continue}}if(Do.test(e)){var h=e.indexOf("]>");if(h>=0){C(h+2);continue}}var m=e.match(Eo);if(m){C(m[0].length);continue}var y=e.match(No);if(y){var g=c;C(y[0].length),A(y[1],g,c);continue}var _=x();if(_){k(_),Ho(_.tagName,e)&&C(1);continue}}var b=void 0,$=void 0,w=void 0;if(d>=0){for($=e.slice(d);!(No.test($)||So.test($)||jo.test($)||Do.test($)||(w=$.indexOf("<",1))<0);)d+=w,$=e.slice(d);b=e.substring(0,d)}d<0&&(b=e),b&&C(b.length),t.chars&&b&&t.chars(b,c-b.length,c)}if(e===n){t.chars&&t.chars(e);break}}function C(t){c+=t,e=e.substring(t)}function x(){var t=e.match(So);if(t){var n,r,i={tagName:t[1],attrs:[],start:c};for(C(t[0].length);!(n=e.match(To))&&(r=e.match(ko)||e.match(xo));)r.start=c,C(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],C(n[0].length),i.end=c,i}}function k(e){var n=e.tagName,c=e.unarySlash;o&&("p"===r&&Co(n)&&A(r),s(n)&&r===n&&A(n));for(var u=a(n)||!!c,l=e.attrs.length,f=new Array(l),p=0;p<l;p++){var d=e.attrs[p],v=d[3]||d[4]||d[5]||"",h="a"===n&&"href"===d[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[p]={name:d[1],value:Bo(v,h)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f,start:e.start,end:e.end}),r=n),t.start&&t.start(n,f,u,e.start,e.end)}function A(e,n,o){var a,s;if(null==n&&(n=c),null==o&&(o=c),e)for(s=e.toLowerCase(),a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var u=i.length-1;u>=a;u--)t.end&&t.end(i[u].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,o):"p"===s&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}A()}(e,{warn:Uo,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,o,a,l,f){var p=r&&r.ns||Zo(e);q&&"svg"===p&&(o=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];ga.test(r.name)||(r.name=r.name.replace(_a,""),t.push(r))}return t}(o));var d,v=la(e,o,r);p&&(v.ns=p),"style"!==(d=v).tag&&("script"!==d.tag||d.attrsMap.type&&"text/javascript"!==d.attrsMap.type)||te()||(v.forbidden=!0);for(var h=0;h<Ko.length;h++)v=Ko[h](v,t)||v;s||(!function(e){null!=Pr(e,"v-pre")&&(e.pre=!0)}(v),v.pre&&(s=!0)),qo(v.tag)&&(c=!0),s?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),i=0;i<n;i++)r[i]={name:t[i].name,value:JSON.stringify(t[i].value)},null!=t[i].start&&(r[i].start=t[i].start,r[i].end=t[i].end);else e.pre||(e.plain=!0)}(v):v.processed||(da(v),function(e){var t=Pr(e,"v-if");if(t)e.if=t,va(e,{exp:t,block:e});else{null!=Pr(e,"v-else")&&(e.else=!0);var n=Pr(e,"v-else-if");n&&(e.elseif=n)}}(v),function(e){null!=Pr(e,"v-once")&&(e.once=!0)}(v)),n||(n=v),a?u(v):(r=v,i.push(v))},end:function(e,t,n){var o=i[i.length-1];i.length-=1,r=i[i.length-1],u(o)},chars:function(e,t,n){if(r&&(!q||"textarea"!==r.tag||r.attrsMap.placeholder!==e)){var i,u,l,f=r.children;if(e=c||e.trim()?"script"===(i=r).tag||"style"===i.tag?e:ca(e):f.length?a?"condense"===a&&aa.test(e)?"":" ":o?" ":"":"")c||"condense"!==a||(e=e.replace(sa," ")),!s&&" "!==e&&(u=function(e,t){var n=t?mo(t):vo;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){(i=r.index)>c&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var u=Or(r[1].trim());a.push("_s("+u+")"),s.push({"@binding":u}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e,Vo))?l={type:2,expression:u.expression,tokens:u.tokens,text:e}:" "===e&&f.length&&" "===f[f.length-1].text||(l={type:3,text:e}),l&&f.push(l)}},comment:function(e,t,n){if(r){var i={type:3,text:e,isComment:!0};r.children.push(i)}}}),n}function pa(e,t){var n,r;(r=Fr(n=e,"key"))&&(n.key=r),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,function(e){var t=Fr(e,"ref");t&&(e.ref=t,e.refInFor=function(e){var t=e;for(;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(e))}(e),function(e){var t;"template"===e.tag?(t=Pr(e,"scope"),e.slotScope=t||Pr(e,"slot-scope")):(t=Pr(e,"slot-scope"))&&(e.slotScope=t);var n=Fr(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||jr(e,"slot",n,function(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}(e,"slot")));if("template"===e.tag){var r=Rr(e,oa);if(r){var i=ha(r),o=i.name,a=i.dynamic;e.slotTarget=o,e.slotTargetDynamic=a,e.slotScope=r.value||ua}}else{var s=Rr(e,oa);if(s){var c=e.scopedSlots||(e.scopedSlots={}),u=ha(s),l=u.name,f=u.dynamic,p=c[l]=la("template",[],e);p.slotTarget=l,p.slotTargetDynamic=f,p.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=p,!0}),p.slotScope=s.value||ua,e.children=[],e.plain=!1}}}(e),function(e){"slot"===e.tag&&(e.slotName=Fr(e,"name"))}(e),function(e){var t;(t=Fr(e,"is"))&&(e.component=t);null!=Pr(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var i=0;i<zo.length;i++)e=zo[i](e,t)||e;return function(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Xo.test(r))if(e.hasBindings=!0,(a=ma(r.replace(Xo,"")))&&(r=r.replace(ia,"")),ra.test(r))r=r.replace(ra,""),o=Or(o),(c=ta.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!c&&"innerHtml"===(r=b(r))&&(r="innerHTML"),a.camel&&!c&&(r=b(r)),a.sync&&(s=Ur(o,"$event"),c?Mr(e,'"update:"+('+r+")",s,null,!1,0,u[t],!0):(Mr(e,"update:"+b(r),s,null,!1,0,u[t]),C(r)!==b(r)&&Mr(e,"update:"+C(r),s,null,!1,0,u[t])))),a&&a.prop||!e.component&&Wo(e.tag,e.attrsMap.type,r)?Er(e,r,o,u[t],c):jr(e,r,o,u[t],c);else if(Go.test(r))r=r.replace(Go,""),(c=ta.test(r))&&(r=r.slice(1,-1)),Mr(e,r,o,a,!1,0,u[t],c);else{var l=(r=r.replace(Xo,"")).match(na),f=l&&l[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),ta.test(f)&&(f=f.slice(1,-1),c=!0)),Lr(e,r,i,o,f,c,a,u[t])}else jr(e,r,JSON.stringify(o),u[t]),!e.component&&"muted"===r&&Wo(e.tag,e.attrsMap.type,r)&&Er(e,r,"true",u[t])}(e),e}function da(e){var t;if(t=Pr(e,"v-for")){var n=function(e){var t=e.match(Yo);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(ea,""),i=r.match(Qo);i?(n.alias=r.replace(Qo,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&A(e,n)}}function va(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function ha(e){var t=e.name.replace(oa,"");return t||"#"!==e.name[0]&&(t="default"),ta.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function ma(e){var t=e.match(ia);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function ya(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}var ga=/^xmlns:NS\d+/,_a=/^NS\d+:/;function ba(e){return la(e.tag,e.attrsList.slice(),e.parent)}var $a=[yo,_o,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Fr(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Pr(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Pr(e,"v-else",!0),s=Pr(e,"v-else-if",!0),c=ba(e);da(c),Dr(c,"type","checkbox"),pa(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+o,va(c,{exp:c.if,block:c});var u=ba(e);Pr(u,"v-for",!0),Dr(u,"type","radio"),pa(u,t),va(c,{exp:"("+n+")==='radio'"+o,block:u});var l=ba(e);return Pr(l,"v-for",!0),Dr(l,":type",n),pa(l,t),va(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var wa,Ca,xa={expectHTML:!0,modules:$a,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return Br(e,r,i),!1;if("select"===o)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+Ur(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Mr(e,"change",r,null,!0)}(e,r,i);else if("input"===o&&"checkbox"===a)!function(e,t,n){var r=n&&n.number,i=Fr(e,"value")||"null",o=Fr(e,"true-value")||"true",a=Fr(e,"false-value")||"false";Er(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),Mr(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Ur(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Ur(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Ur(t,"$$c")+"}",null,!0)}(e,r,i);else if("input"===o&&"radio"===a)!function(e,t,n){var r=n&&n.number,i=Fr(e,"value")||"null";Er(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),Mr(e,"change",Ur(t,i),null,!0)}(e,r,i);else if("input"===o||"textarea"===o)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?Zr:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Ur(t,l);c&&(f="if($event.target.composing)return;"+f),Er(e,"value","("+t+")"),Mr(e,u,f,null,!0),(s||a)&&Mr(e,"blur","$forceUpdate()")}(e,r,i);else if(!F.isReservedTag(o))return Br(e,r,i),!1;return!0},text:function(e,t){t.value&&Er(e,"textContent","_s("+t.value+")",t)},html:function(e,t){t.value&&Er(e,"innerHTML","_s("+t.value+")",t)}},isPreTag:function(e){return"pre"===e},isUnaryTag:$o,mustUseProp:Dn,canBeLeftOpenTag:wo,isReservedTag:Zn,getTagNamespace:Gn,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}($a)},ka=g(function(e){return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))});function Aa(e,t){e&&(wa=ka(t.staticKeys||""),Ca=t.isReservedTag||T,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||d(e.tag)||!Ca(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(wa)))}(t);if(1===t.type){if(!Ca(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var Oa=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Sa=/\([^)]*?\);*$/,Ta=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Na={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Ea={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},ja=function(e){return"if("+e+")return null;"},Da={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ja("$event.target !== $event.currentTarget"),ctrl:ja("!$event.ctrlKey"),shift:ja("!$event.shiftKey"),alt:ja("!$event.altKey"),meta:ja("!$event.metaKey"),left:ja("'button' in $event && $event.button !== 0"),middle:ja("'button' in $event && $event.button !== 1"),right:ja("'button' in $event && $event.button !== 2")};function La(e,t){var n=t?"nativeOn:":"on:",r="",i="";for(var o in e){var a=Ia(e[o]);e[o]&&e[o].dynamic?i+=o+","+a+",":r+='"'+o+'":'+a+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function Ia(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return Ia(e)}).join(",")+"]";var t=Ta.test(e.value),n=Oa.test(e.value),r=Ta.test(e.value.replace(Sa,""));if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(Da[s])o+=Da[s],Na[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=ja(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=function(e){return"if(!$event.type.indexOf('key')&&"+e.map(Ma).join("&&")+")return null;"}(a)),o&&(i+=o),"function($event){"+i+(t?"return "+e.value+".apply(null, arguments)":n?"return ("+e.value+").apply(null, arguments)":r?"return "+e.value:e.value)+"}"}return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}function Ma(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Na[e],r=Ea[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var Fa={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:S},Pa=function(e){this.options=e,this.warn=e.warn||Tr,this.transforms=Nr(e.modules,"transformCode"),this.dataGenFns=Nr(e.modules,"genData"),this.directives=A(A({},Fa),e.directives);var t=e.isReservedTag||T;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Ra(e,t){var n=new Pa(t);return{render:"with(this){return "+(e?"script"===e.tag?"null":Ha(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Ha(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Ba(e,t);if(e.once&&!e.onceProcessed)return Ua(e,t);if(e.for&&!e.forProcessed)return za(e,t);if(e.if&&!e.ifProcessed)return Va(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=Wa(e,t),i="_t("+n+(r?",function(){return "+r+"}":""),o=e.attrs||e.dynamicAttrs?Xa((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){return{name:b(e.name),value:e.value,dynamic:e.dynamic}})):null,a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:Wa(t,n,!0);return"_c("+e+","+Ka(t,n)+(r?","+r:"")+")"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=Ka(e,t));var i=e.inlineTemplate?null:Wa(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return Wa(e,t)||"void 0"}function Ba(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+Ha(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Ua(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Va(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Ha(e,t)+","+t.onceId+++","+n+")":Ha(e,t)}return Ba(e,t)}function Va(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?Ua(e,n):Ha(e,n)}}(e.ifConditions.slice(),t,n,r)}function za(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Ha)(e,t)+"})"}function Ka(e,t){var n="{",r=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?",arg:"+(o.isDynamicArg?o.arg:'"'+o.arg+'"'):"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:"+Xa(e.attrs)+","),e.props&&(n+="domProps:"+Xa(e.props)+","),e.events&&(n+=La(e.events,!1)+","),e.nativeEvents&&(n+=La(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=function(e,t,n){var r=e.for||Object.keys(t).some(function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for||Ja(n)}),i=!!e.if;if(!r)for(var o=e.parent;o;){if(o.slotScope&&o.slotScope!==ua||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}var a=Object.keys(t).map(function(e){return qa(t[e],n)}).join(",");return"scopedSlots:_u(["+a+"]"+(r?",null,true":"")+(!r&&i?",null,false,"+function(e){var t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t>>>0}(a):"")+")"}(e,e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=function(e,t){var n=e.children[0];if(n&&1===n.type){var r=Ra(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+Xa(e.dynamicAttrs)+")"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function Ja(e){return 1===e.type&&("slot"===e.tag||e.children.some(Ja))}function qa(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return Va(e,t,qa,"null");if(e.for&&!e.forProcessed)return za(e,t,qa);var r=e.slotScope===ua?"":String(e.slotScope),i="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(Wa(e,t)||"undefined")+":undefined":Wa(e,t)||"undefined":Ha(e,t))+"}",o=r?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+i+o+"}"}function Wa(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var s=n?t.maybeComponent(a)?",1":",0":"";return""+(r||Ha)(a,t)+s}var c=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Za(i)||i.ifConditions&&i.ifConditions.some(function(e){return Za(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,u=i||Ga;return"["+o.map(function(e){return u(e,t)}).join(",")+"]"+(c?","+c:"")}}function Za(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function Ga(e,t){return 1===e.type?Ha(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:Ya(JSON.stringify(n.text)))+")";var n,r}function Xa(e){for(var t="",n="",r=0;r<e.length;r++){var i=e[r],o=Ya(i.value);i.dynamic?n+=i.name+","+o+",":t+='"'+i.name+'":'+o+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function Ya(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b");function Qa(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),S}}function es(e){var t=Object.create(null);return function(n,r,i){(r=A({},r)).warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=Qa(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return Qa(e,c)}),t[o]=s}}var ts,ns,rs=(ts=function(e,t){var n=fa(e.trim(),t);!1!==t.optimize&&Aa(n,t);var r=Ra(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=A(Object.create(e.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=function(e,t,n){(n?o:i).push(e)};var s=ts(t.trim(),r);return s.errors=i,s.tips=o,s}return{compile:t,compileToFunctions:es(t)}})(xa),is=(rs.compile,rs.compileToFunctions);function os(e){return(ns=ns||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',ns.innerHTML.indexOf("&#10;")>0}var as=!!V&&os(!1),ss=!!V&&os(!0),cs=g(function(e){var t=Qn(e);return t&&t.innerHTML}),us=Cn.prototype.$mount;return Cn.prototype.$mount=function(e,t){if((e=e&&Qn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=cs(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){var i=is(r,{outputSourceRange:!1,shouldDecodeNewlines:as,shouldDecodeNewlinesForHref:ss,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return us.call(this,e,t)},Cn.compile=is,Cn});;import * as THREE from '../build/three.module.js';

import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { RGBELoader } from './jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from './jsm/utils/RoughnessMipmapper.js';

const ID = location.hash.replace(/\#/gim, '');

console.log("Initializing with id: "+ID);

const AJAX = {
	load: function(url){
		let promise = new Promise((resolve, reject)=> {
			const xhttp = new XMLHttpRequest();
			xhttp.onload = function(data){
				resolve(JSON.parse(data.target.response));
			}
			xhttp.onerror = function(){
				reject();
			}
			xhttp.open("GET", url);
			xhttp.send();

		});

		return promise;
	}
}
let data = [];
let lang = {};
let vehicle = {};

let L = function(key){
	console.log(lang, key);
	return "";
};



AJAX.load('localization.json').then((_lang)=> {
	// console.log(_lang);
	lang = _lang;

	AJAX.load('data.json').then((_data)=> {
		_data = _data.reverse();
		data = _data;

		vehicle = {};

		setTimeout(()=> {
			init();
		}, 20);

	});
});


let camera, scene, renderer;

let meshes = {};

// render();

function init() {

	const container = document.createElement( 'div' );
	container.classList.add('render-div');
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.25, 1000 );
	// camera.position.set( 15, 200, 0 );
	camera.position.set( -90, 150, -100 );

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xEBC997);
	// scene.fog = new THREE.FogExp2( 0x444444, 0.005 );



	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	container.appendChild( renderer.domElement );

	const pmremGenerator = new THREE.PMREMGenerator( renderer );
	pmremGenerator.compileEquirectangularShader();

	const controls = new OrbitControls( camera, renderer.domElement );
	controls.mouseButtons = {
		LEFT: THREE.MOUSE.ROTATE,// LEFT: 	THREE.MOUSE.DOLLY,
		MIDDLE: THREE.MOUSE.PAN,
		// RIGHT: 	THREE.MOUSE.PAN
	}
	// controls.target = new THREE.Vector3(0,200,0);
	controls.addEventListener( 'change', render ); // use if there is no animation loop
	controls.minDistance = 10;
	controls.maxDistance = 200;
	controls.maxPolarAngle = 1.61; // 1.61
	// controls.enableDamping = true;
	// controls.dampingFactor = 0.01;
	controls.target.set( 15, 0, 0 );
	controls.update();

	controls.addEventListener('start', ()=> {
		// console.log("start");
		document.body.classList.add('rotating');
	});
	controls.addEventListener('end', ()=> {
		// console.log("end");
		console.log(camera.position)
		document.body.classList.remove('rotating');
	});

	window.addEventListener( 'resize', onWindowResize );

	// let geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	// let material = new THREE.MeshBasicMaterial();

	// let mesh = new THREE.Mesh( geometry, material );
	// scene.add( mesh );

	// {
	// 	const geometry = new THREE.PlaneGeometry( 1, 1 );
	// 	const material = new THREE.MeshBasicMaterial( {color: 0x000000} );

	// 	const plane = new THREE.Mesh( geometry, material );
	// 	// plane.scale.set(new THREE.Vector3(1,1,1));
	// 	material.color.set(0xEBC997);
	// 	plane.scale.x = plane.scale.y = plane.scale.z = 200;
	// 	plane.rotation.x = -Math.PI/2;
	// 	plane.position.y = 1;
	// 	plane.receiveShadow = true;
	// 	scene.add( plane );
	// }

	const light = new THREE.AmbientLight( 0x888888 ); // soft white light
	scene.add( light );


	// // White directional light at half intensity shining from the top.
	// const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
	// directionalLight.position.set( 1050, 1050, 1050 ); //default; light shining from top
	// directionalLight.castShadow = true;
	// //Set up shadow properties for the light
	// directionalLight.shadow.mapSize.width = 256; // default
	// directionalLight.shadow.mapSize.height = 256; // default
	// directionalLight.shadow.camera.near = 0.05; // default
	// directionalLight.shadow.camera.far = 2000; // default
	// scene.add( directionalLight );

	let brightnessMultiplier = vehicle._brightness || 1;

	const spotLight = new THREE.SpotLight( 0xffffff, 1 );
	spotLight.position.set( 100, 200, 100 );

	spotLight.castShadow = true;

	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;

	spotLight.shadow.camera.near = 5;
	spotLight.shadow.camera.far = 4000;
	spotLight.shadow.camera.fov = 30;
	scene.add( spotLight );

	const spotLight2 = new THREE.SpotLight( 0xffffff, 1 );
	spotLight2.position.set( -100, 200, -100 );

	spotLight2.castShadow = false;

	spotLight2.shadow.mapSize.width = 1024;
	spotLight2.shadow.mapSize.height = 1024;

	spotLight2.shadow.camera.near = 5;
	spotLight2.shadow.camera.far = 4000;
	spotLight2.shadow.camera.fov = 30;

	scene.add( spotLight2 );


	loadMesh('suspension').then(()=> {
		loadMesh('hull').then(()=> {
			loadMesh('turret').then(()=> {
				loadMesh('stuff').then(()=> {
					document.querySelector('.loading').classList.add('disabled');
					document.querySelector('.drag-controls').classList.add('active');
					[].slice.call(document.querySelectorAll('.smooth-loading')).map((n)=> {
						n.classList.add('loaded');
					});
					setTimeout(()=> {
						document.querySelector('.render-div').classList.add('loaded');
						renderer.setAnimationLoop(render);
					}, 100);
				});
			});
		});
	});


}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	// render();

}

//

function render() {

	// requestAnimationFrame(render);

	renderer.render( scene, camera );

}

function humanFileSize(bytes, si=false, dp=1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}


function loadMesh(name){
	let promise = new Promise((resolve, reject)=> {

			// use of RoughnessMipmapper is optional
	const roughnessMipmapper = new RoughnessMipmapper( renderer );

	const loader = new GLTFLoader().setPath( 'mesh/'+ID+'/' );
	loader.load( name+'.glb', function ( gltf ) {
		// console.log(gltf);

		// console.log(gltf.scene);
		if (vehicle && vehicle.shift){
			gltf.scene.position.z -= vehicle.shift;
			// console.log(gltf.scene);
		}
		if (vehicle && vehicle.shiftZ){
			gltf.scene.position.y += vehicle.shiftZ;
		}

		gltf.scene.traverse( function ( child ) {

			if ( child.isMesh ) {

				// console.log(child)
				// roughnessMipmapper.generateMipmaps( child.material );
				child.castShadow = true;
				// child.receiveShadow = true;

			}

		} );

		gltf.scene.castShadow = true;
		gltf.scene.receiveShadow = true;
		// gltf.scene.castShadow = true;

		scene.add( gltf.scene );

		roughnessMipmapper.dispose();

		meshes[name] = gltf;

		resolve();
		document.querySelector('.loading #status').innerHTML = ``;

		// render();
		// renderer.setAnimationLoop(render);

	}, function ( xhr ) {
		// console.log(xhr);
		let progress = xhr.loaded / xhr.total * 100;
		let percent = ( progress ).toFixed(0) + '%';
		document.querySelector('.loading #status').innerHTML = `
			loading ${name} (${humanFileSize(xhr.total)})
		`;
		//			(${humanFileSize(xhr.total)} > ${humanFileSize(xhr.loaded)})

		let span = document.querySelector('.loading #'+name+' span');
		span.style.width = percent;

		if ((progress > 0 && progress < 100)) {
			span.classList.add('active');
		} else {
			span.classList.remove('active');
		}
		document.querySelector('.loading #'+name+' span b').innerHTML = progress <= 0 || progress >= 100 ? '' : percent;
	}, function (error) {
		resolve();
		console.error("Unable to load "+name);
	});


	});

	return promise;
};

function toggleMesh(name, state){
	// console.log(meshes[name])
	meshes[name].scene.visible = state;
};

[].slice.call(document.querySelectorAll('input')).map((node)=> {
	node.addEventListener('change', (event)=> {
		toggleMesh(node.getAttribute('name'), node.checked);
		// console.log(node.checked);
	});
});



document.addEventListener('keyup', (e)=> {
	if (e.keyCode === 27) {
		location.href = "/";
	}
});
;import * as THREE from '../build/three.module.js';

import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { RGBELoader } from './jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from './jsm/utils/RoughnessMipmapper.js';

const ID = location.hash.replace(/\#/gim, '');

console.log("Initializing with id: "+ID);

const AJAX = {
	load: function(url){
		let promise = new Promise((resolve, reject)=> {
			const xhttp = new XMLHttpRequest();
			xhttp.onload = function(data){
				resolve(JSON.parse(data.target.response));
			}
			xhttp.onerror = function(){
				reject();
			}
			xhttp.open("GET", url);
			xhttp.send();

		});

		return promise;
	}
}
let data = [];
let lang = {};
let vehicle = {};

let L = function(key){
	console.log(lang, key);
	return lang[key];
};



AJAX.load('localization.json').then((_lang)=> {
	// console.log(_lang);
	lang = _lang;

	AJAX.load('data.json').then((_data)=> {
		_data = _data.reverse();
		data = _data;

		vehicle = data.find(v => v.id === ID);

		document.title = L(ID+".name");
		document.querySelector('h1').innerHTML = L(ID+".name");

		document.querySelector('.description').innerHTML = L(ID+".desc").markdown();

		if (vehicle.link){
			document.querySelector('.link').innerHTML = `
			<a href="${vehicle.link}" target="_blank">
			<span class="border"><span></span><span></span></span>
			${vehicle.price ? L("buy")+"€"+vehicle.price : L("buy.free")}
			</a>
			`;
		}

		setTimeout(()=> {
			init();
		}, 20);

	});
});


let camera, scene, renderer;

let meshes = {};

// render();

function init() {

	const container = document.createElement( 'div' );
	container.classList.add('render-div');
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.25, 1000 );
	camera.position.set( 50, 40, 70 );

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x444444);
	scene.fog = new THREE.FogExp2( 0x444444, 0.005 );



	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	container.appendChild( renderer.domElement );

	const pmremGenerator = new THREE.PMREMGenerator( renderer );
	pmremGenerator.compileEquirectangularShader();

	const controls = new OrbitControls( camera, renderer.domElement );
	controls.mouseButtons = {
		LEFT: THREE.MOUSE.ROTATE,// LEFT: 	THREE.MOUSE.DOLLY,
		MIDDLE: THREE.MOUSE.PAN,
		// RIGHT: 	THREE.MOUSE.PAN
	}
	// controls.target = new THREE.Vector3(0,200,0);
	controls.addEventListener( 'change', render ); // use if there is no animation loop
	controls.minDistance = 10;
	controls.maxDistance = 100;
	controls.maxPolarAngle = 1.61; // 1.61
	// controls.enableDamping = true;
	// controls.dampingFactor = 0.01;
	controls.target.set( 0, 7, 0 );
	controls.update();

	controls.addEventListener('start', ()=> {
		// console.log("start");
		document.body.classList.add('rotating');
	});
	controls.addEventListener('end', ()=> {
		// console.log("end");
		document.body.classList.remove('rotating');
	});

	window.addEventListener( 'resize', onWindowResize );

	// let geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	// let material = new THREE.MeshBasicMaterial();

	// let mesh = new THREE.Mesh( geometry, material );
	// scene.add( mesh );

	{
		const geometry = new THREE.PlaneGeometry( 1, 1 );
		const material = new THREE.MeshStandardMaterial( {color: 0x000000} );

		const plane = new THREE.Mesh( geometry, material );
		// plane.scale.set(new THREE.Vector3(1,1,1));
		plane.scale.x = plane.scale.y = plane.scale.z = 10000;
		plane.rotation.x = -Math.PI/2;
		plane.position.y = 0;
		plane.receiveShadow = true;
		scene.add( plane );
	}

	const light = new THREE.AmbientLight( 0xffffff ); // soft white light
	scene.add( light );


	// // White directional light at half intensity shining from the top.
	// const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
	// directionalLight.position.set( 1050, 1050, 1050 ); //default; light shining from top
	// directionalLight.castShadow = true;
	// //Set up shadow properties for the light
	// directionalLight.shadow.mapSize.width = 256; // default
	// directionalLight.shadow.mapSize.height = 256; // default
	// directionalLight.shadow.camera.near = 0.05; // default
	// directionalLight.shadow.camera.far = 2000; // default
	// scene.add( directionalLight );

	let brightnessMultiplier = vehicle._brightness || 1;

	const spotLight = new THREE.SpotLight( 0xffffff, 3 * brightnessMultiplier );
	spotLight.position.set( 100, 200, 100 );

	spotLight.castShadow = true;

	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;

	spotLight.shadow.camera.near = 5;
	spotLight.shadow.camera.far = 4000;
	spotLight.shadow.camera.fov = 30;
	scene.add( spotLight );

	const spotLight2 = new THREE.SpotLight( 0xffffff, 1 );
	spotLight2.position.set( -100, 200, -100 );

	spotLight2.castShadow = false;

	spotLight2.shadow.mapSize.width = 1024;
	spotLight2.shadow.mapSize.height = 1024;

	spotLight2.shadow.camera.near = 5;
	spotLight2.shadow.camera.far = 4000;
	spotLight2.shadow.camera.fov = 30;

	scene.add( spotLight2 );


	loadMesh('suspension').then(()=> {
		loadMesh('hull').then(()=> {
			loadMesh('turret').then(()=> {
				loadMesh('stuff').then(()=> {
					document.querySelector('.loading').classList.add('disabled');
					document.querySelector('.drag-controls').classList.add('active');
					[].slice.call(document.querySelectorAll('.smooth-loading')).map((n)=> {
						n.classList.add('loaded');
					});
					setTimeout(()=> {
						document.querySelector('.render-div').classList.add('loaded');
						renderer.setAnimationLoop(render);
					}, 100);
				});
			});
		});
	});


}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	// render();

}

//

function render() {

	// requestAnimationFrame(render);

	renderer.render( scene, camera );

}

function humanFileSize(bytes, si=false, dp=1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}


function loadMesh(name){
	let promise = new Promise((resolve, reject)=> {

			// use of RoughnessMipmapper is optional
	const roughnessMipmapper = new RoughnessMipmapper( renderer );

	const loader = new GLTFLoader().setPath( 'mesh/'+ID+'/' );
	loader.load( name+'.glb', function ( gltf ) {
		// console.log(gltf);

		// console.log(gltf.scene);
		if (vehicle && vehicle.shift){
			gltf.scene.position.z -= vehicle.shift;
			// console.log(gltf.scene);
		}
		if (vehicle && vehicle.shiftZ){
			gltf.scene.position.y += vehicle.shiftZ;
		}

		gltf.scene.traverse( function ( child ) {

			if ( child.isMesh ) {

				// console.log(child)
				// roughnessMipmapper.generateMipmaps( child.material );
				child.castShadow = true;
				// child.receiveShadow = true;

			}

		} );

		gltf.scene.castShadow = true;
		gltf.scene.receiveShadow = true;
		// gltf.scene.castShadow = true;

		scene.add( gltf.scene );

		roughnessMipmapper.dispose();

		meshes[name] = gltf;

		resolve();
		document.querySelector('.loading #status').innerHTML = ``;

		// render();
		// renderer.setAnimationLoop(render);

	}, function ( xhr ) {
		// console.log(xhr);
		let progress = xhr.loaded / xhr.total * 100;
		let percent = ( progress ).toFixed(0) + '%';
		document.querySelector('.loading #status').innerHTML = `
			loading ${name} (${humanFileSize(xhr.total)})
		`;
		//			(${humanFileSize(xhr.total)} > ${humanFileSize(xhr.loaded)})

		let span = document.querySelector('.loading #'+name+' span');
		span.style.width = percent;

		if ((progress > 0 && progress < 100)) {
			span.classList.add('active');
		} else {
			span.classList.remove('active');
		}
		document.querySelector('.loading #'+name+' span b').innerHTML = progress <= 0 || progress >= 100 ? '' : percent;
	}, function (error) {
		resolve();
		console.error("Unable to load "+name);
	});


	});

	return promise;
};

function toggleMesh(name, state){
	// console.log(meshes[name])
	meshes[name].scene.visible = state;
};

[].slice.call(document.querySelectorAll('input')).map((node)=> {
	node.addEventListener('change', (event)=> {
		toggleMesh(node.getAttribute('name'), node.checked);
		// console.log(node.checked);
	});
});



document.addEventListener('keyup', (e)=> {
	if (e.keyCode === 27) {
		location.href = "/";
	}
});
;String.prototype.markdown = function(options){
	if (!options) {
		options = {list: {}};
	}
	// console.log(options.list.prefix);
	let reg = {
		h1: /^# (.)+$/gim,
		h2: /^#{2,2} (.)+$/gim,
		h3: /^#{3,3} (.)+$/gim,
		h4: /^#{4,4} (.)+$/gim,
		h5: /^#{5,5} (.)+$/gim,
		or: /\-{2}(.*?)\-{2}/gim,
		hTag: /(\#|\# )/gim,
		bold: /(?<!\*|\\\*)\*{2,2}[^\*\n].*?[^\*]\*{2,2}(?!\*|\\)/gim,
		boldTag: /\*\*/gim,
		italic: /((?<!\*|\\)\*[^\*\n].+?[^\*|\\]\*(?!\*))/gim, //|(_.+?_)
		italicTag: /(\*|\_)/gim,
		underlined: /(^|[^_])_(?!_)((?:[^]*?[^_])?)_(?!_)/gim,
		underlinedTag: /(\*|\_)/gim,
		monospace: /`[^`]*`/gim,
		monospaceTag: /\`/gim,
		mark: /@([^@]*)@/gim,
		listNumber: /(^\d{1,3}\. .*$)+|(^ {1,10}\d{1,3}\. .*$)+/gim,
		list: /(^(\+|-) .*$)+/gim,
		listTag: /(\+ |\- )/gim,
		listOpen: /\[(ol|ul)\]/gim,
		listClose: /\[(\/ol|\/ul)\]/gim,
		blockquote: /^>{1,1} (.)+$/gim,
		blockquoteTag: /^>{1,1} /gim,
		link: /\[([^\[\]]*?)\]\((.*?)\)/gim,
		image: /!\[([^\[\]]*?)\]\((.*?)\)/gim,
		scrollTo: /\>([^\{\}]*?)\>\{(.*?)\}/gim,
		mouseOver: /\^([^\{\}]*?)\^\{(.*?)\}/gim,
		icon: /\{([^\{\}]*?)\}\((.*?)\)/gim,
		color: /\(color\:(.*?)\)(.*?)\(color\:(.*?)\)/gim,
		dlTag: /^(.*?)\|(.*?)$/gim
	};
	let result = this;
	result = result.replace(/\n(?!\<\/{0,1}(ul|li|ol|blockquote|p|hr|div|figure|img|h1|h2|h3|h4)(.*?)\>)/gim, "<br>");

	// h1-h4
	["h5", "h4", "h3", "h2", "h1"].map((tag)=> {
		result = result.replace(reg[tag], function(found) {
			return `<${tag}>${found.replace(reg.hTag, "")}</${tag}>`;
		});
	});
	// or
	result = result.replace(reg.or, function(found) {
		return `<span class="or"><span>${found.replace(/\-/gim, "")}</span></span>`;
	});

	// lists
	result = result.replace(reg.listOpen, function(found) {
		return `${found.replace(/\[/gim, "<").replace(/\]/gim, ">")}`;
	});
	result = result.replace(reg.listClose, function(found) {
		return `${found.replace(/\[/gim, "<").replace(/\]/gim, ">")}`;
	});
	result = result.replace(reg.listNumber, function(found) {
		return `<li ${options.list.prefix ? `data-prefix="${options.list.prefix}"` : ''}>${found}</li>`;
	});
	result = result.replace(reg.list, function(found) {
		return `<li ${options.list.prefix ? `data-prefix="${options.list.prefix}"` : ''}>${found.replace(reg.listTag, "")}</li>`;
	});
	//blockquote
	result = result.replace(reg.blockquote, function(found) {
		return `<blockquote>${found.replace(reg.blockquoteTag, "")}</blockquote>`;
	});
	// images
	result = result.replace(reg.image, "<figure><img src='$1'/><figcaption>$2</figcaption></figure>");
	// links
	result = result.replace(reg.link, "<a href='$1' target='_blank'>$2</a>");
	// bold, italic, monospace
	result = result.replace(reg.bold, function(found) {
		// console.log(found);
		return `<b>${found.replace(reg.boldTag, "")}</b>`;
	});
	result = result.replace(reg.italic, function(found) {
		return `<i>${found.replace(reg.italicTag, "")}</i>`;
	});

	// scrollTo
	result = result.replace(reg.scrollTo, '<span scroll-to="$1">$2</span>');
	// mouseOver
	// result = result.replace(reg.mouseOver, '<span mouse-over="$1" mouse-out="$1">$2</span>');
	// icon
	result = result.replace(reg.icon, (a, b, c)=> {
		// console.log(a, b, c);
		let subfolder = b.match(/\/(?!.*?\/).*?$/) ? true : false;
		return `<span class="icon-caption"><img src="assets/img/${!subfolder ? 'icons/svg/' : ''}${b}.svg" class="icon"><span>${c}</span></span>`;
	});

	// result = result.replace(reg.underlined, function(found) {
	// 	return `<u>${found.replace(reg.underlinedTag, "")}</u>`;
	// });
	result = result.replace(reg.monospace, function(found) {
		return `<span class="m-mono">${found.replace(reg.monospaceTag, "")}</span>`;
	});
	//mark
	result = result.replace(reg.mark, '<mark>$1</mark>');
	// br, hr
	// result = result.replace(/\n\n/gim, '<br><br>');
	result = result.replace(/\-\-\-/gim, '<hr>');
	// console.log(result);

	// color
	result = result.replace(reg.color, "<span class=\"color-$1\">$2</span>");

	// <dl>
	result = result.replace(reg.dlTag, function(found) {
		let dt = found.split('|') ? found.split('|')[0] : "";
		let dd = (found.split('|') ? found.split('|')[1] : "").split(',');
		let dl = `<dl>`;
		dl += `<dt>${dt}</dt>`;
		for (let i = 0; i < dd.length; i++){
			dl += `<dd>${dd[i]}</dd>`;
		}
		dl += `</dl>`;
		return dl;
	});


	return result;
};
;const AJAX = {
	load: function(url){
		let promise = new Promise((resolve, reject)=> {
			const xhttp = new XMLHttpRequest();
			xhttp.onload = function(data){
				resolve(JSON.parse(data.target.response));
			}
			xhttp.onerror = function(){
				reject();
			}
			xhttp.open("GET", url);
			xhttp.send();

		});

		return promise;
	}
}
let data = [];
let lang = {};

let L = function(key){
	// console.log(lang, key);
	return lang[key];
};



AJAX.load('localization.json').then((_lang)=> {
	// console.log(_lang);
	lang = _lang;

	AJAX.load('data.json').then((_data)=> {
		_data = _data.reverse();
		_data = _data.sort((a, b)=> a.available - b.available);
		data = _data;
		// app.items = data;
		renderFilter();
		renderList();
	});
});


function renderFilter(){
	let countries = ["ger", "rus", "ukr", "usa", "eng", "ita", "isr"];
	let html = `
		<input type="radio" checked id="all" name="filter">
		<label for="all">
			<span class="scale">${L('nation.all')}</span>
			<span class="count">${data.length}</span>
			<span class="border"><span></span><span></span></span>
		</label>
	`;

	function getCount(nation){
		return data.filter(item => item.nation === nation).length;
	}

	for (let i = 0; i < countries.length; i++){
		let code = countries[i];
		let count = getCount(code);
		html += `
			<input type="radio" id="${code}" name="filter" class="${count <= 0 ? 'disabled' : ''}">
			<label for="${code}" class="${count <= 0 ? 'disabled' : ''}">
				<span class="scale">${L('nation.'+code)}</span>
				<span class="count">${count}</span>
				<span class="border"><span></span><span></span></span>
			</label>
		`;
	}
	document.querySelector('#flag_filter').innerHTML = html;
	setTimeout(()=> {
		[].slice.call(document.querySelectorAll('input[name="filter"]')).map((node)=> {
			node.addEventListener('input', ()=> {
				document.querySelector('#dropdownButton').innerHTML = L('nation.'+node.id);
				document.querySelector('#dropdownButton').classList.remove('active');
				renderList();
			});
		});
	}, 10);
}

document.querySelector('#dropdownButton').addEventListener('click', (e)=> {
	let button = e.target.closest('button');
	let nav = document.querySelector('.flag-filter');
	if (button.classList.contains('active')){
		button.classList.remove('active');
	} else {
		let bbox = button.getBoundingClientRect();
		nav.classList.add("hidden");
		nav.style.width = bbox.width+"px";
		nav.style.height = bbox.height+"px";
		nav.style.top = bbox.top+"px";
		nav.style.left = bbox.left+"px";
		setTimeout(()=> {
			button.classList.add('active');
		});
		setTimeout(()=> {
			nav.classList.remove("hidden");
		}, 300);
	}
});
document.body.addEventListener('click', (e)=> {
		if (!e.target.closest('.dropdown label')){
			document.querySelector('#dropdownButton').classList.remove('active');
		}
});

function renderList(){
	let items = data;
	let html = `
		<div class="container">
			<ul class="clear">
	`;

	for (let i = 0; i < data.length; i++){
		let item = items[i];
		let checkbox = document.querySelector("#"+item.nation);
		if (!document.querySelector('#all').checked){
			if (!checkbox || !checkbox.checked){
				continue;
			}
		}
		html += `
			<li>
				<a href="detail.html#${item.id}" class="card ${item.available ? '' : 'disabled'}">
					<figure>
						<img src="thumb/${item.id}.png" alt="${item.id}" loading id="img_${item.id}">
					</figure>
					<span class="border"><span></span><span></span></span>
					<h3 title="Name">${L(item.id+'.name')}</h3>
				</a>
			</li>`;
			// 					<span class="price" title="Price">${item.price ? item.price+"€" : L('buy.free')}</span>

	}
	html += `
		</ul>
	</div>`;

	document.querySelector('#catalog').innerHTML = html;


	[].slice.call(document.querySelectorAll('[id*="img_"]')).map(img => {
		img.addEventListener('load', ()=> {
			img.classList.add('loaded');
		});
	});
}
