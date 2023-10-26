////////////////////////////////
// Easy Going
////////////////////////////////
for (i = 1; i <= 20; i++) {
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (i = 0; i <= 200; i += 2) {
    console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (i = 1; i <= 100; i += 1) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001;
wolfy[3] = 'Gotham City';
dart.push('Hawkins');
wolfy.splice(0, 1, 'Gameboy');

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (const turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));

// 1.
// favMovies.sort(); // yes
// 2.
favMovies.pop();
// 3.
favMovies.push('Guardians of the Galaxy');
// 4.
favMovies.reverse();
// 5.
favMovies.shift();
// 6.
favMovies.unshift(); // length of array
// 7.
favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar'); // yes
// 8. + 9.
const lastHalfOfFavMovies = favMovies.slice((favMovies.length / 2)) // no
console.log(lastHalfOfFavMovies);
// 10.
console.log(favMovies);
// 11.
console.log(favMovies.indexOf('Fast and Furious')); // we get -1
// 12.
// No; the array is immutable, but its elements remain mutable, making const arrays more sturdy

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////