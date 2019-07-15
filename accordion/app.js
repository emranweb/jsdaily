// another solution

let singleAccordion = document.querySelectorAll(".single-accordion");

for (let singleItem of singleAccordion) {
    singleItem.addEventListener("click", function () {
        if (!singleItem.classList.contains("active")) {
            let activeAccor = document.querySelector(".single-accordion.active");
            activeAccor.classList.remove("active");
            singleItem.classList.add("active");
        }
    })
}


// Another Solution for accordion

/*
//select all accordion for loop
const singlAccordion = document.querySelectorAll(".single-accordion");
// eact single accordion click event
for (let sinAccor of singlAccordion) {
    sinAccor.addEventListener("click", changeAccordion);
}


function changeAccordion() {
    //add class active
    this.classList.add("active");
    //select all the active accordion
    let activeAccordion = document.querySelectorAll(".single-accordion.active")
    //loop over the accordion and filter the accorion are active
    let activeAcc = Array.from(activeAccordion).filter(i => i != this);
    //loop over the other active accordion and remove class
    activeAcc.forEach(function (activeItem) {
        activeItem.classList.remove("active");
    })
}

*/
