var expect = chai.expect;

describe("add", function() {
  it("should add two numbers", function() {
    var num1 = 10;
    var num2 = 24;

    var result = add(num1, num2);

    expect(result).to.eql(34);
  });
});

describe("subtract", function() {
  it("should subtract the second number from the first number", function() {
    var num1 = 100;
    var num2 = 91;

    var result = subtract(num1, num2);

    expect(result).to.eql(9);
  });
});

describe("multiply", function() {
  it("should multiply the two numbers", function() {
    var num1 = 7;
    var num2 = 70;

    var result = multiply(num1, num2);

    expect(result).to.eql(490);
  });
});

describe("divide", function() {
  it("should divide the first number by the second number", function() {
    var num1 = 33;
    var num2 = 11;

    var result = divide(num1, num2);

    expect(result).to.eql(3);
  });
});

describe("addSubtract", function(){
  it("should add first two numbers, then subtract the third number", function(){
    var num1 = 45;
    var num2 = 20;
    var num3 = 30;

    var result1 = add(num1, num2);
    console.log(result1)
    var finalResult = subtract(result1, num3);

    expect(finalResult).to.eql(35);
    console.log(finalResult)
  });
});

describe("addDivide", function(){
  it("should add first two numbers, then divide by the third number", function (){
    var num1 = 20;
    var num2 = 30;
    var num3 = 10;

    var result1 = add (num1, num2);
    var finalResult = divide(result1, num3);
    console.log(finalResult)

    expect(finalResult).to.eql(5)
  });
})