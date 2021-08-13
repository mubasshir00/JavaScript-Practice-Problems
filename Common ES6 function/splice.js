//splice add or delete element existing array element 
//arr.splice(startIndex, deleteCount, item1, ..., itemN)
// add element in index 1 , and not remove anything , element feb

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1,0,'Feb'); // inserts at index 1
console.log(months);

// [ 'Jan', 'Feb', 'March', 'April', 'June' ]

//replace element 1 element from index 4 , and add "may"
months.splice(4,1,'may');
console.log(months);

//[ 'Jan', 'Feb', 'March', 'April', 'may' ]

months.splice(5,0,"June")
console.log(months)

//[ 'Jan', 'Feb', 'March', 'April', 'may', 'June' ]


var arr=["Monday","Tuesday","Sunday","Friday"];  
arr.splice(2,1,"Wednesday","Thursday")
console.log(arr)