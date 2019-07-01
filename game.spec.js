
describe('getAttributes should return a defined value',function(){
 it("should return a defined value",function(){
   var getattributes = function getAttributes(){
     return getattributes;
   }
     expect(getattributes).toBeDefined();
 });
});



describe("random Number should with limits",function(){
  it("should return a random number between 1 and 4",function(){
    var random = function randomNumber(){
      return random
    };
    expect(random).not.toBeGreaterThan(4)
    expect(random >= 20).toBeFalsy() // use ".toBeTruthy" for negative test
    expect(random).not.toBeLessThan(1)
  });
});
