import Planet from '../src/js/calc.js';

describe('Planet', () => {

test('Should correctly create a Planet object with an age property', () => {
  const planet = new Planet(32);
  expect(planet.age).toEqual(32);
}); //passed

test('should correctly calculate a users age in mercury years', () => {
  const planet = new Planet(32)
  expect(planet.mercuryYears()).toEqual(133.33333333333334);
}); 

})