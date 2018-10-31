const container = document.querySelector(".entryLog");
let header = document.getElementById("header");
let formContainer = document.getElementById("form--container");
let buttonContainer = document.getElementById("button--container")
// regex allows validation for listed profanity present
let regex_explicit = new RegExp(/[^!@#$%^&*]*(damn|shit|ass)[^!@#$%^&*]*/i);
let profanityBlocker1 = false;
let profanityBlocker2 = false;

// these vars are assigned values when form is created
let formButton;
let conceptLabel;
let entryLabel;
let dateInput;
let conceptInput;
let entryInput;
let moodInput;