import Planet from '../src/js/calc.js';

describe('Planet', () => {

test('Should correctly create a Planet object with an age property', () => {
  const planet = new Planet(32);
  expect(planet.age).toEqual(32);
}); //passed

test('should correctly calculate a users age in mercury years', () => {
  const planet = new Planet(32)
  expect(planet.mercuryYears()).toEqual(133.33333333333334);
}); //passed but not full line coverage without below test

test("should return 0 if age is 0", () => {
  const planet = new Planet(0);
  expect(planet.mercuryYears()).toEqual(0);
});

})