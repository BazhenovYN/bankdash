import { maskCardNumber } from './format';

type TestData = {
  cardNumber: string;
  template: 'start' | 'middle' | 'end';
  expected: string;
};

describe('maskCardNumber', () => {
  test.each<TestData>([
    { cardNumber: '11112222333344444', template: 'start', expected: '**** **** 4444' },
    { cardNumber: '11112222333344444', template: 'middle', expected: '1111 **** **** 4444' },
    { cardNumber: '11112222333344444', template: 'end', expected: '1111 ****' },
  ])('$cardNumber -> $expected', ({ cardNumber, template, expected }) => {
    const maskedNumber = maskCardNumber(cardNumber, template);
    expect(maskedNumber).toBe(expected);
  });
});
