const students = 
[
    {name: 'Sara', age:24},
    {name: 'John', age:22}, 
    {name: 'Jack', age:27}
]
function compareAge(a,b){
    return a.age - b.age
}
console.log(students.sort(compareAge));