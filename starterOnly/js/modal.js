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
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");
  let mail = document.getElementById("email");
  let birthDate = document.getElementById("birthdate");
  let quantity = document.getElementById("quantity");
  let checkbox = document.getElementById("checkbox1");
  let checkboxSpan = document.getElementById("checkboxSpan");

  if (firstName.value === "") {
    firstName.style.borderColor = "red";
    document.getElementById("firstError").innerHTML = "Merci de renseigner votre prénom";
    firstName.reportValidity();
  } else if (firstName.value.length < 2) {
    firstName.style.borderColor = "red";
    document.getElementById("firstError").innerHTML = "Votre prénom doit contenir au moins 2 caractères";
  } else {
    firstName.style.borderColor = "white";
    document.getElementById("firstError").innerHTML = "";
  }

  if (lastName.value === "") {
    lastName.style.borderColor = "red";
    document.getElementById("lastError").innerHTML = "Merci de renseigner votre nom";
  } else if (lastName.value.length < 2) {
    lastName.style.borderColor = "red";
    document.getElementById("lastError").innerHTML = "Votre nom doit contenir au moins 2 caractères";
  } else {
    lastName.style.borderColor = "white";
    document.getElementById("lastError").innerHTML = "";
  }

  const regex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i;
  if (mail.value === "") {
    mail.style.borderColor = "red";
    document.getElementById("emailError").innerHTML = "Merci de renseigner votre adresse mail";
  } else if (!regex.test(mail.value)) {
    mail.style.borderColor = "red";
    document.getElementById("emailError").innerHTML = "Votre adresse mail est invalide";
  } else {
    mail.style.borderColor = "white";
    document.getElementById("emailError").innerHTML = "";
  }

  //Récupération de l'année dans la date en récupérer la string anat le -
  let year = birthDate.value.split("-")[0];
  //Récupération de l'année actuelle
  let currentYear = new Date().getFullYear();
  //Si l'année de naissance est supérieur à l'année actuelle
  if (year > currentYear || year < 1900) {
    birthDate.style.borderColor = "red";
    document.getElementById("birthdateError").innerHTML = "Votre date de naissance est invalide";
  } else {
    birthDate.style.borderColor = "white";
    document.getElementById("birthdateError").innerHTML = "";
  }

  if (quantity.value === "") {
    quantity.style.borderColor = "red";
    document.getElementById("quantityError").innerHTML = "Tu as dû oublié de remplir ce champs";
  } else {
    if (quantity.value < 0) {
      quantity.style.borderColor = "red";
      document.getElementById("quantityError").innerHTML = "Tu as indiqué un chiffre négatif, ce n'est pas possible";
    } else if (quantity.value > 99) {
      quantity.style.borderColor = "red";
      document.getElementById("quantityError").innerHTML = "Tu as indiqué un chiffre trop grand, ce n'est pas possible";
    } else {
      quantity.style.borderColor = "white";
      document.getElementById("quantityError").innerHTML = "";
    }
  }

  /* Checking if the checkbox is checked. If it is not checked, then the span element will turn red. */
  if (checkbox.checked !== true) {
    document.getElementById("checkboxError").innerHTML = "Merci d'accepter les conditions d'utilisation";
  } else {
    document.getElementById("checkboxError").innerHTML = "";
  }

  //Récupérer le bouton radio sélectionné
  let radio = document.querySelector('input[name="location"]:checked');
  if (radio === null) {
    document.getElementById("radioError").innerHTML = "Merci de choisir une option";
  } else {
    document.getElementById("radioError").innerHTML = "";
  }
}

/* Adding an event listener to the form element. When the form is submitted, the validate function will
be called. */
document.getElementById("form").addEventListener("submit", validate, true);

