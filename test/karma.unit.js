module.exports = function(config) {
    var karmaConfig = {
        basePath: '..',
        browsers: ['PhantomJS'],
        frameworks: ['browserify', 'jasmine'],
        reporters: ['progress'],
        preprocessors: {
            'test/unit/**/*.js': ['browserify'],
            '_site/*.html': ['html2js']
        },
        files: [
            {pattern: '_site/**/vendor.*', included: true, served: true, watched: true},
            {pattern: '_site/**/*.*', included: true, served: true, watched: true},
            'test/unit/**/*.spec.js'
        ],
        exclude: [
            '**/*.png',
            '**/*.min.js'
        ]
    };
    var pkg = require('../package.json');
    karmaConfig.browser = pkg.browser || {};
    karmaConfig["browserify-shim"] = pkg["browserify-shim"] || {};
    karmaConfig.browserify = pkg.browserify || {};
    if (karmaConfig.browserify.transform) {
        karmaConfig.browserify.transform.push('browserify-istanbul');
    } else {
        karmaConfig.browserify.transform = [ 'browserify-istanbul' ];
    }
    return config.set(karmaConfig);
};
