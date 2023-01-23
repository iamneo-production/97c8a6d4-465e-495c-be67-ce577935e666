// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
<<<<<<< HEAD
<<<<<<< HEAD

=======
process.env.CHROME_BIN = require('puppeteer').executablePath()
>>>>>>> 9e08a6970ae3cd563afff00ddf94d747e100bfae
=======
process.env.CHROME_BIN = require('puppeteer').executablePath()
>>>>>>> a88c45381ebb764c39c26e32c06b6789d4c81c1c
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
<<<<<<< HEAD
<<<<<<< HEAD
      require('karma-coverage-istanbul-reporter'),
=======
      require('karma-coverage'),
>>>>>>> 9e08a6970ae3cd563afff00ddf94d747e100bfae
=======
      require('karma-coverage'),
>>>>>>> a88c45381ebb764c39c26e32c06b6789d4c81c1c
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
<<<<<<< HEAD
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
=======
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    reporters: ['progress'],
>>>>>>> a88c45381ebb764c39c26e32c06b6789d4c81c1c
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
<<<<<<< HEAD
<<<<<<< HEAD
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
=======
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: false
>>>>>>> 9e08a6970ae3cd563afff00ddf94d747e100bfae
=======
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: false
>>>>>>> a88c45381ebb764c39c26e32c06b6789d4c81c1c
  });
};
