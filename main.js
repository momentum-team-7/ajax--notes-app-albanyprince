/* globals fetch, moment */
const url = 'http://localhost:3000/notes/'
// const form = document.querySelector('')
// const lilButton = document.getElementById('lil-Button')

const notesContainer = document.getElementById('notes-container')

     
// lilButton.addEventListener('click',listAllNotes)      
let form = document.querySelector('form');                         

form.addEventListener('submit', event => {
    const noteTitle = document.querySelector('.note-title').value

    const noteTextBox = document.querySelector('.note-text-box').value  
    
    createNote(noteTitle, noteTextBox)

})       

notesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit')){
        editNote(event.target)
    }
    if (event.target.classList.contains('delete')) {
        deleteNote(event.target)
    }
    if (event.target.classList.contains ('update-note')){
        updateNote(event.target)
    }
    if (event.target.classList.contains('cancel')){
        hideEditControls(event.target.parentElement)
    }
})

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
    const noteEl = document.createElement('p')
    noteEl.id = note.id  
    renderNoteText(noteEl, note) 
    notesContainer.appendChild(noteEl)  
} 

function renderNoteText (noteEl, note) {
noteEl.innerHTML = `<p>${note.body}</p>`
}  

function createNote (noteTitle, noteTextBox) {
    
    
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: noteTitle,
            body: noteTextBox,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderNoteItem(data)
        })
       

    }

function deleteNote (element){
    const noteId = element.parentElement.id
        fetch(`http://localhost:300/notes@{noteId}`, {method: 'DELETE'})
        .then(function () {
            element.parentElement.remove()
        })
}



//     function updateNote (element) {
//         let noteTitle = document.querySelector(".note-title").value
//         let noteTextBox = document.querySelector(".note-text-box").value
//         fetch(`http://localhost:3000/todos/${NoteId}`, {
//             method: 'PATCH',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 item: noteTextBox.value,
//                 // updated_at: moment().format()
//     })
//   })
//     .then(function (res) {
//       return res.json()
//     })
//     .then(function (data) {
//       console.log(data)
//       // update the item in the DOM
//       renderNoteText(data)
//     })
    
//     }



listAllNotes()

// function addNewNote() {
//     let noteTitle = document.querySelector(".note-title").value
//     let noteTextBox = document.querySelector(".note-text-box").value
// }