const createTask = (title) => {
    let description = ""
    let dueDate = ""
    let priority = "Low"
    return { title, description, dueDate, priority }
}

export { createTask }