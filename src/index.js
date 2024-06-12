document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", (event) => {
  event.preventDefault()
  let text = document.getElementById("new-task-description").value 
  let task = document.getElementById("tasks")
  let newElement = document.createElement("li")
  newElement.textContent = text
  task.appendChild(newElement)
})
});