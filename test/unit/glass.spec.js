/* Add HTML + CSS to setup page for functional testing */
require('../helper').loadAssets();

/* Require file to test */
var glass = require('../../src/scripts/glass');

/* Start Test */
describe('glass module can ', function () {

    it('sum an array of numbers', function () {

        expect(new glass().sum([1,2,3])).toBe(6);

    });

    it('version is attached', function () {

        expect(new glass().version).toBe('0.0.0');

    });

});