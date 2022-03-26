# take-a-note

Fullstack SaaS product based on a Chrome extension for easily making summaries of internet articles.

Currently work in progress.

Design goals

- press a shortcut to inject a modal in a web article
- Take a note in the modal and save it to a database
- Display a client frontend where you can read, copy and delete your notes
- Integrate with a remote database (?)
- Integrate with a remote web app for dealing with users

Stack

- Node/Express web server for dealing with users.
- MongoDB database to persist users and notes.
- React frontend for browsing and editing saved notes
- Chrome extension for generating and saving notes

Architecture decisions

- All requests from the extension will be sent through the server (login and save note)

## Parts of the app

### Chrome extension

The extension will

- log in a user
- send a request to the server to save a note.
- inject a content script with the modal
- add a listener for the shortcut for the modal

### Client & extension website

- the client:
- fetch the notes of the user and display them
- support edit, delete and add new notes

- the website
- marketing landing page with CTA. Pricing (with free plan :D)
- registering users and user dashboard
- serve the client to users.

### Server

- Serve the website and client
- route CRUD operations for data models to the DB
- Authenticate user and generate token (i'll use JWT for authentication)

### Database

- Persist the Article and User data models
