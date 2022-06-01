function TestCheckMail() {
	if (CheckMail("this.is.a@mail.adress.dev") && CheckMail("This.isn't.an@adresse_mail.dev") {
		console.log("Test passed");
	} else {
		console.log("Test failed (CheckMail() function)");
	}
}
