// delete class property from object

var student = {
    name:'Abc Xyz',
    class: 'VI',
    rollno : 12
}

const deleteProperty = (student) =>{
        if(student.hasOwnProperty('class')){
            delete student.class
    }
    return student
}
console.log(deleteProperty(student));