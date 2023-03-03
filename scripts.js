
let myCards = document.querySelector('.cards');
let theIcon= document.querySelector('.icon');
let myView= document.querySelector('.view');
myView.style.display='none';
let xCancel= document.querySelector('.cancel');
let myIcon = document.querySelector('.myicon');
let myDropdown = document.querySelector('.dropdown');
myDropdown.style.display='none'
let products=[];
let counter;
let myBTN;
let myBTNV;


theIcon.addEventListener('click',()=>{
getMenu();
})

xCancel.addEventListener('click',()=>{
myView.style.display='none';
})

function getArray(){
    products.push({ product_name:'Bag',product_price:'$2000',product_image:'images/1.jpg',added_to_cart:true,})
    products.push({ product_name:'Candle',product_price:'$300',product_image:'images/2.jpg',added_to_cart:false,})
    products.push({ product_name:'Sunflower',product_price:'$100',product_image:'images/3.jpg',added_to_cart:false,})
    products.push({ product_name:'Fork',product_price:'$200',product_image:'images/4.jpg',added_to_cart:false,})
    products.push({ product_name:'Chair',product_price:'$500',product_image:'images/5.jpg',added_to_cart:false,})
    products.push({ product_name:'Spoon',product_price:'$150',product_image:'images/6.jpg',added_to_cart:false,})
}

function displayProducts(){
       let myBox = '';
       let myList = '';
       counter=0;

    if(localStorage.getItem('products')!=null){
        products = JSON.parse(localStorage.getItem('products'));
    }else{
        products=[...products];
    }
  

   for( let i=0 ; i<products.length ; i++ ){
   myBox+= `<div class="card">
  <img style="width: 100%; height:200px;" src="${products[i].product_image}" alt="image">
  <h2>${products[i].product_name}</h2>
  <h4>${products[i].product_price}</h4>
  ${products[i].added_to_cart==true?`<button class="button btn1">remove</button>`:`<button class="button btn1">add</button>`}
 <button class="button btn2">view</button>
</div>`

if(products[i].added_to_cart==true){
    myList+=`<h2 class='menu'>${products[i].product_name}</h2>`
    counter++
} 
if(counter==0){
myDropdown.style.display='none'
}
}
myCards.innerHTML=myBox;
myDropdown.innerHTML=myList;
myIcon.innerHTML=counter;
myBTN = document.getElementsByClassName('btn1');
myBTNV = document.getElementsByClassName('btn2');
getToggle0(myBTN);
getToggle0(myBTNV);
}


function getToggle0(myBTN){
myBTN= Array.from(myBTN);
for( let i=0; i<myBTN.length; i++ ){
    if(myBTN[i].innerHTML=='view'){
        myBTN[i].addEventListener('click',()=>{
            getView(i);
        })
    }else{
        myBTN[i].addEventListener('click',()=>{
            getToggle(i);
        })
    }

}
}

function getToggle(i){
       
    
   
        if(myBTN[i].innerHTML=='add'){
            products[i].added_to_cart=true;
            localStorage.setItem('products',JSON.stringify(products));
            displayProducts();
        }else{
            products[i].added_to_cart=false;
            localStorage.setItem('products',JSON.stringify(products));
            displayProducts();
        }
    }


function getView(i){
    if(localStorage.getItem('products')!=null){
let myArray= JSON.parse(localStorage.getItem('products'))
let TheView= document.querySelector('.myview')
myView.style.display='block';
window.scroll(0,0);
TheView.innerHTML=`  <img class="i" style="width: 100%; height:500px;" src="${myArray[i].product_image}" alt="image">
<h2>${myArray[i].product_name}</h2>
<h4>${myArray[i].product_price}</h4>
${myArray[i].added_to_cart==true?`<h4 class="">The product is added to cart</h4>`:`<h4 class="">The product is not added to cart</h4>`}
`
}
}



function getMenu(){
    if(myDropdown.style.display=='none' && counter!=0){
    myDropdown.style.display='block';
    }else{
    myDropdown.style.display='none';
    }
}

getArray();
displayProducts()
















































