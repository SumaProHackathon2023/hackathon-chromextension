(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7925)}])},3271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return Image}});let n=r(8754),a=r(1757),o=a._(r(7294)),i=n._(r(3935)),l=n._(r(9201)),s=r(3914),d=r(5494),c=r(869);r(1905);let u=r(1823),f=n._(r(4545)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,n,a,o){let i=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===i)return;e["data-loaded-src"]=i;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function g(e){let[t,r]=o.version.split(".",2),n=parseInt(t,10),a=parseInt(r,10);return n>18||18===n&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:a,height:i,width:l,decoding:s,className:d,style:c,fetchPriority:u,placeholder:f,loading:m,unoptimized:h,fill:b,onLoadRef:x,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:y,onLoad:_,onError:j,...k}=e;return o.default.createElement("img",{...k,...g(u),loading:m,width:l,height:i,decoding:s,"data-nimg":b?"fill":"1",className:d,style:c,sizes:a,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&p(e,f,x,v,w,h))},[r,f,x,v,w,j,h,t]),onLoad:e=>{let t=e.currentTarget;p(t,f,x,v,w,h)},onError:e=>{y(!0),"empty"!==f&&w(!0),j&&j(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&i.default.preload?(i.default.preload(r.src,n),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let Image=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(u.RouterContext),n=(0,o.useContext)(c.ImageConfigContext),a=(0,o.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:i,onLoadingComplete:l}=e,p=(0,o.useRef)(i);(0,o.useEffect)(()=>{p.current=i},[i]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[x,v]=(0,o.useState)(!1),[w,y]=(0,o.useState)(!1),{props:_,meta:j}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:a,blurComplete:x,showAltText:w});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{..._,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:p,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:y,ref:t}),j.priority?o.default.createElement(b,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(1905);let n=r(2393),a=r(5494);function o(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,d,{src:c,sizes:u,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:h,width:b,height:x,fill:v=!1,style:w,onLoad:y,onLoadingComplete:_,placeholder:j="empty",blurDataURL:k,fetchPriority:N,layout:S,objectFit:z,objectPosition:E,lazyBoundary:C,lazyRoot:P,...O}=e,{imgConf:I,showAltText:R,blurComplete:M,defaultLoader:D}=t,L=I||a.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t}}let A=O.loader||D;delete O.loader,delete O.srcSet;let B="__next_img_default"in A;if(B){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!u&&(u=t)}let G="",F=i(b),T=i(x);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,k=k||e.blurDataURL,G=e.src,!v){if(F||T){if(F&&!T){let t=F/e.width;T=Math.round(e.height*t)}else if(!F&&T){let t=T/e.height;F=Math.round(e.width*t)}}else F=e.width,T=e.height}}let W=!m&&("lazy"===p||void 0===p);(!(c="string"==typeof c?c:G)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),B&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),m&&(N="high");let U=i(h),V=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:E}:{},R?{}:{color:"transparent"},w),q=M||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:T,blurWidth:s,blurHeight:d,blurDataURL:k||"",objectFit:V.objectFit})+'")':'url("'+j+'")',J=q?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:o,sizes:i,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:o,kind:"x"}}(t,a,i),c=s.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:l({config:t,src:r,quality:o,width:s[c]})}}({config:l,src:c,unoptimized:f,width:F,quality:U,sizes:u,loader:A}),Y={...O,loading:W?"lazy":p,fetchPriority:N,width:F,height:T,decoding:"async",className:g,style:{...V,...J},sizes:X.sizes,srcSet:X.srcSet,src:X.src},H={unoptimized:f,priority:m,placeholder:j,fill:v};return{props:Y,meta:H}}},2393:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:o,objectFit:i}=e,l=n?40*n:t,s=a?40*a:r,d=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return s},default:function(){return d}});let n=r(8754),a=r(3914),o=r(1905),i=r(3271),l=n._(r(4545)),s=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},d=i.Image},4545:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},7925:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),a=r(5675),o=r.n(a);function i(){return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24 ",children:[(0,n.jsxs)("div",{className:"z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex",children:[(0,n.jsxs)("p",{className:"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",children:["Get started by editing\xa0",(0,n.jsx)("code",{className:"font-mono font-bold",children:"src/pages/index.tsx"})]}),(0,n.jsx)("div",{className:"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",children:(0,n.jsxs)("a",{className:"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,n.jsx)(o(),{src:"/vercel.svg",alt:"Vercel Logo",className:"dark:invert",width:100,height:24,priority:!0})]})})]}),(0,n.jsx)("div",{className:"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]",children:(0,n.jsx)(o(),{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})}),(0,n.jsxs)("div",{className:"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left",children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Docs"," ",(0,n.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,n.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Learn"," ",(0,n.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,n.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,n.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Templates"," ",(0,n.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,n.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Deploy"," ",(0,n.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,n.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Instantly deploy your Next.js site to a shareable URL with Vercel."})]})]})]})}},5675:function(e,t,r){e.exports=r(645)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);