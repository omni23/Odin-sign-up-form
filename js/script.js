const pwInput = document.querySelector("#userpw");
const pwcInput = document.querySelector("#confirmpw");
const pwcError = document.querySelector("#pwc-error");

function comparePasswords() {
    if (pwInput.value !== pwcInput.value ) {
        pwcError.textContent = "Passwords don't match!";
        pwInput.classList.add("error");
        pwcInput.classList.add("error");
    }
    else {
        pwcError.textContent = "";
        pwInput.classList.remove("error");
        pwcInput.classList.remove("error");
    }
}

pwInput.addEventListener("input", comparePasswords);
pwcInput.addEventListener("input", comparePasswords);