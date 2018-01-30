
function testCopyCommand() {
    log('is execCommand enabled?');
    if (!document.execCommand) {
        log('NO: execCommand NOT enabled');
        return false;
    }
    var input = document.createElement('input');
    $('body').append(input);

    var $input = $(input);
    $input.css({ position: 'absolute', top: '-9876px', left: '-9876px' });
    var inputValue = 'testCopyValue'+Math.random();
    $input.val(inputValue);

    input.focus();
    input.select();
    var isEnabled = false;
    if (document.execCommand('copy')) {
        log('"copy" enabled');
        isEnabled = true;
    }
    if (document.execCommand('Copy')) {
        log('"Copy" enabled');
        isEnabled = true;
    }
    return isEnabled;
}