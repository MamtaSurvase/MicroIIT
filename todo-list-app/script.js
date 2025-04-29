function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onclick="toggleComplete(this)" />
      <span>${taskText}</span>
      <div class="actions">
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
      </div>
    `;
  
    document.getElementById("task-list").appendChild(li);
    input.value = "";
  }
  
  function toggleComplete(checkbox) {
    const li = checkbox.closest("li");
    li.classList.toggle("completed");
  }
  
  function deleteTask(btn) {
    const li = btn.closest("li");
    li.remove();
  }
  
  function editTask(btn) {
    const li = btn.closest("li");
    const span = li.querySelector("span");
    const newText = prompt("Edit task:", span.innerText);
    if (newText !== null && newText.trim() !== "") {
      span.innerText = newText.trim();
    }
  }
  