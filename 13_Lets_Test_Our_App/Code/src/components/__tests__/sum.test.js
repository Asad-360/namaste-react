import sum from '../sum';
// test(description , implementation);
test("Sum function should calculate the sum of two numbers.",()=>{
    const result = sum(2,3);
    // Assertion
    expect(result).toBe(6);
});