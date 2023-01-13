var expect = chai.expect;

describe('maxNum', function () {
  it('returns the largest number in a given array', function () {
    var arr = [2, 3, -2, 99, 100, 5000, 321, 6000];

    var result = minNum(arr);

    expect(result).to.eql(-2);
  });
});

