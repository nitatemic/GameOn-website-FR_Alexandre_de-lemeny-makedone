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
  let quantity = document.getElementById("quantity");
  let checkbox = document.getElementById("checkbox1");
  let checkboxSpan = document.getElementById("checkboxSpan");

  if (quantity.value === "") {
    quantity.setCustomValidity("Tu as dû oublié de remplir ce champs");
    console.log("ici")
  } else {
    if (quantity.validity.rangeUnderflow) {
      quantity.setCustomValidity("Tu as indiqué un chiffre négatif, ce n'est pas possible");
    } else if (quantity.validity.rangeOverflow) {
      quantity.setCustomValidity("Tu as indiqué un chiffre trop grand, ce n'est pas possible");
    } else {
      quantity.setCustomValidity("");
    }
  }
  quantity.reportValidity();

  /* Checking if the checkbox is checked. If it is not checked, then the span element will turn red. */
  if (checkbox.checked !== true) {
    checkboxSpan.style.color = "red";
  }
}

/* Adding an event listener to the form element. When the form is submitted, the validate function will
be called. */
document.getElementById("form").addEventListener("submit", validate, true);
