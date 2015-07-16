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

function toggleVisibility(id) {

    var e = document.getElementById(id);

    var s1a = document.getElementById('step1hideme1');
    var s1b = document.getElementById('step1hideme2');
    var s2 = document.getElementById('formblock');

    console.log('e.id : ' + e.id);

    switch (e)
    {
        case s1a:
            console.log(s1a);
            if(s1a.style.display === 'none'){
                s1a.style.display = 'block';
                s1b.style.display = 'none';
                s2.style.display = 'block';
            } else {
                s1a.style.display = 'none';
                s1b.style.display = 'none';
                s2.style.display = 'none';
            }
            break;

        case s1b:
            console.log(s1b);
            if(s1b.style.display === 'none'){
                s1a.style.display = 'none';
                s1b.style.display = 'block';
                s2.style.display = 'block';
            } else {
                s1a.style.display = 'none';
                s1b.style.display = 'none';
                s2.style.display = 'none';
            }
            break;


        default:
            console.log("Unknown<br />");
            s1a.style.display = 'none';
            s1b.style.display = 'none';
            s2.style.display = 'none';
            break;
    }
};


//e1.style.display = ((e1.style.display!='none') ? 'none' : 'block');

// formblock
// step1hideme1
// step1hideme2


