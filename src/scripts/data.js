//fetches JSON data from local database and passes data into function
const API = {
  getJournalEntries () {
      return fetch("http://localhost:3000/journalEntries")
          .then(jsonData => jsonData.json())
  }
}