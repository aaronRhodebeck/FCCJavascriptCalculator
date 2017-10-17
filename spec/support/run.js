var Jasmine = require("jasmine");
var SpecReporter = require("jasmine-spec-reporter").SpecReporter;

var jasmine = new Jasmine();

jasmine.configureDefaultReporter({
  print: function() {}
});

jasmine.addReporter(
  new SpecReporter({
    spec: {
      displayPending: true
    }
  })
);

jasmine.loadConfigFile("./spec/support/jasmine.json");
jasmine.execute();
