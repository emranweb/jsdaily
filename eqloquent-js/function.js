//function defination

function square(x){
    return x * x;
}

console.log(square(3))



//no parameter function
function makeNoice(){
    console.log('ping');
}
makeNoice();

// power function

function power(base,component){
  //2, 3
   let start = 1;
   for(let i = 0; i<component; i++){
       start = start * base;
   }
   return start;
}

console.log(power(2,10))