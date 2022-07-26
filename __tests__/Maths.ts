import { randomNumber } from '../src/utils/Maths';

describe('Math functions', () => {
  it('Should return number between 0 and 9', () => {
    expect(randomNumber()).toBeLessThanOrEqual(9);
  });
});
