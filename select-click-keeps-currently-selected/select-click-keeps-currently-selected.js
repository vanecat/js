function selectClickKeepsCurrentlySelected($) {
    var setOptionSelected = function(o, isToggle) {
        var $o = !(typeof o.jQueryObject == 'undefined') ? o.jQueryObject : o.jQueryObject = $(o);

        var isSelected = !!o.isSelected;
        if (typeof o.isSelected == 'undefined') {
            isSelected = !!$o.attr('selected');
            $o.removeAttr('selected');
        }
        if (!!isToggle) {
            isSelected = !isSelected;
        }

        o.isSelected = o.selected = isSelected;
        $o.toggleClass('selected', isSelected);
    };
    var $options = $('select option');
    $options.each(function(i,o){
        setOptionSelected(o);
    });

    $options.mousedown(function(e) {
        e.preventDefault();
        setOptionSelected(this, true /* toggle this: true */);
        $(this).siblings().each(function(i,o){
            setOptionSelected(o);
        });
    });
}