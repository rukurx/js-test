module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
        'mocha',
        'browserify',
        'fixture'
    ],
    files: [
//        'lib/**/*.js', // ライブラリを先に読み込む
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
          'babelify', {plugins: ['babel-plugin-espower']},
          require('browserify-istanbul')({ // babelifyの後に書く
            instrumenter: require('isparta'),
            ignore: ['**/test/**']
          })
        ]
      ]
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      type: 'lcov'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
//    browsers: ['Chrome'],
    singleRun: false
  });
};
