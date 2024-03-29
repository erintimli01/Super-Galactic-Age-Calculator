export default class Planet {
  constructor(age, mercuryAge, venusAge, marsAge, jupiterAge, pastAge, mercPast, venuPast, marPast, jupiPast, futureAge, futureYears, mercFuture, venuFuture, marfuture, jupifuture) {
    this.age = age;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.pastAge = pastAge;
    this.mercPast = mercPast;
    this.venuPast = venuPast;
    this.marPast = marPast;
    this.jupiPast = jupiPast;
    this.futureAge = futureAge;
    this.futureYears = futureYears;
    this.mercFuture = mercFuture;
    this.venuFuture = venuFuture;
    this.marfuture = marfuture;
    this.jupifuture = jupifuture;

  
}

mercuryYears() {
  let mercuryAge = this.age / .24;
  if(this.age !== 0) {
    return mercuryAge;
  } else {
    return this.age;
  }
}

venusYears() {
  let venusAge = this.age / .62;
  if(this.age !== 0) {
    return venusAge;
  } else {
    return this.age;
  }
}

marsYears() {
  let marsAge = this.age / 1.88;
  if(this.age !==0 ) {
    return marsAge;
  } else { 
    return this.age;
  }
}

jupiterYears() {
  let jupiterAge = this.age / 11.86;
  if(this.age !== 0) {
    return jupiterAge;
  } else {
    return this.age
  }
}

pastEarthYears() {
  let pastYears = this.age - this.pastAge;
  return pastYears
}

mercuryPast() {
  let mercPast = ((this.age - this.pastAge) /.24);
    return mercPast;
  }

venusPast() {
  let venuPast = ((this.age - this.pastAge) /.62);
  return venuPast;
}

marsPast() {
  let marPast = ((this.age - this.pastAge) /1.88);
  return marPast;
}

jupiterPast() {
  let jupiPast = ((this.age - this.pastAge) /11.86)
  return jupiPast;
}

futureEarthYears() {
  let futureYears = this.futureAge - this.age;
  return futureYears;
}

mercuryFuture() {
  let mercFuture = ((this.futureYears - this.age) /.24);
  return mercFuture
  }

venusFuture() {
  let venuFuture = ((this.futureYears - this.age) /.62);
  return venuFuture;
}

marsFuture() {
  let marFuture = ((this.futureYears - this.age) /1.88);
  return marFuture;
  }

jupiterFuture() {
  let jupiFuture = ((this.futureYears - this.age) /11.86);
  return jupiFuture;
  }

}


