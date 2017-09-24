/*
WEB 215
m2lab
PUT YOUR NAME HERE
9/26/17
*/


// QUESTION 1
// Answer Q1 here by listing the URL of your remixed Thimble project.



// QUESTION 2
// functions used in Q2
function singBottleSong(amount, drink) {
  // input: an amount of bottles (a number) and a drink name (a string)
  // output: none
  // side effect: the function prints the full text of the song to the console
  // HINT: use a for loop
  // HINT: check for bad input (for example a non-number for amount)

  // example output if you called singleBottleSong(1, 'beer')
  // don't worry about plural/singlar of bottles
  console.log('1 bottles of beer on the wall');
  console.log('1 bottles of beer');
  console.log('take one down, pass it around');
  console.log('0 bottles of beer on the wall');
}

// test driver for q2
function q2_test() {
  console.log('This should sing the 99 bottles of beer song');
  console.log('---------START SONG----------')
  singBottleSong('99','beer');
  console.log('--------- END SONG ----------')
}

// QUESTION 3
// functions used for q3
function singleBottleSong2(song) {
  // input: a Song object
  // output: non-number
  // side effect: as in Q2, the function prints the song text to the log
  // HINT: very similar to Q2 but you have to unpack the Song object's data

}

// test driver for q3
function q3_test() {
  var bottleSong = new Song(3, 'bottles', 'beer', 'floor');
  console.log('Sings about 3 bottles of tequila on the floor');
  singBottleSong2(bottleSong);

  var coffeeSong; // write the constructor call here
  console.log('Sings about 5 cups of coffee on the table');
  singBottleSong2(coffeeSong);

}

// prototype function for Song object
function Song(amount, container, beverage, location) {
  this.amount = amount;
  this.container = container;
  this.beverage = beverage;
  this.locaiton = location;
}


// QUESTION 4
// functions for q4
function isPasswordValid(pw) {
  // input: a string, the password
  // output: true if the password matches, false otherwise
  actualPassword = 'rosebud';
 // todo: finish the function
  return false;
}

// test driver for q4
function q4_test() {
  // todo: write a test driver
  // hint: be sure to test for true and false
}

// QUESTION 5
// functions for q5
function checkPasswordStrength(pw) {
  // input: a string, the password
  // output: a string from 'strong', 'medium', or 'weak'
  // hints: see question definition in HTML
  // also see W3Schools JS 'string methods' and 'regular expressions'

  // if pw contains at least one number, or at least one piece of punctuation,
  // then the password strength is 'medium'

  // if pw contains both of the above, password strength is 'strong'

  // otherwise, password strength is 'weak'
  // todo: finish the function
  return 'weak';
}

// test driver for q5
function q5_test() {
  // todo: write a test driver
  // hint: be sure to test for all 3 options
}
