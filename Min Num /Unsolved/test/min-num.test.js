var expect = chai.expect;

describe('minNum', function () {
  it('returns the lowest number in a given array', function () {
    var arr = [2, 3, -2, 99, 100, 5000, 321, 6000];

    var result = minNum(arr);

    expect(result).to.eql(-2);
  });
});

