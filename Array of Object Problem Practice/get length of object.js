const getLengthOfObject = (student) =>{
    return Object.keys(student).length
}

var student = {
    name:'Abc Xyz',
    class: 'VI',
    rollno : 12,
}

console.log(getLengthOfObject(student));