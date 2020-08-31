
function power (base, componet){
  let result=1;

   for(let i =0 ; i<componet; i++){
      result*= base;
   };

   return result;
}

let a = power(2,10);
console.log(a);


//recurstion
function power2(base,componet){
    if(componet ==1){
        return base;
    }else{
        return x * (base, componet-1);
    }

}


let b = power2(2,3);
console.log(b);