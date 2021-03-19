import { createTask } from './createTask'
import { createProject } from './createProject'
let myProjects = []
const home = createProject("Home")
home.tasks.push(createTask("Replace window"))
home.tasks.push(createTask("Get garage inspection"))
home.completed.push(createTask("Put away Christmas decorations"))
myProjects.push(home)
const work = createProject("Work")
work.color = "red"
const grinder = createTask("Fix grinder")
grinder.priority = "High"
grinder.dueDate = "2021-04-20"
grinder.description = "You have to open it up and start crankin' boiiii"
work.tasks.push(grinder)
work.completed.push(createTask("Do inventory"))
myProjects.push(work)
const shopping = createProject("Shopping")
shopping.color = "blue"
shopping.tasks.push(createTask("Eggs"))
shopping.tasks.push(createTask("Milk"))
myProjects.push(shopping)
const personal = createProject("Personal")
personal.color = "green"
personal.tasks.push(createTask("Karate lesson"))
personal.tasks.push(createTask("Guitar practice"))
personal.completed.push(createTask("Push-ups"))
myProjects.push(personal)
function demoProjects(){return myProjects}
export {demoProjects}