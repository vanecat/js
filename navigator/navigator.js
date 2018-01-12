function isBrowserSafariOrOldMSIE () {
    var vendor = (navigator.vendor+'').toLowerCase();
    var userAgentString = (navigator.userAgent+'').toLowerCase();

    String.prototype.contains = function(query) {
        return this.indexOf(query) >=0;
    };

    return (vendor.contains('apple') && (!userAgentString.contains('crios') && !userAgentString.contains('fxios'))) ||
        userAgentString.contains('msie') || userAgentString.contains('.net');
}