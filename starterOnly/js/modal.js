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
  /* It resets the form. */
  removeErrors();
  document.forms[0].reset();
  //Delete form
  document.getElementById("form").style.display = "block";
  //Display thank you message
  document.getElementById("thankYou").style.display = "none";
}

/**
 * It checks if the form is valid, if it is, it deletes the form and displays a thank you message
 * @param event - The event object is a parameter that is passed to the function when it is invoked.
 */
function validate(event) {
  event.preventDefault();
  let go = true;
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const mail = document.getElementById("email");
  const birthDate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const checkbox = document.getElementById("checkbox1");

  if (firstName.value === "") {
    go = false;
    firstName.style.borderColor = "red";
    document.getElementById("firstError").innerHTML = "Merci de renseigner votre prénom";
    firstName.reportValidity();
  } else if (firstName.value.length < 2) {
    go = false;
    firstName.style.borderColor = "red";
    document.getElementById("firstError").innerHTML = "Votre prénom doit contenir au moins 2 caractères";
  } else {
    firstName.style.borderColor = "white";
    document.getElementById("firstError").innerHTML = "";
  }

  if (lastName.value === "") {
    go = false;
    lastName.style.borderColor = "red";
    document.getElementById("lastError").innerHTML = "Merci de renseigner votre nom";
  } else if (lastName.value.length < 2) {
    go = false;
    lastName.style.borderColor = "red";
    document.getElementById("lastError").innerHTML = "Votre nom doit contenir au moins 2 caractères";
  } else {
    lastName.style.borderColor = "white";
    document.getElementById("lastError").innerHTML = "";
  }

  const regex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i;
  if (mail.value === "") {
    go = false;
    mail.style.borderColor = "red";
    document.getElementById("emailError").innerHTML = "Merci de renseigner votre adresse mail";
  } else if (!regex.test(mail.value)) {
    go = false;
    mail.style.borderColor = "red";
    document.getElementById("emailError").innerHTML = "Votre adresse mail est invalide";
  } else {
    mail.style.borderColor = "white";
    document.getElementById("emailError").innerHTML = "";
  }

  /* It gets the year from the birthdate. */
  const year = birthDate.value.split("-")[0];

  /* It gets the current year. */
  const currentYear = new Date().getFullYear();

  /* It checks if the year is greater than the current year or if it is less than 1900. If it is, it
  displays an error message. */
  if (year > currentYear || year < 1900) {
    go = false;
    birthDate.style.borderColor = "red";
    document.getElementById("birthdateError").innerHTML = "Votre date de naissance est invalide";
  } else {
    birthDate.style.borderColor = "white";
    document.getElementById("birthdateError").innerHTML = "";
  }

  if (quantity.value === "") {
    go = false;
    quantity.style.borderColor = "red";
    document.getElementById("quantityError").innerHTML = "Tu as dû oublié de remplir ce champs";
  } else {
    if (quantity.value < 0) {
      go = false;
      quantity.style.borderColor = "red";
      document.getElementById("quantityError").innerHTML = "Tu as indiqué un chiffre négatif, ce n'est pas possible";
    } else if (quantity.value > 99) {
      go = false;
      quantity.style.borderColor = "red";
      document.getElementById("quantityError").innerHTML = "Tu as indiqué un chiffre trop grand, ce n'est pas possible";
    } else {
      quantity.style.borderColor = "white";
      document.getElementById("quantityError").innerHTML = "";
    }
  }


  /* It checks if the checkbox is checked, if it is not, it displays an error message. */
  if (checkbox.checked !== true) {
    go = false;
    document.getElementById("checkboxError").innerHTML = "Merci d'accepter les conditions d'utilisation";
  } else {
    document.getElementById("checkboxError").innerHTML = "";
  }


  /* It checks if the radio button is checked, if it is not, it displays an error message. */
  const radio = document.querySelector('input[name="location"]:checked');
  if (radio === null) {
    go = false;
    document.getElementById("radioError").innerHTML = "Merci de choisir une option";
  } else {
    document.getElementById("radioError").innerHTML = "";
  }
  if (go === true) {
  //Delete form
  document.getElementById("form").style.display = "none";
  //Display thank you message
  document.getElementById("thankYou").style.display = "flex";
  }
}

/* Adding an event listener to the form element. When the form is submitted, the validate function will
be called. */
document.getElementById("form").addEventListener("submit", validate, true);


/**
 * It adds a class to the buttons if it's not already there, and removes it if it is
 */
function addClass() {
  const buttons = document.querySelectorAll(".navButton");

/* It checks if the first button has the class "displayed". If it does, it removes it from all the
buttons. */
if (buttons[0].classList.contains("displayed")) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("displayed");
  }

} else {  /* It adds the class "displayed" to all the buttons. */
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("displayed");
    }
  }
}


/**
 * If the navbar is showing, hide it. If the navbar is hidden, show it
 */
function showNavbar() {
  if (document.getElementById("main-navbar").classList.contains("show")) {
    document.getElementById("main-navbar").classList.remove("show");
  } else {
    const navbar = document.getElementById("main-navbar");
    navbar.classList.add("show");
  }
}

/* Fonction qui enlève tous les messages d'erreur */
function removeErrors() {
  document.getElementById("firstError").innerHTML = "";
  document.getElementById("lastError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("birthdateError").innerHTML = "";
  document.getElementById("quantityError").innerHTML = "";
  document.getElementById("radioError").innerHTML = "";
  document.getElementById("checkboxError").innerHTML = "";
  /* Et retablir les bordures */
  document.getElementById("first").style.borderColor = "white";
  document.getElementById("last").style.borderColor = "white";
  document.getElementById("email").style.borderColor = "white";
  document.getElementById("birthdate").style.borderColor = "white";
  document.getElementById("quantity").style.borderColor = "white";
}
