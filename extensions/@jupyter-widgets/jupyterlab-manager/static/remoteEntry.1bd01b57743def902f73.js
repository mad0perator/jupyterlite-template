var _JUPYTERLAB;(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyter-widgets/jupyterlab-manager"]=(()=>{"use strict";var e,r,t,n,a,o,i,u,l,d,s,f,c,p,h,b,g,m,v,y,j,w,P,S={5796:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(222),t.e(486),t.e(99),t.e(526),t.e(523)]).then((()=>()=>t(8523))),"./extension":()=>Promise.all([t.e(222),t.e(486),t.e(99),t.e(526),t.e(523)]).then((()=>()=>t(8523)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n=t.S.default,a="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>a,init:()=>o})}},k={};function E(e){if(k[e])return k[e].exports;var r=k[e]={id:e,loaded:!1,exports:{}};return S[e].call(r.exports,r,r.exports,E),r.loaded=!0,r.exports}return E.m=S,E.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return E.d(r,{a:r}),r},E.d=(e,r)=>{for(var t in r)E.o(r,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},E.f={},E.e=e=>Promise.all(Object.keys(E.f).reduce(((r,t)=>(E.f[t](e,r),r)),[])),E.u=e=>(863===e?"@jupyter-widgets/controls":e)+"."+{1:"6c3ab69171002cbfa04f",18:"c756b86bf6ebd74dab7b",86:"970ef07abcc86672015c",95:"b5a5ff10000a6051fa99",99:"ba735e8c498cb3c09f22",222:"25385310b92fa6bd20bf",243:"6c384ff2649ef572a18a",272:"3fcd6d7045eecfb56da6",279:"aa88a78c8bf62c65db54",295:"c67bb96755cebea454a1",466:"f77b3df99f049604bce9",486:"10552b6782d308c1e7d2",523:"66fca84c7924f6f7676d",526:"881b1641cbdf7bf5cfa4",638:"f3e5e34a28f3334d4f08",803:"b7b75bd6e7977a648c67",863:"36afb324d8db8fbce79b"}[e]+".js",E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),E.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyter-widgets/jupyterlab-manager:",E.l=(t,n,a)=>{if(e[t])e[t].push(n);else{var o,i;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){o=d;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,E.nc&&o.setAttribute("nonce",E.nc),o.setAttribute("data-webpack",r+a),o.src=t),e[t]=[n];var s=(r,n)=>{o.onerror=o.onload=null,clearTimeout(f);var a=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),r)return r(n)},f=setTimeout(s.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=s.bind(null,o.onerror),o.onload=s.bind(null,o.onload),i&&document.head.appendChild(o)}},E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{E.S={};var e={},r={};E.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];E.o(E.S,t)||(E.S[t]={});var o=E.S[t],i="@jupyter-widgets/jupyterlab-manager",u=(e,r,t)=>{var n=o[e]=o[e]||{},a=n[r];(!a||!a.loaded&&i>a.from)&&(n[r]={get:t,from:i})},l=[];switch(t){case"default":u("@jupyter-widgets/base","4.1.1",(()=>Promise.all([E.e(243),E.e(803),E.e(222),E.e(295),E.e(526),E.e(272)]).then((()=>()=>E(2272))))),u("@jupyter-widgets/controls","3.1.1",(()=>Promise.all([E.e(243),E.e(95),E.e(222),E.e(295),E.e(486),E.e(466),E.e(99),E.e(1)]).then((()=>()=>E(7466))))),u("@jupyter-widgets/jupyterlab-manager","3.1.1",(()=>Promise.all([E.e(222),E.e(486),E.e(99),E.e(526),E.e(523)]).then((()=>()=>E(8523))))),u("@jupyter-widgets/output","4.1.1",(()=>Promise.all([E.e(486),E.e(86)]).then((()=>()=>E(6086))))),u("jquery","3.4.1",(()=>E.e(638).then((()=>()=>E(2752))))),u("semver","6.3.0",(()=>E.e(279).then((()=>()=>E(279)))))}return e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;E.g.importScripts&&(e=E.g.location+"");var r=E.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),E.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(u=e[o]))[0]?"-":(n>0?".":"")+(n=2,u);return r}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():a(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var d,s,f=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(s=(typeof(d=r[i]))[0]))return!l||("u"==f?u>n&&!a:""==f!=a);if("u"==s){if(!l||"u"!=f)return!1}else if(l)if(f==s)if(u<=n){if(d!=e[u])return!1}else{if(a?d>e[u]:d<e[u])return!1;d!=e[u]&&(l=!1)}else if("s"!=f&&"n"!=f){if(a||u<=n)return!1;l=!1,u--}else{if(u<=n||s<f!=a)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=E.S[e];if(!t||!E.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},d=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+a(t)+")",s=(e,r,t,n)=>{var a=l(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(d(t,a,n)),h(e[t][a])},f=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},c=(e,r,t,n)=>{var o=e[t];return"No satisfying version ("+a(n)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},p=(e,r,t,n)=>{"undefined"!=typeof console&&console.warn&&console.warn(c(e,r,t,n))},h=e=>(e.loaded=1,e.get()),g=(b=e=>function(r,t,n,a){var o=E.I(r);return o&&o.then?o.then(e.bind(e,r,E.S[r],t,n,a)):e(r,E.S[r],t,n,a)})(((e,r,t,n)=>r&&E.o(r,t)?h(u(r,t)):n())),m=b(((e,r,t,n)=>(i(e,t),h(f(r,t,n)||p(r,e,t,n)||u(r,t))))),v=b(((e,r,t,n)=>(i(e,t),s(r,0,t,n)))),y=b(((e,r,t,n,a)=>{var o=r&&E.o(r,t)&&f(r,t,n);return o?h(o):a()})),j={},w={1524:()=>y("default","jquery",[1,3,1,1],(()=>E.e(638).then((()=>()=>E(2752))))),2433:()=>v("default","@lumino/widgets",[1,1,30,0]),8486:()=>y("default","@jupyter-widgets/base",[1,4,1,1],(()=>Promise.all([E.e(243),E.e(803),E.e(222),E.e(295),E.e(526),E.e(272)]).then((()=>()=>E(2272))))),1840:()=>v("default","@lumino/signaling",[1,1,10,0]),8918:()=>v("default","@lumino/algorithm",[1,1,9,0]),1526:()=>v("default","@lumino/coreutils",[1,1,11,0]),723:()=>y("default","@jupyter-widgets/output",[1,4,1,1],(()=>E.e(18).then((()=>()=>E(6086))))),1050:()=>m("default","@jupyterlab/outputarea",[1,3,4,3]),3827:()=>v("default","@jupyterlab/rendermime",[1,3,4,3]),5024:()=>v("default","@jupyterlab/logconsole",[1,3,4,3]),5658:()=>v("default","@lumino/properties",[1,1,8,0]),5897:()=>v("default","@jupyterlab/notebook",[1,3,4,3]),5923:()=>v("default","@lumino/disposable",[1,1,10,0]),6238:()=>v("default","@jupyterlab/services",[1,6,4,3]),6345:()=>v("default","@jupyterlab/settingregistry",[1,3,4,3]),7504:()=>y("default","semver",[1,6,1,1],(()=>E.e(279).then((()=>()=>E(279))))),9571:()=>v("default","@jupyterlab/mainmenu",[1,3,4,3]),2720:()=>v("default","@lumino/messaging",[1,1,10,0]),6006:()=>g("default","jquery",(()=>E.e(638).then((()=>()=>E(2752))))),9520:()=>v("default","@lumino/domutils",[1,1,8,0]),4200:()=>y("default","@jupyter-widgets/controls",[1,3,1,1],(()=>Promise.all([E.e(243),E.e(95),E.e(295),E.e(466)]).then((()=>()=>E(7466)))))},P={99:[1840,8918],222:[1524,2433],295:[2720,6006],466:[9520],486:[8486],523:[723,1050,3827,5024,5658,5897,5923,6238,6345,7504,9571],526:[1526],863:[4200]},E.f.consumes=(e,r)=>{E.o(P,e)&&P[e].forEach((e=>{if(E.o(j,e))return r.push(j[e]);var t=r=>{j[e]=0,S[e]=t=>{delete k[e],t.exports=r()}},n=r=>{delete j[e],S[e]=t=>{throw delete k[e],r}};try{var a=w[e]();a.then?r.push(j[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={513:0};E.f.j=(r,t)=>{var n=E.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(222|295|486|526|863|99)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=E.p+E.u(r),i=new Error;E.l(o,(t=>{if(E.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r)}};var r=(r,t)=>{for(var n,a,[o,i,u]=t,l=0,d=[];l<o.length;l++)a=o[l],E.o(e,a)&&e[a]&&d.push(e[a][0]),e[a]=0;for(n in i)E.o(i,n)&&(E.m[n]=i[n]);for(u&&u(E),r&&r(t);d.length;)d.shift()()},t=self.webpackChunk_jupyter_widgets_jupyterlab_manager=self.webpackChunk_jupyter_widgets_jupyterlab_manager||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),E(5796)})();