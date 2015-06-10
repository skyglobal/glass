/* Add HTML + CSS to setup page for functional testing */
require('../helper').loadAssets();

/* Require file to test */
var glass = require('../../src/scripts/glass');

/* Start Test */
describe('glass module can ', function () {

    it('print the sum to the dom', function () {
        new glass().write([1,2,3]);

        expect(document.getElementById('demo-functional').innerHTML).toBe('6');

    });

});