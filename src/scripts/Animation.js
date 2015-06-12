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
