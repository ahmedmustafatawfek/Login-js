"use strict";
// VARIABLES FOR INPUTS
let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");

// VARIABLES FOR BUTTONS
let logIn = document.querySelector("#logIn");

// VARIABLES FOR SPANS
let errEmailMessage = document.querySelector("#errEmailMessage");
let errPassMessage = document.querySelector("#errPassMessage");

// SET VALUE IN LOCALSTORAGE
let information = [];
let userInfo = "information";
information = JSON.parse(localStorage.getItem(userInfo));
// IF CONDITION TO LOOK FOR DATA
if (localStorage.getItem(userInfo) == null) {
  information = [];
} else {
  information = JSON.parse(localStorage.getItem(userInfo));
}

// CLEAR FORM
let clearForm = () => {
  userEmail.value = "";
  userPassword.value = "";
};

// ADD EVENT LISTENERS FOR SIGN-UP BTN
logIn.addEventListener("click", function () {
  // IF TRUE
  if (validationEmail() == true && validationPass() == true) {
    let info = {
      email: userEmail.value,
      password: userPassword.value,
    };

    for (let i = 0; i < information.length; i++) {
      if (
        information[i].email == userEmail.value &&
        information[i].password == userPassword.value
      ) {
        let nameOfUser = information[i].name;
        localStorage.setItem("userName", nameOfUser);
        clearForm();
        location.href = "../home.html";
        return;
      }
    }
    // IF FALSE
  } else if (validationEmail() == false && validationPass() == false) {
    showErrEmail();
    showErrPass();
  }
});

// VALIDATION INPUTS => EMAIL
let validationEmail = () => {
  let regex = /^[A-Za-z0-9._%+-]+@[a-z0-9.-]{1,7}\.[a-z]{2,3}$/i;

  if (regex.test(userEmail.value) == true) {
    userEmail.style.boxShadow = " 0.2rem 0.2rem 1.8rem whitesmoke";
    errEmailMessage.classList.replace("d-flex", "d-none");
    return true;
  } else {
    showErrEmail();
    return false;
  }
};

let showErrEmail = () => {
  userEmail.style.boxShadow = " 0.2rem 0.2rem 1.8rem purple";
  errEmailMessage.classList.replace("d-none", "d-flex");
  errEmailMessage.innerHTML = `Please enter a valid email address`;
};

// VALIDATION INPUTS => PASSWORD
let validationPass = () => {
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}$/;
  if (regex.test(userPassword.value) == true) {
    userPassword.style.boxShadow = " 0.2rem 0.2rem 1.8rem whitesmoke";
    errPassMessage.classList.replace("d-flex", "d-none");
    return true;
  } else {
    showErrPass();
    return false;
  }
};

let showErrPass = () => {
  userPassword.style.boxShadow = " 0.2rem 0.2rem 1.8rem purple";
  errPassMessage.classList.replace("d-none", "d-flex");
  errPassMessage.innerHTML = ` Password must be at least 8 characters contain number,symbols,capital letters`;
};
