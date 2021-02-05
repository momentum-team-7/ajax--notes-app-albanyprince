/* globals fetch, moment */
const url = 'http://localhost:3000/notes/'
// const form = document.querySelector('')
const lilButton = document.getElementById('lil-Button')

const notesContainer = document.getElementById('notes-container')
        
// lilButton.addEventListener('click',listAllNotes)                                        

function listAllNotes() {
fetch(url)
    .then(function (response){
        return response.json()

    })         
    .then(function (data){
        console.log(data)
        for (let note of data) {
            console.log(note)
            renderNoteItem(note)
        }
    })
}
function renderNoteItem(note){
    const noteEl = document.createElement('li')
    noteEl.id = note.id   
    renderNoteText(noteEl, note) 
    notesContainer.appendChild(noteEl)  
} 
function renderNoteText (noteEl, note) {
noteEl.innerHTML = `<p>${note.body}</p>`
}  

function createNote (noteText) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title:noteTitle,
            body: noteText
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderNoteItem(data)
        })
}
listAllNotes()

function addNewNote() {

}