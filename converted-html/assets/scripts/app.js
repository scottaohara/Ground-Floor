// ----------------------------------------------------------------
// Make equal height columns
// ----------------------------------------------------------------

var getMaxHeight = function ($elms) {
  var maxHeight = 0;
  $elms.each(function () {
    // In some cases you may want to use outerHeight() instead
    var height = $(this).height();
    if (height > maxHeight) {
      maxHeight = height;
    }
  });
  return maxHeight;
};

// Usage
$('.js-equal-Height').height(getMaxHeight($('.js-equal-Height')));


// ----------------------------------------------------------------
// Input/Textarea Character Limit Counter
// ----------------------------------------------------------------

(function($){
    $.fn.extend({
        limiter: function(limit, elem){
            $(this).on("keyup focus", function(){
                setCount(this, elem);
            });
            function setCount(src, elem){
                var chars = src.value.length;
                if (chars > limit){
                    src.value = src.value.substr(0, limit);
                    chars = limit;
                }
                elem.html(limit - chars);
            }
            setCount($(this)[0], elem);
        }
    });
})(jQuery);

var elem = $("#chars");
$("#text").limiter(100, elem);