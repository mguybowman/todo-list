import { getDotColors } from './getDotColors'

function displayEditProjectPage(project, cpi) {
    const content = document.getElementById("content")
    content.innerHTML = ""

    const editProjectPage = document.createElement("div")
    editProjectPage.id = "editProjectPage"
    editProjectPage.className = "page"
    editProjectPage.dataset.projectIndex = cpi
    content.appendChild(editProjectPage)

    const h2 = document.createElement("h2")
    h2.innerHTML = "Edit Project"
    editProjectPage.appendChild(h2)

    const input = document.createElement("input")
    input.id = "editProjectInput"
    input.placeholder = "Project title"
    input.maxLength = 50
    input.value = project.title
    editProjectPage.appendChild(input)

    const colorRow = document.createElement("div")
    colorRow.className = "colorRow"
    editProjectPage.appendChild(colorRow)

    const label = document.createElement("label")
    label.innerHTML = "Color:"
    label.className = "projectColorLabel"
    colorRow.appendChild(label)

    const colorSelect = document.createElement("select")
    colorSelect.className = "colorSelect"
    colorSelect.id = "editProjectColorSelect"
    colorSelect.selectedIndex = "0"
    colorRow.appendChild(colorSelect)

    for (let i = 0; i < getDotColors().length; i++) {
        const option = document.createElement("option")
        option.value = getDotColors()[i]
        option.innerHTML = getDotColors()[i]
        colorSelect.appendChild(option)
        if (getDotColors()[i] === project.color) {
            colorSelect.selectedIndex = "" + i
        }
    }
    const swatchIndex = parseInt(colorSelect.selectedIndex)

    const swatch = document.createElement("div")
    swatch.className = "swatch " + getDotColors()[swatchIndex]
    swatch.id = "editProjectSwatch"
    colorRow.appendChild(swatch)

    const inputFooter = document.createElement("div")
    inputFooter.className = "inputFooter"
    const button = document.createElement("button")
    button.id = "editProjectButton"
    button.innerHTML = "Save"
    button.className = "addSave"
    inputFooter.appendChild(button)
    const cancel = document.createElement("button")
    cancel.id = "editProjectCancelButton"
    cancel.className = "cancel"
    cancel.innerHTML = "Cancel"
    inputFooter.appendChild(cancel)

    const deleteProject = document.createElement("button")
    deleteProject.id = "deleteProject"
    deleteProject.className = "delete"
    deleteProject.innerHTML = "Delete"
    inputFooter.appendChild(deleteProject)

    editProjectPage.appendChild(inputFooter)
}

export { displayEditProjectPage }