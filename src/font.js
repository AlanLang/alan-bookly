(function(window){var svgSprite='<svg><symbol id="icon-books" viewBox="0 0 1152 1024"><path d="M224 128l-192 0c-17.6 0-32 14.4-32 32l0 704c0 17.6 14.4 32 32 32l192 0c17.6 0 32-14.4 32-32l0-704c0-17.6-14.4-32-32-32zM192 320l-128 0 0-64 128 0 0 64z" fill="#8a8a8a" ></path><path d="M544 128l-192 0c-17.6 0-32 14.4-32 32l0 704c0 17.6 14.4 32 32 32l192 0c17.6 0 32-14.4 32-32l0-704c0-17.6-14.4-32-32-32zM512 320l-128 0 0-64 128 0 0 64z" fill="#8a8a8a" ></path><path d="M765.088 177.472l-171.456 86.4c-15.712 7.904-22.112 27.264-14.176 42.976l287.968 571.552c7.904 15.712 27.264 22.112 42.976 14.176l171.456-86.4c15.712-7.904 22.112-27.264 14.176-42.976l-287.968-571.552c-7.904-15.712-27.264-22.112-42.976-14.176z" fill="#8a8a8a" ></path><path d="M928 864c0 17.664-14.336 32-32 32s-32-14.336-32-32c0-17.664 14.336-32 32-32s32 14.336 32 32z" fill="#8a8a8a" ></path></symbol><symbol id="icon-plus" viewBox="0 0 1024 1024"><path d="M810.666667 554.666667h-256v256h-85.333334v-256H213.333333v-85.333334h256V213.333333h85.333334v256h256v85.333334z" fill="" ></path></symbol><symbol id="icon-piechart" viewBox="0 0 1024 1024"><path d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26c-53.9 0-106.3 10.6-155.5 31.4-47.5 20.1-90.3 48.9-127 85.6-36.7 36.7-65.5 79.4-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6 49.3 20.9 101.7 31.5 155.6 31.5 53.9 0 106.3-10.6 155.5-31.4 47.5-20.1 90.3-48.9 127-85.6 36.7-36.7 65.5-79.4 85.6-127 20.9-49.3 31.5-101.7 31.5-155.6v-26c-0.1-4.4-3.7-8-8.1-8z" fill="#707070" ></path><path d="M951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3-65.7-65.7-152.6-106.4-244.9-114.9L560.1 73c-4.7-0.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-0.1 8.4-4 8-8.6z" fill="#707070" ></path></symbol><symbol id="icon-books-select" viewBox="0 0 1152 1024"><path d="M224 128l-192 0c-17.6 0-32 14.4-32 32l0 704c0 17.6 14.4 32 32 32l192 0c17.6 0 32-14.4 32-32l0-704c0-17.6-14.4-32-32-32zM192 320l-128 0 0-64 128 0 0 64z" fill="#1296db" ></path><path d="M544 128l-192 0c-17.6 0-32 14.4-32 32l0 704c0 17.6 14.4 32 32 32l192 0c17.6 0 32-14.4 32-32l0-704c0-17.6-14.4-32-32-32zM512 320l-128 0 0-64 128 0 0 64z" fill="#1296db" ></path><path d="M765.088 177.472l-171.456 86.4c-15.712 7.904-22.112 27.264-14.176 42.976l287.968 571.552c7.904 15.712 27.264 22.112 42.976 14.176l171.456-86.4c15.712-7.904 22.112-27.264 14.176-42.976l-287.968-571.552c-7.904-15.712-27.264-22.112-42.976-14.176z" fill="#1296db" ></path><path d="M928 864c0 17.664-14.336 32-32 32s-32-14.336-32-32c0-17.664 14.336-32 32-32s32 14.336 32 32z" fill="#1296db" ></path></symbol><symbol id="icon-piechart-select" viewBox="0 0 1024 1024"><path d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26c-53.9 0-106.3 10.6-155.5 31.4-47.5 20.1-90.3 48.9-127 85.6-36.7 36.7-65.5 79.4-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6 49.3 20.9 101.7 31.5 155.6 31.5 53.9 0 106.3-10.6 155.5-31.4 47.5-20.1 90.3-48.9 127-85.6 36.7-36.7 65.5-79.4 85.6-127 20.9-49.3 31.5-101.7 31.5-155.6v-26c-0.1-4.4-3.7-8-8.1-8z" fill="#1296db" ></path><path d="M951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3-65.7-65.7-152.6-106.4-244.9-114.9L560.1 73c-4.7-0.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-0.1 8.4-4 8-8.6z" fill="#1296db" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)