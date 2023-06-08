let cartItems ;
let cart_Items = document.getElementById("cart-items");
let totalPrice = document.getElementById("total-price");
let total = 0;
if(localStorage.getItem('cart')){
    totalPrice.style.display = 'block';
    let box = ``;
    cartItems = localStorage.getItem('cart');
    console.log(JSON.parse(cartItems));
    cartItems = JSON.parse(cartItems);
    
    for(let i=0;i<cartItems.length;i++){
        total += cartItems[i].price;
        box += `
        <div class="cart-item">
        <div class="item-info">
            <p><span>title: </span>${cartItems[i].title}</p>
            <p><span>description: </span>${cartItems[i].description}</p>
            <p><span>brand: </span>${cartItems[i].brand}</p>
            <p><span>stock: </span>${cartItems[i].stock}</p>
            <p><span>price: </span>${cartItems[i].price}</p>
        </div>
        <div class="item-img">
            <img src="${cartItems[i].images[0]}" alt="">
        </div>
    </div>
    `;
    }
    cart_Items.innerHTML = box;
    totalPrice.innerHTML = `
    <p>
    <span>Tatal Price : </span>
    ${total}
    </p>
    `
}else{
    totalPrice.style.display = 'none';
    cart_Items.innerHTML = `<h1>Cart is empty</h1>`
}

// scroll to top 
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