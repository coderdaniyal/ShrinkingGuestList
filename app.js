var guestList = ["Omair", "Junaid", "Daniyal"];
// for(let elements of guestList){
//     console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
// }
var notPresent = "Daniyal";
var present = "Arbaz";
guestList[2] = present;
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var elements = guestList_1[_i];
    console.log("".concat(elements, ", we'd love to have you join us for dinner tonight!"));
}
console.log("Mr ".concat(notPresent, " will not comming tonight."));
guestList.splice(0, 0, "Farhan", "Naveed", "Imran");
// for(let elements of guestList){
//     console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
// }
var remove_guest = "Sorry I can only invite two people on dinner";
console.log(remove_guest);
var remove_guest1 = guestList.pop();
console.log("".concat(remove_guest1, ", sorry I can't you invite you on a dinner"));
var remove_guest2 = guestList.pop();
console.log("".concat(remove_guest2, ", sorry I can't you invite you on a dinner"));
var remove_guest3 = guestList.pop();
console.log("".concat(remove_guest3, ", sorry I can't you invite you on a dinner"));
var remove_guest4 = guestList.pop();
console.log("".concat(remove_guest4, ", sorry I can't you invite you on a dinner"));
console.log(guestList);
