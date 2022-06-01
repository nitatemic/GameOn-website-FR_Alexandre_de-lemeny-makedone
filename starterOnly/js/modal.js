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

/**
 * It checks if the given string is a valid email address
 * @param mail - The email address to validate.
 * @returns A boolean value.
 */
function CheckMail(mail) {
  return (/^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i).test(mail);
}
