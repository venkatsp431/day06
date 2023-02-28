// Write a “person” class to hold all the details.

class Person {
  constructor(name, qualification, currentProfile, birthYr) {
    this.name = name;
    this.qualification = qualification;
    this.currentProfile = currentProfile;
    this.birthYr = birthYr;
  }
  age() {
    return 2023 - this.birthYr;
  }
}
var venkat = new Person("Venkat", "BE", "Web Developer", 1999);
console.log(venkat, venkat.age());
