module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
        'mocha',
        'browserify',
        'fixture'
    ],
    files: [
        'src/**/*.js',
        'test/**/*.spec.js',
        'test/fixtures/**/*.html'
    ],
    exclude: [],
    preprocessors: {
        'src/**/*.js': ['coverage'],
        'test/**/*.html': 'html2js',
        'test/**/*.spec.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
        [
//          require('browserify-istanbul')({
//            instrumenter: require('isparta'),
//            ignore: ['**/test/**']
//          }),
          'babelify', {plugins: ['babel-plugin-espower']}
        ]
      ]
    },
    reporters: ['mocha', 'coverage'],
//    reporters: ['mocha', 'progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      type: 'lcov'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
