var namee = document.getElementById("name");
var pName = document.getElementById("pName");
var email = document.getElementById("email");
var pEmail = document.getElementById("pEmail");
var password = document.getElementById("password");
var pPass = document.getElementById("pPass");

var country = document.getElementById("country");
var pCountry = document.getElementById("pCountry");
var btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
  event.preventDefault();
});

var testName = function () {
  var lengthName = namee.value.trim().length;
  if (lengthName > 2) {
    namee.style.border = "solid green";
    return true;
  } else {
    namee.style.border = "solid red";
    return false;
  }
};
namee.addEventListener("input", testName);
// //////////////////////// Generic Function ////////////////////////////////////////
var testElement = function test(ele, regex) {
  var test = regex.test(ele.value);
  if (test) {
    ele.style.border = "solid green";
    return true;
  } else {
    ele.style.border = "solid red";
    return false;
  }
};
// ///////////////////////////////////////////////
var emailRegex = /[a-zA-Z0-9._-]{3,10}@[a-z]{2,5}.[a-z]{2,3}/;
var checkEmail = () => testElement(email, emailRegex);
email.addEventListener("input", checkEmail);
// ///////////////////////////////////////////////
var passRegex = /[a-zA-Z0-9._-]{8,}/;
var checkPass = () => testElement(password, passRegex);
password.addEventListener("input", checkPass);
// ///////////////////////////////////////////////
var checkCountry = function () {
  if (!country.value) {
    pCountry.textContent = "Please select your country";
    pCountry.style.color = "red";
  } else {
    pCountry.textContent = "Valid Data";
    pCountry.style.color = "green";
  }
};

function check() {
  if (testName()) {
    pName.textContent = "Valid Name";
    pName.style.color = "green";
  } else {
    pName.textContent = "Name is required must length >2";
    pName.style.color = "red";
  }
  if (checkEmail()) {
    pEmail.textContent = "Valid Email";
    pEmail.style.color = "green";
  } else {
    pEmail.textContent =
      "Email must be as (3:10)[A-z,0-9,.,-,_]+@+(2:5)[a-z]+.+(2:)[a-z]";
    pEmail.style.color = "red";
  }
  if (checkPass()) {
    pPass.textContent = "Valid Password";
    pPass.style.color = "green";
  } else {
    pPass.textContent = "Password must be 8 char|number|special char(.,-,_) ";
    pPass.style.color = "red";
  }
  checkCountry();
}
