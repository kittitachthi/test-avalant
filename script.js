const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const female = document.getElementById("female");
const male = document.getElementById("male");
const nationality = document.getElementById("nationality");
const address = document.getElementById("address");

const smallpox = document.getElementById("smallpox");
const mumps = document.getElementById("mumps");
const dizziness = document.getElementById("dizziness");
const sneezing = document.getElementById("sneezing");

//Check Input Function
const checkPersonalInput = () => {
  //get value from input
  //Personal input value
  const firstNameInput = firstName.value;
  const lastNameInput = lastName.value;
  const nationalityInput = nationality.value;
  const addressInput = address.value;

  // Personal input check
  if (firstNameInput === "") {
    //alert error
    alert("Please enter your firstname.");
  }

  if (lastNameInput === "") {
    alert("Please enter your lastname.");
  }

  if (nationalityInput === "") {
    alert("Please select your nationality.");
  }

  if (addressInput === "") {
    alert("Please enter your address.");
  }
};

//Action to check personal input
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkPersonalInput();
});

//check gender and medical history input
const checkValidBoxInput = () => {
  const setGender = document.querySelector("[name=gender]:checked");
  const setmedicalHistory = document.querySelector(
    "[name=medical-history]:checked"
  );

  const error = [];

  //check gender
  if (!setGender) {
    error.push("Please select your gender.");
  }

  //check medical history
  if (!setmedicalHistory) {
    error.push("Please select your 'Medical history' at least one.");
  }

  if (error.length > 0) {
    /* alert(error.join("\n")); */
    alert(error[0]);
    alert(error[1]);
  }
};

//check medical history radio already has select or not
const checkCurrentMediction = () => {
  const medicationHistoryInput = document.querySelector(
    "[name=medication-check]:checked"
  );
  const error = [];

  if (!medicationHistoryInput) {
    error.push("Are you currently taking any medication?");
  }

  if (error.length > 0) {
    alert(error.join("\n"));
  }

  const yesInput = document.getElementById("yes");
  const noInput = document.getElementById("no");
  const textArea = document.getElementById("currently-medication");

  //logic if select yes
  if (yesInput.checked) {
    if (textArea.value === "") {
      alert("Please indicate current medication.");
    }
  }

  //logic if select no
  if (noInput.checked) {
    if (textArea.value !== "") {
      alert(
        "You don't have to give the information if currenly you don't have any medication."
      );
    }
  }
};
