document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
    let noteInput = document.getElementById("noteInput");
    let notesContainer = document.getElementById("notesContainer");

    if (noteInput.value.trim() === "") return;

    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `<p>${noteInput.value}</p> <button onclick="deleteNote(this)">❌</button>`;

    notesContainer.appendChild(note);
    saveNotes();
    noteInput.value = "";
}

function deleteNote(element) {
    element.parentElement.remove();
    saveNotes();
}

function saveNotes() {
    let notes = [];
    document.querySelectorAll(".note p").forEach(note => {
        notes.push(note.textContent);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
    let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    let notesContainer = document.getElementById("notesContainer");

    savedNotes.forEach(text => {
        let note = document.createElement("div");
        note.classList.add("note");
        note.innerHTML = `<p>${text}</p> <button onclick="deleteNote(this)">❌</button>`;
        notesContainer.appendChild(note);
    });
}
