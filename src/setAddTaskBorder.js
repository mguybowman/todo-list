function setAddTaskBorder() {
    const tasks = document.getElementById("tasks")
    const addTaskInner = document.getElementById("addTaskInner")
    if (tasks.hasChildNodes() === true) {
        addTaskInner.className = "topBorder"
    } else {
        addTaskInner.className = ""
    }
}

export { setAddTaskBorder }