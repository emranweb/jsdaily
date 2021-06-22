//normal funciton
function number() {
  return 10;
}
console.log(number());

// function with parameter

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 4));

// arrow funciton

const number1 = () => {
  return 30;
};

console.log(number1());

const sum2 = (a, b) => {
  return a + b;
};

console.log(sum2(4, 5));

//arrow function short form

const sum3 = (a, b) => a + b;
console.log(sum3(4, 8));

const person = {
  name: "emran",
  brothers: ["shahin", "sabbir", "alamin", "Anamul"],
  showBrothers: function () {
    this.brothers.forEach((a) => {
      console.log(a);
    });
  },
};

person.showBrothers();
