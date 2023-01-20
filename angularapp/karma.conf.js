// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
<<<<<<< HEAD

=======
process.env.CHROME_BIN = require('puppeteer').executablePath()
>>>>>>> 9e08a6970ae3cd563afff00ddf94d747e100bfae
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
<<<<<<< HEAD
      require('karma-coverage-istanbul-reporter'),
=======
      require('karma-coverage'),
>>>>>>> 9e08a6970ae3cd563afff00ddf94d747e100bfae
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
<<<<<<< HEAD
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/angularapp'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
=======
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    reporters: ['progress'],
>>>>>>> 9e08a6970ae3cd563afff00ddf94d747e100bfae
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
<<<<<<< HEAD
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
=======
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: false
>>>>>>> 9e08a6970ae3cd563afff00ddf94d747e100bfae
  });
};
