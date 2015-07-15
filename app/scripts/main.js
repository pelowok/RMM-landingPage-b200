'use strict';

//  file created 2015-07-15
//    by mynameiszak.com
//    <zak@mynameiszak.com>

//var MNIZ = MNIZ || {};
//
//MNIZ.Main = (function($) {
//
//    var pub = {};
//
//    var mainFunction = function (b) {
//        console.log('From inside MNIZ.Main.. mainFunction(' + b + ')');
//    };
//
//    var toggleVisibility = function(element) {
//        if(element.style.display=='block'){
//            element.style.display='none';
//        } else {
//            element.style.display='block';
//        }
//    };
//
//    function toggle_visibility(id) {
//        var e = document.getElementById(id);
//        if(e.style.display == 'block')
//            e.style.display = 'none';
//        else
//            e.style.display = 'block';
//    }
//
//    pub.mainFunction = mainFunction();
//    pub.toggleVisibility = toggleVisibility();
//    pub.toggle_visibility = toggle_visibility;
//
//    return pub;
//
//})(jQuery.noConflict());



function toggle_visibility(id) {
    var e = document.getElementById(id);
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');
}