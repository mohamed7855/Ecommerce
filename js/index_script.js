var sliderImage = document.querySelector("#slider img"),
  arrowLeft = document.querySelector("#slider .left"),
  arrowRight = document.querySelector("#slider .right"),
  numImages = 5,
  currentImg = 1;

var next = function () {
  if (currentImg == numImages) {
    currentImg = 0;
  }
  currentImg += 1;
  sliderImage.setAttribute("src", "./imgs/products/" + currentImg + ".jpg");
};

var back = function () {
  if (currentImg == 1) {
    currentImg = 6;
  }
  currentImg -= 1;
  sliderImage.setAttribute("src", "./imgs/products/" + currentImg + ".jpg");
};
arrowRight.addEventListener("click", next);
arrowLeft.addEventListener("click", back);
setInterval(next, 5000);

// all buttons in CLOTHING COLLECTION
var btns = document.querySelectorAll("#products button");
var allBtn = btns[0];
var menBtn = btns[1];
var womenBtn = btns[2];
var babyBtn = btns[3];
var accessoryBtn = btns[4];

// all card of product in CLOTHING COLLECTION
var allProducts = document.querySelectorAll(".products .product");

// shows products by classname (man,woman,baby,accessory)
var showProductsOfClass = function (nodeListProducts, className) {
  for (var i = 0; i < nodeListProducts.length; i++) {
    // handle when show all products
    if (!className) {
      nodeListProducts[i].classList.remove("hidden");
    } else {
      if (nodeListProducts[i].classList.contains(className)) {
        nodeListProducts[i].classList.remove("hidden");
      } else {
        nodeListProducts[i].classList.add("hidden");
      }
    }
  }
};

// active specific button from all buttons
var addClassActive = function (btns, activeBtn) {
  for (var i = 0; i < btns.length; i++) {
    if (btns[i] == activeBtn) btns[i].classList.add("active");
    else btns[i].classList.remove("active");
  }
};

allBtn.addEventListener("click", () => {
  addClassActive(btns, allBtn);
  showProductsOfClass(allProducts, "");
});
menBtn.addEventListener("click", () => {
  addClassActive(btns, menBtn);
  showProductsOfClass(allProducts, "man");
});
womenBtn.addEventListener("click", () => {
  addClassActive(btns, womenBtn);
  showProductsOfClass(allProducts, "woman");
});
babyBtn.addEventListener("click", () => {
  addClassActive(btns, babyBtn);
  showProductsOfClass(allProducts, "baby");
});
accessoryBtn.addEventListener("click", () => {
  addClassActive(btns, accessoryBtn);
  showProductsOfClass(allProducts, "accessory");
});

var userBuying = [];

function addProduct(src) {
  var product = { imgSrc: src, quantity: 1 };
  if (userBuying.length == 0) {
    userBuying.push(product);
  } else {
    var foundProduct = false;
    userBuying.forEach((element) => {
      if (element.imgSrc == product.imgSrc) {
        foundProduct = true;
        element.quantity += 1;
      }
    });
    if (!foundProduct) userBuying.push(product);
  }
  window.localStorage.setItem("userBuying", JSON.stringify(userBuying));
}
