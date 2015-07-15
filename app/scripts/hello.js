//
///* jshint white:false */
//
//(function() {
//  'use strict';
//  console.log('\'Allo from CoffeeScript!');
//
//}).call(this);

'use strict';

//  file created 2015-07-15
//    by mynameiszak.com
//    <zak@mynameiszak.com>

var MNIZ = MNIZ || {};

MNIZ.Hello = (function($) {

  var pub = {};

  var helloFunction = function (b) {
    MNIZ.Main.mainFunction(b);
  };

  pub.helloFunction = helloFunction;

  return pub;

})(jQuery.noConflict());


document.onload(MNIZ.Hello.helloFunction('o hai'));