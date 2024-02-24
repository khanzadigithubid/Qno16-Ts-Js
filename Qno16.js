"use strict";
/*More Guests: You just found a bigger dinner table, so now more
 space is available. Think of three more guests to invite to
 dinner.
• Start with your program from Exercise 15. Add a print statement
 to the end of your program informing people that you found a
 bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitatitsc  on messages, one for each
person in your list.*/
let guestArr = ["Khanzadi", "Sapna", "Ayesha", "Kiran"];
let canNotAttend = "Sapna";
let newGuest = "Kiran";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
//  guestArr.map((item) => (
//     console.log(`Dear ${item}, You are cordinally invited to a Dinner.`)
//     ));
let guestBegin = "Unzila";
guestArr.unshift(guestBegin);
console.log(guestArr);
let middleGuest = "Ashna";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
guestArr.push("Khanzadi");
console.log(guestArr);
guestArr.map((item) => (console.log(`Dear ${item}, You are cordinally invited to a Dinner.`)));
