/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

*/
API.getJournalEntries().then(entries => renderJournalEntries(entries));

// ------------ begin variable declarations ------------

let form = document.getElementById("entry-form");
let formButton = document.querySelector("button");
let dateInput = document.getElementById("journalDate");
let conceptInput = document.getElementById("concepts");
let entryInput = document.getElementById("entry");
let moodInput = document.getElementById("mood");
let inputs = [];
//regex says expression can include letters, nums, {}, (),  , ;, -, ,, and :.
let regex = new RegExp("^[a-zA-Z0-9(.).{.}. .,.:.;.-]*$");
let journalEntryObject = {};

// ------------- end variable declarations -------------

formButton.addEventListener("click", (e) => {
    inputs = [dateInput.value, conceptInput.value, entryInput.value, moodInput.value];
    //if any of the values don't meet the regex, are blank, or are undefined, don't move on the the POST
    for (i = 0; i < inputs.length; i++) {
        if (!regex.test(inputs[i]) || inputs[i] === "" || inputs[i] === undefined) {
            alert("Please complete the form entry fields.");
            return
        }
    }
    //build the journal entry object using input values stored in the array above
    journalEntryObject = {
        date: inputs[0],
        concept: inputs[1],
        entry: inputs[2],
        mood: inputs[3]
    }
    fetch("http://localhost:3000/journalEntries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntryObject)
    })
    .then(jsonData => jsonData.json())
    //display new journal entry on page
    .then(data => {
        let holdMyObject = []; //holds single object
        holdMyObject.push(data);
        renderJournalEntries(holdMyObject);
    });

    dateInput.value = "";
    conceptInput.value = "";
    entryInput.value = "";
    moodInput.value = "Fantastic";
});
