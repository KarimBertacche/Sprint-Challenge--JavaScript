# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.
The biggest difference between the 2 array methods is that the '.map()' method iterates over each element of any given array and returns a new array without altering the original array whereas the '.forEach()' mutates the original array after computing all iterations.

2. What is the difference between a function and a method?
A function can be declared anywhere as they are first class function so they can also be passed as parameters and nested within other functions whereas a method is a function that resides within an object and becomes the method of that object. 

3. What is closure?
Closure is defined as what variables and parameter are available within a function nested or invoked within another function scope, this function as access to is local scope variables and also to all the variables of outer function scope and global scope, even after the function as return and being executed, a closure retains a reference in memory to the lexical environment outside of his scope and can go at any time to fish those values and consume them, also because it only holds a reference to the original value, if the original value changes so does the closure reference.

4. Describe the four rules of the 'this' keyword.
The 'this' keyword as 4 different types of bindings 
1- New binding 
This happens when using the new keyword to create a new object from a function constructor/class, the new keyword creates within the function constructor a new empty object and assigns it to the this keyword, and at the end of the function constructor it return the this keyword which is now an object populated with key of the function constuctor and the values passed in within parenthesis when the new keyword was used, so in this case the 'this' keyword refers to the newly created object.
2- Global binding
This happens when a function that is invoked uses the 'this' keyword but no dot notation is used during the invokation of the function, so the 'this' now points to the global object 
3- Implicit binding
This happens when the 'this' keyword is used within an object method, in this case the 'this' keyword refers to the object itself.
4- Explicit binding
This happens when a specific context is assigned to the 'this' keyword, this is achieved using the object methods .call(this, arg1, arg2), .apply(this, []), .bind(this), the difference between those methods is that the .call() method takes as a first argument the context to be assigned to the this keyword and a set of arguments separated by commas, the .apply() method takes as a first argument the context to assign to the 'this' keyword - same as with the .call() method - with the only difference that the second argument is an array of arguments, whereas the .bind() method return a new instance of the object when used  

5. Why do we need super() in an extended class?
Using super() is the same as for the older prototype syntax saying Parent.call(this, attributes), which binds to the child the attribute of the parent constructor from which it inherit/extends.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
