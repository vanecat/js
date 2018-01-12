/**
 * Created by ivanvelev on 1/11/18.
 */

function parseUrlQuery() {
    var query = (window.location.search+'').substring(1); // remove leading ?
    var params = query.split('&');
    var paramHash = {};
    for(var i=0; i < params.length; i++) {
        var param = params[i].split('=');
        var paramKey = decodeURIComponent(param[0]);
        var paramValue = decodeURIComponent(param[1]);

        if (!(typeof paramHash[paramKey] == 'undefined')) {
            // if value for this key exists, make it an array
            if (paramHash[paramKey] instanceof Array){
                paramHash[paramKey].push(paramValue);
            } else {
                paramHash[paramKey] = [paramHash[paramKey], paramValue];
            }

        } else {
            // else just set a single value
            paramHash[paramKey] =  paramValue;
        }
    }
    return paramHash;
}
