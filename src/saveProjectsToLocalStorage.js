import storageAvailable from './storageAvailable';
import projects from './projects';

function saveProjectsToLocalStorage() {
  if (storageAvailable('localStorage')) {
    localStorage.clear();
    localStorage.setItem('projects.length', projects().length);
    for (let i = 0; i < projects().length; i += 1) {
      const projectIndex = `projects[${i}]`;

      const projectTitle = projects()[i].title;
      localStorage.setItem(`${projectIndex}.title`, projectTitle);

      const projectColor = projects()[i].color;
      localStorage.setItem(`${projectIndex}.color`, projectColor);

      const projectTasks = `${projectIndex}.tasks`;
      localStorage.setItem(`${projectTasks}.length`, projects()[i].tasks.length);

      for (let j = 0; j < projects()[i].tasks.length; j += 1) {
        const taskIndex = `${projectTasks}[${j}]`;

        const taskTitle = projects()[i].tasks[j].title;
        localStorage.setItem(`${taskIndex}.title`, taskTitle);

        const taskDescription = projects()[i].tasks[j].description;
        localStorage.setItem(`${taskIndex}.description`, taskDescription);

        const taskDueDate = projects()[i].tasks[j].dueDate;
        localStorage.setItem(`${taskIndex}.dueDate`, taskDueDate);

        const taskPriority = projects()[i].tasks[j].priority;
        localStorage.setItem(`${taskIndex}.priority`, taskPriority);
      }

      const projectCompleted = `${projectIndex}.completed`;
      localStorage.setItem(`${projectCompleted}.length`, projects()[i].completed.length);

      for (let j = 0; j < projects()[i].completed.length; j += 1) {
        const completedIndex = `${projectCompleted}[${j}]`;

        const completedTitle = projects()[i].completed[j].title;
        localStorage.setItem(`${completedIndex}.title`, completedTitle);

        const completedDescription = projects()[i].completed[j].description;
        localStorage.setItem(`${completedIndex}.description`, completedDescription);

        const completedDueDate = projects()[i].completed[j].dueDate;
        localStorage.setItem(`${completedIndex}.dueDate`, completedDueDate);

        const completedPriority = projects()[i].completed[j].priority;
        localStorage.setItem(`${completedIndex}.priority`, completedPriority);
      }

      localStorage.setItem(`${projectCompleted}.length`, projects()[i].completed.length);
    }
  }
}

export default saveProjectsToLocalStorage;
