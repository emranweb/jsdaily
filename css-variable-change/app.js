const color = document.querySelector(".color");

color.addEventListener("input", function(e){
    document.documentElement.style.setProperty("--primary", e.target.value);
})


const main = document.querySelector(".header-2");


window.addEventListener("scroll", function(){
   console.log(main.scrollTop);
})

