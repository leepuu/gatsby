(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JBOV:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("eR7s"),o=a("d+8V"),i=a("eHl9"),s=a("vOnD"),m=a("TSYQ"),u=a.n(m),d=a("IdFE"),p=a("qhky"),f=a("gIay"),v=s.a.div.withConfig({displayName:"post-list__Kv",componentId:"sc-5fd1i8-0"})(["background:url(/kv/main.jpg) center center no-repeat;"]);t.default=function(e){var t=e.pageContext,a=e.data.allMarkdownRemark.edges,n=t.currentPage,s=t.numPages,m=1===n,f=n===s,E=n-1==1?"":(n-1).toString(),g=(n+1).toString();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{title:"푸다닥 개발뽀개기",defer:!1}),r.a.createElement(c.a,null),r.a.createElement("div",{className:"container"},r.a.createElement(v,{className:"kv_title"},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Blog"))),r.a.createElement("div",{className:"inner_content"},r.a.createElement("div",{className:"content"},a.map((function(e){var t=e.node,a=t.fields.slug;return r.a.createElement("div",{className:"post_list",key:a},r.a.createElement(l.Link,{to:a},r.a.createElement("h4",null,t.frontmatter.title,r.a.createElement("span",null,t.frontmatter.date)),r.a.createElement("p",null,t.excerpt)))})),r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"+E,rel:"prev",className:u()("btn_arrow btn_prev",{disable:m})},r.a.createElement(d.a,null))),Array.from({length:s},(function(e,t){return r.a.createElement("li",{key:t+1,className:u()({active:t+1===n})},r.a.createElement(l.Link,{to:"/"+(0===t?"":t+1)},t+1))})),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"+g,rel:"next",className:u()("btn_arrow btn_next",{disable:f})},r.a.createElement(d.b,null))))),r.a.createElement("div",{className:"sidebar"},r.a.createElement(i.a,null),r.a.createElement(o.a,null)))))},Object(f.a)()},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=r.a.createContext&&r.a.createContext(l),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function s(e){return function(t){return r.a.createElement(m,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.a.createElement(t.tag,o({key:a},t.attr),e(t.child))}))}(e.child))}}function m(e){var t=function(t){var a,n=e.attr,l=e.size,c=e.title,s=i(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:a,style:o(o({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&r.a.createElement("title",null,c),e.children)};return void 0!==c?r.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(l)}}}]);
//# sourceMappingURL=component---src-templates-post-list-js-da0504ffcfd814ac4eb2.js.map