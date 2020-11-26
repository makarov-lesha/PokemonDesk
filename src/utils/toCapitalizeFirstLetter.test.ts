import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('ToCapitalizeFirstLetter function', () => {
  test('for input "HELLO Vasya" should return "Hello vasya"', () => {
    const result = toCapitalizeFirstLetter('HELLO Vasya');
    expect(result).toEqual('Hello vasya');
  });
  test('for input "" should return ""', () => {
    const result = toCapitalizeFirstLetter('');
    expect(result).toEqual('');
  });
  test('for input "HHH" should return "Hhh"', () => {
    const result = toCapitalizeFirstLetter('HHH');
    expect(result).toEqual('Hhh');
  });
  test('for input "hhh" should return "Hhh"', () => {
    const result = toCapitalizeFirstLetter('hhh');
    expect(result).toEqual('Hhh');
  });
  test('for no input should return empty string', () => {
    const result = toCapitalizeFirstLetter();
    expect(result).toEqual('');
  });
});
