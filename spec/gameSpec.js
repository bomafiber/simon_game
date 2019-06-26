

describe("getAttributes", function(){
  it("returns a defined value", function(){
    let attributes = getAttributes(1)
    expect(attributes).toBeDefined()
  })

  it("returns attributes for green button when passed 1 as argument", function(){
    let greenAttributes = getAttributes(1)
    expect(greenAttributes).toBe([audio1, greenquadrant, "greenlite"])
  })
})
