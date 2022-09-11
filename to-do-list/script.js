let inputSel = document.querySelector("[data-input]");
let addButton = document.querySelector("[data-button]");
let taskLine = document.querySelector("[data-tasks]");

addButton.addEventListener("click", () => {
    taskLine.innerHTML = `${inputSel.value}`;
})