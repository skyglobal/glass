var pkg = require('./package.json');

module.exports = {
    pkg: pkg,
    paths: {
        source: "./src",
        "demo": "./demo",
        "target": './_site'
    },
    tasks : {
        copy: ['fonts', 'images', 'server-config'],
        build: ['sass', 'mustache', 'browserify'],
        serve: 'staticApp',
        test: 'karma',
        release: ['git', 'gh-pages', 'bower']
    },
    karma:{
        functional: false,
        unit: false,
        unitCoverage: './test/coverage/summary.json'
    }
};
