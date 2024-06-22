// 16 Assignment
let guestList = ["Anus","Aira","Dua","rimsha"];
let dontcome = guestList[0];
console.log(dontcome,"nhi a sakta");
guestList.splice(0,1, "nehal");
console.log("Good News ! We Have found a Bigger Table For Dinner ");
guestList.unshift("Aslam");
let middleIndex : number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0,  "bushra");
console.log("Update List Of Our Guests");
guestList.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me?`));