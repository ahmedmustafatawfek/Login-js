"use strict";
// VARIABLES FOR INPUTS
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");

// VARIABLES FOR BUTTONS
let signUp = document.querySelector("#signUp");

// VARIABLES FOR SPANS
let errNameMessage = document.querySelector("#errNameMessage");
let errEmailMessage = document.querySelector("#errEmailMessage");
let errPassMessage = document.querySelector("#errPassMessage");

// SET VALUE IN LOCALSTORAGE
let information = [];
let userInfo = "information";

// IF CONDITION TO LOOK FOR DATA
if (localStorage.getItem(userInfo) == null) {
  information = [];
} else {
  information = JSON.parse(localStorage.getItem(userInfo));
}

//SET ITEM FUNCTION
let setItem = () => {
  localStorage.setItem(userInfo, JSON.stringify(information));
};

// CLEAR FORM
let clearForm = () => {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
};

// ADD EVENT LISTENERS FOR SIGN-UP BTN
signUp.addEventListener("click", function () {
  // IF TRUE
  if (
    validationName() == true &&
    validationEmail() == true &&
    validationPass() == true
  ) {
    let info = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };

    for (let i = 0; i < information.length; i++) {
      if (information[i].email == userEmail.value) {
        errEmailMessage.classList.replace("d-none", "d-flex");
        userEmail.style.boxShadow = " 0.2rem 0.2rem 1.8rem purple";
        errEmailMessage.innerHTML = `Email have already registered try another one`;
        return;
      }
    }

    information.push(info);
    clearForm();
    setItem();
    location.href = "../sign-in.html";

    // IF FALSE
  } else if (validationEmail() == false && validationPass() == false) {
    showErrEmail();
    showErrPass();
  }
});

// VALIDATION INPUTS => NAME
let validationName = () => {
  var regex = /^[A-Za-z ]{4,}$/;
  if (regex.test(userName.value) == true) {
    userName.style.boxShadow = " 0.2rem 0.2rem 1.8rem whitesmoke";
    errNameMessage.classList.replace("d-flex", "d-none");
    return true;
  } else {
    showErrName();
    return false;
  }
};

let showErrName = () => {
  userName.style.boxShadow = " 0.2rem 0.2rem 1.8rem purple";
  errNameMessage.classList.replace("d-none", "d-flex");
  errNameMessage.innerHTML = `Please enter valid Name first letter capital `;
};

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
