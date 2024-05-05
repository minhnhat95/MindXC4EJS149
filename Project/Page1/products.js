const products = [
  {
    id: "SP001",
    name: " Plain White Shirt",
    price: 29,
    image: "../Page1/Photos/plainwhiteshirt.png",
  },
  {
    id: "SP002",
    name: " Denim jacket",
    price: 69,
    image: "../Page1/Photos/denimjacket.png",
  },
  {
    id: "SP003",
    name: " Black Polo Shirt",
    price: 49,
    image: "../Page1/Photos/blackpoloshirt.png",
  },
  {
    id: "SP004",
    name: " Blue Sweatshirt",
    price: 79,
    image: "../Page1/Photos/bluesweatshirt.png",
  },
  {
    id: "SP005",
    name: " Blue Plain Shirt",
    price: 49,
    image: "../Page1/Photos/blueplainshirt.png",
  },
  {
    id: "SP006",
    name: " Dark Blue Shirt",
    price: 89,
    image: "../Page1/Photos/darkblueshirt.png",
  },
  {
    id: "SP007",
    name: " Outcast T Shirt",
    price: 19,
    image: "../Page1/Photos/outcasttshirt.png",
  },
  {
    id: "SP008",
    name: " Polo Plain Shirt",
    price: 29,
    image: "../Page1/Photos/poloplainshirt.png",
  },
  {
    id: "SP009",
    name: " Gray Polo Shirt",
    price: 49,
    image: "../Page1/Photos/graypoloshirt.png",
  },
  {
    id: "SP010",
    name: " Red Shirt",
    price: 69,
    image: "../Page1/Photos/redshirt.png",
  },
  {
    id: "SP011",
    name: " White Polo Shirt",
    price: 29,
    image: "../Page1/Photos/whitepoloshirt.png",
  },
  {
    id: "SP012",
    name: " Pink Casual Shirt",
    price: 39,
    image: "../Page1/Photos/pinkcasualshirt.png",
  },
];

var str1 = "";
for (let i = 0; i < 8; i++) {
  var obj = JSON.stringify(products[i]);
  str1 += `<div class="pd">
          <img src="${products[i].image}" alt="" />
          <button class="label" onclick=\'showDetail(\`${obj}\`)\'>${products[i].name}</button>
          <div class="price">$${products[i].price}</div>
          <button class="btnAddCart" onclick=\'addCart(\`${obj}\`)\'>ADD TO CART</button>
        </div>`;
}
document.querySelector("div.newProduct").innerHTML = str1;

var str2 = "";
for (let i = 8; i < products.length; i++) {
  var obj = JSON.stringify(products[i]);
  str2 += `<div class="pd">
          <img src="${products[i].image}" alt="" />
          <button class="label" onclick=\'showDetail(\`${obj}\`)\'>${products[i].name}</button>
          <div class="price">$${products[i].price}</div> 
          <button class="btnAddCart" onclick=\'addCart(\`${obj}\`)\'>ADD TO CART</button>
        </div>`;
}
document.querySelector("div.topProduct").innerHTML = str2;

let count = localStorage.getItem("totalQty");
if (count == null) {
  count = 0;
}
document.querySelector("span.cartNo").innerText = count;
let arrCart = localStorage.getItem("myCart");
if (arrCart == null) {
  arrCart = [];
} else {
  arrCart = JSON.parse(localStorage.getItem("myCart"));
}

console.log(count);

function addCart(objSP) {
  console.log(objSP);
  objSP = JSON.parse(objSP);
  var item;
  var qtyItem = 0;
  var flag = false;

  for (let i = 0; i < arrCart.length; i++) {
    if (arrCart[i].sp.id == objSP.id) {
      arrCart[i].qty++;
      flag = true;
      break;
    }
  }
  if (flag == false) {
    let cartItem = { sp: objSP, qty: 1 };
    arrCart.push(cartItem);
  }

  count++;
  document.querySelector("span.cartNo").innerText = count;

  localStorage.setItem("totalQty", count + "");
  localStorage.setItem("myCart", JSON.stringify(arrCart));
}

function showDetail(objSP) {
  console.log(objSP);
  window.localStorage.setItem("product", objSP);
  location.href = "../Page4/single_product.html";
}
