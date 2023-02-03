export default class Planet {
  constructor(age, mercuryAge, venusAge, marsAge, jupiterAge, mercPast) {
    this.age = age;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.mercPast = mercPast;
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

pastEarth {}

// mercuryPast() {
//   let mercPast = ((this.age - this.age) /.24);
//   if(this.age !== 0) {
//     return mercPast;
//   }
// }

}






  

