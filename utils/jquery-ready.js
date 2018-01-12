/**
 * Created by ivanvelev on 1/11/18.
 */
function jQueryReady(f) {
    var fArr = Array.prototype.splice.call(arguments, 0);
    jQuery(document).ready(function() {
        console.log("READY", fArr);
        jQuery.each(fArr, function(i,f) {
            f(jQuery);
        });
    });
}
