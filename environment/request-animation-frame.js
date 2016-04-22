import getGlobalObject from './get-global-object.js';

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

let glob = getGlobalObject();

export default (function() {
    let lastTime = 0;
    let vendors = ['ms', 'moz', 'webkit', 'o'];
    for(let x = 0; x < vendors.length && !glob.requestAnimationFrame; ++x) {
        glob.requestAnimationFrame = glob[vendors[x]+'RequestAnimationFrame'];
        glob.cancelAnimationFrame = glob[vendors[x]+'CancelAnimationFrame'] 
                                   || glob[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!glob.requestAnimationFrame)
        glob.requestAnimationFrame = function(callback, element) {
            let currTime = new Date().getTime();
            let timeToCall = Math.max(0, 16 - (currTime - lastTime));
            let id = glob.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!glob.cancelAnimationFrame)
        glob.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());