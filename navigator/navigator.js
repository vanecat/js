function isBrowserSafariOrOldMSIE () {
    var vendor = (navigator.vendor+'').toLowerCase();
    var userAgentString = (navigator.userAgent+'').toLowerCase();

    return (vendor.contains('apple') && (!userAgentString.contains('crios') && !userAgentString.contains('fxios'))) ||
        userAgentString.contains('msie') || userAgentString.contains('.net');
}