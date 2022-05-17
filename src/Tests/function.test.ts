import foo from '../function'

describe("function", () => {
  it("should multiply 5 by 3", () => {
    expect(foo(5)).toBe(15);
  })
})