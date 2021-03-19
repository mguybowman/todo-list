function displayEditTaskPage(cpi, cti, task, list) {
    const content = document.getElementById("content")
    content.innerHTML = ""
    content.className = "active"

    const editTaskPage = document.createElement("div")
    editTaskPage.id = "editTaskPage"
    editTaskPage.className = "page"
    editTaskPage.dataset.projectIndex = cpi
    editTaskPage.dataset.taskIndex = cti
    editTaskPage.dataset.list = list
    content.appendChild(editTaskPage)

    const h2 = document.createElement("h2")
    h2.innerHTML = "Edit Task"
    editTaskPage.appendChild(h2)

    const input = document.createElement("input")
    input.id = "inputTitle"
    input.placeholder = "New task"
    input.maxLength = 140
    input.value = task.title
    editTaskPage.appendChild(input)

    const editTaskDescription = document.createElement("textarea")
    editTaskDescription.id = "inputDescription"
    editTaskDescription.placeholder = "Description"
    editTaskDescription.value = task.description
    editTaskPage.appendChild(editTaskDescription)

    const dateLabel = document.createElement("label")
    dateLabel.innerHTML = "Due:"
    dateLabel.id = "inputDateLabel"
    editTaskPage.appendChild(dateLabel)

    const date = document.createElement("input")
    date.id = "inputDate"
    date.type = "date"
    date.value = task.dueDate
    editTaskPage.appendChild(date)

    editTaskPage.appendChild(document.createElement("br"))

    const priorityLabel = document.createElement("label")
    priorityLabel.innerHTML = "Priority:"
    priorityLabel.id = "inputPriorityLabel"
    editTaskPage.appendChild(priorityLabel)

    const priority = document.createElement("select")
    priority.id = "inputPriority"
    editTaskPage.appendChild(priority)

    const low = document.createElement("option")
    low.innerHTML = "Low"
    low.value = "Low"
    priority.appendChild(low)

    const high = document.createElement("option")
    high.innerHTML = "High"
    high.value = "High"
    priority.appendChild(high)

    if (task.priority === "High") {
        priority.selectedIndex = "1"
    }

    const inputFooter = document.createElement("div")
    inputFooter.className = "inputFooter"

    const button = document.createElement("button")
    button.id = "editTaskButton"
    button.innerHTML = "Save"
    button.className = "addSave"
    inputFooter.appendChild(button)

    const cancel = document.createElement("button")
    cancel.id = "editTaskCancelButton"
    cancel.className = "cancel"
    cancel.innerHTML = "Cancel"
    inputFooter.appendChild(cancel)

    const deleteTask = document.createElement("button")
    deleteTask.id = "deleteTask"
    deleteTask.className = "delete"
    deleteTask.innerHTML = "Delete"
    inputFooter.appendChild(deleteTask)

    editTaskPage.appendChild(inputFooter)
}

export { displayEditTaskPage }