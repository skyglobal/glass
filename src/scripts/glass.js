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
