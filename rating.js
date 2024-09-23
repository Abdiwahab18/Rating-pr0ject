// import { txtElmant } from "./thank-you.js";
// import { thnkcart } from "./thank-you.js";
//  export let value1;

let cart=[
  {
    logo:'<button class="btn  start-logo"><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg></button>',
    question:'how did we do?',
    text:' Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!',
    // button:{
    //  btn1:1,
    //  btn2:2,
    //  btn3:3,
    //  btn4:4,
    //  btn5:5
    // },
  }
];

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
    
      
        <a href="rating-thank-you.html" >  <button  class="Submit  js-submit" >Submit</button></a>
      </div>
      </div>
  
  `
});
document.querySelector('.js-main').innerHTML=cartHtml;




// document.querySelectorAll('.btn')
//   .forEach(item=>{
//     item.addEventListener('click',()=>{
// value1=Number(item.innerHTML);
// return value1
//     })
//   })
