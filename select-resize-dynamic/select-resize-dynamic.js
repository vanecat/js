/**
 * Created by ivanvelev on 1/11/18.
 */

function resizeSelectBasedOnOptionsHeight($) {
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

function testSelectFancyWidgetEnabled($) {
    var randId = 'testSelect' + Math.ceil(Math.random() * 100000);
    var $body = $('body');
    $body.append('<select style="position: absolute; z-index: 1234; top: -999px; left: -999px;" id="' + randId + '" multiple><option>1</option><option>2</option></select>');

    var $options = $('#'+randId + ' option');
    var optionHeight = $($options[0]).height();

    $body.append("<div>Test Option height: "+optionHeight+", Test Option Outer Height: "+$($options[0]).outerHeight()+"</div>")

    // if height is 0, then default options are not available for selection/clicking (i.e. Fancy Widget is handling the selection)
    return !!optionHeight;
}
