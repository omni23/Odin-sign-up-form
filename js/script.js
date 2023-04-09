const pwInput = document.querySelector("#userpw");
const pwcInput = document.querySelector("#confirmpw");
const pwcError = document.querySelector("#pwc-error");
const phoneInput = document.querySelector("#userphone");

function comparePasswords() {
    if (pwInput.value != pwcInput.value ) {
        pwInput.classList.add("error");
        pwcInput.classList.add("error");
        pwcInput.setCustomValidity("Passwords don't match");
    }
    else {
        pwInput.classList.remove("error");
        pwcInput.classList.remove("error");
        pwcInput.setCustomValidity("");
    }
}

pwInput.addEventListener("input", comparePasswords);
pwcInput.addEventListener("input", comparePasswords);
phoneInput.addEventListener("input", () => {
    if (phoneInput.validity.patternMismatch) {
        phoneInput.setCustomValidity
        ("Please enter a ten digit phone number");
    }
    else {
        phoneInput.setCustomValidity("");
    }
})