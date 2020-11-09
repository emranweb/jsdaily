// check the how many vowel in an sentance
/*
->Input a sentance 
->split the sentance to each text and store array
->loop over the array and check the vowel 
*/

let counter = 0;
function vowelChecker (sentance){
    const senArr = sentance.split("");
    senArr.forEach(item=>{
        if(item==='e'|| item === "a" || item ==="i" || item ==="o" || item === "u"){
          counter +=1;
        }
    })
    console.log(counter)
}

vowelChecker("i am emran and i am web developer");
