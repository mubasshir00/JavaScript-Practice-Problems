// sum of all array
var arr = [1, 3, 5, 7];
const reducer = (sum,currentVal) =>{
    return sum+currentVal;
}
console.log(arr.reduce(reducer,10));

//reducer of object
const lineItems = [
  { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
  { description: 'Cheese', quantity: 0.5, price: 15, total: 2.5 },
  { description: 'Butter', quantity: 2, price: 6, total: 12 }
];

const reducerSum = (sum,currentVal) =>{
    return sum+currentVal;
}
const sumOfQuantity = lineItems.map((item)=>item.quantity).reduce(reducerSum,0)

console.log(sumOfQuantity);

//sumOfPrice

const sumOfPrice = lineItems.map((item)=>item.price).reduce(reducer,0);
console.log(sumOfPrice);

//find maximum

const reducerForMax = (max , currentVal) => {
    return max > currentVal ? max : currentVal
}
const maxOfPrice = lineItems.map((item)=>item.price).reduce(reducerForMax,0)
console.log(maxOfPrice);


//return a new array to concat all subarray
const arr1 = [0, 1, 2, [3, 4]];

console.log([].concat(...arr1))

const arr2 = [3,4,1,[[[4,2]]]];
const concatArray = arr2.reduce((acc,currentVal)=>acc.concat(currentVal),[])
console.log(concatArray);
//[ 3, 4, 1, [ [ 4, 2 ] ] ]