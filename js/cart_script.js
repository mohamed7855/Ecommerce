var userBuying = JSON.parse(localStorage.getItem("userBuying"));
var tableBody = document.querySelector("table tbody");

userBuying.forEach((element) => {
  var tr = document.createElement("tr");
  var tdImg = document.createElement("td");
  var img = document.createElement("img");
  img.src = element.imgSrc;
  tdImg.appendChild(img);
  var tdProduct = document.createElement("td");
  tdProduct.innerHTML = "Tshirt";
  var tdQuantity = document.createElement("td");
  tdQuantity.innerHTML = `<input type='number' value=${element.quantity} min='1' />`;
  var tdPrice = document.createElement("td");
  tdPrice.innerHTML = "1500";
  var tdRemove = document.createElement("td");
  tdRemove.innerHTML =
    "<i class='fa-solid fa-square-minus' onclick='removeProduct(event)'></i>";
  tr.append(tdImg, tdProduct, tdQuantity, tdPrice, tdRemove);

  tableBody.appendChild(tr);
});

var removeProduct = (e) => {
  var indexOfProduct = Array.prototype.indexOf.call(
    tableBody.children, // all children of parent
    e.target.parentNode.parentNode // children
  );
  console.log(indexOfProduct);

  var products = JSON.parse(localStorage.getItem("userBuying"));
  console.log(products);
  console.log(products.splice(indexOfProduct, 1));
  console.log(products);
  localStorage.setItem("userBuying", JSON.stringify(products));
  location.reload();
};
