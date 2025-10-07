const form = document.getElementById('note-form');
const input = document.getElementById('note-input');
const notesList = document.getElementById('notes-list');

let notes = [];

function renderNotes() {
  notesList.innerHTML = ''; // Clear previous notes

  notes.forEach(note => {
    const li = document.createElement('li');
    li.textContent = note;
    notesList.appendChild(li);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop the form from reloading the page

  const newNote = input.value.trim();
  if (newNote !== '') {
    notes.push(newNote);
    input.value = '';
    renderNotes();
  }
});

// Optional: Add initial notes
notes.push('First note');
notes.push('Another note');
renderNotes();
