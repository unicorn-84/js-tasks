import { addLeadingZeroToPositiveNumber } from '.';

describe('utils', () => {
  describe('addZero', () => {
    test('should throw an error, if a number is negative', () => {
      expect(() => addLeadingZeroToPositiveNumber(-1)).toThrow(
        'Number must be non-negative'
      );
    });
    test('should add leading zero, if a number less than 10', () => {
      expect(addLeadingZeroToPositiveNumber(5)).toBe('05');
    });
    test('should not add leading zero, if a number greater than 10', () => {
      expect(addLeadingZeroToPositiveNumber(50)).toBe('50');
    });
  });
});
