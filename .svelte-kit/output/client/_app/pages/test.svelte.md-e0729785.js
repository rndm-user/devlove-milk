import{S as s,i as a,s as t,j as n,m as e,o as c,v as o,r,w as l,H as p,I as i,A as u,p as $,q as f,e as d,t as m,k as g,c as h,a as k,g as x,d as j,n as b,b as E,f as y,E as v,F as T}from"../chunks/vendor-b2fe4cce.js";import{L as w}from"../chunks/Layout_Main-2981c7bb.js";import"../chunks/milk-76ffb0bc.js";function H(s){let a;const t=s[0].default,n=p(t,s,s[1],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,t){n&&n.m(s,t),a=!0},p(s,a){n&&n.p&&2&a&&i(n,t,s,s[1],a,null,null)},i(s){a||(o(n,s),a=!0)},o(s){r(n,s),a=!1},d(s){n&&n.d(s)}}}function L(s){let a,t;return a=new w({props:{$$slots:{default:[H]},$$scope:{ctx:s}}}),{c(){n(a.$$.fragment)},l(s){e(a.$$.fragment,s)},m(s,n){c(a,s,n),t=!0},p(s,[t]){const n={};2&t&&(n.$$scope={dirty:t,ctx:s}),a.$set(n)},i(s){t||(o(a.$$.fragment,s),t=!0)},o(s){r(a.$$.fragment,s),t=!1},d(s){l(a,s)}}}function M(s,a,t){let{$$slots:n={},$$scope:e}=a;return s.$$set=s=>{"$$scope"in s&&t(1,e=s.$$scope)},[n,e]}class A extends s{constructor(s){super(),a(this,s,M,L,t,{})}}function P(s){let a,t,n,e,c,o,r,l,p,i,u;return{c(){a=d("h1"),t=d("a"),n=m("This is a Test"),e=g(),c=d("pre"),o=g(),r=d("pre"),l=g(),p=d("p"),i=d("img"),this.h()},l(s){a=h(s,"H1",{id:!0});var u=k(a);t=h(u,"A",{href:!0});var $=k(t);n=x($,"This is a Test"),$.forEach(j),u.forEach(j),e=b(s),c=h(s,"PRE",{class:!0}),k(c).forEach(j),o=b(s),r=h(s,"PRE",{class:!0}),k(r).forEach(j),l=b(s),p=h(s,"P",{});var f=k(p);i=h(f,"IMG",{src:!0,alt:!0}),f.forEach(j),this.h()},h(){E(t,"href","#this-is-a-test"),E(a,"id","this-is-a-test"),E(c,"class","language-js"),E(r,"class","language-css"),i.src!==(u="/img/profile_1200x1200.jpg")&&E(i,"src","/img/profile_1200x1200.jpg"),E(i,"alt","A super cool pic or somthing.")},m(s,u){y(s,a,u),v(a,t),v(t,n),y(s,e,u),y(s,c,u),c.innerHTML='<code class="language-js"><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></code>',y(s,o,u),y(s,r,u),r.innerHTML='<code class="language-css"><span class="token selector">body</span> <span class="token punctuation">&#123;</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">&#125;</span></code>',y(s,l,u),y(s,p,u),v(p,i)},p:T,d(s){s&&j(a),s&&j(e),s&&j(c),s&&j(o),s&&j(r),s&&j(l),s&&j(p)}}}function _(s){let a,t;const p=[I];let i={$$slots:{default:[P]},$$scope:{ctx:s}};for(let n=0;n<p.length;n+=1)i=u(i,p[n]);return a=new A({props:i}),{c(){n(a.$$.fragment)},l(s){e(a.$$.fragment,s)},m(s,n){c(a,s,n),t=!0},p(s,[t]){const n=0&t?$(p,[f(I)]):{};1&t&&(n.$$scope={dirty:t,ctx:s}),a.$set(n)},i(s){t||(o(a.$$.fragment,s),t=!0)},o(s){r(a.$$.fragment,s),t=!1},d(s){l(a,s)}}}var I={layout:"default"};export default class extends s{constructor(s){super(),a(this,s,null,_,t,{})}}export{I as metadata};