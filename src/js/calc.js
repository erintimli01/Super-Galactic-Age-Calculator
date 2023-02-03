export default class Planet {
  constructor(age, mercuryAge, venusAge) {
  this.age = age;
  this.mercuryAge = mercuryAge;
  this.venusAge = venusAge;

  // thisMercuryYears = Math.floor(this.age / .24);
  }

mercuryYears() {
  let mercuryAge = this.age / .24;
  if((this.age !== 0) && (mercuryAge = this.age / .24)) {
    return mercuryAge;
  } else {
    return this.age;
  }
}

venusYears() {
  let venusAge = this.age / .62;
  if((this.age !== 0) && (venusAge = this.age / .62)) {
    return venusAge;
  } else {
    return this.age;
  }
}



}

  

