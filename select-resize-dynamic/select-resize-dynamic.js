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

// A test for whether the SELECT Fancy Widget is enabled (e.g. for most mobile device browsers).
// The assumption is that if then default OPTION elements are not available for selection/clicking
// (i.e. Fancy Widget is handling the selection), their CSS (inner) height (i.e. height - margin/border) will be 0.
// The test uses a SELECT element created in a controlled/programmatic manner on the fly and measures
// the OPTION elements heights. Because it's a controlled manner, I can be sure to make the margin/border/padding to be zero (0).
function testSelectFancyWidgetEnabled($) {
    var randId = 'testSelect' + Math.ceil(Math.random() * 100000);
    var $body = $('body');

    // The test SELECT element styles need to
    //   to set border/margin/padding to 0 to measure width in "isolation"
    //   to be out of user's view (hence positioned absolute and top/left out of screen)
    $body.append('<select style="margin: 0!important; padding: 0!important; position: absolute!important; z-index: 1!important; top: -9999px!important; left: -9999px!important;" id="' + randId + '" multiple><option>1</option><option>2</option></select>');

    var $options = $('#'+randId + ' option');
    var optionHeight = $($options[0]).height();

    $body.append("<div>Test Option height: "+optionHeight+", Test Option Outer Height: "+$($options[0]).outerHeight()+"</div>")

    // if height is 0, then default options are not available for selection/clicking (i.e. Fancy Widget is handling the selection)
    return !!optionHeight;
}
