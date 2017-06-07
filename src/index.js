(function(){

    function mPreview(option){
        var strStyle='#m-preview{padding:50px;text-align:center}#m-preview-mobile{background:#222;display:inline-block;padding:0 4px;border-radius:26px;-webkit-box-shadow:#000 6px 6px 20px 2px;box-shadow:#000 6px 6px 20px 2px;border:#999 2px solid}#m-preview-mobile iframe{width:375px;height:667px;background:#fff;border:#000 2px solid;border-radius:5px;margin:0;padding:0;display:block}#m-preview-mobile p{margin:0;padding:20px 0;position:relative}#m-preview-mobile p mark{display:block;height:8px;margin:0 auto;width:70px;background:#444;-webkit-box-shadow:#a3a3a3 1px 1px 1px;box-shadow:#a3a3a3 1px 1px 1px;border-radius:5px}#m-preview-mobile p::before{content:" ";position:absolute;display:inline-block;top:16px;height:16px;width:16px;border-radius:50%;background:#ccc;-webkit-box-shadow:inset #080808 -8px 1px 7px 4px;box-shadow:inset #080808 -8px 1px 7px 4px;left:22%}#m-preview-mobile p::after{position:absolute;display:inline-block;content:" ";top:20px;height:8px;width:8px;border-radius:50%;background:#000;left:32%}#m-preview-mobile span{-webkit-box-shadow:#fff 1px 2px 3px;box-shadow:#fff 1px 2px 3px;display:block;height:36px;width:80px;border-radius:10px;background:rgba(0,0,0,0.3);margin:15px auto}#m-preview-message{position:fixed;top:0;right:0;left:0;background:rgba(204,204,204,0.5);padding:10px;color:#666;text-align:center;font-size:16px}#m-preview-message a{color:#666}';

        var message = option.message || '建议使用手机访问此页面';
        var pageUrl = location.href;
        var strTpl = '<div id="m-preview"><div id="m-preview-mobile"><p><mark></mark></p><iframe src="' +
            pageUrl +
            '"></iframe><span></span></div><div id="m-preview-message">' +
            message +
            '</div></div><style>'+
            strStyle
            +'</style>';

        var $body = document.getElementsByTagName('body')[0];
        $body.innerHTML = strTpl;
        // TODO 移除 head style 和 link style

        var $iframe = document.getElementsByTagName('iframe')[0];
        var _window = $iframe.contentWindow;
        _window.onload = function() {
            /* 处理滚动条 */
            var strCss = '::-webkit-scrollbar{width:6px;height:5px;background-color:rgba(0,0,0,0.05)}'+
                '::-webkit-scrollbar-thumb{border-radius:3px;background-color:rgba(0,0,0,0.3)}'+
                '::-webkit-scrollbar-thumb:hover{border-radius:3px;background-color:rgba(0,0,0,0.7)}';
            var $style = _window.document.createElement('style');
            $style.innerHTML = strCss;
            _window.document.getElementsByTagName('head')[0].append($style);
            /* 处理地址栏 */



        }



    }

    window.onload= function(){
        if( window.innerWidth > 600 ){
            mPreview({
                message: '建议使用手机访问此页面, 或访问此页面的<a href="#">电脑版</a>'
            });
        }
    };

})();
