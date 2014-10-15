function countUp(a,b,c,d,e,f){for(var g=0,h=["webkit","moz","ms","o"],i=0;i<h.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[h[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[h[i]+"CancelAnimationFrame"]||window[h[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-g)),e=window.setTimeout(function(){a(c+d)},d);return g=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),this.options=f||{useEasing:!0,useGrouping:!0,separator:",",decimal:"."},""==this.options.separator&&(this.options.useGrouping=!1),null==this.options.prefix&&(this.options.prefix=""),null==this.options.suffix&&(this.options.suffix="");var j=this;this.d="string"==typeof a?document.getElementById(a):a,this.startVal=Number(b),this.endVal=Number(c),this.countDown=this.startVal>this.endVal?!0:!1,this.startTime=null,this.timestamp=null,this.remaining=null,this.frameVal=this.startVal,this.rAF=null,this.decimals=Math.max(0,d||0),this.dec=Math.pow(10,this.decimals),this.duration=1e3*e||2e3,this.version=function(){return"1.3.1"},this.printValue=function(a){var b=isNaN(a)?"--":j.formatNumber(a);"INPUT"==j.d.tagName?this.d.value=b:this.d.innerHTML=b},this.easeOutExpo=function(a,b,c,d){return 1024*c*(-Math.pow(2,-10*a/d)+1)/1023+b},this.count=function(a){null===j.startTime&&(j.startTime=a),j.timestamp=a;var b=a-j.startTime;if(j.remaining=j.duration-b,j.options.useEasing)if(j.countDown){var c=j.easeOutExpo(b,0,j.startVal-j.endVal,j.duration);j.frameVal=j.startVal-c}else j.frameVal=j.easeOutExpo(b,j.startVal,j.endVal-j.startVal,j.duration);else if(j.countDown){var c=(j.startVal-j.endVal)*(b/j.duration);j.frameVal=j.startVal-c}else j.frameVal=j.startVal+(j.endVal-j.startVal)*(b/j.duration);j.frameVal=j.countDown?j.frameVal<j.endVal?j.endVal:j.frameVal:j.frameVal>j.endVal?j.endVal:j.frameVal,j.frameVal=Math.round(j.frameVal*j.dec)/j.dec,j.printValue(j.frameVal),b<j.duration?j.rAF=requestAnimationFrame(j.count):null!=j.callback&&j.callback()},this.start=function(a){return j.callback=a,isNaN(j.endVal)||isNaN(j.startVal)?(console.log("countUp error: startVal or endVal is not a number"),j.printValue()):j.rAF=requestAnimationFrame(j.count),!1},this.stop=function(){cancelAnimationFrame(j.rAF)},this.reset=function(){j.startTime=null,j.startVal=b,cancelAnimationFrame(j.rAF),j.printValue(j.startVal)},this.resume=function(){j.stop(),j.startTime=null,j.duration=j.remaining,j.startVal=j.frameVal,requestAnimationFrame(j.count)},this.formatNumber=function(a){a=a.toFixed(j.decimals),a+="";var b,c,d,e;if(b=a.split("."),c=b[0],d=b.length>1?j.options.decimal+b[1]:"",e=/(\d+)(\d{3})/,j.options.useGrouping)for(;e.test(c);)c=c.replace(e,"$1"+j.options.separator+"$2");return j.options.prefix+c+d+j.options.suffix},j.printValue(j.startVal)}
/*!
 * jQuery-runner - v2.3.3 - 2014-08-06
 * https://github.com/jylauril/jquery-runner/
 * Copyright (c) 2014 Jyrki Laurila <https://github.com/jylauril>
 */
(function(){var a,b,c,d,e,f,g,h,i;if(c={version:"2.3.3",name:"jQuery-runner"},g=this.jQuery||this.Zepto||this.$,!g||!g.fn)throw new Error("["+c.name+"] jQuery or jQuery-like library is required for this plugin to work");e={},d=function(a){return(10>a?"0":"")+a},i=1,f=function(){return"runner"+i++},h=function(a,b){return a["r"+b]||a["webkitR"+b]||a["mozR"+b]||a["msR"+b]||function(a){return setTimeout(a,30)}}(this,"equestAnimationFrame"),b=function(a,b){var c,e,f,g,h,i,j,k,l,m,n;for(b=b||{},k=[36e5,6e4,1e3,10],i=["",":",":","."],h="",g="",f=b.milliseconds,e=k.length,l=0,0>a&&(a=Math.abs(a),h="-"),c=m=0,n=k.length;n>m;c=++m)j=k[c],l=0,a>=j&&(l=Math.floor(a/j),a-=l*j),(l||c>1||g)&&(c!==e-1||f)&&(g+=(g?i[c]:"")+d(l));return h+g},a=function(){function a(b,c,d){var h;return this instanceof a?(this.items=b,h=this.id=f(),this.settings=g.extend({},this.settings,c),e[h]=this,b.each(function(a,b){g(b).data("runner",h)}),this.value(this.settings.startAt),void((d||this.settings.autostart)&&this.start())):new a(b,c,d)}return a.prototype.running=!1,a.prototype.updating=!1,a.prototype.finished=!1,a.prototype.interval=null,a.prototype.total=0,a.prototype.lastTime=0,a.prototype.startTime=0,a.prototype.lastLap=0,a.prototype.lapTime=0,a.prototype.settings={autostart:!1,countdown:!1,stopAt:null,startAt:0,milliseconds:!0,format:null},a.prototype.value=function(a){this.items.each(function(b){return function(c,d){var e;c=g(d),e=c.is("input")?"val":"text",c[e](b.format(a))}}(this))},a.prototype.format=function(a){var c;return c=this.settings.format,(c=g.isFunction(c)?c:b)(a,this.settings)},a.prototype.update=function(){var a,b,c,d,e;this.updating||(this.updating=!0,c=this.settings,e=g.now(),d=c.stopAt,a=c.countdown,b=e-this.lastTime,this.lastTime=e,a?this.total-=b:this.total+=b,null!==d&&(a&&this.total<=d||!a&&this.total>=d)&&(this.total=d,this.finished=!0,this.stop(),this.fire("runnerFinish")),this.value(this.total),this.updating=!1)},a.prototype.fire=function(a){this.items.trigger(a,this.info())},a.prototype.start=function(){var a;this.running||(this.running=!0,(!this.startTime||this.finished)&&this.reset(),this.lastTime=g.now(),a=function(b){return function(){b.running&&(b.update(),h(a))}}(this),h(a),this.fire("runnerStart"))},a.prototype.stop=function(){this.running&&(this.running=!1,this.update(),this.fire("runnerStop"))},a.prototype.toggle=function(){this.running?this.stop():this.start()},a.prototype.lap=function(){var a,b;return b=this.lastTime,a=b-this.lapTime,this.settings.countdown&&(a=-a),(this.running||a)&&(this.lastLap=a,this.lapTime=b),b=this.format(this.lastLap),this.fire("runnerLap"),b},a.prototype.reset=function(a){var b;a&&this.stop(),b=g.now(),"number"!=typeof this.settings.startAt||this.settings.countdown||(b-=this.settings.startAt),this.startTime=this.lapTime=this.lastTime=b,this.total=this.settings.startAt,this.value(this.total),this.finished=!1,this.fire("runnerReset")},a.prototype.info=function(){var a;return a=this.lastLap||0,{running:this.running,finished:this.finished,time:this.total,formattedTime:this.format(this.total),startTime:this.startTime,lapTime:a,formattedLapTime:this.format(a),settings:this.settings}},a}(),g.fn.runner=function(b,d,f){var h,i;switch(b||(b="init"),"object"==typeof b&&(f=d,d=b,b="init"),h=this.data("runner"),i=h?e[h]:!1,b){case"init":new a(this,d,f);break;case"info":if(i)return i.info();break;case"reset":i&&i.reset(d);break;case"lap":if(i)return i.lap();break;case"start":case"stop":case"toggle":if(i)return i[b]();break;case"version":return c.version;default:g.error("["+c.name+"] Method "+b+" does not exist")}return this},g.fn.runner.format=b}).call(this);
/*! Video.js v4.8.2 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
(function() {var b=void 0,f=!0,k=null,l=!1;function m(){return function(){}}function p(a){return function(){return this[a]}}function r(a){return function(){return a}}var s;document.createElement("video");document.createElement("audio");document.createElement("track");function t(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(t.Ba[a])return t.Ba[a];a=t.v(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new t.Player(a,c,d)}
var videojs=window.videojs=t;t.Ub="4.8";t.Sc="https:"==document.location.protocol?"https://":"http://";
t.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],inactivityTimeout:2E3,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{},errorDisplay:{}},language:document.getElementsByTagName("html")[0].getAttribute("lang")||navigator.languages&&navigator.languages[0]||navigator.ve||navigator.language||"en",languages:{},notSupportedMessage:"No compatible source was found for this video."};
"GENERATED_CDN_VSN"!==t.Ub&&(videojs.options.flash.swf=t.Sc+"vjs.zencdn.net/"+t.Ub+"/video-js.swf");t.dd=function(a,c){t.options.languages[a]=t.options.languages[a]!==b?t.ga.Va(t.options.languages[a],c):c;return t.options.languages};t.Ba={};"function"===typeof define&&define.amd?define([],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);t.qa=t.CoreObject=m();
t.qa.extend=function(a){var c,d;a=a||{};c=a.init||a.i||this.prototype.init||this.prototype.i||m();d=function(){c.apply(this,arguments)};d.prototype=t.h.create(this.prototype);d.prototype.constructor=d;d.extend=t.qa.extend;d.create=t.qa.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};t.qa.create=function(){var a=t.h.create(this.prototype);this.apply(a,arguments);return a};
t.d=function(a,c,d){if(t.h.isArray(c))return u(t.d,a,c,d);var e=t.getData(a);e.C||(e.C={});e.C[c]||(e.C[c]=[]);d.w||(d.w=t.w++);e.C[c].push(d);e.X||(e.disabled=l,e.X=function(c){if(!e.disabled){c=t.pc(c);var d=e.C[c.type];if(d)for(var d=d.slice(0),j=0,n=d.length;j<n&&!c.wc();j++)d[j].call(a,c)}});1==e.C[c].length&&(a.addEventListener?a.addEventListener(c,e.X,l):a.attachEvent&&a.attachEvent("on"+c,e.X))};
t.o=function(a,c,d){if(t.sc(a)){var e=t.getData(a);if(e.C){if(t.h.isArray(c))return u(t.o,a,c,d);if(c){var g=e.C[c];if(g){if(d){if(d.w)for(e=0;e<g.length;e++)g[e].w===d.w&&g.splice(e--,1)}else e.C[c]=[];t.jc(a,c)}}else for(g in e.C)c=g,e.C[c]=[],t.jc(a,c)}}};t.jc=function(a,c){var d=t.getData(a);0===d.C[c].length&&(delete d.C[c],a.removeEventListener?a.removeEventListener(c,d.X,l):a.detachEvent&&a.detachEvent("on"+c,d.X));t.Hb(d.C)&&(delete d.C,delete d.X,delete d.disabled);t.Hb(d)&&t.Fc(a)};
t.pc=function(a){function c(){return f}function d(){return l}if(!a||!a.Ib){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyboardEvent.keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.yd=c;a.defaultPrevented=f};a.yd=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
e.stopPropagation();a.cancelBubble=f;a.Ib=c};a.Ib=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.wc=c;a.stopPropagation()};a.wc=d;if(a.clientX!=k){g=document.documentElement;var h=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=k&&(a.button=a.button&1?0:a.button&
4?1:a.button&2?2:0)}return a};t.l=function(a,c){var d=t.sc(a)?t.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=t.pc(c);d.X&&d.X.call(a,c);if(e&&!c.Ib()&&c.bubbles!==l)t.l(e,c);else if(!e&&!c.defaultPrevented&&(d=t.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
t.W=function(a,c,d){function e(){t.o(a,c,e);d.apply(this,arguments)}if(t.h.isArray(c))return u(t.W,a,c,d);e.w=d.w=d.w||t.w++;t.d(a,c,e)};function u(a,c,d,e){t.hc.forEach(d,function(d){a(c,d,e)})}var v=Object.prototype.hasOwnProperty;t.e=function(a,c){var d;c=c||{};d=document.createElement(a||"div");t.h.Y(c,function(a,c){-1!==a.indexOf("aria-")||"role"==a?d.setAttribute(a,c):d[a]=c});return d};t.aa=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};t.h={};
t.h.create=Object.create||function(a){function c(){}c.prototype=a;return new c};t.h.Y=function(a,c,d){for(var e in a)v.call(a,e)&&c.call(d||this,e,a[e])};t.h.z=function(a,c){if(!c)return a;for(var d in c)v.call(c,d)&&(a[d]=c[d]);return a};t.h.md=function(a,c){var d,e,g;a=t.h.copy(a);for(d in c)v.call(c,d)&&(e=a[d],g=c[d],a[d]=t.h.Ta(e)&&t.h.Ta(g)?t.h.md(e,g):c[d]);return a};t.h.copy=function(a){return t.h.z({},a)};
t.h.Ta=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};t.h.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};t.Ad=function(a){return a!==a};t.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.w||(c.w=t.w++);e.w=d?d+"_"+c.w:c.w;return e};t.ua={};t.w=1;t.expando="vdata"+(new Date).getTime();t.getData=function(a){var c=a[t.expando];c||(c=a[t.expando]=t.w++,t.ua[c]={});return t.ua[c]};
t.sc=function(a){a=a[t.expando];return!(!a||t.Hb(t.ua[a]))};t.Fc=function(a){var c=a[t.expando];if(c){delete t.ua[c];try{delete a[t.expando]}catch(d){a.removeAttribute?a.removeAttribute(t.expando):a[t.expando]=k}}};t.Hb=function(a){for(var c in a)if(a[c]!==k)return l;return f};t.n=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};
t.p=function(a,c){var d,e;if(-1!=a.className.indexOf(c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};t.A=t.e("video");t.L=navigator.userAgent;t.Yc=/iPhone/i.test(t.L);t.Xc=/iPad/i.test(t.L);t.Zc=/iPod/i.test(t.L);t.Wc=t.Yc||t.Xc||t.Zc;var aa=t,x;var y=t.L.match(/OS (\d+)_/i);x=y&&y[1]?y[1]:b;aa.ke=x;t.Uc=/Android/i.test(t.L);var ba=t,z;var A=t.L.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),B,C;
A?(B=A[1]&&parseFloat(A[1]),C=A[2]&&parseFloat(A[2]),z=B&&C?parseFloat(A[1]+"."+A[2]):B?B:k):z=k;ba.Tb=z;t.$c=t.Uc&&/webkit/i.test(t.L)&&2.3>t.Tb;t.Vc=/Firefox/i.test(t.L);t.le=/Chrome/i.test(t.L);t.dc=!!("ontouchstart"in window||window.Tc&&document instanceof window.Tc);t.Hc=function(a,c){t.h.Y(c,function(c,e){e===k||"undefined"===typeof e||e===l?a.removeAttribute(c):a.setAttribute(c,e===f?"":e)})};
t.za=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var h=d.length-1;0<=h;h--){e=d[h].name;g=d[h].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==k?f:l;c[e]=g}}return c};
t.re=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};t.Gb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};t.Oa={};t.v=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
t.ya=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),h=Math.floor(c/60%60),j=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<j?g+":":"";return g+(((g||10<=h)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};t.gd=function(){document.body.focus();document.onselectstart=r(l)};t.ge=function(){document.onselectstart=r(f)};t.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};t.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
t.zb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};
t.get=function(a,c,d,e){var g,h,j,n;d=d||m();"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});h=new XMLHttpRequest;j=t.Td(a);n=window.location;j.protocol+j.host!==n.protocol+n.host&&window.XDomainRequest&&!("withCredentials"in
h)?(h=new window.XDomainRequest,h.onload=function(){c(h.responseText)},h.onerror=d,h.onprogress=m(),h.ontimeout=d):(g="file:"==j.protocol||"file:"==n.protocol,h.onreadystatechange=function(){4===h.readyState&&(200===h.status||g&&0===h.status?c(h.responseText):d(h.responseText))});try{h.open("GET",a,f),e&&(h.withCredentials=f)}catch(q){d(q);return}try{h.send()}catch(w){d(w)}};
t.Xd=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?t.log("LocalStorage Full (VideoJS)",d):18==d.code?t.log("LocalStorage not allowed (VideoJS)",d):t.log("LocalStorage Error (VideoJS)",d)}};t.rc=function(a){a.match(/^https?:\/\//)||(a=t.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
t.Td=function(a){var c,d,e,g;g="protocol hostname port pathname search hash host".split(" ");d=t.e("a",{href:a});if(e=""===d.host&&"file:"!==d.protocol)c=t.e("div"),c.innerHTML='<a href="'+a+'"></a>',d=c.firstChild,c.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(c);a={};for(var h=0;h<g.length;h++)a[g[h]]=d[g[h]];e&&document.body.removeChild(c);return a};
function D(a,c){var d,e;d=Array.prototype.slice.call(c);e=m();e=window.console||{log:e,warn:e,error:e};a?d.unshift(a.toUpperCase()+":"):a="log";t.log.history.push(d);d.unshift("VIDEOJS:");if(e[a].apply)e[a].apply(e,d);else e[a](d.join(" "))}t.log=function(){D(k,arguments)};t.log.history=[];t.log.error=function(){D("error",arguments)};t.log.warn=function(){D("warn",arguments)};
t.ud=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:t.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:t.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};t.hc={};t.hc.forEach=function(a,c,d){if(t.h.isArray(a)&&c instanceof Function)for(var e=0,g=a.length;e<g;++e)c.call(d||t,a[e],e,a);return a};t.ga={};
t.ga.Va=function(a,c){var d,e,g;a=t.h.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=t.h.Ta(e)&&t.h.Ta(g)?t.ga.Va(e,g):c[d]);return a};
t.a=t.qa.extend({i:function(a,c,d){this.c=a;this.k=t.h.copy(this.k);c=this.options(c);this.T=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+t.w++);this.Gd=c.name||k;this.b=c.el||this.e();this.M=[];this.Pa={};this.Qa={};this.uc();this.I(d);if(c.Gc!==l){var e,g;e=t.bind(this.j(),this.j().reportUserActivity);this.d("touchstart",function(){e();clearInterval(g);g=setInterval(e,250)});a=function(){e();clearInterval(g)};this.d("touchmove",e);this.d("touchend",a);this.d("touchcancel",a)}}});s=t.a.prototype;
s.dispose=function(){this.l({type:"dispose",bubbles:l});if(this.M)for(var a=this.M.length-1;0<=a;a--)this.M[a].dispose&&this.M[a].dispose();this.Qa=this.Pa=this.M=k;this.o();this.b.parentNode&&this.b.parentNode.removeChild(this.b);t.Fc(this.b);this.b=k};s.c=f;s.j=p("c");s.options=function(a){return a===b?this.k:this.k=t.ga.Va(this.k,a)};s.e=function(a,c){return t.e(a,c)};s.s=function(a){var c=this.c.language(),d=this.c.languages();return d&&d[c]&&d[c][a]?d[c][a]:a};s.v=p("b");
s.ja=function(){return this.u||this.b};s.id=p("T");s.name=p("Gd");s.children=p("M");s.wd=function(a){return this.Pa[a]};s.ka=function(a){return this.Qa[a]};s.Q=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||t.aa(e),c.name=e,d=new window.videojs[d](this.c||this,c)):d=a;this.M.push(d);"function"===typeof d.id&&(this.Pa[d.id()]=d);(e=e||d.name&&d.name())&&(this.Qa[e]=d);"function"===typeof d.el&&d.el()&&this.ja().appendChild(d.el());return d};
s.removeChild=function(a){"string"===typeof a&&(a=this.ka(a));if(a&&this.M){for(var c=l,d=this.M.length-1;0<=d;d--)if(this.M[d]===a){c=f;this.M.splice(d,1);break}c&&(this.Pa[a.id]=k,this.Qa[a.name]=k,(c=a.v())&&c.parentNode===this.ja()&&this.ja().removeChild(a.v()))}};s.uc=function(){var a,c,d,e;a=this;if(c=this.options().children)if(t.h.isArray(c))for(var g=0;g<c.length;g++)d=c[g],"string"==typeof d?(e=d,d={}):e=d.name,a[e]=a.Q(e,d);else t.h.Y(c,function(c,d){d!==l&&(a[c]=a.Q(c,d))})};s.S=r("");
s.d=function(a,c){t.d(this.b,a,t.bind(this,c));return this};s.o=function(a,c){t.o(this.b,a,c);return this};s.W=function(a,c){t.W(this.b,a,t.bind(this,c));return this};s.l=function(a){t.l(this.b,a);return this};s.I=function(a){a&&(this.la?a.call(this):(this.ab===b&&(this.ab=[]),this.ab.push(a)));return this};s.Fa=function(){this.la=f;var a=this.ab;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.ab=[];this.l("ready")}};s.n=function(a){t.n(this.b,a);return this};
s.p=function(a){t.p(this.b,a);return this};s.show=function(){this.b.style.display="block";return this};s.V=function(){this.b.style.display="none";return this};function E(a){a.p("vjs-lock-showing")}s.disable=function(){this.V();this.show=m()};s.width=function(a,c){return F(this,"width",a,c)};s.height=function(a,c){return F(this,"height",a,c)};s.pd=function(a,c){return this.width(a,f).height(c)};
function F(a,c,d,e){if(d!==b){if(d===k||t.Ad(d))d=0;a.b.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px";e||a.l("resize");return a}if(!a.b)return 0;d=a.b.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.b["offset"+t.aa(c)],10)}
function G(a){var c,d,e,g,h,j,n,q;c=0;d=k;a.d("touchstart",function(a){1===a.touches.length&&(d=a.touches[0],c=(new Date).getTime(),g=f)});a.d("touchmove",function(a){1<a.touches.length?g=l:d&&(j=a.touches[0].pageX-d.pageX,n=a.touches[0].pageY-d.pageY,q=Math.sqrt(j*j+n*n),22<q&&(g=l))});h=function(){g=l};a.d("touchleave",h);a.d("touchcancel",h);a.d("touchend",function(a){d=k;g===f&&(e=(new Date).getTime()-c,250>e&&(a.preventDefault(),this.l("tap")))})}
t.t=t.a.extend({i:function(a,c){t.a.call(this,a,c);G(this);this.d("tap",this.r);this.d("click",this.r);this.d("focus",this.Ya);this.d("blur",this.Xa)}});s=t.t.prototype;
s.e=function(a,c){var d;c=t.h.z({className:this.S(),role:"button","aria-live":"polite",tabIndex:0},c);d=t.a.prototype.e.call(this,a,c);c.innerHTML||(this.u=t.e("div",{className:"vjs-control-content"}),this.xb=t.e("span",{className:"vjs-control-text",innerHTML:this.s(this.ta)||"Need Text"}),this.u.appendChild(this.xb),d.appendChild(this.u));return d};s.S=function(){return"vjs-control "+t.a.prototype.S.call(this)};s.r=m();s.Ya=function(){t.d(document,"keydown",t.bind(this,this.da))};
s.da=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.r()};s.Xa=function(){t.o(document,"keydown",t.bind(this,this.da))};
t.P=t.a.extend({i:function(a,c){t.a.call(this,a,c);this.fd=this.ka(this.k.barName);this.handle=this.ka(this.k.handleName);this.d("mousedown",this.Za);this.d("touchstart",this.Za);this.d("focus",this.Ya);this.d("blur",this.Xa);this.d("click",this.r);this.c.d("controlsvisible",t.bind(this,this.update));a.d(this.Bc,t.bind(this,this.update));this.R={};this.R.move=t.bind(this,this.$a);this.R.end=t.bind(this,this.Lb)}});s=t.P.prototype;
s.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=t.h.z({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return t.a.prototype.e.call(this,a,c)};s.Za=function(a){a.preventDefault();t.gd();this.n("vjs-sliding");t.d(document,"mousemove",this.R.move);t.d(document,"mouseup",this.R.end);t.d(document,"touchmove",this.R.move);t.d(document,"touchend",this.R.end);this.$a(a)};s.$a=m();
s.Lb=function(){t.ge();this.p("vjs-sliding");t.o(document,"mousemove",this.R.move,l);t.o(document,"mouseup",this.R.end,l);t.o(document,"touchmove",this.R.move,l);t.o(document,"touchend",this.R.end,l);this.update()};s.update=function(){if(this.b){var a,c=this.Fb(),d=this.handle,e=this.fd;isNaN(c)&&(c=0);a=c;if(d){a=this.b.offsetWidth;var g=d.v().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.v().style.left=t.round(100*c,2)+"%"}e&&(e.v().style.width=t.round(100*a,2)+"%")}};
function H(a,c){var d,e,g,h;d=a.b;e=t.ud(d);h=g=d.offsetWidth;d=a.handle;if(a.options().vertical)return h=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.v().offsetHeight,h+=d/2,g-=d),Math.max(0,Math.min(1,(h-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.v().offsetWidth,g+=d/2,h-=d);return Math.max(0,Math.min(1,(e-g)/h))}s.Ya=function(){t.d(document,"keyup",t.bind(this,this.da))};
s.da=function(a){if(37==a.which||40==a.which)a.preventDefault(),this.Kc();else if(38==a.which||39==a.which)a.preventDefault(),this.Lc()};s.Xa=function(){t.o(document,"keyup",t.bind(this,this.da))};s.r=function(a){a.stopImmediatePropagation();a.preventDefault()};t.Z=t.a.extend();t.Z.prototype.defaultValue=0;
t.Z.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=t.h.z({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return t.a.prototype.e.call(this,"div",c)};t.ha=t.a.extend();function ca(a,c){a.Q(c);c.d("click",t.bind(a,function(){E(this)}))}
t.ha.prototype.e=function(){var a=this.options().kc||"ul";this.u=t.e(a,{className:"vjs-menu-content"});a=t.a.prototype.e.call(this,"div",{append:this.u,className:"vjs-menu"});a.appendChild(this.u);t.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};t.H=t.t.extend({i:function(a,c){t.t.call(this,a,c);this.selected(c.selected)}});t.H.prototype.e=function(a,c){return t.t.prototype.e.call(this,"li",t.h.z({className:"vjs-menu-item",innerHTML:this.k.label},c))};
t.H.prototype.r=function(){this.selected(f)};t.H.prototype.selected=function(a){a?(this.n("vjs-selected"),this.b.setAttribute("aria-selected",f)):(this.p("vjs-selected"),this.b.setAttribute("aria-selected",l))};t.K=t.t.extend({i:function(a,c){t.t.call(this,a,c);this.Aa=this.wa();this.Q(this.Aa);this.N&&0===this.N.length&&this.V();this.d("keyup",this.da);this.b.setAttribute("aria-haspopup",f);this.b.setAttribute("role","button")}});s=t.K.prototype;s.sa=l;
s.wa=function(){var a=new t.ha(this.c);this.options().title&&a.ja().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.aa(this.options().title),de:-1}));if(this.N=this.createItems())for(var c=0;c<this.N.length;c++)ca(a,this.N[c]);return a};s.va=m();s.S=function(){return this.className+" vjs-menu-button "+t.t.prototype.S.call(this)};s.Ya=m();s.Xa=m();s.r=function(){this.W("mouseout",t.bind(this,function(){E(this.Aa);this.b.blur()}));this.sa?I(this):J(this)};
s.da=function(a){a.preventDefault();32==a.which||13==a.which?this.sa?I(this):J(this):27==a.which&&this.sa&&I(this)};function J(a){a.sa=f;a.Aa.n("vjs-lock-showing");a.b.setAttribute("aria-pressed",f);a.N&&0<a.N.length&&a.N[0].v().focus()}function I(a){a.sa=l;E(a.Aa);a.b.setAttribute("aria-pressed",l)}t.D=function(a){"number"===typeof a?this.code=a:"string"===typeof a?this.message=a:"object"===typeof a&&t.h.z(this,a);this.message||(this.message=t.D.nd[this.code]||"")};t.D.prototype.code=0;
t.D.prototype.message="";t.D.prototype.status=k;t.D.Sa="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
t.D.nd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};for(var K=0;K<t.D.Sa.length;K++)t.D[t.D.Sa[K]]=K,t.D.prototype[t.D.Sa[K]]=K;
var L,M,N,O;
L=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
M=L[0];for(O=0;O<L.length;O++)if(L[O][1]in document){N=L[O];break}if(N){t.Oa.Eb={};for(O=0;O<N.length;O++)t.Oa.Eb[M[O]]=N[O]}
t.Player=t.a.extend({i:function(a,c,d){this.O=a;a.id=a.id||"vjs_video_"+t.w++;this.ee=a&&t.za(a);c=t.h.z(da(a),c);this.Ua=c.language||t.options.language;this.Ed=c.languages||t.options.languages;this.F={};this.Cc=c.poster;this.yb=c.controls;a.controls=l;c.Gc=l;t.a.call(this,this,c,d);this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");t.Ba[this.T]=this;c.plugins&&t.h.Y(c.plugins,function(a,c){this[a](c)},this);var e,g,h,j,n,q;e=t.bind(this,this.reportUserActivity);this.d("mousedown",
function(){e();clearInterval(g);g=setInterval(e,250)});this.d("mousemove",function(a){if(a.screenX!=n||a.screenY!=q)n=a.screenX,q=a.screenY,e()});this.d("mouseup",function(){e();clearInterval(g)});this.d("keydown",e);this.d("keyup",e);h=setInterval(t.bind(this,function(){if(this.pa){this.pa=l;this.userActive(f);clearTimeout(j);var a=this.options().inactivityTimeout;0<a&&(j=setTimeout(t.bind(this,function(){this.pa||this.userActive(l)}),a))}}),250);this.d("dispose",function(){clearInterval(h);clearTimeout(j)})}});
s=t.Player.prototype;s.language=function(a){if(a===b)return this.Ua;this.Ua=a;return this};s.languages=p("Ed");s.k=t.options;s.dispose=function(){this.l("dispose");this.o("dispose");t.Ba[this.T]=k;this.O&&this.O.player&&(this.O.player=k);this.b&&this.b.player&&(this.b.player=k);this.m&&this.m.dispose();t.a.prototype.dispose.call(this)};
function da(a){var c={sources:[],tracks:[]};t.h.z(c,t.za(a));if(a.hasChildNodes()){var d,e,g,h;a=a.childNodes;g=0;for(h=a.length;g<h;g++)d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(t.za(d)):"track"===e&&c.tracks.push(t.za(d))}return c}
s.e=function(){var a=this.b=t.a.prototype.e.call(this,"div"),c=this.O,d;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes()){var e,g,h,j,n;e=c.childNodes;g=e.length;for(n=[];g--;)h=e[g],j=h.nodeName.toLowerCase(),"track"===j&&n.push(h);for(e=0;e<n.length;e++)c.removeChild(n[e])}d=t.za(c);t.h.Y(d,function(c){a.setAttribute(c,d[c])});c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.n("vjs-paused");this.width(this.k.width,f);this.height(this.k.height,f);c.parentNode&&
c.parentNode.insertBefore(a,c);t.Gb(c,a);this.b=a;this.d("loadstart",this.Ld);this.d("waiting",this.Rd);this.d(["canplay","canplaythrough","playing","ended"],this.Qd);this.d("seeking",this.Od);this.d("seeked",this.Nd);this.d("ended",this.Hd);this.d("play",this.Nb);this.d("firstplay",this.Jd);this.d("pause",this.Mb);this.d("progress",this.Md);this.d("durationchange",this.zc);this.d("fullscreenchange",this.Kd);return a};
function P(a,c,d){a.m&&(a.la=l,a.m.dispose(),a.m=l);"Html5"!==c&&a.O&&(t.g.Bb(a.O),a.O=k);a.eb=c;a.la=l;var e=t.h.z({source:d,parentEl:a.b},a.k[c.toLowerCase()]);d&&(a.mc=d.type,d.src==a.F.src&&0<a.F.currentTime&&(e.startTime=a.F.currentTime),a.F.src=d.src);a.m=new window.videojs[c](a,e);a.m.I(function(){this.c.Fa()})}s.Ld=function(){this.error(k);this.paused()?(Q(this,l),this.W("play",function(){Q(this,f)})):this.l("firstplay")};s.tc=l;
function Q(a,c){c!==b&&a.tc!==c&&((a.tc=c)?(a.n("vjs-has-started"),a.l("firstplay")):a.p("vjs-has-started"))}s.Nb=function(){this.p("vjs-paused");this.n("vjs-playing")};s.Rd=function(){this.n("vjs-waiting")};s.Qd=function(){this.p("vjs-waiting")};s.Od=function(){this.n("vjs-seeking")};s.Nd=function(){this.p("vjs-seeking")};s.Jd=function(){this.k.starttime&&this.currentTime(this.k.starttime);this.n("vjs-has-started")};s.Mb=function(){this.p("vjs-playing");this.n("vjs-paused")};
s.Md=function(){1==this.bufferedPercent()&&this.l("loadedalldata")};s.Hd=function(){this.k.loop?(this.currentTime(0),this.play()):this.paused()||this.pause()};s.zc=function(){var a=R(this,"duration");a&&(0>a&&(a=Infinity),this.duration(a),Infinity===a?this.n("vjs-live"):this.p("vjs-live"))};s.Kd=function(){this.isFullscreen()?this.n("vjs-fullscreen"):this.p("vjs-fullscreen")};function S(a,c,d){if(a.m&&!a.m.la)a.m.I(function(){this[c](d)});else try{a.m[c](d)}catch(e){throw t.log(e),e;}}
function R(a,c){if(a.m&&a.m.la)try{return a.m[c]()}catch(d){throw a.m[c]===b?t.log("Video.js: "+c+" method not defined for "+a.eb+" playback technology.",d):"TypeError"==d.name?(t.log("Video.js: "+c+" unavailable on "+a.eb+" playback technology element.",d),a.m.la=l):t.log(d),d;}}s.play=function(){S(this,"play");return this};s.pause=function(){S(this,"pause");return this};s.paused=function(){return R(this,"paused")===l?l:f};
s.currentTime=function(a){return a!==b?(S(this,"setCurrentTime",a),this):this.F.currentTime=R(this,"currentTime")||0};s.duration=function(a){if(a!==b)return this.F.duration=parseFloat(a),this;this.F.duration===b&&this.zc();return this.F.duration||0};s.remainingTime=function(){return this.duration()-this.currentTime()};s.buffered=function(){var a=R(this,"buffered");if(!a||!a.length)a=t.zb(0,0);return a};
s.bufferedPercent=function(){var a=this.duration(),c=this.buffered(),d=0,e,g;if(!a)return 0;for(var h=0;h<c.length;h++)e=c.start(h),g=c.end(h),g>a&&(g=a),d+=g-e;return d/a};s.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.F.volume=a,S(this,"setVolume",a),t.Xd(a),this;a=parseFloat(R(this,"volume"));return isNaN(a)?1:a};s.muted=function(a){return a!==b?(S(this,"setMuted",a),this):R(this,"muted")||l};s.Da=function(){return R(this,"supportsFullScreen")||l};s.vc=l;
s.isFullscreen=function(a){return a!==b?(this.vc=!!a,this):this.vc};s.requestFullscreen=function(){var a=t.Oa.Eb;this.isFullscreen(f);a?(t.d(document,a.fullscreenchange,t.bind(this,function(c){this.isFullscreen(document[a.fullscreenElement]);this.isFullscreen()===l&&t.o(document,a.fullscreenchange,arguments.callee);this.l("fullscreenchange")})),this.b[a.requestFullscreen]()):this.m.Da()?S(this,"enterFullScreen"):(this.oc(),this.l("fullscreenchange"));return this};
s.exitFullscreen=function(){var a=t.Oa.Eb;this.isFullscreen(l);if(a)document[a.exitFullscreen]();else this.m.Da()?S(this,"exitFullScreen"):(this.Cb(),this.l("fullscreenchange"));return this};s.oc=function(){this.zd=f;this.qd=document.documentElement.style.overflow;t.d(document,"keydown",t.bind(this,this.qc));document.documentElement.style.overflow="hidden";t.n(document.body,"vjs-full-window");this.l("enterFullWindow")};
s.qc=function(a){27===a.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():this.Cb())};s.Cb=function(){this.zd=l;t.o(document,"keydown",this.qc);document.documentElement.style.overflow=this.qd;t.p(document.body,"vjs-full-window");this.l("exitFullWindow")};
s.selectSource=function(a){for(var c=0,d=this.k.techOrder;c<d.length;c++){var e=t.aa(d[c]),g=window.videojs[e];if(g){if(g.isSupported())for(var h=0,j=a;h<j.length;h++){var n=j[h];if(g.canPlaySource(n))return{source:n,m:e}}}else t.log.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')}return l};
s.src=function(a){if(a===b)return R(this,"src");t.h.isArray(a)?T(this,a):"string"===typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!window.videojs[this.eb].canPlaySource(a)?T(this,[a]):(this.F.src=a.src,this.mc=a.type||"",this.I(function(){S(this,"src",a.src);"auto"==this.k.preload&&this.load();this.k.autoplay&&this.play()})));return this};
function T(a,c){var d=a.selectSource(c),e;d?d.m===a.eb?a.src(d.source):P(a,d.m,d.source):(e=setTimeout(t.bind(a,function(){this.error({code:4,message:this.s(this.options().notSupportedMessage)})}),0),a.Fa(),a.d("dispose",function(){clearTimeout(e)}))}s.load=function(){S(this,"load");return this};s.currentSrc=function(){return R(this,"currentSrc")||this.F.src||""};s.Ra=function(){return this.mc||""};s.Ca=function(a){return a!==b?(S(this,"setPreload",a),this.k.preload=a,this):R(this,"preload")};
s.autoplay=function(a){return a!==b?(S(this,"setAutoplay",a),this.k.autoplay=a,this):R(this,"autoplay")};s.loop=function(a){return a!==b?(S(this,"setLoop",a),this.k.loop=a,this):R(this,"loop")};s.poster=function(a){if(a===b)return this.Cc;this.Cc=a;S(this,"setPoster",a);this.l("posterchange")};
s.controls=function(a){return a!==b?(a=!!a,this.yb!==a&&((this.yb=a)?(this.p("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.l("controlsenabled")):(this.p("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.l("controlsdisabled"))),this):this.yb};t.Player.prototype.Sb;s=t.Player.prototype;
s.usingNativeControls=function(a){return a!==b?(a=!!a,this.Sb!==a&&((this.Sb=a)?(this.n("vjs-using-native-controls"),this.l("usingnativecontrols")):(this.p("vjs-using-native-controls"),this.l("usingcustomcontrols"))),this):this.Sb};s.ca=k;s.error=function(a){if(a===b)return this.ca;if(a===k)return this.ca=a,this.p("vjs-error"),this;this.ca=a instanceof t.D?a:new t.D(a);this.l("error");this.n("vjs-error");t.log.error("(CODE:"+this.ca.code+" "+t.D.Sa[this.ca.code]+")",this.ca.message,this.ca);return this};
s.ended=function(){return R(this,"ended")};s.seeking=function(){return R(this,"seeking")};s.pa=f;s.reportUserActivity=function(){this.pa=f};s.Rb=f;s.userActive=function(a){return a!==b?(a=!!a,a!==this.Rb&&((this.Rb=a)?(this.pa=f,this.p("vjs-user-inactive"),this.n("vjs-user-active"),this.l("useractive")):(this.pa=l,this.m&&this.m.W("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.p("vjs-user-active"),this.n("vjs-user-inactive"),this.l("userinactive"))),this):this.Rb};
s.playbackRate=function(a){return a!==b?(S(this,"setPlaybackRate",a),this):this.m&&this.m.featuresPlaybackRate?R(this,"playbackRate"):1};t.Ia=t.a.extend();t.Ia.prototype.k={se:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{}}};t.Ia.prototype.e=function(){return t.e("div",{className:"vjs-control-bar"})};
t.Xb=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.Xb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});this.u=t.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.s("Stream Type")+"</span>"+this.s("LIVE"),"aria-live":"off"});a.appendChild(this.u);return a};t.$b=t.t.extend({i:function(a,c){t.t.call(this,a,c);a.d("play",t.bind(this,this.Nb));a.d("pause",t.bind(this,this.Mb))}});s=t.$b.prototype;s.ta="Play";
s.S=function(){return"vjs-play-control "+t.t.prototype.S.call(this)};s.r=function(){this.c.paused()?this.c.play():this.c.pause()};s.Nb=function(){t.p(this.b,"vjs-paused");t.n(this.b,"vjs-playing");this.b.children[0].children[0].innerHTML=this.s("Pause")};s.Mb=function(){t.p(this.b,"vjs-playing");t.n(this.b,"vjs-paused");this.b.children[0].children[0].innerHTML=this.s("Play")};t.hb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});
t.hb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.u=t.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.u);return a};t.hb.prototype.fa=function(){var a=this.c.bb?this.c.F.currentTime:this.c.currentTime();this.u.innerHTML='<span class="vjs-control-text">'+this.s("Current Time")+"</span> "+t.ya(a,this.c.duration())};
t.ib=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});t.ib.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.u=t.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.s("Duration Time")+"</span> 0:00","aria-live":"off"});a.appendChild(this.u);return a};
t.ib.prototype.fa=function(){var a=this.c.duration();a&&(this.u.innerHTML='<span class="vjs-control-text">'+this.s("Duration Time")+"</span> "+t.ya(a))};t.fc=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.fc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};t.pb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});
t.pb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.u=t.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.s("Remaining Time")+"</span> -0:00","aria-live":"off"});a.appendChild(this.u);return a};t.pb.prototype.fa=function(){this.c.duration()&&(this.u.innerHTML='<span class="vjs-control-text">'+this.s("Remaining Time")+"</span> -"+t.ya(this.c.remainingTime()))};
t.Ja=t.t.extend({i:function(a,c){t.t.call(this,a,c)}});t.Ja.prototype.ta="Fullscreen";t.Ja.prototype.S=function(){return"vjs-fullscreen-control "+t.t.prototype.S.call(this)};t.Ja.prototype.r=function(){this.c.isFullscreen()?(this.c.exitFullscreen(),this.xb.innerHTML=this.s("Fullscreen")):(this.c.requestFullscreen(),this.xb.innerHTML=this.s("Non-Fullscreen"))};t.ob=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.ob.prototype.k={children:{seekBar:{}}};
t.ob.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};t.bc=t.P.extend({i:function(a,c){t.P.call(this,a,c);a.d("timeupdate",t.bind(this,this.oa));a.I(t.bind(this,this.oa))}});s=t.bc.prototype;s.k={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};s.Bc="timeupdate";s.e=function(){return t.P.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
s.oa=function(){var a=this.c.bb?this.c.F.currentTime:this.c.currentTime();this.b.setAttribute("aria-valuenow",t.round(100*this.Fb(),2));this.b.setAttribute("aria-valuetext",t.ya(a,this.c.duration()))};s.Fb=function(){return this.c.currentTime()/this.c.duration()};s.Za=function(a){t.P.prototype.Za.call(this,a);this.c.bb=f;this.ie=!this.c.paused();this.c.pause()};s.$a=function(a){a=H(this,a)*this.c.duration();a==this.c.duration()&&(a-=0.1);this.c.currentTime(a)};
s.Lb=function(a){t.P.prototype.Lb.call(this,a);this.c.bb=l;this.ie&&this.c.play()};s.Lc=function(){this.c.currentTime(this.c.currentTime()+5)};s.Kc=function(){this.c.currentTime(this.c.currentTime()-5)};t.lb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("progress",t.bind(this,this.update))}});t.lb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.s("Loaded")+"</span>: 0%</span>"})};
t.lb.prototype.update=function(){var a,c,d,e,g=this.c.buffered();a=this.c.duration();var h,j=this.c;h=j.buffered();j=j.duration();h=h.end(h.length-1);h>j&&(h=j);j=this.b.children;this.b.style.width=100*(h/a||0)+"%";for(a=0;a<g.length;a++)c=g.start(a),d=g.end(a),(e=j[a])||(e=this.b.appendChild(t.e())),e.style.left=100*(c/h||0)+"%",e.style.width=100*((d-c)/h||0)+"%";for(a=j.length;a>g.length;a--)this.b.removeChild(j[a-1])};t.Zb=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});
t.Zb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.s("Progress")+"</span>: 0%</span>"})};t.La=t.Z.extend({i:function(a,c){t.Z.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});t.La.prototype.defaultValue="00:00";t.La.prototype.e=function(){return t.Z.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};
t.La.prototype.fa=function(){var a=this.c.bb?this.c.F.currentTime:this.c.currentTime();this.b.innerHTML='<span class="vjs-control-text">'+t.ya(a,this.c.duration())+"</span>"};t.rb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")}))}});t.rb.prototype.k={children:{volumeBar:{}}};
t.rb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};t.qb=t.P.extend({i:function(a,c){t.P.call(this,a,c);a.d("volumechange",t.bind(this,this.oa));a.I(t.bind(this,this.oa))}});s=t.qb.prototype;s.oa=function(){this.b.setAttribute("aria-valuenow",t.round(100*this.c.volume(),2));this.b.setAttribute("aria-valuetext",t.round(100*this.c.volume(),2)+"%")};s.k={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
s.Bc="volumechange";s.e=function(){return t.P.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};s.$a=function(a){this.c.muted()&&this.c.muted(l);this.c.volume(H(this,a))};s.Fb=function(){return this.c.muted()?0:this.c.volume()};s.Lc=function(){this.c.volume(this.c.volume()+0.1)};s.Kc=function(){this.c.volume(this.c.volume()-0.1)};t.gc=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});
t.gc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};t.sb=t.Z.extend();t.sb.prototype.defaultValue="00:00";t.sb.prototype.e=function(){return t.Z.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
t.ia=t.t.extend({i:function(a,c){t.t.call(this,a,c);a.d("volumechange",t.bind(this,this.update));a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")}))}});t.ia.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.s("Mute")+"</span></div>"})};
t.ia.prototype.r=function(){this.c.muted(this.c.muted()?l:f)};t.ia.prototype.update=function(){var a=this.c.volume(),c=3;0===a||this.c.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.c.muted()?this.b.children[0].children[0].innerHTML!=this.s("Unmute")&&(this.b.children[0].children[0].innerHTML=this.s("Unmute")):this.b.children[0].children[0].innerHTML!=this.s("Mute")&&(this.b.children[0].children[0].innerHTML=this.s("Mute"));for(a=0;4>a;a++)t.p(this.b,"vjs-vol-"+a);t.n(this.b,"vjs-vol-"+c)};
t.ra=t.K.extend({i:function(a,c){t.K.call(this,a,c);a.d("volumechange",t.bind(this,this.update));a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")}));this.n("vjs-menu-button")}});t.ra.prototype.wa=function(){var a=new t.ha(this.c,{kc:"div"}),c=new t.qb(this.c,t.h.z({vertical:f},this.k.we));a.Q(c);return a};t.ra.prototype.r=function(){t.ia.prototype.r.call(this);t.K.prototype.r.call(this)};
t.ra.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.s("Mute")+"</span></div>"})};t.ra.prototype.update=t.ia.prototype.update;t.ac=t.K.extend({i:function(a,c){t.K.call(this,a,c);this.Qc();this.Pc();a.d("loadstart",t.bind(this,this.Qc));a.d("ratechange",t.bind(this,this.Pc))}});s=t.ac.prototype;
s.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-playback-rate vjs-menu-button vjs-control",innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+this.s("Playback Rate")+"</span></div>"});this.xc=t.e("div",{className:"vjs-playback-rate-value",innerHTML:1});a.appendChild(this.xc);return a};s.wa=function(){var a=new t.ha(this.j()),c=this.j().options().playbackRates;if(c)for(var d=c.length-1;0<=d;d--)a.Q(new t.nb(this.j(),{rate:c[d]+"x"}));return a};
s.oa=function(){this.v().setAttribute("aria-valuenow",this.j().playbackRate())};s.r=function(){for(var a=this.j().playbackRate(),c=this.j().options().playbackRates,d=c[0],e=0;e<c.length;e++)if(c[e]>a){d=c[e];break}this.j().playbackRate(d)};function U(a){return a.j().m&&a.j().m.featuresPlaybackRate&&a.j().options().playbackRates&&0<a.j().options().playbackRates.length}s.Qc=function(){U(this)?this.p("vjs-hidden"):this.n("vjs-hidden")};
s.Pc=function(){U(this)&&(this.xc.innerHTML=this.j().playbackRate()+"x")};t.nb=t.H.extend({kc:"button",i:function(a,c){var d=this.label=c.rate,e=this.Ec=parseFloat(d,10);c.label=d;c.selected=1===e;t.H.call(this,a,c);this.j().d("ratechange",t.bind(this,this.update))}});t.nb.prototype.r=function(){t.H.prototype.r.call(this);this.j().playbackRate(this.Ec)};t.nb.prototype.update=function(){this.selected(this.j().playbackRate()==this.Ec)};
t.Ka=t.t.extend({i:function(a,c){t.t.call(this,a,c);a.poster()&&this.src(a.poster());(!a.poster()||!a.controls())&&this.V();a.d("posterchange",t.bind(this,function(){this.src(a.poster())}));a.d("play",t.bind(this,this.V))}});var ea="backgroundSize"in t.A.style;t.Ka.prototype.e=function(){var a=t.e("div",{className:"vjs-poster",tabIndex:-1});ea||a.appendChild(t.e("img"));return a};t.Ka.prototype.src=function(a){var c=this.v();a!==b&&(ea?c.style.backgroundImage='url("'+a+'")':c.firstChild.src=a)};
t.Ka.prototype.r=function(){this.j().controls()&&this.c.play()};t.Yb=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.Yb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};t.fb=t.t.extend();t.fb.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};t.fb.prototype.r=function(){this.c.play()};
t.jb=t.a.extend({i:function(a,c){t.a.call(this,a,c);this.update();a.d("error",t.bind(this,this.update))}});t.jb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-error-display"});this.u=t.e("div");a.appendChild(this.u);return a};t.jb.prototype.update=function(){this.j().error()&&(this.u.innerHTML=this.s(this.j().error().message))};
t.q=t.a.extend({i:function(a,c,d){c=c||{};c.Gc=l;t.a.call(this,a,c,d);this.featuresProgressEvents||(this.yc=f,this.Dc=setInterval(t.bind(this,function(){var a=this.j().bufferedPercent();this.hd!=a&&this.j().l("progress");this.hd=a;1===a&&clearInterval(this.Dc)}),500));this.featuresTimeupdateEvents||(this.Kb=f,this.j().d("play",t.bind(this,this.Oc)),this.j().d("pause",t.bind(this,this.cb)),this.W("timeupdate",function(){this.featuresTimeupdateEvents=f;fa(this)}));var e,g;g=this;e=this.j();a=function(){if(e.controls()&&
!e.usingNativeControls()){var a;g.d("mousedown",g.r);g.d("touchstart",function(){a=this.c.userActive()});g.d("touchmove",function(){a&&this.j().reportUserActivity()});g.d("touchend",function(a){a.preventDefault()});G(g);g.d("tap",g.Pd)}};c=t.bind(g,g.Vd);this.I(a);e.d("controlsenabled",a);e.d("controlsdisabled",c);this.I(function(){this.networkState&&0<this.networkState()&&this.j().l("loadstart")})}});s=t.q.prototype;
s.Vd=function(){this.o("tap");this.o("touchstart");this.o("touchmove");this.o("touchleave");this.o("touchcancel");this.o("touchend");this.o("click");this.o("mousedown")};s.r=function(a){0===a.button&&this.j().controls()&&(this.j().paused()?this.j().play():this.j().pause())};s.Pd=function(){this.j().userActive(!this.j().userActive())};function fa(a){a.Kb=l;a.cb();a.o("play",a.Oc);a.o("pause",a.cb)}
s.Oc=function(){this.lc&&this.cb();this.lc=setInterval(t.bind(this,function(){this.j().l("timeupdate")}),250)};s.cb=function(){clearInterval(this.lc);this.j().l("timeupdate")};s.dispose=function(){this.yc&&(this.yc=l,clearInterval(this.Dc));this.Kb&&fa(this);t.a.prototype.dispose.call(this)};s.Pb=function(){this.Kb&&this.j().l("timeupdate")};s.Ic=m();t.q.prototype.featuresVolumeControl=f;t.q.prototype.featuresFullscreenResize=l;t.q.prototype.featuresPlaybackRate=l;
t.q.prototype.featuresProgressEvents=l;t.q.prototype.featuresTimeupdateEvents=l;t.media={};
t.g=t.q.extend({i:function(a,c,d){this.featuresVolumeControl=t.g.kd();this.featuresPlaybackRate=t.g.jd();this.movingMediaElementInDOM=!t.Wc;this.featuresProgressEvents=this.featuresFullscreenResize=f;t.q.call(this,a,c,d);for(d=t.g.kb.length-1;0<=d;d--)t.d(this.b,t.g.kb[d],t.bind(this,this.sd));if((c=c.source)&&this.b.currentSrc!==c.src)this.b.src=c.src;if(t.dc&&a.options().nativeControlsForTouch!==l){var e,g,h,j;e=this;g=this.j();c=g.controls();e.b.controls=!!c;h=function(){e.b.controls=f};j=function(){e.b.controls=
l};g.d("controlsenabled",h);g.d("controlsdisabled",j);c=function(){g.o("controlsenabled",h);g.o("controlsdisabled",j)};e.d("dispose",c);g.d("usingcustomcontrols",c);g.usingNativeControls(f)}a.I(function(){this.O&&(this.k.autoplay&&this.paused())&&(delete this.O.poster,this.play())});this.Fa()}});s=t.g.prototype;s.dispose=function(){t.g.Bb(this.b);t.q.prototype.dispose.call(this)};
s.e=function(){var a=this.c,c=a.O,d;if(!c||this.movingMediaElementInDOM===l)c?(d=c.cloneNode(l),t.g.Bb(c),c=d,a.O=k):(c=t.e("video"),t.Hc(c,t.h.z(a.ee||{},{id:a.id()+"_html5_api","class":"vjs-tech"}))),c.player=a,t.Gb(c,a.v());d=["autoplay","preload","loop","muted"];for(var e=d.length-1;0<=e;e--){var g=d[e],h={};"undefined"!==typeof a.k[g]&&(h[g]=a.k[g]);t.Hc(c,h)}return c};s.sd=function(a){"error"==a.type&&this.error()?this.j().error(this.error().code):(a.bubbles=l,this.j().l(a))};s.play=function(){this.b.play()};
s.pause=function(){this.b.pause()};s.paused=function(){return this.b.paused};s.currentTime=function(){return this.b.currentTime};s.Pb=function(a){try{this.b.currentTime=a}catch(c){t.log(c,"Video is not ready. (Video.js)")}};s.duration=function(){return this.b.duration||0};s.buffered=function(){return this.b.buffered};s.volume=function(){return this.b.volume};s.be=function(a){this.b.volume=a};s.muted=function(){return this.b.muted};s.Zd=function(a){this.b.muted=a};s.width=function(){return this.b.offsetWidth};
s.height=function(){return this.b.offsetHeight};s.Da=function(){return"function"==typeof this.b.webkitEnterFullScreen&&(/Android/.test(t.L)||!/Chrome|Mac OS X 10.5/.test(t.L))?f:l};s.nc=function(){var a=this.b;a.paused&&a.networkState<=a.je?(this.b.play(),setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};s.td=function(){this.b.webkitExitFullScreen()};s.src=function(a){if(a===b)return this.b.src;this.b.src=a};s.load=function(){this.b.load()};s.currentSrc=function(){return this.b.currentSrc};
s.poster=function(){return this.b.poster};s.Ic=function(a){this.b.poster=a};s.Ca=function(){return this.b.Ca};s.ae=function(a){this.b.Ca=a};s.autoplay=function(){return this.b.autoplay};s.Wd=function(a){this.b.autoplay=a};s.controls=function(){return this.b.controls};s.loop=function(){return this.b.loop};s.Yd=function(a){this.b.loop=a};s.error=function(){return this.b.error};s.seeking=function(){return this.b.seeking};s.ended=function(){return this.b.ended};s.playbackRate=function(){return this.b.playbackRate};
s.$d=function(a){this.b.playbackRate=a};s.networkState=function(){return this.b.networkState};t.g.isSupported=function(){try{t.A.volume=0.5}catch(a){return l}return!!t.A.canPlayType};t.g.vb=function(a){try{return!!t.A.canPlayType(a.type)}catch(c){return""}};t.g.kd=function(){var a=t.A.volume;t.A.volume=a/2+0.1;return a!==t.A.volume};t.g.jd=function(){var a=t.A.playbackRate;t.A.playbackRate=a/2+0.1;return a!==t.A.playbackRate};var V,ga=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,ha=/^video\/mp4/i;
t.g.Ac=function(){4<=t.Tb&&(V||(V=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ga.test(a)?"maybe":V.call(this,a)});t.$c&&(V||(V=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ha.test(a)?"maybe":V.call(this,a)})};t.g.he=function(){var a=t.A.constructor.prototype.canPlayType;t.A.constructor.prototype.canPlayType=V;V=k;return a};t.g.Ac();t.g.kb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
t.g.Bb=function(a){if(a){a.player=k;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
t.f=t.q.extend({i:function(a,c,d){t.q.call(this,a,c,d);var e=c.source;d=c.parentEl;var g=this.b=t.e("div",{id:a.id()+"_temp_flash"}),h=a.id()+"_flash_api",j=a.k,j=t.h.z({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:j.autoplay,preload:j.Ca,loop:j.loop,muted:j.muted},c.flashVars),n=t.h.z({wmode:"opaque",bgcolor:"#000000"},c.params),h=t.h.z({id:h,name:h,"class":"vjs-tech"},c.attributes);e&&(e.type&&t.f.Cd(e.type)?
(e=t.f.Mc(e.src),j.rtmpConnection=encodeURIComponent(e.wb),j.rtmpStream=encodeURIComponent(e.Qb)):j.src=encodeURIComponent(t.rc(e.src)));t.Gb(g,d);c.startTime&&this.I(function(){this.load();this.play();this.currentTime(c.startTime)});t.Vc&&this.I(function(){t.d(this.v(),"mousemove",t.bind(this,function(){this.j().l({type:"mousemove",bubbles:l})}))});a.d("stageclick",a.reportUserActivity);this.b=t.f.rd(c.swf,g,j,n,h)}});t.f.prototype.dispose=function(){t.q.prototype.dispose.call(this)};
t.f.prototype.play=function(){this.b.vjs_play()};t.f.prototype.pause=function(){this.b.vjs_pause()};t.f.prototype.src=function(a){if(a===b)return this.currentSrc();t.f.Bd(a)?(a=t.f.Mc(a),this.te(a.wb),this.ue(a.Qb)):(a=t.rc(a),this.b.vjs_src(a));if(this.c.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.f.prototype.setCurrentTime=function(a){this.Fd=a;this.b.vjs_setProperty("currentTime",a);t.q.prototype.Pb.call(this)};
t.f.prototype.currentTime=function(){return this.seeking()?this.Fd||0:this.b.vjs_getProperty("currentTime")};t.f.prototype.currentSrc=function(){var a=this.b.vjs_getProperty("currentSrc");if(a==k){var c=this.rtmpConnection(),d=this.rtmpStream();c&&d&&(a=t.f.ce(c,d))}return a};t.f.prototype.load=function(){this.b.vjs_load()};t.f.prototype.poster=function(){this.b.vjs_getProperty("poster")};t.f.prototype.setPoster=m();t.f.prototype.buffered=function(){return t.zb(0,this.b.vjs_getProperty("buffered"))};
t.f.prototype.Da=r(l);t.f.prototype.nc=r(l);function ia(){var a=W[X],c=a.charAt(0).toUpperCase()+a.slice(1);ja["set"+c]=function(c){return this.b.vjs_setProperty(a,c)}}function ka(a){ja[a]=function(){return this.b.vjs_getProperty(a)}}
var ja=t.f.prototype,W="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),la="error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),X;for(X=0;X<W.length;X++)ka(W[X]),ia();for(X=0;X<la.length;X++)ka(la[X]);t.f.isSupported=function(){return 10<=t.f.version()[0]};
t.f.vb=function(a){if(!a.type)return"";a=a.type.replace(/;.*/,"").toLowerCase();if(a in t.f.vd||a in t.f.Nc)return"maybe"};t.f.vd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};t.f.Nc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};t.f.onReady=function(a){var c;if(c=(a=t.v(a))&&a.parentNode&&a.parentNode.player)a.player=c,t.f.checkReady(c.m)};t.f.checkReady=function(a){a.v()&&(a.v().vjs_getProperty?a.Fa():setTimeout(function(){t.f.checkReady(a)},50))};t.f.onEvent=function(a,c){t.v(a).player.l(c)};
t.f.onError=function(a,c){var d=t.v(a).player,e="FLASH: "+c;"srcnotfound"==c?d.error({code:4,message:e}):d.error(e)};t.f.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
t.f.rd=function(a,c,d,e,g){a=t.f.xd(a,d,e,g);a=t.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var h=d.childNodes[0];setTimeout(function(){h.style.display="block"},1E3);return a};
t.f.xd=function(a,c,d,e){var g="",h="",j="";c&&t.h.Y(c,function(a,c){g+=a+"="+c+"&amp;"});d=t.h.z({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);t.h.Y(d,function(a,c){h+='<param name="'+a+'" value="'+c+'" />'});e=t.h.z({data:a,width:"100%",height:"100%"},e);t.h.Y(e,function(a,c){j+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+j+">"+h+"</object>"};t.f.ce=function(a,c){return a+"&"+c};
t.f.Mc=function(a){var c={wb:"",Qb:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.wb=a.substring(0,d);c.Qb=a.substring(e,a.length);return c};t.f.Cd=function(a){return a in t.f.Nc};t.f.bd=/^rtmp[set]?:\/\//i;t.f.Bd=function(a){return t.f.bd.test(a)};
t.ad=t.a.extend({i:function(a,c,d){t.a.call(this,a,c,d);if(!a.k.sources||0===a.k.sources.length){c=0;for(d=a.k.techOrder;c<d.length;c++){var e=t.aa(d[c]),g=window.videojs[e];if(g&&g.isSupported()){P(a,e);break}}}else a.src(a.k.sources)}});t.Player.prototype.textTracks=function(){return this.Ea=this.Ea||[]};
function ma(a,c,d,e,g){var h=a.Ea=a.Ea||[];g=g||{};g.kind=c;g.label=d;g.language=e;c=t.aa(c||"subtitles");var j=new window.videojs[c+"Track"](a,g);h.push(j);j.Ab()&&a.I(function(){setTimeout(function(){Y(j.j(),j.id())},0)})}function Y(a,c,d){for(var e=a.Ea,g=0,h=e.length,j,n;g<h;g++)j=e[g],j.id()===c?(j.show(),n=j):d&&(j.J()==d&&0<j.mode())&&j.disable();(c=n?n.J():d?d:l)&&a.l(c+"trackchange")}
t.B=t.a.extend({i:function(a,c){t.a.call(this,a,c);this.T=c.id||"vjs_"+c.kind+"_"+c.language+"_"+t.w++;this.Jc=c.src;this.od=c["default"]||c.dflt;this.fe=c.title;this.Ua=c.srclang;this.Dd=c.label;this.ba=[];this.tb=[];this.ma=this.na=0;this.c.d("fullscreenchange",t.bind(this,this.ed))}});s=t.B.prototype;s.J=p("G");s.src=p("Jc");s.Ab=p("od");s.title=p("fe");s.language=p("Ua");s.label=p("Dd");s.ld=p("ba");s.cd=p("tb");s.readyState=p("na");s.mode=p("ma");
s.ed=function(){this.b.style.fontSize=this.c.isFullscreen()?140*(screen.width/this.c.width())+"%":""};s.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-"+this.G+" vjs-text-track"})};s.show=function(){na(this);this.ma=2;t.a.prototype.show.call(this)};s.V=function(){na(this);this.ma=1;t.a.prototype.V.call(this)};
s.disable=function(){2==this.ma&&this.V();this.c.o("timeupdate",t.bind(this,this.update,this.T));this.c.o("ended",t.bind(this,this.reset,this.T));this.reset();this.c.ka("textTrackDisplay").removeChild(this);this.ma=0};function na(a){0===a.na&&a.load();0===a.ma&&(a.c.d("timeupdate",t.bind(a,a.update,a.T)),a.c.d("ended",t.bind(a,a.reset,a.T)),("captions"===a.G||"subtitles"===a.G)&&a.c.ka("textTrackDisplay").Q(a))}
s.load=function(){0===this.na&&(this.na=1,t.get(this.Jc,t.bind(this,this.Sd),t.bind(this,this.Id)))};s.Id=function(a){this.error=a;this.na=3;this.l("error")};s.Sd=function(a){var c,d;a=a.split("\n");for(var e="",g=1,h=a.length;g<h;g++)if(e=t.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=t.trim(a[++g])):c=this.ba.length;c={id:c,index:this.ba.length};d=e.split(/[\t ]+/);c.startTime=oa(d[0]);c.xa=oa(d[2]);for(d=[];a[++g]&&(e=t.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.ba.push(c)}this.na=2;this.l("loaded")};
function oa(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}
s.update=function(){if(0<this.ba.length){var a=this.c.options().trackTimeOffset||0,a=this.c.currentTime()+a;if(this.Ob===b||a<this.Ob||this.Wa<=a){var c=this.ba,d=this.c.duration(),e=0,g=l,h=[],j,n,q,w;a>=this.Wa||this.Wa===b?w=this.Db!==b?this.Db:0:(g=f,w=this.Jb!==b?this.Jb:c.length-1);for(;;){q=c[w];if(q.xa<=a)e=Math.max(e,q.xa),q.Na&&(q.Na=l);else if(a<q.startTime){if(d=Math.min(d,q.startTime),q.Na&&(q.Na=l),!g)break}else g?(h.splice(0,0,q),n===b&&(n=w),j=w):(h.push(q),j===b&&(j=w),n=w),d=Math.min(d,
q.xa),e=Math.max(e,q.startTime),q.Na=f;if(g)if(0===w)break;else w--;else if(w===c.length-1)break;else w++}this.tb=h;this.Wa=d;this.Ob=e;this.Db=j;this.Jb=n;j=this.tb;n="";a=0;for(c=j.length;a<c;a++)n+='<span class="vjs-tt-cue">'+j[a].text+"</span>";this.b.innerHTML=n;this.l("cuechange")}}};s.reset=function(){this.Wa=0;this.Ob=this.c.duration();this.Jb=this.Db=0};t.Vb=t.B.extend();t.Vb.prototype.G="captions";t.cc=t.B.extend();t.cc.prototype.G="subtitles";t.Wb=t.B.extend();t.Wb.prototype.G="chapters";
t.ec=t.a.extend({i:function(a,c,d){t.a.call(this,a,c,d);if(a.k.tracks&&0<a.k.tracks.length){c=this.c;a=a.k.tracks;for(var e=0;e<a.length;e++)d=a[e],ma(c,d.kind,d.label,d.language,d)}}});t.ec.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};t.$=t.H.extend({i:function(a,c){var d=this.ea=c.track;c.label=d.label();c.selected=d.Ab();t.H.call(this,a,c);this.c.d(d.J()+"trackchange",t.bind(this,this.update))}});
t.$.prototype.r=function(){t.H.prototype.r.call(this);Y(this.c,this.ea.T,this.ea.J())};t.$.prototype.update=function(){this.selected(2==this.ea.mode())};t.mb=t.$.extend({i:function(a,c){c.track={J:function(){return c.kind},j:a,label:function(){return c.kind+" off"},Ab:r(l),mode:r(l)};t.$.call(this,a,c);this.selected(f)}});t.mb.prototype.r=function(){t.$.prototype.r.call(this);Y(this.c,this.ea.T,this.ea.J())};
t.mb.prototype.update=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.J()==this.ea.J()&&2==e.mode()&&(g=l);this.selected(g)};t.U=t.K.extend({i:function(a,c){t.K.call(this,a,c);1>=this.N.length&&this.V()}});t.U.prototype.va=function(){var a=[],c;a.push(new t.mb(this.c,{kind:this.G}));for(var d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.J()===this.G&&a.push(new t.$(this.c,{track:c}));return a};
t.Ga=t.U.extend({i:function(a,c,d){t.U.call(this,a,c,d);this.b.setAttribute("aria-label","Captions Menu")}});t.Ga.prototype.G="captions";t.Ga.prototype.ta="Captions";t.Ga.prototype.className="vjs-captions-button";t.Ma=t.U.extend({i:function(a,c,d){t.U.call(this,a,c,d);this.b.setAttribute("aria-label","Subtitles Menu")}});t.Ma.prototype.G="subtitles";t.Ma.prototype.ta="Subtitles";t.Ma.prototype.className="vjs-subtitles-button";
t.Ha=t.U.extend({i:function(a,c,d){t.U.call(this,a,c,d);this.b.setAttribute("aria-label","Chapters Menu")}});s=t.Ha.prototype;s.G="chapters";s.ta="Chapters";s.className="vjs-chapters-button";s.va=function(){for(var a=[],c,d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.J()===this.G&&a.push(new t.$(this.c,{track:c}));return a};
s.wa=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g,h=this.N=[];c<d;c++)if(e=a[c],e.J()==this.G)if(0===e.readyState())e.load(),e.d("loaded",t.bind(this,this.wa));else{g=e;break}a=this.Aa;a===b&&(a=new t.ha(this.c),a.ja().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.aa(this.G),de:-1})));if(g){e=g.ba;for(var j,c=0,d=e.length;c<d;c++)j=e[c],j=new t.gb(this.c,{track:g,cue:j}),h.push(j),a.Q(j);this.Q(a)}0<this.N.length&&this.show();return a};
t.gb=t.H.extend({i:function(a,c){var d=this.ea=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.xa;t.H.call(this,a,c);d.d("cuechange",t.bind(this,this.update))}});t.gb.prototype.r=function(){t.H.prototype.r.call(this);this.c.currentTime(this.cue.startTime);this.update(this.cue.startTime)};t.gb.prototype.update=function(){var a=this.cue,c=this.c.currentTime();this.selected(a.startTime<=c&&c<a.xa)};
t.h.z(t.Ia.prototype.k.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)t.JSON=window.JSON;else{t.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;t.JSON.parse=function(a,c){function d(a,e){var j,n,q=a[e];if(q&&"object"===typeof q)for(j in q)Object.prototype.hasOwnProperty.call(q,j)&&(n=d(q,j),n!==b?q[j]=n:delete q[j]);return c.call(a,e,q)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
t.ic=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==k&&(a=t.JSON.parse(a||"{}"),videojs(c,a)));else{t.ub();break}else t.Rc||t.ub()};t.ub=function(){setTimeout(t.ic,1)};"complete"===document.readyState?t.Rc=f:t.W(window,"load",function(){t.Rc=f});t.ub();t.Ud=function(a,c){t.Player.prototype[a]=c};var pa=this;function $(a,c){var d=a.split("."),e=pa;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",t);$("_V_",t);$("videojs.options",t.options);$("videojs.players",t.Ba);$("videojs.TOUCH_ENABLED",t.dc);$("videojs.cache",t.ua);$("videojs.Component",t.a);t.a.prototype.player=t.a.prototype.j;t.a.prototype.options=t.a.prototype.options;t.a.prototype.init=t.a.prototype.i;t.a.prototype.dispose=t.a.prototype.dispose;t.a.prototype.createEl=t.a.prototype.e;t.a.prototype.contentEl=t.a.prototype.ja;t.a.prototype.el=t.a.prototype.v;t.a.prototype.addChild=t.a.prototype.Q;
t.a.prototype.getChild=t.a.prototype.ka;t.a.prototype.getChildById=t.a.prototype.wd;t.a.prototype.children=t.a.prototype.children;t.a.prototype.initChildren=t.a.prototype.uc;t.a.prototype.removeChild=t.a.prototype.removeChild;t.a.prototype.on=t.a.prototype.d;t.a.prototype.off=t.a.prototype.o;t.a.prototype.one=t.a.prototype.W;t.a.prototype.trigger=t.a.prototype.l;t.a.prototype.triggerReady=t.a.prototype.Fa;t.a.prototype.show=t.a.prototype.show;t.a.prototype.hide=t.a.prototype.V;
t.a.prototype.width=t.a.prototype.width;t.a.prototype.height=t.a.prototype.height;t.a.prototype.dimensions=t.a.prototype.pd;t.a.prototype.ready=t.a.prototype.I;t.a.prototype.addClass=t.a.prototype.n;t.a.prototype.removeClass=t.a.prototype.p;t.a.prototype.buildCSSClass=t.a.prototype.S;t.a.prototype.localize=t.a.prototype.s;t.Player.prototype.ended=t.Player.prototype.ended;t.Player.prototype.enterFullWindow=t.Player.prototype.oc;t.Player.prototype.exitFullWindow=t.Player.prototype.Cb;
t.Player.prototype.preload=t.Player.prototype.Ca;t.Player.prototype.remainingTime=t.Player.prototype.remainingTime;t.Player.prototype.supportsFullScreen=t.Player.prototype.Da;t.Player.prototype.currentType=t.Player.prototype.Ra;t.Player.prototype.requestFullScreen=t.Player.prototype.Ra;t.Player.prototype.cancelFullScreen=t.Player.prototype.Ra;t.Player.prototype.isFullScreen=t.Player.prototype.Ra;$("videojs.MediaLoader",t.ad);$("videojs.TextTrackDisplay",t.ec);$("videojs.ControlBar",t.Ia);
$("videojs.Button",t.t);$("videojs.PlayToggle",t.$b);$("videojs.FullscreenToggle",t.Ja);$("videojs.BigPlayButton",t.fb);$("videojs.LoadingSpinner",t.Yb);$("videojs.CurrentTimeDisplay",t.hb);$("videojs.DurationDisplay",t.ib);$("videojs.TimeDivider",t.fc);$("videojs.RemainingTimeDisplay",t.pb);$("videojs.LiveDisplay",t.Xb);$("videojs.ErrorDisplay",t.jb);$("videojs.Slider",t.P);$("videojs.ProgressControl",t.ob);$("videojs.SeekBar",t.bc);$("videojs.LoadProgressBar",t.lb);$("videojs.PlayProgressBar",t.Zb);
$("videojs.SeekHandle",t.La);$("videojs.VolumeControl",t.rb);$("videojs.VolumeBar",t.qb);$("videojs.VolumeLevel",t.gc);$("videojs.VolumeMenuButton",t.ra);$("videojs.VolumeHandle",t.sb);$("videojs.MuteToggle",t.ia);$("videojs.PosterImage",t.Ka);$("videojs.Menu",t.ha);$("videojs.MenuItem",t.H);$("videojs.MenuButton",t.K);$("videojs.PlaybackRateMenuButton",t.ac);t.K.prototype.createItems=t.K.prototype.va;t.U.prototype.createItems=t.U.prototype.va;t.Ha.prototype.createItems=t.Ha.prototype.va;
$("videojs.SubtitlesButton",t.Ma);$("videojs.CaptionsButton",t.Ga);$("videojs.ChaptersButton",t.Ha);$("videojs.MediaTechController",t.q);t.q.prototype.featuresVolumeControl=t.q.prototype.qe;t.q.prototype.featuresFullscreenResize=t.q.prototype.me;t.q.prototype.featuresPlaybackRate=t.q.prototype.ne;t.q.prototype.featuresProgressEvents=t.q.prototype.oe;t.q.prototype.featuresTimeupdateEvents=t.q.prototype.pe;t.q.prototype.setPoster=t.q.prototype.Ic;$("videojs.Html5",t.g);t.g.Events=t.g.kb;
t.g.isSupported=t.g.isSupported;t.g.canPlaySource=t.g.vb;t.g.patchCanPlayType=t.g.Ac;t.g.unpatchCanPlayType=t.g.he;t.g.prototype.setCurrentTime=t.g.prototype.Pb;t.g.prototype.setVolume=t.g.prototype.be;t.g.prototype.setMuted=t.g.prototype.Zd;t.g.prototype.setPreload=t.g.prototype.ae;t.g.prototype.setAutoplay=t.g.prototype.Wd;t.g.prototype.setLoop=t.g.prototype.Yd;t.g.prototype.enterFullScreen=t.g.prototype.nc;t.g.prototype.exitFullScreen=t.g.prototype.td;t.g.prototype.playbackRate=t.g.prototype.playbackRate;
t.g.prototype.setPlaybackRate=t.g.prototype.$d;$("videojs.Flash",t.f);t.f.isSupported=t.f.isSupported;t.f.canPlaySource=t.f.vb;t.f.onReady=t.f.onReady;$("videojs.TextTrack",t.B);t.B.prototype.label=t.B.prototype.label;t.B.prototype.kind=t.B.prototype.J;t.B.prototype.mode=t.B.prototype.mode;t.B.prototype.cues=t.B.prototype.ld;t.B.prototype.activeCues=t.B.prototype.cd;$("videojs.CaptionsTrack",t.Vb);$("videojs.SubtitlesTrack",t.cc);$("videojs.ChaptersTrack",t.Wb);$("videojs.autoSetup",t.ic);
$("videojs.plugin",t.Ud);$("videojs.createTimeRange",t.zb);$("videojs.util",t.ga);t.ga.mergeOptions=t.ga.Va;t.addLanguage=t.dd;})();

/*
	BigVideo - The jQuery Plugin for Big Background Video (and Images)
	by John Polacek (@johnpolacek)

	Dual licensed under MIT and GPL.

	Dependencies: jQuery, jQuery UI (Slider), Video.js, ImagesLoaded
*/

(function (factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// Register as an anonymous AMD module:
		define([
			'jquery',
			'videojs',
			'imagesloaded',
			'jquery-ui'
		], factory);
	} else {
		factory(jQuery, videojs);
	}
})(function($, videojs) {

	$.BigVideo = function(options) {

		var defaults = {
			// If you want to use a single mp4 source, set as true
			useFlashForFirefox:true,
			// If you are doing a playlist, the video won't play the first time
			// on a touchscreen unless the play event is attached to a user click
			forceAutoplay:false,
			controls:false,
			doLoop:false,
			container:$('body'),
			shrinkable:false
		};

		var BigVideo = this,
			player,
			vidEl = '#big-video-vid',
			wrap = $('<div id="big-video-wrap"></div>'),
			video = $(''),
			mediaAspect = 16/9,
			vidDur = 0,
			defaultVolume = 0.8,
			isInitialized = false,
			isSeeking = false,
			isPlaying = false,
			isQueued = false,
			isAmbient = false,
			playlist = [],
			currMediaIndex,
			currMediaType;

		var settings = $.extend({}, defaults, options);

		function updateSize() {
			var containerW = settings.container.outerWidth() < $(window).width() ? settings.container.outerWidth() : $(window).width(),
				containerH = settings.container.outerHeight() < $(window).height() ? settings.container.outerHeight() : $(window).height(),
				containerAspect = containerW/containerH;

			if (settings.container.is($('body'))) {
				$('html,body').css('height',$(window).height() > $('body').css('height','auto').height() ? '100%' : 'auto');
			}

			if (containerAspect < mediaAspect) {
				// taller
				if (currMediaType == 'video') {
					player
						.width(containerH*mediaAspect)
						.height(containerH);
					if (!settings.shrinkable) {
						$(vidEl)
							.css('top',0)
							.css('left',-(containerH*mediaAspect-containerW)/2)
							.css('height',containerH);
					} else {
						$(vidEl)
							.css('top',-(containerW/mediaAspect-containerH)/2)
							.css('left',0)
							.css('height',containerW/mediaAspect);
					}
					$(vidEl+'_html5_api')
						.css('width',containerH*mediaAspect)
						.css('height',containerH);
					$(vidEl+'_flash_api')
						.css('width',containerH*mediaAspect)
						.css('height',containerH);
				} else {
					// is image
					$('#big-video-image')
						.css({
							width: 'auto',
							height: containerH,
							top:0,
							left:-(containerH*mediaAspect-containerW)/2
						});
				}
			} else {
				// wider
				if (currMediaType == 'video') {
					player
						.width(containerW)
						.height(containerW/mediaAspect);
					$(vidEl)
						.css('top',-(containerW/mediaAspect-containerH)/2)
						.css('left',0)
						.css('height',containerW/mediaAspect);
					$(vidEl+'_html5_api')
						.css('width',$(vidEl+'_html5_api').parent().width()+"px")
						.css('height','auto');
					$(vidEl+'_flash_api')
						.css('width',containerW)
						.css('height',containerW/mediaAspect);
				} else {
					// is image
					$('#big-video-image')
						.css({
							width: containerW,
							height: 'auto',
							top:-(containerW/mediaAspect-containerH)/2,
							left:0
						});
				}
			}
		}

		function initPlayControl() {
			// create video controls
			var markup = ''+
				'<div id="big-video-control-container">'+
					'<div id="big-video-control">'+
						'<a href="#" id="big-video-control-play"></a>'+
						'<div id="big-video-control-middle">'+
							'<div id="big-video-control-bar">'+
								'<div id="big-video-control-bound-left"></div>'+
								'<div id="big-video-control-progress"></div>'+
								'<div id="big-video-control-track"></div>'+
								'<div id="big-video-control-bound-right"></div>'+
							'</div>'+
						'</div>'+
					'	<div id="big-video-control-timer"></div>'+
					'</div>'+
				'</div>';
			settings.container.append(markup);

			// hide until playVideo
			$('#big-video-control-container').css('display','none');
			$('#big-video-control-timer').css('display','none');

			// add events
			$('#big-video-control-track').slider({
				animate: true,
				step: 0.01,
				slide: function(e,ui) {
					isSeeking = true;
					$('#big-video-control-progress').css('width',(ui.value-0.16)+'%');
					player.currentTime((ui.value/100)*player.duration());
				},
				stop:function(e,ui) {
					isSeeking = false;
					player.currentTime((ui.value/100)*player.duration());
				}
			});
			$('#big-video-control-bar').click(function(e) {
				player.currentTime((e.offsetX/$(this).width())*player.duration());
			});
			$('#big-video-control-play').click(function(e) {
				e.preventDefault();
				playControl('toggle');
			});
			player.on('timeupdate', function() {
				if (!isSeeking && (player.currentTime()/player.duration())) {
					var currTime = player.currentTime();
					var minutes = Math.floor(currTime/60);
					var seconds = Math.floor(currTime) - (60*minutes);
					if (seconds < 10) seconds='0'+seconds;
					var progress = player.currentTime()/player.duration()*100;
					$('#big-video-control-track').slider('value',progress);
					$('#big-video-control-progress').css('width',(progress-0.16)+'%');
					$('#big-video-control-timer').text(minutes+':'+seconds+'/'+vidDur);
				}
			});
		}

		function playControl(a) {
			var action = a || 'toggle';
			if (action == 'toggle') action = isPlaying ? 'pause' : 'play';
			if (action == 'pause') {
				player.pause();
				$('#big-video-control-play').css('background-position','-16px');
				isPlaying = false;

			} else if (action == 'play') {
				player.play();
				$('#big-video-control-play').css('background-position','0');
				isPlaying = true;
			} else if (action == 'skip') {
				nextMedia();
			}
		}

		function setUpAutoPlay() {
			player.play();
			settings.container.off('click',setUpAutoPlay);
		}

		function nextMedia() {
			currMediaIndex++;
			if (currMediaIndex === playlist.length) currMediaIndex=0;
			playVideo(playlist[currMediaIndex]);
		}

		function playVideo(source) {

			// clear image
			$(vidEl).css('display','block');
			currMediaType = 'video';
			player.src(source);
			isPlaying = true;
			if (isAmbient) {
				$('#big-video-control-container').css('display','none');
				player.ready(function(){
					player.volume(0);
				});
				doLoop = true;
			} else {
				$('#big-video-control-container').css('display','block');
				player.ready(function(){
					player.volume(defaultVolume);
				});
				doLoop = false;
			}
			$('#big-video-image').css('display','none');
			$(vidEl).css('display','block');
		}

		function showPoster(source) {
			// remove old image
			$('#big-video-image').remove();

			// hide video
			player.pause();
			$(vidEl).css('display','none');
			$('#big-video-control-container').css('display','none');

			// show image
			currMediaType = 'image';
			var bgImage = $('<img id="big-video-image" src='+source+' />');
			wrap.append(bgImage);

			$('#big-video-image').imagesLoaded(function() {
				mediaAspect = $('#big-video-image').width() / $('#big-video-image').height();
				updateSize();
			});
		}

		BigVideo.init = function() {
			if (!isInitialized) {
				// create player
				settings.container.prepend(wrap);
				var autoPlayString = settings.forceAutoplay ? 'autoplay' : '';
				player = $('<video id="'+vidEl.substr(1)+'" class="video-js vjs-default-skin" preload="auto" data-setup="{}" '+autoPlayString+' webkit-playsinline></video>');
				player.css('position','absolute');
				wrap.append(player);

				var videoTechOrder = ['html5','flash'];
				// If only using mp4s and on firefox, use flash fallback
				var ua = navigator.userAgent.toLowerCase();
				var isFirefox = ua.indexOf('firefox') != -1;
				if (settings.useFlashForFirefox && (isFirefox)) {
					videoTechOrder = ['flash', 'html5'];
				}
				player = videojs(vidEl.substr(1), {
					controls:false,
					autoplay:true,
					preload:'auto',
					techOrder:videoTechOrder
				});

				// add controls
				if (settings.controls) initPlayControl();

				// set initial state
				updateSize();
				isInitialized = true;
				isPlaying = false;

				if (settings.forceAutoplay) {
					$('body').on('click', setUpAutoPlay);
				}

				$('#big-video-vid_flash_api')
					.attr('scale','noborder')
					.attr('width','100%')
					.attr('height','100%');

				// set events
				$(window).on('resize.bigvideo', function() {
					updateSize();
				});

				player.on('loadedmetadata', function(data) {
					if (document.getElementById('big-video-vid_flash_api')) {
						// use flash callback to get mediaAspect ratio
						mediaAspect = document.getElementById('big-video-vid_flash_api').vjs_getProperty('videoWidth')/document.getElementById('big-video-vid_flash_api').vjs_getProperty('videoHeight');
					} else {
						// use html5 player to get mediaAspect
						mediaAspect = $('#big-video-vid_html5_api').prop('videoWidth')/$('#big-video-vid_html5_api').prop('videoHeight');
					}
					updateSize();
					var dur = Math.round(player.duration());
					var durMinutes = Math.floor(dur/60);
					var durSeconds = dur - durMinutes*60;
					if (durSeconds < 10) durSeconds='0'+durSeconds;
					vidDur = durMinutes+':'+durSeconds;
				});

				player.on('ended', function() {
					if (settings.doLoop) {
						player.currentTime(0);
						player.play();
					}
					if (isQueued) {
						nextMedia();
					}
				});
			}
		};

		/**
		 * Show video or image file
		 *
		 * @param source: The file to show, can be:
		 *		- an array with objects for video files types
		 *		- a string to a single video file
		 *		- a string to a image file
		 * @param options: An object with those possible attributes:
		 *		- boolean "ambient" to set video to loop
		 *		- function onShown
		 */
		BigVideo.show = function(source,options) {
			if (options === undefined) options = {};
			isAmbient = options.ambient === true;
			if (isAmbient || options.doLoop) settings.doLoop = true;

			if (typeof(source) === 'string') {
				// if input was a string, try show that image or video
				var ext = ( source.lastIndexOf('?') > 0 ) ? source.substring(source.lastIndexOf('.')+1, source.lastIndexOf('?')) : source.substring( source.lastIndexOf('.')+1);
				if (ext == 'jpg' || ext == 'gif' || ext == 'png') {
					showPoster(source);
				} else if (ext == 'mp4' || ext == 'ogg' || ext == 'ogv'|| ext == 'webm') {
					playVideo(source);
					if (options.onShown) options.onShown();
					isQueued = false;
				}
			} else if ($.isArray(source)) {
				// if the input was an array, pass it to videojs
				playVideo(source);
			} else if (typeof(source) === "object" && source.src && source.type) {
				// if the input was an object with valid attributes, wrap it in an
				// array and pass it to videojs
				playVideo([source]);
			} else {
				// fail without valid input
				throw("BigVideo.show received invalid input for parameter source");
			}
		};

		/**
		 * Show a playlist of video files
		 *
		 * @param files: array of elements to pass to BigVideo.show in sequence
		 * @param options: An object with those possible attributes:
		 *		- boolean "ambient" to set video to loop
		 *		- function onShown
		 */
		BigVideo.showPlaylist = function (files, options) {
			if (!$.isArray(files)) {
				throw("BigVideo.showPlaylist parameter files accepts only arrays");
			}

			if (options === undefined) options = {};
			isAmbient = options.ambient === true;
			if (isAmbient || options.doLoop) settings.doLoop = true;

			playlist = files;
			currMediaIndex = 0;
			this.show(playlist[currMediaIndex]);
			if (options.onShown) options.onShown();
			isQueued = true;
		};

		// Expose Video.js player
		BigVideo.getPlayer = function() {
			return player;
		};

		// Remove/dispose the player
		BigVideo.remove = BigVideo.dispose = function() {
			isInitialized = false;

			wrap.remove();
			$(window).off('resize.bigvideo');

			if(player) {
				player.off('loadedmetadata');
				player.off('ended');
				player.dispose();
			}
		};

		// Expose BigVideoJS player actions play, pause, skip (if a playlist is available)
		// Example: BigVideo.triggerPlayer('skip')
		BigVideo.triggerPlayer = function(action){
			playControl(action);
		};

	};
});
//! moment.js
//! version : 2.8.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>23?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),require("./locale/"+a),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){return b._isUTC?tb(a).zone(b._offset||0):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"X":return Xb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return Yb;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"H":case"HH":case"h":case"hh":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(a){if(a._f===tb.ISO_8601)return void $(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=""+a._i,h=g.length,i=0;for(d=O(a._f,a._locale).match(Nb)||[],b=0;b<d.length;b++)e=d[b],c=(g.match(P(e,a))||[])[0],c&&(f=g.substr(0,g.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),g=g.slice(g.indexOf(c)+c.length),i+=c.length),pc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),R(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=h-i,g.length>0&&a._pf.unusedInput.push(g),a._isPm&&a._a[Db]<12&&(a._a[Db]+=12),a._isPm===!1&&12===a._a[Db]&&(a._a[Db]=0),T(a),F(a)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c=b._i,d=b._f;return b._locale=b._locale||tb.localeData(b._l),null===c||d===a&&""===c?tb.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=b._locale.preparse(c)),tb.isMoment(c)?new k(c,!0):(d?u(d)?Z(b):W(b):bb(b),new k(b)))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.3",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+(\.\d{1,3})?/,Yb=/\d{1,2}/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=tb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=x(a),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")},isAfter:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):+this.clone().startOf(b)>+tb(a).startOf(b)},isBefore:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):+this.clone().startOf(b)<+tb(a).startOf(b)},isSame:function(a,b){return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):+this.clone().startOf(b)===+K(a,this).startOf(b)},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Use moment().localeData() instead.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+qb(this._months/12),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";
return a+c}}),Jb?module.exports=tb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}),sb(!0)):sb()}).call(this);