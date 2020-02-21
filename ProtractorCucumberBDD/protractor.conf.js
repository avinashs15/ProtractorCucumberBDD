exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'features/test.feature'
  ],
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'     
  },
  multiCapabilities: [{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: ['disable-infobars']
        }
    }]
}
