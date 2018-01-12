/**
 * Created by ivanvelev on 1/11/18.
 */

(function () {
    var folderWithSameFileInIt = (window.location.pathname+'').replace(/^(.*)\/([^\/]+)\/.*$/, '$1/$2/$2.html');
    console.log(window.location.pathname, folderWithSameFileInIt);
    window.location.href = folderWithSameFileInIt;
})();
