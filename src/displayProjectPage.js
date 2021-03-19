import populateList from './populateList';
import projects from './projects';
import displayAddTask from './displayAddTask';

function displayProjectPage(index) {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const projectPage = document.createElement('div');
  projectPage.id = 'projectPage';
  projectPage.className = 'page';
  projectPage.dataset.projectIndex = index;
  content.appendChild(projectPage);

  const h2 = document.createElement('h2');
  h2.innerHTML = projects()[index].title;
  projectPage.appendChild(h2);

  const edit = document.createElement('div');
  edit.innerHTML = 'edit';
  edit.id = 'editProject';
  h2.appendChild(edit);

  const tasks = document.createElement('div');
  tasks.id = 'tasks';
  projectPage.appendChild(tasks);

  populateList(projects()[index].tasks, tasks);
  displayAddTask(projectPage);

  const completedHeading = document.createElement('div');
  completedHeading.id = 'completedHeading';
  projectPage.appendChild(completedHeading);
  if (projects()[index].completed.length === 0) {
    completedHeading.className = 'hide';
  } else {
    completedHeading.className = 'show';
  }

  const h3 = document.createElement('h3');
  h3.innerHTML = 'Completed';
  completedHeading.appendChild(h3);

  const completedDropdown = document.createElement('div');
  completedDropdown.id = 'completedDropdown';
  completedDropdown.className = 'down';
  completedHeading.appendChild(completedDropdown);

  const completed = document.createElement('div');
  completed.id = 'completed';
  completed.className = 'hide';
  projectPage.appendChild(completed);

  populateList(projects()[index].completed, completed);
}

export default displayProjectPage;
