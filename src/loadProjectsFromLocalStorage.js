import storageAvailable from './storageAvailable';
import createProject from './createProject';
import createTask from './createTask';

function loadProjectsFromLocalStorage() {
  const result = [];
  if (storageAvailable('localStorage')) {
    const projectsLength = parseInt(localStorage.getItem('projects.length'), 10);
    for (let i = 0; i < projectsLength; i += 1) {
      const projectKey = `projects[${i}]`;
      const projectTitle = localStorage.getItem(`${projectKey}.title`);
      const projectColor = localStorage.getItem(`${projectKey}.color`);
      const project = createProject(projectTitle);
      project.color = projectColor;
      result.push(project);

      const projectTasksLength = parseInt(localStorage.getItem(`${projectKey}.tasks.length`), 10);
      for (let j = 0; j < projectTasksLength; j += 1) {
        const taskKey = `${projectKey}.tasks[${j}]`;
        const taskTitle = localStorage.getItem(`${taskKey}.title`);
        const taskDescription = localStorage.getItem(`${taskKey}.description`);
        const taskDueDate = localStorage.getItem(`${taskKey}.dueDate`);
        const taskPriority = localStorage.getItem(`${taskKey}.priority`);
        const task = createTask(taskTitle);
        task.description = taskDescription;
        task.dueDate = taskDueDate;
        task.priority = taskPriority;
        project.tasks.push(task);
      }

      const projectCompletedLength = parseInt(localStorage.getItem(`${projectKey}.completed.length`), 10);
      for (let j = 0; j < projectCompletedLength; j += 1) {
        const completedKey = `${projectKey}.completed[${j}]`;
        const completedTitle = localStorage.getItem(`${completedKey}.title`);
        const completedDescription = localStorage.getItem(`${completedKey}.description`);
        const completedDueDate = localStorage.getItem(`${completedKey}.dueDate`);
        const completedPriority = localStorage.getItem(`${completedKey}.priority`);
        const completed = createTask(completedTitle);
        completed.description = completedDescription;
        completed.dueDate = completedDueDate;
        completed.priority = completedPriority;
        project.completed.push(completed);
      }
    }
  }
  return result;
}

export default loadProjectsFromLocalStorage;
