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
const lastHalfOfFavMovies = favMovies.slice((Math.floor(favMovies.length / 2))) // no
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
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert
whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'), 1);
// Change "Neff" to "No One"
for (array of whereIsWaldo) {
    if (array.includes('Neff')) {
        array[array.indexOf('Neff')] = 'No One';
        break
    }
};
// Access and console.log "Waldo"
const findWaldo = function(array) { 
    // checks for Waldo
    if (array.includes('Waldo')) {
        console.log(array.splice(array.indexOf('Waldo'), 1));
    // checking nested arrays, if any
    } else if (array.some(Array.isArray)) {
        array.forEach(element => {
            if (Array.isArray(element)) {
                findWaldo(element);
            }
        })
    }
}
findWaldo(whereIsWaldo);

////////////////////////////////
//  Excited Kitten
////////////////////////////////
const messages = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
for (i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        const message1 = messages[Math.floor(Math.random() * 3)];
        console.log(message1);
    }
    console.log('Love me, pet me! HSSSSSS!');
} 

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
console.log(nums[Math.floor(nums.sort().length / 2)]);