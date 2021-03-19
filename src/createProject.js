const createProject = (title) => {
    let color = "gray"
    let tasks = []
    let completed = []
    return { title, color, tasks, completed }
}

export { createProject }