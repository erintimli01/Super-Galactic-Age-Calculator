import Planet from '../src/js/planet.js';

describe('Planet', () => {

test('Should correctly create a Planet object with an age property', () => {
  const planet = new Planet(32);
  expect(planet.age).toEqual(32);
}); //passed 100% line coverage

test('Should correctly calculate a users age in Mercury years', () => {
  const planet = new Planet(32)
  expect(planet.mercuryYears()).toEqual(133.33333333333334);
}); //passed but not full line coverage without below test to account for 0

test('Should return 0 if age is 0', () => {
  const planet = new Planet(0);
  expect(planet.mercuryYears()).toEqual(0);
});

test('Should correctly calculate a users age in Venus years', () => {
  const planet = new Planet(32);
  expect(planet.venusYears()).toEqual(51.612903225806456);
}); //passed but not full line coverage without below test to account for 0

test('Should return 0 if age is 0', () => {
  const planet = new Planet(0);
  expect(planet.venusYears()).toEqual(0);
});

test('Should correctly calculate a users age in Mars years', () => {
  const planet = new Planet(32);
  expect(planet.marsYears()).toEqual(17.02127659574468);
}); //passed but not full line coverage without below test to account for 0

test('Should return 0 if age is 0', () => {
  const planet = new Planet(0);
  expect(planet.marsYears()).toEqual(0);
}); 

test('Should correctly calculate a users age in Jupiter years', () => {
  const planet = new Planet(32);
  expect(planet.jupiterYears()).toEqual(2.69814502529511);
}); //passed but not full line coverage without below test to account for 0

test('Should return 0 if age is 0', () => {
  const planet = new Planet(0);
  expect(planet.jupiterYears()).toEqual(0);
});

test('Should return difference of Earth years', () => {
  const planet = new Planet(32, " ", " ", " ", " ", 10);
  expect(planet.pastEarthYears()).toEqual(22);
});


test('Should calculate how many years have passed on Mercury since a past birthday', () => {
  const planet = new Planet(56, " ", " ", " ", " ", 43, " ", " ");
  expect(planet.mercuryPast()).toEqual(54.16666666666667);
});

test('Should calculate how many years have passed on Venus since a past birthday', () => {
  const planet = new Planet(56, " ", " ", " ", " ", 43);
  expect(planet.venusPast()).toEqual(20.967741935483872);
}); 

test('Should calculate how many years have passed on Mars since a past birthday', () => {
  const planet = new Planet(56, " ", " ", " ", " ", 43);
  expect(planet.marsPast()).toEqual(6.914893617021277);
});

test('Should calculate how many years have passed on Jupiter since a past birthday', () => {
  const planet = new Planet(56, " ", " ", " ", " ", 43);
  expect(planet.jupiterPast()).toEqual(1.0961214165261384);
});

test('Should return difference of future age from age', () => {
  const planet = new Planet(10, " ", " ", " ", " ", " ", " ", " ", " ", " ", 32);
  expect(planet.futureEarthYears()).toEqual(22);
});

//WIP
test('Should calculate how many years until next birthday on Mercury', () => {
  const planet = new Planet(56, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 61, " ", " ");
  expect(planet.mercuryFuture()).toEqual(20.833333333333336);
});

test('Should calculate how many years until next birthday on Venus', () => {
  const planet = new Planet(56, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 61, " ", " ");
  expect(planet.venusFuture()).toEqual(8.064516129032258);
});

test('Should calculate how many years until next birthday on Mars', () => {
    const planet = new Planet(56, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 61, " ", " ");
    expect(planet.marsFuture()).toEqual(2.6595744680851063);
});

test('Should calculate how many years until next birthday on Jupiter', () => {
  const planet = new Planet(56, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 61, " ", " ", " ");
  expect(planet.jupiterFuture()).toEqual(0.42);
});

});