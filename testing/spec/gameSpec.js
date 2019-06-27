// describe('defined value', function() {
//         it("should return a defined value", function() {
//           let attributes = getAttributes();
//           expect(attributes).toBeDefined();
//         });
//
//
//   it("should return attributes for green button when passed 1 as argument", function(){
//     let greenAttributes = getAttributes(1);
//     expect(greenAttributes).toBe([audio1, greenquadrant, "greenlite"])
//   })
//
// })


describe('description', function() {
  it("generates random number between 1 and 4", function(){
  var random = randomNumber();
  expect(random).isNotGreaterThan(4)
})

});
