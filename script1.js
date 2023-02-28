// 1. Class - Movie

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(arr) {
    var res = arr.filter((ele) => ele.rating === "PG");
    return res;
  }
}
var casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
var titanic = new Movie("Titanic", "Eon Productions", "PG");
var shutterIsland = new Movie("Shutter Island", "Eon Productions", "PG");
var batman = new Movie("Batman", "Eon Productions", "R");

console.log(casinoRoyale);
console.log(titanic);

var d = [casinoRoyale, titanic, shutterIsland, batman];
Movie.getPG([casinoRoyale, titanic, shutterIsland, batman]);
console.log(Movie.getPG([casinoRoyale, titanic, shutterIsland, batman]));
