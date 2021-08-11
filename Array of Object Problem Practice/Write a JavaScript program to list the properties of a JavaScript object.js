//Write a JavaScript program to list the properties of a JavaScript object
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

const listProperty = (student) =>{
    return Object.keys(student)
}
var student = {
    name:'Abc Xyz',
    class: 'VI',
    rollno : 12
}
console.log(listProperty(student));