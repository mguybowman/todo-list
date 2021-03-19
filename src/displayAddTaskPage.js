function displayAddTaskPage(cpi) {
    const content = document.getElementById("content")
    content.innerHTML = ""
    content.className = "active"

    const addTaskPage = document.createElement("div")
    addTaskPage.id = "addTaskPage"
    addTaskPage.className = "page"
    addTaskPage.dataset.projectIndex = cpi
    content.appendChild(addTaskPage)

    const h2 = document.createElement("h2")
    h2.innerHTML = "New Task"
    addTaskPage.appendChild(h2)

    const input = document.createElement("input")
    input.id = "inputTitle"
    input.placeholder = "New task"
    input.maxLength = 140
    addTaskPage.appendChild(input)

    const addTaskDescription = document.createElement("textarea")
    addTaskDescription.id = "inputDescription"
    addTaskDescription.placeholder = "Description"
    addTaskPage.appendChild(addTaskDescription)

    const dateLabel = document.createElement("label")
    dateLabel.innerHTML = "Due:"
    dateLabel.id = "inputDateLabel"
    addTaskPage.appendChild(dateLabel)

    const date = document.createElement("input")
    date.id = "inputDate"
    date.type = "date"
    addTaskPage.appendChild(date)

    addTaskPage.appendChild(document.createElement("br"))

    const priorityLabel = document.createElement("label")
    priorityLabel.innerHTML = "Priority:"
    priorityLabel.id = "inputPriorityLabel"
    addTaskPage.appendChild(priorityLabel)

    const priority = document.createElement("select")
    priority.id = "inputPriority"
    addTaskPage.appendChild(priority)

    const low = document.createElement("option")
    low.innerHTML = "Low"
    low.value = "Low"
    priority.appendChild(low)

    const high = document.createElement("option")
    high.innerHTML = "High"
    high.value = "High"
    priority.appendChild(high)

    const inputFooter = document.createElement("div")
    inputFooter.className = "inputFooter"

    const button = document.createElement("button")
    button.id = "addTaskButton"
    button.innerHTML = "Add"
    button.className = "addSave"
    inputFooter.appendChild(button)

    const cancel = document.createElement("button")
    cancel.id = "addTaskCancelButton"
    cancel.className = "cancel"
    cancel.innerHTML = "Cancel"
    inputFooter.appendChild(cancel)
    addTaskPage.appendChild(inputFooter)
    input.focus()
}

export { displayAddTaskPage }