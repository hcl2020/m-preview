!function(e,i){"object"==typeof exports?module.exports=i():"function"==typeof define&&define.amd?define(i):e.mPreview=i()}(this,function(){"use strict";var e=function(){return!!document.body},i={message:"建议使用手机访问此页面",threshold:800};return function o(r){var t=(r=r||{}).message||i.message,a=r.threshold||i.threshold;if(window.innerWidth<=a)return!1;if(!e())return setTimeout(o,25,r),!1;var p='<div id="m-preview"><div id="m-preview-mobile"><p><mark></mark></p><iframe src="'+location.href+'"></iframe><span></span></div><div id="m-preview-message">'+t+'</div></div><style>#m-preview{padding-top:50px;text-align:center}#m-preview-mobile{background:#222;display:inline-block;padding:0 4px;border-radius:26px;-webkit-box-shadow:#000 6px 6px 20px 2px;box-shadow:#000 6px 6px 20px 2px;border:#999 2px solid}#m-preview-mobile iframe{width:375px;height:667px;background:#fff;border:#000 2px solid;border-radius:5px;margin:0;padding:0;display:block}#m-preview-mobile p{margin:0;padding:20px 0;position:relative}#m-preview-mobile p mark{display:block;height:8px;margin:0 auto;width:70px;background:#444;-webkit-box-shadow:#a3a3a3 1px 1px 1px;box-shadow:#a3a3a3 1px 1px 1px;border-radius:5px}#m-preview-mobile p::before{content:" ";position:absolute;display:inline-block;top:16px;height:16px;width:16px;border-radius:50%;background:#ccc;-webkit-box-shadow:inset #080808 -8px 1px 7px 4px;box-shadow:inset #080808 -8px 1px 7px 4px;left:22%}#m-preview-mobile p::after{position:absolute;display:inline-block;content:" ";top:20px;height:8px;width:8px;border-radius:50%;background:#000;left:32%}#m-preview-mobile span{-webkit-box-shadow:#fff 1px 2px 3px;box-shadow:#fff 1px 2px 3px;display:block;height:36px;width:80px;border-radius:10px;background:rgba(0,0,0,0.3);margin:15px auto}#m-preview-message{position:fixed;top:0;right:0;left:0;background:rgba(204,204,204,0.5);padding:10px;color:#666;text-align:center;font-size:16px}#m-preview-message a{color:#666}</style>';document.body.innerHTML=p;var d=document.getElementsByTagName("iframe")[0];d.onload=function(){var e=d.contentWindow,i=e.document.createElement("style");i.innerHTML="::-webkit-scrollbar{width:6px;height:5px;background-color:rgba(0,0,0,0.05)}::-webkit-scrollbar-thumb{border-radius:3px;background-color:rgba(0,0,0,0.3)}::-webkit-scrollbar-thumb:hover{border-radius:3px;background-color:rgba(0,0,0,0.7)}",e.document.head.appendChild(i);var o=e.location.pathname;history.pushState(null,e.document.title,o),e.addEventListener("hashchange",function(i){window.location.hash=e.location.hash});var r=e.history.replaceState;r&&(e.history.replaceState=function(){r.apply(e.history,arguments),history.replaceState.apply(history,arguments)});var t=e.history.pushState;t&&(e.history.pushState=function(){t.apply(e.history,arguments),history.pushState.apply(history,arguments)})};for(var n=document.head,s=n.children,l=0;s[l];)"text/css"==s[l].type||"stylesheet"==s[l].rel?n.removeChild(s[l]):l++}});