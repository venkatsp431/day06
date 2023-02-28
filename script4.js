// write a class to calculate the uber price.

class Uber {
  constructor(pickup, destination, kms) {
    this.pickup = pickup;
    this.destination = destination;
    this.kms = kms;
  }
  price() {
    return this.kms * 10;
  }
}

var mahabalipuram = new Uber("tambaram", "Mahabalipuram", 15);
console.log(mahabalipuram, mahabalipuram.price());
