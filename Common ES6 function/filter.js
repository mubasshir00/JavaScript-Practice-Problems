// return age greater than 18
const ages = [32, 33, 16, 40];

const adult = ages.filter((item)=> item>18);
console.log(adult);

//find then city with greater than 3000000
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
const cityArray = cities.filter((item)=>
{
    return item.population> 3000000
})

console.log(cityArray);

//show city name with greater than 3000000 population
const cityName = cities.filter((item)=>item.population>3000000).map((i)=>i.name)

console.log(cityName);


//

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// Get characters with mass greater than 100

const charWithGreaterThan100 = characters.filter((item)=>item.mass>100)
console.log(charWithGreaterThan100);

//Get the name of charachter with mass greater than 100

const charName = characters.filter((item)=>item.mass>100).map((i)=>i.name)
console.log(charName);

//Show the name of male character 

const female = characters.filter((item)=>item.gender==="female").map((i)=>i.name)
console.log(female);