function increaseQty(index) {
  console.log(index);
  let arrCart = JSON.parse(localStorage.getItem("myCart"));
  arrCart[index].qty++;
  localStorage.setItem("myCart", JSON.stringify(arrCart));
  location.reload();
}

function decreaseQty(index) {
  let arrCart = JSON.parse(localStorage.getItem("myCart"));
  if (arrCart[index].qty > 1) {
    arrCart[index].qty--;
  }
  localStorage.setItem("myCart", JSON.stringify(arrCart));
  location.reload();
}

function removeItem(index) {
  let arrCart = JSON.parse(localStorage.getItem("myCart"));
  arrCart.splice(index, 1);
  localStorage.setItem("myCart", JSON.stringify(arrCart));
  location.reload();
}
