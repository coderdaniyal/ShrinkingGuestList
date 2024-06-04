let guestList: string[] = ["Omair", "Junaid", "Daniyal"];

// for(let elements of guestList){
//     console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
// }

let notPresent: string = "Daniyal" 
let present: string = "Arbaz"

guestList[2] = present

for(let elements of guestList){
    console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
}

console.log(`Mr ${notPresent} will not comming tonight.`)

guestList.splice(0, 0, "Farhan", "Naveed", "Imran")

// for(let elements of guestList){
//     console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
// }

let remove_guest = "Sorry I can only invite two people on dinner"
console.log(remove_guest)

let remove_guest1 = guestList.pop()
console.log(`${remove_guest1}, sorry I can't you invite you on a dinner`)

let remove_guest2 = guestList.pop()

console.log(`${remove_guest2}, sorry I can't you invite you on a dinner`)

let remove_guest3 = guestList.pop()

console.log(`${remove_guest3}, sorry I can't you invite you on a dinner`)

let remove_guest4 = guestList.pop()

console.log(`${remove_guest4}, sorry I can't you invite you on a dinner`)

console.log(guestList)
