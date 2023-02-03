import Planet from '../src/js/calc.js';

describe('Planet', () => {

test('Should correctly create a Planet object with an age property', () => {
  const planet = new Planet(32);
  expect(planet.age).toEqual(32);
}); //passed 100% line coverage

test('Should correctly calculate a users age in Mercury years', () => {
  const planet = new Planet(32)
  expect(planet.mercuryYears()).toEqual(133.33333333333334);
}); //passed but not full line coverage without below test to account for 0

test("Should return 0 if age is 0", () => {
  const planet = new Planet(0);
  expect(planet.mercuryYears()).toEqual(0);
});

test('Should correctly calculate a users age in Venus years', () => {
  const planet = new Planet(32);
  expect(planet.venusYears()).toEqual(51.612903225806456);
}); //passed but not full line coverage without below test to account for 0

test("Should return 0 if age is 0", () => {
  const planet = new Planet(0);
  expect(planet.venusYears()).toEqual(0);
});

test('Should correctly calculate a users age in Mars years', () => {
  const planet = new Planet(32);
  expect(planet.marsYears()).toEqual(51.612903225806456);
});

})