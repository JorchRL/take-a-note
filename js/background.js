console.log("running")

// A function to setup database only when needed

const createDatabase = () => {
    let database;

    const req = window.indexedDB.open("local_notes")

    req.onerror = (event) => {

    }

    req.onsuccess = (event) => {

    }

    req.onupgradeneeded = (event) => {

    }

    return database
}


// Click on the icon to open the client dashboard
// - open database
// - send client when clicked

chrome.action.onClicked.addListener( (tab) => {
    chrome.tabs.create({
        url: chrome.runtime.getURL("../html/client.html")
    })
})

// Press the shortcut to inject a modal
// - setup database
// - injects the modal content script into the page

// Receive message from the modal content script
//  - the message should contain the data that will be stored to the db
//  - store to the db
//  - close database

// Receive message form the client script
// - fetch from database
// - send message to client