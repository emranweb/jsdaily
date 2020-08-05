const ar = [1, 2, 3];


//array prototype map
let newAr = ar.map(x => x * 2);
console.log(newAr)



//array prototype filter
const newFilter = ar.filter(x => x % 2 === 1);
console.log(newFilter)


//array prototype reduce
const sum = ar.reduce((accoumulation, current) => {
    return accoumulation + current;
    console.log(accoumulation);
    console.log(current)
});

console.log(sum)


// array prototype find
const odd = ar.find(x=>x%2===1);
console.log(odd)