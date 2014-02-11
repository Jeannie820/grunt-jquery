/*
 * sdfsdf
 * https://github.com/zhangjingjing/alfred
 *
 * Copyright (c) 2014 张晶晶
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.sdfsdf = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.sdfsdf = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.sdfsdf.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.sdfsdf.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].sdfsdf = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
