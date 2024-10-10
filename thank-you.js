import { thnkcart,cart} from "./carts.js";


let thankcartHtml=' ';
thnkcart.forEach((item)=>{
  thankcartHtml+= `
    <div class="container">
    <div class="item">
    ${item.image}
      </button>
       <p class="rating-text js-rating-text"></p>
   <h2>${item.thank}</h2>

   <p class="p-text"> ${item.textP}</p>
    </div>
  </div>
  `
});
console.log(thankcartHtml);
document.querySelector('.js-main-you').innerHTML=thankcartHtml;

let ratingText=localStorage.getItem('myRate');
document.querySelector('.js-rating-text').innerHTML=`you rating is ${ratingText} of 5`;