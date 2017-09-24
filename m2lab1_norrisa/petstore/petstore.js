
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    // first version: numAnimals * avgFood = total
	var numAnimals = Number(numAnimals);
	var avgFood = Number(avgFood);
	// debug logging
	//console.log('numAnimals = ' + numAnimals + ' and avgFood = ' + avgFood);
	
	// if either variable is not a number, return -1
	if (Number.isNaN(numAnimals) || Number.isNaN(avgFood)) {
			return -1;
	}
	// if either variable is negative, return -1
	if (numAnimals < 0 || avgFood < 0) {
		return -1;
	}
	// data is OK, so calculate and return the value
    var totalFood = numAnimals * avgFood;
    return totalFood;
}

/**
 * Determines which day of the week had the most number of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    /* AN 9/19 notes
	first, eliminate null/empty immediately [X]
	- read each individual Weekday to get numbers out
	- compare and keep track of current max
	- later, handle ties
	...
	*/
	
	// eliminate empty/null
	if (week == null || week.length == 0) {
		console.log('mostPopularDays() - null or empty input');
		return null;
	}
	// start with a max of zero
	var maxDay = new Weekday("",0);
	
	// first pass -- just try to print out the max
	for (var i=0; i < week.length; i++) {
		// current object is week[i]
		var today = week[i];

		console.log('item= ' + i +
				  ' name= '	+ today.name
				+ ' traffic= ' + today.traffic);
		// is today the new max?
		if (today.traffic > maxDay.traffic) {
			maxDay.traffic = today.traffic;
			maxDay.name = today.name;
		}
		
	}
	console.log('max is ' + maxDay.name + ' ' + maxDay.traffic);
	return maxDay.name;
}

/* test driver function for mostPopularDays
*/
function testPopDays() {
	// set up an array of Weekday objects
	var mon = new Weekday('Monday', 3);
	var tue = new Weekday('Tuesday', 2);
	var wed = new Weekday('Wednesday', 4);
	var thu = new Weekday('Thursday', 1);
	var fri = new Weekday('Friday', 0);

	var days = [mon, tue, wed, thu, fri];
	
	console.log(days);
	// test the function
	// first, compare to real data
	var popular = mostPopularDays(days);
	console.log('expected Wednesday, got ' + popular);
	// test against empty array
	var emptyDays = [];
	popular = mostPopularDays(emptyDays);
	console.log('expected null, got ' + popular);
}

/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

