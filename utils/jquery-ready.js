/**
 * Created by ivanvelev on 1/11/18.
 */
function jQueryReady($jqueryObj, a, b, c) {
    if (!$jqueryObj) {
        return;
    }
    var fArr = Array.prototype.splice.call(arguments, 1);
    $jqueryObj(document).ready(function() {
        console.log("READY", fArr);
        $jqueryObj.each(fArr, function(i,f) {
            f($jqueryObj);
        });
    });
}
