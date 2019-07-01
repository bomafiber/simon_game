describe('getAttributes should return a defined value',function(){
 it("should return a defined value",function(){
  
 });
});



describe("randon Number should with limits",function(){
  it("should return a random number between 1 and 4",function(){
    let random = randomNumber();
    expect(random).not.toBeGreaterThan(4)
    expect(random).not.LessThan(1)
  });
});
