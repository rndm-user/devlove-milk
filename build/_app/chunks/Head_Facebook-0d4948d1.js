import{S as t,i as e,s as n,H as o,e as i,D as l,c as r,d as c,b as s,E as a,I as u,v as d,r as p,G as m,z as v}from"./vendor-b2fe4cce.js";import{m as y}from"./milk-76ffb0bc.js";function h(t){let e,n,m,v,y,h,$,f;const g=t[20].default,E=o(g,t,t[19],null);return{c(){e=i("meta"),n=i("meta"),m=i("meta"),y=i("meta"),h=i("meta"),$=i("meta"),E&&E.c(),this.h()},l(t){const o=l('[data-svelte="svelte-mxd0c5"]',document.head);e=r(o,"META",{property:!0,content:!0}),n=r(o,"META",{property:!0,content:!0}),m=r(o,"META",{property:!0,content:!0}),y=r(o,"META",{property:!0,content:!0}),h=r(o,"META",{property:!0,content:!0}),$=r(o,"META",{property:!0,content:!0}),E&&E.l(o),o.forEach(c),this.h()},h(){var o,i;s(e,"property","og:url"),s(e,"content",t[5]),s(n,"property","og:type"),s(n,"content",t[1]),s(m,"property","og:site_name"),s(m,"content",v=null==(i=null==(o=t[4])?void 0:o.site)?void 0:i.title),s(y,"property","og:title"),s(y,"content",t[2]),s(h,"property","og:description"),s(h,"content",t[3]),s($,"property","og:image"),s($,"content",t[0])},m(t,o){a(document.head,e),a(document.head,n),a(document.head,m),a(document.head,y),a(document.head,h),a(document.head,$),E&&E.m(document.head,null),f=!0},p(t,[o]){var i,l;(!f||32&o)&&s(e,"content",t[5]),(!f||2&o)&&s(n,"content",t[1]),(!f||16&o&&v!==(v=null==(l=null==(i=t[4])?void 0:i.site)?void 0:l.title))&&s(m,"content",v),(!f||4&o)&&s(y,"content",t[2]),(!f||8&o)&&s(h,"content",t[3]),(!f||1&o)&&s($,"content",t[0]),E&&E.p&&524288&o&&u(E,g,t,t[19],o,null,null)},i(t){f||(d(E,t),f=!0)},o(t){p(E,t),f=!1},d(t){c(e),c(n),c(m),c(y),c(h),c($),E&&E.d(t)}}}function $(t,e,n,o,i,l,r){try{var c=t[l](r),s=c.value}catch(a){return void n(a)}c.done?e(s):Promise.resolve(s).then(o,i)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var l=t.apply(e,n);function r(t){$(l,o,i,r,c,"next",t)}function c(t){$(l,o,i,r,c,"throw",t)}r(void 0)}))}}function g(t,e,n){let o;m(t,y,(t=>n(4,o=t)));let{$$slots:i={},$$scope:l}=e;var r,c,s,a,u,d,p,h,$,g,E,w,b,{image:A}=e,{type:M}=e,{title:T}=e,{description:x}=e,_="";return v(f((function*(){var t,e,i,l,r,c;n(18,_=null!=(t=window)&&null!=(e=t.location)&&e.href?null==(i=window)||null==(l=i.location)?void 0:l.href:null==(r=o)||null==(c=r.site)?void 0:c.url)}))),t.$$set=t=>{"image"in t&&n(0,A=t.image),"type"in t&&n(1,M=t.type),"title"in t&&n(2,T=t.title),"description"in t&&n(3,x=t.description),"$$scope"in t&&n(19,l=t.$$scope)},t.$$.update=()=>{4049&t.$$.dirty&&(A||n(0,A=(null==n(6,r=o)||null==n(7,c=r.site)?void 0:c.facebook_photo)||(null==n(8,s=o)||null==n(9,a=s.site)?void 0:a.twitter_photo)||(null==n(10,u=o)||null==n(11,d=u.credits)?void 0:d.social)||"")),12308&t.$$.dirty&&(T||n(2,T=null==n(12,p=o)||null==n(13,h=p.site)?void 0:h.title)),49170&t.$$.dirty&&(M||n(1,M=null==n(14,$=o)||null==n(15,g=$.site)?void 0:g.facebook_type)),196632&t.$$.dirty&&(x||n(3,x=null==n(16,E=o)||null==n(17,w=E.site)?void 0:w.description)),262144&t.$$.dirty&&n(5,b=_)},[A,M,T,x,o,b,r,c,s,a,u,d,p,h,$,g,E,w,_,l,i]}class E extends t{constructor(t){super(),e(this,t,g,h,n,{image:0,type:1,title:2,description:3})}}export{E as H};