import { projects } from './projects'

function populateNav(){
    const navInner = document.getElementById("navInner")
    navInner.innerHTML = ""
    for (let i = 0; i < projects().length; i++) {
        const tab = document.createElement("div")
        tab.className = "tab"
        tab.dataset.projectIndex = i
        const dot = document.createElement("div")
        dot.className = "dot " + projects()[i].color
        tab.appendChild(dot)
        const title = document.createElement("div")
        title.className = "title"
        title.innerHTML = projects()[i].title
        tab.appendChild(title)
        navInner.appendChild(tab)
    }
    for (let i = 0; i < 1; i++) {
        const tab = document.createElement("div")
        tab.className = "tab"
        tab.id = "addProjectTab"
        const plus = document.createElement("div")
        plus.className = "plus"
        plus.innerHTML = "+"
        tab.appendChild(plus)
        const title = document.createElement("div")
        title.className = "title"
        title.innerHTML = "Add Project"
        tab.appendChild(title)
        navInner.appendChild(tab)
    }
}

export { populateNav }