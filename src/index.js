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

    var strStyle = '#m-preview{padding-top:50px;text-align:center}#m-preview-mobile{background:#333;display:inline-block;padding:3px;border-radius:20px;-webkit-box-shadow:#000 6px 6px 20px 2px;box-shadow:#666 8px 20px 26px;border:#333 1px solid}#m-preview-mobile iframe{width:375px;height:734px;background:#fff;border:#000 2px solid;border-radius:17px;margin:0;padding:0;display:block}#m-preview-message{position:fixed;top:0;right:0;left:0;background:rgba(204,204,204,0.5);padding:10px;color:#666;text-align:center;font-size:16px}#m-preview-message a{color:#666}';
    strStyle += '#m-preview-qrcode{font-size: 14px;color: #999;text-align: center;position: fixed;top: 50%;right: 0;transform: translateY(-50%);background: #fff;padding: 10px;}';

    var isDOMContentLoaded = function(){
        return !!document.body;
    }


    var defaultOpt = {
        message: '建议使用手机访问此页面',
        tips: '', // '扫描二维码用手机查看~',
        threshold: 800 // maxWidth: 800
    }

    var mPreview = function mPreview(opt){
        opt = opt || {};
        var message = opt.message || defaultOpt.message;
        var tips = opt.tips || defaultOpt.tips;
        var threshold = opt.threshold || defaultOpt.threshold;
        if( window.innerWidth <= threshold ){
            return false;
        }
        if(!isDOMContentLoaded()){
            setTimeout(mPreview, 25, opt);
            return false;
        }

        var pageUrl = location.href;

        var strTpl = '<div id="m-preview"><div id="m-preview-mobile"><iframe src="' +
            pageUrl +
            // '"></iframe><span></span></div><div id="m-preview-message">' +
            '"></iframe></div><div id="m-preview-message">' +
            message +
            '</div><div id="m-preview-qrcode"><div id="m-preview-qrcode-img"></div><p>' + tips + '</p></div></div><style>' +
            strStyle +
            '</style>';


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
