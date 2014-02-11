/*
 * second_try
 * https://github.com/zhangjingjing820/grunt-jquery
 *
 * Copyright (c) 2014 张晶晶
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.second_try = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.second_try = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.second_try.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.second_try.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].second_try = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
