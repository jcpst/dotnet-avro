(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{218:function(e,n,a){"use strict";a.r(n),a.d(n,"query",function(){return g});a(78),a(115),a(26);var t=a(5),r=a(0),l=a.n(r),u=a(113),c=a(237),i=a(245),m=a(238),s=a(219),o=a.n(s);n.default=function(e){var n=e.data.cliVerb;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.Helmet,null,l.a.createElement("title",null,"dotnet avro "+n.name)),l.a.createElement(i.a,null,l.a.createElement(t.a,{to:"/cli"},"CLI reference")),l.a.createElement("h1",{className:o.a.title},l.a.createElement("code",null,n.name)),l.a.createElement("p",null,n.summary),n.examples.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Examples"),n.examples.map(function(e){return l.a.createElement(r.Fragment,{key:e.id},l.a.createElement("h5",null,e.title),l.a.createElement(c.a,{language:"shell"},e.body))})),n.options.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Options"),Array.from(Object(m.groupBy)(n.options,"set")).map(function(e,n){return l.a.createElement(r.Fragment,{key:n},e[0]&&l.a.createElement("h5",null,e[0]),e[1].length>0&&l.a.createElement("dl",null,e[1].map(function(e){return l.a.createElement(r.Fragment,{key:e.id},l.a.createElement("dt",null,l.a.createElement("code",null,e.abbreviation&&"-"+e.abbreviation+", ","--"+e.name)),l.a.createElement("dd",null,e.summary))})))})))};var g="1099149955"},237:function(e,n,a){"use strict";a.d(n,"a",function(){return o});a(12);var t=a(0),r=a.n(t),l=a(465),u=a(240),c=a(239),i=a(241),m=a(242);l.a.registerLanguage("avro",c.a),l.a.registerLanguage("csharp",u.a),l.a.registerLanguage("shell",i.a);var s=Object.assign({},m.a,{hljs:{}});function o(e){var n=e.children,a=e.inline,t=e.language;return r.a.createElement(l.a,{language:t,style:s,PreTag:a?"span":"pre"},n)}},238:function(e,n,a){a(9),a(10),a(4),a(78),a(114),e.exports={groupBy:function(e,n){return e.reduce(function(e,a){var t=a[n];return e.has(a[n])||e.set(t,[]),e.get(t).push(a),e},new Map)},join:function(e,n){return e.reduce(function(e,a,t,r){return e.push(a),t<r.length-1&&e.push(n),e},[])}}},245:function(e,n,a){"use strict";a(9),a(10),a(4),a(16),a(12);var t=a(0),r=a.n(t),l=a(215),u=a.n(l);n.a=function(e){var n=e.children,a=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children"]);if(n)return Array.isArray(n)||(n=[n]),r.a.createElement("ul",Object.assign({className:u.a.breadcrumb},a),n.map(function(e,n){return r.a.createElement("li",{key:n},e)}))}}}]);
//# sourceMappingURL=component---src-templates-cli-verb-js-e5556d93a4d2a7e14032.js.map