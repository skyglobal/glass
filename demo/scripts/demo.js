//if you need to intialise anything to get the demo to work...

require('polyfill/src/scripts/polyfill');

var ready = require('../../src/scripts/utils/ready.js');
var Glass = require('../../src/scripts/glass.js');

ready(Glass.initialise);
