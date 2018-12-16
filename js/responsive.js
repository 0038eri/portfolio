$(function () {
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        $('#mouse-wrapper').css('display', 'none');
        $('#top-wrapper').css('top', '130px');
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        $('#mouse-wrapper').css('display', 'none');
        $('#top-wrapper').css('top', '130px');
    } else {
        // PC用コード
    }
});