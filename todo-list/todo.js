const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");


addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task!");
    addTask(taskText);
    taskInput.value = "";
});

function addTask(taskText) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
            <button class="done-btn">Done</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    
    li.querySelector(".done-btn").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

   
    li.querySelector(".edit-btn").addEventListener("click", () => {
        const newText = prompt("Edit task:", taskText);
        if (newText !== null && newText.trim() !== "") {
            li.querySelector("span").textContent = newText;
        }
    });

  
    li.querySelector(".delete-btn").addEventListener("click", () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
}
