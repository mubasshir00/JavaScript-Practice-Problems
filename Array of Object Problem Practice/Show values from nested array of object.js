//[ 'a', 'b', 'c', 'd' ]
//[ 102, 107 ]
var arr = [
  {
    product: "a",
    weight: 102,
    description: {
      label: {
        name: "a",
      },
    },
  },
  {
    product: "b",
    weight: 105,
    description: {
      label: {
        name: "b",
      },
    },
  },
  {
    product: "c",
    weight: 107,
    description: {
      data: {
        name: "c",
      },
    },
  },
  {
    product: "d",
    weight: 109,
    description: {
      label: {
        name: "d",
      },
    },
  }
];
// const label = []
const label = arr.map(item=>item.description).map(i=>i.label || i.data).map(j=>j.name)
console.log(label);

const weight = arr.filter(item=> item.product === "a" || item.product==="c").map(i=>i.weight);
console.log(weight);
