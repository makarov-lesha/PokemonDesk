describe('Example Test', () => {
  test('Should return 2', () => {
    expect(1 + 1).toBe(2);
  });

  describe('Another function', () => {
    test('Should return 4', () => {
      expect(1 + 3).toBe(4);
    });
  });
});
