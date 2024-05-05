function directCart() {
  location.href = "../Page5/cart.html";
}

function recountTotalQty() {
  let arrCart = JSON.parse(localStorage.getItem("myCart"));
  let count = 0;
  for (let i = 0; i < arrCart.length; i++) {
    count += arrCart[i].qty;
  }
  localStorage.setItem("totalQty", count);
  document.querySelector("span.cartNo").innerText = count;
}
