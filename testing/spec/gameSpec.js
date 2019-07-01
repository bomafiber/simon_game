// describe('defined value', function() {
//   it("should return a defined value", function() {
//     var getAttributes // = getAttributes();
//     expect(getAttributes).toBeDefined();
//   });
//
//   it("should return attributes for green button when passed 1 as argument", function(){
//     var greenAttributes
//     expect(greenAttributes).toBe([audio1, greenquadrant, "greenlite"])
//   })
//
// })

describe('random number is not greater than 4', function() {
  it('generates random number between 1 and 4', function(){
    // randomNumber() = randomNumber;
    var random = randomNumber();
  expect(random).isNotGreaterThan(4)
  })
});
