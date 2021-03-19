import loadProjectsFromLocalStorage from './loadProjectsFromLocalStorage';

let myProjects = [];
myProjects = loadProjectsFromLocalStorage();
function projects() { return myProjects; }
export default projects;
