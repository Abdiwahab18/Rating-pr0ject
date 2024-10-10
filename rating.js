import { cart } from "./carts.js";

let cartHtml='';
cart.forEach((carts)=>{
  cartHtml+=
  `
   <div class="container">
      <div class="start-and-que">
       ${carts.logo}
        <h2>  ${carts.question}</h2>
      </div>
     
      <div class="item">
        
       
        <div class="text">
          <p> ${carts.text}
          </p>
        </div>
       
    
        <p class="btn-p">
          <button class="btn">1</button>
          <button class="btn">2</button>
          <button class="btn">3</button>
          <button class="btn">4</button>
          <button class="btn">5</button>
        </p>
    
      
        <a  >  <button  class="Submit  js-submit" >Submit</button></a>
      </div>
      </div>
  
  `
});
document.querySelector('.js-main').innerHTML=cartHtml;


let myRate;

document.querySelectorAll('.btn')
.forEach(item=>{
    item.addEventListener('click',()=>{
myRate=Number(item.innerHTML);
console.log(myRate)
    })
  })

  

  let sumb=document.querySelector('.js-submit');
  sumb.addEventListener('click',()=>{
localStorage.setItem('myRate',myRate);
location.href="rating-thank-you.html"
  })
