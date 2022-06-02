/**
 * If the class name of the element with the id "myTopnav" is "topnav", then add "responsive" to the
 * class name. Otherwise, set the class name to "topnav"
 */
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/**
 * When the user clicks on the button, close the modal.
 */
function CloseModal() {
  modalbg.style.display = "none";
}


function validate(event) {
  event.preventDefault();
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let checkbox = document.getElementById("checkbox1");
  let checkboxSpan = document.getElementById("checkboxSpan");

  if (checkbox.checked !== true) {
    checkboxSpan.style.color = "red";
    console.log("checkbox is not checked");
  }
}

document.getElementById("form").addEventListener("submit", validate, true);

