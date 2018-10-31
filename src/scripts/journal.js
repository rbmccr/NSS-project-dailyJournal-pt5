// Main application logic that uses the functions and objects
// defined in the other JavaScript files.
API.getJournalEntries().then(entries => renderJournalEntries(entries));

let inputs = [];
let journalEntryObject = {};
//regex says expression can include letters, nums, "{}", "()", " ", ";", "-", ",", and ":"
let regex = new RegExp("^[a-zA-Z0-9(.).{.}. .,.:.;.-]*$");

//this function posts form information to the database, assuming all requirements are met
function activateButton() {
    formButton.addEventListener("click", (e) => {
        let idx0 = dateInput.value;
        let idx1 = conceptInput.value.slice(0,20); //conceptInput only takes 20 characters
        let idx2 = entryInput.value;
        let idx3 = moodInput.value;

        inputs = [idx0, idx1, idx2, idx3];
        console.log(inputs)
        //if any of the inputs have profanity, don't meet the regex, are blank, or are undefined, don't move on the the POST
        for (i = 0; i < inputs.length; i++) {
            if (profanityBlocker1 === true || profanityBlocker2 === true || !regex.test(inputs[i]) || inputs[i] === "" || inputs[i] === undefined) {
                alert("Please complete the form entry fields completely and correctly.");
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
}
