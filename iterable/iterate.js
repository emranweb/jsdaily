const range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};


const person= ['A',"B","C","D"]

const item  = person[Symbol.iterator]();

while(true){
  let a = item.next();
  if(a.done){
    break;
  }
}
