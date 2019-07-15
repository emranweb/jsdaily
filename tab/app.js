const list = document.querySelectorAll('.tab-list a');

for (let item of list){
    item.addEventListener("click", tab);
}
function tab(){
    let a  = this.getAttribute("href").slice(1);
    console.log(a)
    
    let b =document.querySelectorAll('.tab-content');
    let c = Array.from(b);
   let x= c.filter(item=>{
      return (item.getAttribute('id')=== a);
    });
    y= document.querySelector('.tab-content.active');
    y.classList.remove("active");
    x[0].classList.add('active');
}