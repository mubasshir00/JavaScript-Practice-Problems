//https://www.w3resource.com/javascript-exercises/javascript-object-exercise-4.php

const printMessage = ( library) =>{
    let res ;
    library.forEach(element => {
        const {author,title,readingStatus} = element
        if(readingStatus){
            console.log(`Already Read ${title} by ${author}`);
        }else {
            console.log(`You need to read ${title} by ${author}`);
        }
    });
}

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
printMessage(library);