/**
 * Created by ivanvelev on 1/11/18.
 */

function resizeSelectBasedOnOptionsHeight($) {
    //return;
    var h = 0, maxW = 0;
    var dims = [];
    $('select option').each(function(i,o){
        var $o = $(o);
        var h1 = $o.outerHeight(),
            w1 = $o.outerWidth();
        dims = [w1, h1, $o.css('position')];
        h += h1;
        maxW = maxW  < w1 ?  w1 : maxW;
    });

    $('body').append('<div>The dimension of an option (and its CSS position property) are:<br/>'+dims.toString()+'</div>');
    if (h < 10 || maxW < 10) {
        return;
    }

    $('select').height( h  ).width( maxW ).removeAttr('size');
}
