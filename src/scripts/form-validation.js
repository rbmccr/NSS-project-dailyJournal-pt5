//function called when form is built
function validateForm() {
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
      //first check if character length validation is already triggered and shown in label
      if (conceptLabel.innerHTML.length > 16) {
        conceptLabel.innerHTML = "Concepts covered - No more than 20 characters allowed - Please avoid profanity";
        conceptInput.style.outlineColor = "red";
        profanityBlocker1 = true; //prevent database POST
      } else { //else just display text for profanity filter (not both profanity and character length)
        conceptLabel.innerHTML = "Concepts covered - Please avoid profanity";
        conceptInput.style.outlineColor = "red";
        profanityBlocker1 = true;
      }
    } else { //no issues with input
      profanityBlocker1 = false;
    }
  });
  
  entryInput.addEventListener("keyup", (e) => {
    //test for profanity
    if (regex_explicit.test(entryInput.value)) { //regex test here
      entryLabel.innerHTML = "Journal Entry - Please avoid profanity";
      entryInput.style.outlineColor = "red";
      profanityBlocker2 = true; //prevent database POST
    } else {
      entryLabel.innerHTML = "Journal Entry";
      entryInput.style.outlineColor = "rgb(77, 144, 254)";
      profanityBlocker2 = false;
    }
  });
}