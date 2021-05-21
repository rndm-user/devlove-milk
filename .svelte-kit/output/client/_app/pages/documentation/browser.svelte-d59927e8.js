import{S as s,i as e,s as t,H as r,e as n,c as a,a as o,d as l,b as i,f as c,E as $,I as f,v as m,r as p,j as u,m as g,o as d,w as h,G as v,t as k,k as w,g as x,n as j,h as M}from"../../chunks/vendor-b2fe4cce.js";import{H as b,a as T}from"../../chunks/Head_HTML-915ec569.js";import{m as E}from"../../chunks/milk-76ffb0bc.js";import{D as H}from"../../chunks/Documentation-3921c7a8.js";import"../../chunks/Hero-e8f6dac3.js";function B(s){let e,t,u;const g=s[2].default,d=r(g,s,s[1],null);return{c(){e=n("div"),t=n("div"),d&&d.c(),this.h()},l(s){e=a(s,"DIV",{id:!0,class:!0});var r=o(e);t=a(r,"DIV",{class:!0});var n=o(t);d&&d.l(n),n.forEach(l),r.forEach(l),this.h()},h(){i(t,"class","page-content svelte-1p17tze"),i(e,"id",s[0]),i(e,"class","layout-blank svelte-1p17tze")},m(s,r){c(s,e,r),$(e,t),d&&d.m(t,null),u=!0},p(s,[t]){d&&d.p&&2&t&&f(d,g,s,s[1],t,null,null),(!u||1&t)&&i(e,"id",s[0])},i(s){u||(m(d,s),u=!0)},o(s){p(d,s),u=!1},d(s){s&&l(e),d&&d.d(s)}}}function y(s,e,t){let{$$slots:r={},$$scope:n}=e;var{id:a}=e;return s.$$set=s=>{"id"in s&&t(0,a=s.id),"$$scope"in s&&t(1,n=s.$$scope)},[a,n,r]}class D extends s{constructor(s){super(),e(this,s,y,B,t,{id:0})}}function V(s){var e,t;let r,f,m,p,u,g,d,h,v,b,T=(null==(e=s[4])?void 0:e.version)+"",E=(null==(t=s[4])?void 0:t.date)+"";return{c(){r=n("h2"),f=k("🥛Milk.js Browser Tests"),m=w(),p=n("pre"),u=n("strong"),g=k("Milk Version:"),d=k(" "),h=k(T),v=k(" on "),b=k(E),this.h()},l(s){r=a(s,"H2",{});var e=o(r);f=x(e,"🥛Milk.js Browser Tests"),e.forEach(l),m=j(s),p=a(s,"PRE",{class:!0});var t=o(p);u=a(t,"STRONG",{class:!0});var n=o(u);g=x(n,"Milk Version:"),n.forEach(l),d=x(t," "),h=x(t,T),v=x(t," on "),b=x(t,E),t.forEach(l),this.h()},h(){i(u,"class","svelte-1mql099"),i(p,"class","svelte-1mql099")},m(s,e){c(s,r,e),$(r,f),c(s,m,e),c(s,p,e),$(p,u),$(u,g),$(p,d),$(p,h),$(p,v),$(p,b)},p(s,e){var t,r;16&e&&T!==(T=(null==(t=s[4])?void 0:t.version)+"")&&M(h,T),16&e&&E!==(E=(null==(r=s[4])?void 0:r.date)+"")&&M(b,E)},d(s){s&&l(r),s&&l(m),s&&l(p)}}}function I(s){let e,t;return e=new H({props:{title:s[0],tagline:s[1],excerpt:s[2],logo:s[3],$$slots:{default:[V]},$$scope:{ctx:s}}}),{c(){u(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,r){d(e,s,r),t=!0},p(s,[t]){const r={};1&t&&(r.title=s[0]),2&t&&(r.tagline=s[1]),4&t&&(r.excerpt=s[2]),8&t&&(r.logo=s[3]),48&t&&(r.$$scope={dirty:t,ctx:s}),e.$set(r)},i(s){t||(m(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){h(e,s)}}}function q(s,e,t){let r;v(s,E,(s=>t(4,r=s)));var{title:n="Milk Browser Tests"}=e,{tagline:a="Testing various aspects of browsers and milk."}=e,{excerpt:o=""}=e,{logo:l="/milk/img/logo_browser.svg"}=e;return s.$$set=s=>{"title"in s&&t(0,n=s.title),"tagline"in s&&t(1,a=s.tagline),"excerpt"in s&&t(2,o=s.excerpt),"logo"in s&&t(3,l=s.logo)},[n,a,o,l,r]}class z extends s{constructor(s){super(),e(this,s,q,I,t,{title:0,tagline:1,excerpt:2,logo:3})}}function G(s){let e,t;return e=new z({}),{c(){u(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,r){d(e,s,r),t=!0},i(s){t||(m(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){h(e,s)}}}function R(s){let e,t,r,n,a,o;return e=new b({props:{lang:"en"}}),r=new T({props:{title:"Milk.js - Browser Tests",description:"Milk.js browser tests.",keywords:"Milk, Milk.js, Browser Tests"}}),a=new D({props:{$$slots:{default:[G]},$$scope:{ctx:s}}}),{c(){u(e.$$.fragment),t=w(),u(r.$$.fragment),n=w(),u(a.$$.fragment)},l(s){g(e.$$.fragment,s),t=j(s),g(r.$$.fragment,s),n=j(s),g(a.$$.fragment,s)},m(s,l){d(e,s,l),c(s,t,l),d(r,s,l),c(s,n,l),d(a,s,l),o=!0},p(s,[e]){const t={};1&e&&(t.$$scope={dirty:e,ctx:s}),a.$set(t)},i(s){o||(m(e.$$.fragment,s),m(r.$$.fragment,s),m(a.$$.fragment,s),o=!0)},o(s){p(e.$$.fragment,s),p(r.$$.fragment,s),p(a.$$.fragment,s),o=!1},d(s){h(e,s),s&&l(t),h(r,s),s&&l(n),h(a,s)}}}export default class extends s{constructor(s){super(),e(this,s,null,R,t,{})}}