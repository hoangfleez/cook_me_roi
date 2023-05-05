let pwEye = document.getElementById('sp-pw-eye');
let  inputPW = document.getElementById('password');

pwEye.onclick = () => {
    let typeInputPw = inputPW.getAttribute('type');
    let typeNew = (typeInputPw === 'password') ? 'text' : 'password';
    inputPW.setAttribute('type', typeNew);
    let classNameCurrent = pwEye.getAttribute('class');
    let newClassEye = (classNameCurrent === 'fa-solid fa-eye') ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    pwEye.setAttribute('class', newClassEye)
}

// ----------------------------------------------------------------
let pwEyeRegister = document.getElementById('eye-register');
let inputPwRegister = document.getElementById('passwordRegister');
pwEyeRegister.onclick = () => {
    let typeInputPw = inputPwRegister.getAttribute('type');
    let typeNew = (typeInputPw === 'password') ? 'text' : 'password';
    inputPwRegister.setAttribute('type', typeNew);
    let classNameCurrent = pwEyeRegister.getAttribute('class');
    let newClassEye = (classNameCurrent === 'fa-solid fa-eye') ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    pwEyeRegister.setAttribute('class', newClassEye)
}


// validate
let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    let numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length >= 6) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

