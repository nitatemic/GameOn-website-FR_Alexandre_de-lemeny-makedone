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

/**
 * When the user clicks the button, the modal is displayed
 */
function launchModal() {
  document.querySelector(".bground").style.display = "block";
}

/**
 * When the user clicks on the button, close the modal.
 */
function CloseModal() {
  document.querySelector(".bground").style.display = "none";
}

function validate(event) {
  event.preventDefault();
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let checkbox = document.getElementById("checkbox1");
  let checkboxSpan = document.getElementById("checkboxSpan");

  /* Checking if the checkbox is checked. If it is not checked, then the span element will turn red. */
  if (checkbox.checked !== true) {
    checkboxSpan.style.color = "red";
  }
}

/* Adding an event listener to the form element. When the form is submitted, the validate function will
be called. */
document.getElementById("form").addEventListener("submit", validate, true);
