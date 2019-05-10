// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(par1, par2, cb) {
  return cb(par1, par2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
/*This is possible thanks to closure which gets created when function are nested within one another, like in the case of nestedFunction which resides inside of the myFunction, this inner function as access to is locally scoped variables and parameters within the curly brackets, and also to the lexical environment of both variables and parameters of the outer function(s) scope (in this case of the myFunction scope in which internal gets assigned a value) and of the global object scope(in which external variable is defined), and this scope chain remains intact even after the creation phase of the function is completed and the functions are removed from the execution stack. 
So everytime a function gets invoked it always as access to those variables and parameters, this is possible because a closure stores a reference to those variable for later use even after the outer function as stopped executing or has returned, and because a closure only holds a reference and not the actual value, when the value changes so does the reference inside the closure.*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();