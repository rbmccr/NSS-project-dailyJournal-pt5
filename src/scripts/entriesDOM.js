// Accepts array of objects, loops through each, passes each into 
// function, appends each return to the DOM

function renderJournalEntries(entries) {
  entries.forEach(journalEntry => {
    container.innerHTML += makeJournalEntryComponent(journalEntry);
  });
}