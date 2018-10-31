// Accepts single object (journal entry) and returns string template
const makeJournalEntryComponent = function(journalEntry) {
  return `
    <section class="entry--posted"> 
      <h2>${journalEntry.concept}</h1>
      <hp>${journalEntry.date}</p> 
      <p>${journalEntry.entry}</p>
      <footer>Mood: ${journalEntry.mood}</footer>
    </section>
  `
}