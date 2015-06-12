require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function Animation(element, start, duration, initialPosition, destinationPosition, threshold) {
    this.element = element;
    this.start = start;
    this.duration = duration;
    this.initialPosition = initialPosition;
    this.destinationPosition = destinationPosition;
    this.threshold = threshold;

    if (this.threshold === undefined) {
        this.threshold = 0;
    }
}

Animation.prototype.updateStyle = function() {
    var yPosition = doCalculation(this.start, this.duration, this.initialPosition.y, this.destinationPosition.y);
    var xPosition = doCalculation(this.start, this.duration, this.initialPosition.x, this.destinationPosition.x);

    setTranslate3D(this.element, xPosition, yPosition, 0);
    this.element.style.msTransform = 'translate(' + xPosition + 'px, ' + yPosition + 'px)';
};

Animation.prototype.tick = function() {
    this.updateStyle();
};

function setPrefixedTransforms(element, transformValue) {
    element.style.transform = transformValue;
    element.style.OTransform = transformValue;
    element.style.MozTransform = transformValue;
    element.style.webkitTransform = transformValue;
    element.style.msTransform = transformValue;
}

function setTranslate3D(element, x, y, z) {
    setPrefixedTransforms(element, 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
}

function doCalculation(start, duration, initial, destination) {
    var x1 = parseFloat(start),
        y1 = parseFloat(initial),
        x2 = parseFloat(start + duration),
        y2 = parseFloat(destination),
        x = window.pageYOffset,
        y = (( y2-y1 )*( x-x1 )+( x2*y1 ) - ( x1*y1 ))/( x2-x1 );

    return y;
}

module.exports = Animation;

},{}],2:[function(require,module,exports){
function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading') {
                fn();
            }
        });
    }
}

module.exports = ready;

},{}],"glass":[function(require,module,exports){
var Animation = require('./Animation');
var ready = require('./utils/ready');

function Glass() {

}

Glass.initialise = function() {
    var animations = [];

    var shineElements = document.querySelectorAll('.shine');

    for (var i = 0; i < shineElements.length; i++) {
        var distanceFromTop = shineElements[i].parentNode.offsetTop - window.innerHeight;

        if (i % 2 === 0) {
            shineElements[i].classList.add('left');
            animations.push(new Animation(shineElements[i], distanceFromTop, window.innerHeight, { x: window.innerWidth - 211, y: 0 }, { x: -211, y: 0}));
        } else {
            shineElements[i].classList.add('right');
            animations.push(new Animation(shineElements[i], distanceFromTop, window.innerHeight, { x: -211, y: 0 }, { x: window.innerWidth - 211, y: 0}));
        }
    }

    function step() {

        for (var i = 0; i < animations.length; i++) {
            animations[i].tick();
        }


        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
};

module.exports = Glass;

},{"./Animation":1,"./utils/ready":2}]},{},["glass"]);
