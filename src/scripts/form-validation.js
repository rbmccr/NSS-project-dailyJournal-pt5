// validate inputs for profanity present
let regex_explicit = new RegExp(/[^!@#$%^&*]*(damn|shit|ass)[^!@#$%^&*]*/ig);
let profanityBlocker = false;

conceptInput.addEventListener("keyup", (e) => {
  //validate for input character length
  if (conceptInput.value.length > 20) {
    conceptLabel.innerHTML = "Concepts covered - No more than 20 characters allowed";
    conceptInput.style.outlineColor = "red";
  } else {
    conceptLabel.innerHTML = "Concepts covered";
    conceptInput.style.outlineColor = "rgb(77, 144, 254)"; //default chrome outline color
  }
  //test for profanity
  if (regex_explicit.test(conceptInput.value)) { //regex test here
    //check if character length validation is already triggered and shown in label
    if (conceptLabel.innerHTML.length > 16) {
      conceptLabel.innerHTML = "Concepts covered - No more than 20 characters allowed - Please avoid profanity";
      conceptInput.style.outlineColor = "red";
      profanityBlocker = true; //prevent database POST
    } else {
      conceptLabel.innerHTML = "Concepts covered - Please avoid profanity";
      conceptInput.style.outlineColor = "red";
      profanityBlocker = true;
    }
  } else {
    profanityBlocker = false;
  }
});

entryInput.addEventListener("keyup", (e) => {
  //test for profanity
  if (regex_explicit.test(entryInput.value)) { //regex test here
    entryLabel.innerHTML = "Journal Entry - Please avoid profanity";
    entryInput.style.outlineColor = "red";
    profanityBlocker = true; //prevent database POST
  } else {
    profanityBlocker = false;
  }
});