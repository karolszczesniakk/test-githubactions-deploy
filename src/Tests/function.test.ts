import foo from '../function'

describe("function", () => {
  it("should multiply 5 by 2", () => {
    expect(foo(5)).toBe(10);
  })
})