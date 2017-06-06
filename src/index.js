$(function () {
    if( window.innerWidth > 800 ){
        EnableMobileView();
    }
});
function EnableMobileView(){
    var $iframe = $('<iframe id="mobile-iframe">');
    $iframe.attr({
        'src': location.href,
        'width': '375px',
        'height': '667px'
    });
    $iframe.css({
        'width': '375px',
        'height': '667px',

        'box-sizing': 'content-box',
        'padding': '35px 6px 56px',
        'margin': '20px 70px',

        'background': '#333',
        'border-radius': '16px',
        'box-shadow': '0 0 21px 2px #000',
    });

    $('body').html('').append( $iframe );

    $('body').append($('<div>建议使用手机访问,或访问电脑版</div>').css({
        'position': 'fixed',
        'bottom': '0',
        'text-align': 'center',
        'width': '100%',
        'color': '#ccc',
        'padding': '7px',
        'background': 'rgba(0,0,0,0.5)'
    }));
    $('body').css('cursor','auto');

    $('body').append($('<div></div>').css({
        'position': 'fixed',
        'top': '728px',
        'left': '242px',
        'border-radius': '50%',
        'color': 'rgb(153, 153, 153)',
        'padding': '20px',
        'border': '1px #000 solid',
        'box-shadow': '1px 2px 3px #fff'
    }));

    var _window = $iframe[0].contentWindow;
    _window.onload = function() {
        var sheet = _window.document.styleSheets[0];
        /*滚动条 start*/
        sheet.insertRule('::-webkit-scrollbar {width: 6px;height: 5px;background-color: rgba(0,0,0, 0.05);}', 0);
        /*定义滑块 内阴影+圆角*/
        sheet.insertRule('::-webkit-scrollbar-thumb {border-radius: 3px;background-color: rgba(0,0,0, 0.3);}', 0);
        sheet.insertRule('::-webkit-scrollbar-thumb:hover {border-radius: 3px;background-color: rgba(0,0,0, 0.7);}', 0);
    }
}
