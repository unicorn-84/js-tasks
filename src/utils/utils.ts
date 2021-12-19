export const addLeadingZeroToPositiveNumber = (num: number): string | null => {
  if (num < 0) throw new RangeError('Number must be non-negative');
  return num < 10 ? `0${num}` : `${num}`;
};
