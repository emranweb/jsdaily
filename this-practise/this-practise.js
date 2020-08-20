class ThisPractise{
    constructor(){
        this.age = 40;
      //  this.buttonClick = this.button1.bind(this)
    }

    button1(){
        console.log("button1");
     }
    

    button4=()=>{
       console.log(this.age);
    }


    buttonClick(btn){
        btn.addEventListener("click", this.button1);
    }
    
}


let abc = new ThisPractise();

abc.buttonClick(document.querySelector(".btn1"));