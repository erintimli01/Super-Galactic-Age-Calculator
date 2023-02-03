export default class Planet {
  constructor(age, mercuryAge) {
  this.age = age;
  this.mercuryAge = mercuryAge;

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



}

  

