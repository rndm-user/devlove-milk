import{render as e}from"@sveltejs/kit/renderer";function i(){}function t(e){return e()}function s(e,i){return e!=e?i==i:e!==i||e&&"object"==typeof e||"function"==typeof e}function n(e,...t){if(null==e)return i;const s=e.subscribe(...t);return s.unsubscribe?()=>s.unsubscribe():s}let o;function a(e){o=e}function l(){if(!o)throw new Error("Function called outside component initialization");return o}function p(e){l().$$.on_mount.push(e)}const g={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function r(e){return String(e).replace(/["'&<>]/g,(e=>g[e]))}const c={$$render:()=>""};function m(e,i){if(!e||!e.$$render)throw"svelte:component"===i&&(i+=" this={...}"),new Error(`<${i}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);return e}let f;function v(e){function i(i,t,s,n){const l=o;a({$$:{on_destroy:f,context:new Map(l?l.$$.context:[]),on_mount:[],before_update:[],after_update:[],callbacks:Object.create(null)}});const p=e(i,t,s,n);return a(l),p}return{render:(e={},s={})=>{f=[];const n={title:"",head:"",css:new Set},o=i(n,e,{},s);return f.forEach(t),{html:o,css:{code:Array.from(n.css).map((e=>e.code)).join("\n"),map:null},head:n.title+n.head}},$$render:i}}function d(e,i,t){return null==i||t&&!i?"":` ${e}${!0===i?"":`=${"string"==typeof i?JSON.stringify(r(i)):`"${i}"`}`}`}const u=v(((e,i,t,s)=>{let{status:n}=i,{error:o}=i;return void 0===i.status&&t.status&&void 0!==n&&t.status(n),void 0===i.error&&t.error&&void 0!==o&&t.error(o),`<h1>${r(n)}</h1>\n\n<p>${r(o.message)}</p>\n\n\n${o.stack?`<pre>${r(o.stack)}</pre>`:""}`}));var y=Object.freeze({__proto__:null,default:u});const x={code:"#svelte-announcer.svelte-1y31lbn{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",map:'{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["\x3c!-- This file is generated by @sveltejs/kit — do not edit it! --\x3e\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from \'svelte\';\\n\\timport ErrorComponent from \\"/_app/assets/components/error.svelte.js\\";\\n\\n\\t// error handling\\n\\texport let status = undefined;\\n\\texport let error = undefined;\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\n\\tconst Layout = components[0];\\n\\n\\tsetContext(\'__svelte__\', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title;\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n<\/script>\\n\\n<Layout {...(props_0 || {})}>\\n\\t{#if error}\\n\\t\\t<ErrorComponent {status} {error}/>\\n\\t{:else}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}/>\\n\\t{/if}\\n</Layout>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\tNavigated to {title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>#svelte-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}</style>"],"names":[],"mappings":"AAyDO,gCAAiB,CAAC,SAAS,QAAQ,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,kBAAkB,MAAM,GAAG,CAAC,CAAC,UAAU,MAAM,GAAG,CAAC,CAAC,SAAS,MAAM,CAAC,YAAY,MAAM,CAAC,MAAM,GAAG,CAAC,OAAO,GAAG,CAAC"}'},A=v(((e,i,t,s)=>{let{status:n}=i,{error:o}=i,{stores:a}=i,{page:g}=i,{components:f}=i,{props_0:v=null}=i,{props_1:d=null}=i;const y=f[0];var A,z,_;A="__svelte__",z=a,l().$$.context.set(A,z),_=a.page.notify,l().$$.after_update.push(_);let h=!1,C=!1,b=null;return p((()=>{const e=a.page.subscribe((()=>{h&&(C=!0,b=document.title)}));return h=!0,e})),void 0===i.status&&t.status&&void 0!==n&&t.status(n),void 0===i.error&&t.error&&void 0!==o&&t.error(o),void 0===i.stores&&t.stores&&void 0!==a&&t.stores(a),void 0===i.page&&t.page&&void 0!==g&&t.page(g),void 0===i.components&&t.components&&void 0!==f&&t.components(f),void 0===i.props_0&&t.props_0&&void 0!==v&&t.props_0(v),void 0===i.props_1&&t.props_1&&void 0!==d&&t.props_1(d),e.css.add(x),a.page.set(g),`\n\n\n${m(y,"Layout").$$render(e,Object.assign(v||{}),{},{default:()=>""+(o?`${m(u,"ErrorComponent").$$render(e,{status:n,error:o},{},{})}`:`${m(f[1]||c,"svelte:component").$$render(e,Object.assign(d||{}),{},{})}`)})}\n\n${h?`<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" class="svelte-1y31lbn">${C?`Navigated to ${r(b)}`:""}</div>`:""}`}));var z=Object.freeze({__proto__:null});const _=({head:e,body:i})=>'<!DOCTYPE html>\n<html lang="en" xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml">\n\n<head>'+e+'</head>\n\n<body>\n\t<div id="milk">'+i+"</div>\n</body>\n\n</html>";function h({paths:e}){}const C={assets:[{file:".htaccess",size:7117,type:null},{file:"favicon.ico",size:1150,type:"image/vnd.microsoft.icon"},{file:"ico/apple-touch-icon-114x114.png",size:2144,type:"image/png"},{file:"ico/apple-touch-icon-120x120.png",size:2223,type:"image/png"},{file:"ico/apple-touch-icon-144x144.png",size:2666,type:"image/png"},{file:"ico/apple-touch-icon-152x152.png",size:2825,type:"image/png"},{file:"ico/apple-touch-icon-57x57.png",size:1221,type:"image/png"},{file:"ico/apple-touch-icon-60x60.png",size:1286,type:"image/png"},{file:"ico/apple-touch-icon-72x72.png",size:1498,type:"image/png"},{file:"ico/apple-touch-icon-76x76.png",size:1616,type:"image/png"},{file:"ico/favicon-1024x1024.png",size:16982,type:"image/png"},{file:"ico/favicon-128x128.png",size:2070,type:"image/png"},{file:"ico/favicon-16X16.png",size:135,type:"image/png"},{file:"ico/favicon-256x256.png",size:3738,type:"image/png"},{file:"ico/favicon-32x32.png",size:718,type:"image/png"},{file:"ico/favicon-512x512.png",size:7498,type:"image/png"},{file:"ico/favicon-64x64.png",size:1209,type:"image/png"},{file:"ico/favicon-96x96.png",size:1689,type:"image/png"},{file:"ico/favicon.ico",size:1150,type:"image/vnd.microsoft.icon"},{file:"ico/favicon.png",size:135,type:"image/png"},{file:"ico/favicon.svg",size:10432,type:"image/svg+xml"},{file:"ico/mstile-144x144.png",size:6100,type:"image/png"},{file:"ico/mstile-150x150.png",size:6250,type:"image/png"},{file:"ico/mstile-310x150.png",size:7165,type:"image/png"},{file:"ico/mstile-310x310.png",size:12350,type:"image/png"},{file:"ico/mstile-70x70.png",size:3375,type:"image/png"},{file:"ico/splash-1024x1024.png",size:34493,type:"image/png"},{file:"img/icon-cancel.svg",size:645,type:"image/svg+xml"},{file:"img/icon-close.svg",size:645,type:"image/svg+xml"},{file:"img/icon-contactcard.svg",size:857,type:"image/svg+xml"},{file:"img/icon-email.svg",size:672,type:"image/svg+xml"},{file:"img/icon-invoice.svg",size:1008,type:"image/svg+xml"},{file:"img/icon-pen.svg",size:857,type:"image/svg+xml"},{file:"img/icon-phone-yellow.svg",size:552,type:"image/svg+xml"},{file:"img/icon-phone.svg",size:502,type:"image/svg+xml"},{file:"img/icon-rating-star.svg",size:526,type:"image/svg+xml"},{file:"img/icon-socialmedia-airbnb.svg",size:1001,type:"image/svg+xml"},{file:"img/icon-socialmedia-blog.svg",size:847,type:"image/svg+xml"},{file:"img/icon-socialmedia-calendar.svg",size:1099,type:"image/svg+xml"},{file:"img/icon-socialmedia-etsy.svg",size:810,type:"image/svg+xml"},{file:"img/icon-socialmedia-facebook.svg",size:412,type:"image/svg+xml"},{file:"img/icon-socialmedia-google_business.svg",size:479,type:"image/svg+xml"},{file:"img/icon-socialmedia-google_maps.svg",size:893,type:"image/svg+xml"},{file:"img/icon-socialmedia-instagram.svg",size:1160,type:"image/svg+xml"},{file:"img/icon-socialmedia-linkedin.svg",size:542,type:"image/svg+xml"},{file:"img/icon-socialmedia-pinterest.svg",size:737,type:"image/svg+xml"},{file:"img/icon-socialmedia-rss.svg",size:869,type:"image/svg+xml"},{file:"img/icon-socialmedia-snapchat.svg",size:1650,type:"image/svg+xml"},{file:"img/icon-socialmedia-tiktok.svg",size:451,type:"image/svg+xml"},{file:"img/icon-socialmedia-twitter.svg",size:1025,type:"image/svg+xml"},{file:"img/icon-socialmedia-vcard.svg",size:857,type:"image/svg+xml"},{file:"img/icon-socialmedia-vimeo.svg",size:615,type:"image/svg+xml"},{file:"img/icon-socialmedia-yelp.svg",size:985,type:"image/svg+xml"},{file:"img/icon-socialmedia-youtube-alt.svg",size:339,type:"image/svg+xml"},{file:"img/icon-socialmedia-youtube.svg",size:704,type:"image/svg+xml"},{file:"img/icon-triangle-up.svg",size:396,type:"image/svg+xml"},{file:"img/logo.svg",size:7198,type:"image/svg+xml"},{file:"img/profile_1200x1200.avif",size:7480,type:"image/avif"},{file:"img/profile_1200x1200.jpg",size:25917,type:"image/jpeg"},{file:"img/profile_1200x1200.webp",size:15258,type:"image/webp"},{file:"img/socialmedia_1200x630.jpg",size:12642,type:"image/jpeg"},{file:"img/user_nophoto.svg",size:603,type:"image/svg+xml"},{file:"manifest.json",size:2723,type:"application/json"},{file:"milk/css/milk.css",size:495,type:"text/css"},{file:"milk/img/logo_graphql.svg",size:1357,type:"image/svg+xml"},{file:"milk/img/logo_milk.svg",size:5852,type:"image/svg+xml"},{file:"milk/img/logo_snowpack.svg",size:279,type:"image/svg+xml"},{file:"milk/img/logo_svelte.svg",size:1158,type:"image/svg+xml"},{file:"milk/img/onload_then_do_map.gif",size:43,type:"image/gif"},{file:"milk/img/onload_then_do_video.gif",size:43,type:"image/gif"},{file:"milk/img/x.gif",size:43,type:"image/gif"},{file:"register-service-workers.js",size:365,type:"application/javascript"},{file:"robots.txt",size:67,type:"text/plain"},{file:"service-worker.js",size:4274,type:"application/javascript"},{file:"themes/blank/style.css",size:146,type:"text/css"},{file:"themes/milkbox/style.css",size:2882,type:"text/css"}],layout:()=>import("./$layout.svelte.js"),error:()=>Promise.resolve().then((function(){return y})),pages:[{pattern:/^\/$/,params:()=>({}),parts:[[()=>import("./index.svelte.js")][0]],css:["/_app/start-08ddf071.css","/_app/index.svelte-4b86d373.css"],js:["/_app/index.svelte-5ed63d1f.js","/_app/start-242b8f89.js","/_app/inject_styles-0e3d93cc.js"]}],endpoints:[]};function b(i,{paths:t={base:"",assets:"/."},local:s=!1,only_prerender:n=!1,get_static_file:o}={}){return e(i,{paths:t,local:s,template:_,manifest:C,target:"#milk",entry:"entry-f6429f83.js",root:A,setup:z,dev:!1,amp:!1,only_prerender:n,app_dir:"_app",host:null,host_header:null,get_stack:e=>e.stack,get_static_file:o,get_amp_css:e=>css_lookup[e]})}export{d as a,s as b,v as c,r as e,h as i,i as n,p as o,b as r,n as s,m as v};
//# sourceMappingURL=app.js.map
