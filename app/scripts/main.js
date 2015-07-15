'use strict';

//  file created 2015-07-15
//    by mynameiszak.com
//    <zak@mynameiszak.com>

var MNIZ = MNIZ || {};

MNIZ.Main = (function($) {

    var pub = {};

    var mainFunction = function (b) {
        console.log('From inside MNIZ.Main.. mainFunction(' + b + ')');
    };

    pub.mainFunction = mainFunction;

    return pub;

})(jQuery.noConflict());



