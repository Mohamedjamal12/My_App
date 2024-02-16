 
  function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteList = document.getElementById("noteList");

         
  if (noteInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = noteInput.value;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.onclick = function () {
      noteList.removeChild(li);
    };

	li.appendChild(deleteButton);
    noteList.appendChild(li);
    noteInput.value = "";
  }
}
    addNote();