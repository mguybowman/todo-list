import { demoProjects } from './demoProjects'
let myProjects = []
myProjects = demoProjects()
function projects(){return myProjects}
export { projects }