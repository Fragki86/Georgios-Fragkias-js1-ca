const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const button = document.querySelector("button");
const success = document.querySelector("#success-message");


form.addEventListener("submit", formValidation)
// fullName.addEventListener("keyup", enableButton);
// email.addEventListener("keyup", enableButton);
// address.addEventListener("keyup", enableButton);
// subject.addEventListener("keyup", enableButton);

function checkLength (value, letters) {
    if (value.trim().length > letters) {
        return true;
    } else {
        return false;
    }
}


function checkEmail (email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = regEx.test(email);
    return emailCheck
}


// function enableButton() {
//     if (checkLength(fullName.value, 1) && checkLength(address.value, 25) && checkEmail(email.value) && checkLength(subject.value, 10)) {
//         button.disabled = false;
//     } else {
//         button.disabled = true;
//     }
// }


function formValidation(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 1) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(address.value, 25) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
        
    if (checkLength(fullName.value, 1) && checkLength(address.value, 25) && checkEmail(email.value) && checkLength(subject.value, 10)) {
        success.style.display = "block";
    } else {
        success.style.display = "none";
    }

    form.reset();

}