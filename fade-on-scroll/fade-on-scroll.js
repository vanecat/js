/**
 * Created by ivanvelev on 1/11/18.
 */

function fadeElementOnScroll() {
    function FadeOnScroll (elSelector, accelerationFactorDef, debugElSelector) {
        var $ = jQuery;
        if (!$) {
            throw new Error('jQuery is not loaded or available', 'jquery');
        }

        var $debugEl = $(debugElSelector), isDebug = !!$debugEl.length;

        var $doc = $(document);

        var $els = $(elSelector);
        var hasEl = !!$els.length;

        var accelerationFactor = parseInt(accelerationFactorDef);
        if (isNaN(accelerationFactor) || accelerationFactor <= 0) {
            accelerationFactor = 1;
        } else if (accelerationFactor > 9){
            accelerationFactor = 9;
        }

        var fadeTrigger, fadeLength, fadeOpacity = 1;

        var els = []; // non-jQuery array of jQuery elements, used for the onScrollOrLoad
        $els.each(function(i, el) {
            var $el = $(el);
            if (!$el.length) {
                return;
            }
            var fadeTrigger = $el.offset().top;
            var fadeLength = $el.height();
            els.push({
                $: $el,
                scrollTrigger: fadeTrigger,
                height: fadeLength
            });
        });


        var onScrollOrLoad = function () {
            var scrollPos = $doc.scrollTop();

            $.each(els, function(i, el) {
                var fadeTrigger = el.scrollTrigger,
                    fadeLength = el.height,
                    $el = el.$;
                if (scrollPos < fadeTrigger) {
                    if (fadeOpacity < 1) {
                        fadeOpacity = 1;
                        $el.fadeTo(0, fadeOpacity);
                        if (isDebug) {console.log('faded in el #'+i);}
                    }
                } else if (scrollPos >= fadeTrigger && scrollPos <= fadeTrigger + fadeLength) {
                    var fraction = (scrollPos - fadeTrigger) / fadeLength;
                    var fractionRooted = 1 - Math.pow(fraction, 1/accelerationFactor);
                    var fractionRounded = Math.round(fractionRooted * 100) / 100;
                    fadeOpacity = fractionRounded;
                    $el.fadeTo(0, fadeOpacity);
                    if (isDebug) {console.log('fading out el #'+i);}
                } else if (scrollPos > fadeTrigger + fadeLength) {
                    if (fadeOpacity > 0) {
                        fadeOpacity = 0;
                        $el.fadeTo(0, fadeOpacity);
                        if (isDebug) {console.log('fade out el #'+i);}
                    }
                }

                if (isDebug) {
                    el.debug = fadeOpacity;
                }
            });

            if (isDebug) {
                var debugOut = [];
                $.each(els, function (i,el) {
                    debugOut.push('el #'+(i+1) + ': ' + el.debug);
                });
                $debugEl.html(debugOut.join('<br/>'))
            }
        };
        this.init = function() {
            if (!hasEl) {
                return;
            }
            $doc.scroll(onScrollOrLoad);
            onScrollOrLoad();
        }
    }
    new FadeOnScroll('#i1, #i2', 3).init();
}