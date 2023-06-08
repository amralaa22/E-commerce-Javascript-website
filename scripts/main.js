let api = `https://dummyjson.com/products`;
let cart = [];
// ************************************************************

let index = 1;
showSlides(index);
function plusSlides(n) {
  showSlides(index += n);
}
function currentSlide(n) {
  showSlides(index = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  dots[index-1].className += " active";
}

// ************************************************************
async function displayCatList(){
    let box = `<li onclick="getData('All')" >All</li>`;
    let cat_list = document.getElementById("cat_list");
    let api = 'https://dummyjson.com/products/categories';
    let result = await fetch(api);
    let res = await result.json();
    let data = res.filter((item)=>{
        let items = ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration'];
        return items.includes(item);
    })
    // console.log(res);
    for(let i=0;i<data.length;i++){
        box += `<li onclick="getData('${data[i]}')" >${data[i]}</li>`;
    }
    cat_list.innerHTML = box;

}
displayCatList();


function display(arr , category){
    let cat= document.getElementById("category");
    let data = arr;
    // console.log(data);
    if(category != "All"){
        data = arr.filter((item)=> item.category == category)
    }
    
    let box = ``;
    for(let i =0; i<data.length; i++){
        // box += `<li> ${arr[i]} </li>`;
        box += `<div id=${data[i].id} class="card">
         <div class=card-title>
         <p>${data[i].title}</p>
         
         
         </div>   
         <img src=${data[i].images[0]}>
         <div class="card-info">
          <p><span>brand :</span>${data[i].brand}</p>
          <p><span>description :</span>${data[i].description}</p>
          <p><span>stock :</span>${data[i].stock}</p>
          <p><span>price :</span>${data[i].price}</p>
         </div>
         <button class=btn-add id="btn-add" onclick="findItem(${data[i].id})">Add</button>
         </div>`;
    }
    cat.innerHTML =  box;
}

var getData = async function (category){

let data = await fetch(api);
let result = await data.json() ;
let {products} = result;
// console.log(products);
display(products, category);
getItems(products)
}

getData("All");



let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.onclick = function () {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}


// *************cart*****************
function addToCart(item){
  console.log(item);
  // getItem(item)
}
function getItems(products){
  console.log(products);
  
}






let findItem = async function(id){
  let data = await fetch(api);
  let result = await data.json() ;
  let {products} = result;
  console.log(id);
  console.log(products);
  let item = products.find((item)=> item.id == id)
  console.log(item);
  cart = [...cart , item]
  localStorage.setItem('cart',JSON.stringify(cart))
}
