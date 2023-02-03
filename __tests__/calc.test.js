import Planet from '../src/js/calc.js';

describe('Planet', () => {

test('Should correctly create a Planet object with an age property', () => {
  const planet = new Planet(32);
  expect(planet.age).toEqual(32);
})

})