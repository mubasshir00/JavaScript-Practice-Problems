// array.slice(startIndex , endIndex)
// slide methed returns an array in between range
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

//show array from index 2 
const newArray1 = animals.slice(2);
console.log(newArray1)

//show array from index 1,3

const newArray2 = animals.slice(1,4);
console.log(newArray2)

//show last two element
const newArray3 = animals.slice(-2);
console.log(newArray3)

//show name from email

const email = "johnson@gmail.com"
const name = email.slice(0,email.indexOf("@"));
console.log(name)