"use strict";
//          100 days of coding challenge ( DAY 17 )
Object.defineProperty(exports, "__esModule", { value: true });
//   Question 01    ---defines a function that accepts multiple hobbies with arguments
function logHobbies(...hobbies) {
    // Loops through one hobby in each array in
    hobbies.forEach(hobby => {
        // logs a statement for each hobby
        console.log(`I Really Enjoy ${hobby}.`);
    });
}
// Now call the function
logHobbies("Reading", "Dancing", "Coding");
//   Question 02    ---Using template literalls to perform task
let idealDay = `My ideal day would involve:
1.Waking up early and take bath.
2.spending a few hours coding on a client project.
3.Ending the day with listening devotional music(Bhajan).`;
// logging multible string to the console
console.log(idealDay);
//   Question 03  ---Refactoring to Arrow Functions
// Orginal Function
function calculateArea(width, height) {
    return width * height;
}
//  Refactored Function
let calculateAreaArrow = (width, height) => width * height;
// Putting a number value..
console.log(calculateAreaArrow(10, 15)); // shows area of triangle
