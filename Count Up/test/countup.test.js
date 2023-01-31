var expect = chai.expect;

before(function() {
  window._temp = {};
  window._temp.log = console.log;
  window.console.log = (function(...args) {
    var values = [];

    var log = function(args) {
      values.push(args);
      window._temp.log(args);
    };

    log.calledWith = function() {
      return values;
    };

    return log;
  })();
});

describe("countUp", function() {
  it("log numbers from `num` up to 10", function() {
    var num = 10;

    countUp(num);

    expect(console.log.calledWith()).to.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]);
  });
});

after(function() {
  console.log = window._temp.log;
  delete window._temp;
});
