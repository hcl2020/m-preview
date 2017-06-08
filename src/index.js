(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.mPreview = factory();
    }
})(this, function() {
    'use strict';

    var strStyle='#m-preview{padding-top:50px;text-align:center}#m-preview-mobile{background:#222;display:inline-block;padding:0 4px;border-radius:26px;-webkit-box-shadow:#000 6px 6px 20px 2px;box-shadow:#000 6px 6px 20px 2px;border:#999 2px solid}#m-preview-mobile iframe{width:375px;height:667px;background:#fff;border:#000 2px solid;border-radius:5px;margin:0;padding:0;display:block}#m-preview-mobile p{margin:0;padding:20px 0;position:relative}#m-preview-mobile p mark{display:block;height:8px;margin:0 auto;width:70px;background:#444;-webkit-box-shadow:#a3a3a3 1px 1px 1px;box-shadow:#a3a3a3 1px 1px 1px;border-radius:5px}#m-preview-mobile p::before{content:" ";position:absolute;display:inline-block;top:16px;height:16px;width:16px;border-radius:50%;background:#ccc;-webkit-box-shadow:inset #080808 -8px 1px 7px 4px;box-shadow:inset #080808 -8px 1px 7px 4px;left:22%}#m-preview-mobile p::after{position:absolute;display:inline-block;content:" ";top:20px;height:8px;width:8px;border-radius:50%;background:#000;left:32%}#m-preview-mobile span{-webkit-box-shadow:#fff 1px 2px 3px;box-shadow:#fff 1px 2px 3px;display:block;height:36px;width:80px;border-radius:10px;background:rgba(0,0,0,0.3);margin:15px auto}#m-preview-message{position:fixed;top:0;right:0;left:0;background:rgba(204,204,204,0.5);padding:10px;color:#666;text-align:center;font-size:16px}#m-preview-message a{color:#666}';


    var isDOMContentLoaded = function(){
        return !!document.body;
    }


    var defaultOpt = {
        message: '建议使用手机访问此页面',
        threshold: 800 // maxWidth: 800
    }

    var mPreview = function mPreview(opt){
        opt = opt || {};
        var message = opt.message || defaultOpt.message;
        var threshold = opt.threshold || defaultOpt.threshold;
        if( window.innerWidth <= threshold ){
            return false;
        }
        if(!isDOMContentLoaded()){
            setTimeout(mPreview, 25, opt);
            return false;
        }

        var pageUrl = location.href;
        var strTpl = '<div id="m-preview"><div id="m-preview-mobile"><p><mark></mark></p><iframe src="' +
            pageUrl +
            '"></iframe><span></span></div><div id="m-preview-message">' +
            message +
            '</div></div><style>'+
            strStyle
            +'</style>';

        var $body = document.body;
        $body.innerHTML = strTpl;

        var $iframe = document.getElementsByTagName('iframe')[0];
        $iframe.onload = function(){
            var _window = $iframe.contentWindow;
            /* 处理滚动条 */
            var strCss = '::-webkit-scrollbar{width:6px;height:5px;background-color:rgba(0,0,0,0.05)}'+
                '::-webkit-scrollbar-thumb{border-radius:3px;background-color:rgba(0,0,0,0.3)}'+
                '::-webkit-scrollbar-thumb:hover{border-radius:3px;background-color:rgba(0,0,0,0.7)}';
            var $style = _window.document.createElement('style');
            $style.innerHTML = strCss;
            _window.document.head.appendChild($style);
            /* 处理地址栏 */
            var pathname = _window.location.pathname;

            history.pushState(null, _window.document.title, pathname);
            _window.addEventListener('hashchange', function(Event){
                window.location.hash = _window.location.hash;
            });

            var _replaceState = _window.history.replaceState;
            if(_replaceState){
                _window.history.replaceState = function(){
                    _replaceState.apply(_window.history, arguments);
                    history.replaceState.apply(history, arguments);
                }
            }
            var _pushState = _window.history.pushState;
            if(_pushState){
                _window.history.pushState = function(){
                    _pushState.apply(_window.history, arguments);
                    history.pushState.apply(history, arguments);
                }
            }
        }

        // 移除 head 中的 stylesheet
        var $head = document.head;
        var $heads = $head.children;
        for(var i=0; $heads[i];){
            if($heads[i]['type'] == 'text/css' || $heads[i]['rel'] == 'stylesheet'){
                $head.removeChild( $heads[i] );
            }else{
                i++;
            }
        }

    }

    return mPreview;
});
