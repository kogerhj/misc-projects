let inputSel = document.querySelector("[data-input]");
let addButton = document.querySelector("[data-button]");
let taskLine = document.querySelector("[data-tasks]");
let deleteButton = document.querySelector("[data-delete]");

addButton.addEventListener("click", () => {
    if(inputSel.value === "") return;

    taskLine.innerHTML += `
    <div class="new-task" id="new-task" data-new-task>
        <span>${inputSel.value}</span>
        <button class="delete" data-delete>X</button>
    </div>`

    let currentTasks = document.querySelectorAll(".delete");
    
    for (let i = 0; i < currentTasks.length; i++) {
        currentTasks[i].onclick = function() {
            this.parentNode.remove();
        }
        }
    }
    
)



