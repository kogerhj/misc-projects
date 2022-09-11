let inputSel = document.querySelector("[data-input]");
let addButton = document.querySelector("[data-button]");
let taskLine = document.querySelector("[data-tasks]");

addButton.addEventListener("click", () => {
    taskLine.innerHTML = `
    <div class="new-task" id="new-task" data-new-task>
        <span>${inputSel.value}</span>
        <button>X</button>
    </div>`
})

