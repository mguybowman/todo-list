import displayAddProjectPage from './displayAddProjectPage';
import displayProjectPage from './displayProjectPage';
import focusNav from './focusNav';
import focusContent from './focusContent';
import projects from './projects';
import createProject from './createProject';
import populateNav from './populateNav';
import populateList from './populateList';
import displayAddTaskPage from './displayAddTaskPage';
import createTask from './createTask';
import setAddTaskBorder from './setAddTaskBorder';
import displayEditTaskPage from './displayEditTaskPage';
import displayDeleteTask from './displayDeleteTask';
import displayEditProjectPage from './displayEditProjectPage';
import displayDeleteProject from './displayDeleteProject';
import saveProjectsToLocalStorage from './saveProjectsToLocalStorage';

let memory;

function loadEventHandlers() {
  document.addEventListener('click', (e) => {
    const menuButton = document.getElementById('menuButton');
    const nav = document.getElementById('nav');
    const tabs = document.getElementsByClassName('tab');
    const content = document.getElementById('content');
    const api = document.getElementById('addProjectInput');
    const apb = document.getElementById('addProjectButton');
    const apcb = document.getElementById('addProjectCancelButton');
    const aps = document.getElementById('addProjectSwatch');
    const apcs = document.getElementById('addProjectColorSelect');
    const projectPage = document.getElementById('projectPage');
    const tasks = document.getElementById('tasks');
    const addTaskInner = document.getElementById('addTaskInner');
    const addTaskPage = document.getElementById('addTaskPage');
    const addTaskButton = document.getElementById('addTaskButton');
    const atcb = document.getElementById('addTaskCancelButton');
    const activeTab = document.getElementsByClassName('tab active')[0];
    const editTaskButton = document.getElementById('editTaskButton');
    const editTaskPage = document.getElementById('editTaskPage');
    const etcb = document.getElementById('editTaskCancelButton');
    const deleteTask = document.getElementById('deleteTask');
    const cdt = document.getElementById('confirmDeleteTask');
    const cdtc = document.getElementById('confirmDeleteTaskCancel');
    const editProject = document.getElementById('editProject');
    const editProjectButton = document.getElementById('editProjectButton');
    const editProjectPage = document.getElementById('editProjectPage');
    const eps = document.getElementById('editProjectSwatch');
    const epcs = document.getElementById('editProjectColorSelect');
    const epi = document.getElementById('editProjectInput');
    const deleteProject = document.getElementById('deleteProject');
    const epcb = document.getElementById('editProjectCancelButton');
    const cdp = document.getElementById('confirmDeleteProject');
    const cdpc = document.getElementById('confirmDeleteProjectCancel');
    const completedHeading = document.getElementById('completedHeading');
    const completed = document.getElementById('completed');
    const completedDropdown = document.getElementById('completedDropdown');
    const inputTitle = document.getElementById('inputTitle');
    const inputDescription = document.getElementById('inputDescription');
    const inputDate = document.getElementById('inputDate');
    const inputPriority = document.getElementById('inputPriority');

    const allChecks = document.getElementsByClassName('check');
    for (let i = 0; i < allChecks.length; i += 1) {
      if (e.path.includes(allChecks[i])) {
        const cti = allChecks[i].dataset.taskIndex;
        const cpi = projectPage.dataset.projectIndex;
        if (e.path.includes(tasks)) {
          projects()[cpi].completed.push(projects()[cpi].tasks[cti]);
          projects()[cpi].tasks.splice(cti, 1);
          saveProjectsToLocalStorage();
          completedHeading.className = 'show';
        } else if (e.path.includes(completed)) {
          projects()[cpi].tasks.push(projects()[cpi].completed[cti]);
          projects()[cpi].completed.splice(cti, 1);
          saveProjectsToLocalStorage();
          if (projects()[cpi].completed.length === 0) {
            completedHeading.className = 'hide';
            completedDropdown.className = 'down';
            completed.className = 'hide';
          }
        }
        populateList(projects()[cpi].tasks, tasks);
        populateList(projects()[cpi].completed, completed);
        setAddTaskBorder();
      }
    }

    const allEdits = document.getElementsByClassName('edit');
    for (let i = 0; i < allEdits.length; i += 1) {
      if (e.path.includes(allEdits[i])) {
        const cti = allEdits[i].dataset.taskIndex;
        const cpi = projectPage.dataset.projectIndex;
        if (e.path.includes(tasks)) {
          displayEditTaskPage(cpi, cti, projects()[cpi].tasks[cti], 'tasks');
        } else if (e.path.includes(completed)) {
          displayEditTaskPage(cpi, cti, projects()[cpi].completed[cti], 'completed');
        }
      }
    }

    if (e.path.includes(menuButton)) {
      focusNav();
      if (editProjectPage !== null) {
        displayProjectPage(editProjectPage.dataset.projectIndex);
      } else if (editTaskPage !== null) {
        displayProjectPage(editTaskPage.dataset.projectIndex);
      } else if (addTaskPage !== null) {
        displayProjectPage(addTaskPage.dataset.projectIndex);
      }
    } else if (e.path.includes(nav)) {
      for (let i = 0; i < tabs.length; i += 1) {
        if (e.path.includes(tabs[i])) {
          focusContent();
          if (tabs[i].className !== 'tab active') {
            tabs[i].className = 'tab active';
            if (tabs[i].id === 'addProjectTab') {
              memory = activeTab;
              displayAddProjectPage();
            } else if (tabs[i].dataset.projectIndex !== undefined) {
              const index = tabs[i].dataset.projectIndex;
              displayProjectPage(index);
            }
          }
        } else {
          tabs[i].className = 'tab';
        }
      }
    } else if (e.path.includes(apb)) {
      let title = api.value.trim();
      if (api.value === '') { title = 'Untitled'; }
      const newProject = createProject(title);
      newProject.color = apcs.value;
      projects().push(newProject);
      saveProjectsToLocalStorage();
      populateNav();
      const index = projects().length - 1;
      displayProjectPage(index);
    } else if (e.path.includes(apcs)) {
      aps.className = `swatch ${apcs.value}`;
    } else if (e.path.includes(apcb)) {
      activeTab.className = 'tab';
      focusNav();
      if (memory !== undefined) {
        const index = memory.dataset.projectIndex;
        displayProjectPage(index);
        memory.className = 'tab active';
      } else {
        content.innerHTML = '';
      }
    } else if (e.path.includes(addTaskInner)) {
      const cpi = projectPage.dataset.projectIndex;
      displayAddTaskPage(cpi);
    } else if (e.path.includes(addTaskButton)) {
      const cpi = addTaskPage.dataset.projectIndex;
      const title = inputTitle.value.trim();
      if (title === '') {
        inputTitle.placeholder = 'Give your task a title';
        inputTitle.focus();
        return;
      }
      const newTask = createTask(title);
      newTask.description = inputDescription.value.trim();
      newTask.dueDate = inputDate.value;
      newTask.priority = inputPriority.value;
      projects()[cpi].tasks.push(newTask);
      saveProjectsToLocalStorage();
      displayProjectPage(cpi);
    } else if (e.path.includes(atcb)) {
      const cpi = addTaskPage.dataset.projectIndex;
      displayProjectPage(cpi);
    } else if (e.path.includes(editTaskButton)) {
      const cpi = editTaskPage.dataset.projectIndex;
      const cti = editTaskPage.dataset.taskIndex;
      const { list } = editTaskPage.dataset;
      const task = projects()[cpi][list][cti];
      const title = inputTitle.value.trim();
      if (title === '') {
        inputTitle.placeholder = 'Give your task a title';
        inputTitle.focus();
        return;
      }
      task.title = title;
      task.description = inputDescription.value.trim();
      task.dueDate = inputDate.value;
      task.priority = inputPriority.value;
      saveProjectsToLocalStorage();
      displayProjectPage(cpi);
      if (projects()[cpi].completed.length !== 0 && list === 'completed') {
        document.getElementById('completedDropdown').className = 'up';
        document.getElementById('completed').className = 'show';
      }
    } else if (e.path.includes(etcb)) {
      const cpi = editTaskPage.dataset.projectIndex;
      const { list } = editTaskPage.dataset;
      displayProjectPage(cpi);
      if (projects()[cpi].completed.length !== 0 && list === 'completed') {
        document.getElementById('completedDropdown').className = 'up';
        document.getElementById('completed').className = 'show';
      }
    } else if (e.path.includes(deleteTask)) {
      if (deleteTask.dataset.active !== 'active') {
        deleteTask.dataset.active = 'active';
        displayDeleteTask();
      }
    } else if (e.path.includes(cdt)) {
      const cpi = editTaskPage.dataset.projectIndex;
      const cti = editTaskPage.dataset.taskIndex;
      const { list } = editTaskPage.dataset;
      projects()[cpi][list].splice(cti, 1);
      saveProjectsToLocalStorage();
      displayProjectPage(cpi);
      if (projects()[cpi].completed.length !== 0 && list === 'completed') {
        document.getElementById('completedDropdown').className = 'up';
        document.getElementById('completed').className = 'show';
      }
    } else if (e.path.includes(cdtc)) {
      document.getElementById('deleteTaskPrompt').remove();
      deleteTask.dataset.active = '';
    } else if (e.path.includes(editProject)) {
      const cpi = projectPage.dataset.projectIndex;
      displayEditProjectPage(projects()[cpi], cpi);
    } else if (e.path.includes(editProjectButton)) {
      const cpi = editProjectPage.dataset.projectIndex;
      let title = epi.value.trim();
      if (epi.value === '') { title = 'Untitled'; }
      projects()[cpi].title = title;
      projects()[cpi].color = epcs.value;
      saveProjectsToLocalStorage();
      populateNav();
      displayProjectPage(cpi);
    } else if (e.path.includes(epcs)) {
      eps.className = `swatch ${epcs.value}`;
    } else if (e.path.includes(epcb)) {
      const cpi = editProjectPage.dataset.projectIndex;
      displayProjectPage(cpi);
    } else if (e.path.includes(deleteProject)) {
      if (deleteProject.dataset.active !== 'active') {
        deleteProject.dataset.active = 'active';
        displayDeleteProject();
      }
    } else if (e.path.includes(cdp)) {
      const cpi = editProjectPage.dataset.projectIndex;
      projects().splice(cpi, 1);
      saveProjectsToLocalStorage();
      content.innerHTML = '';
      populateNav();
      focusNav();
    } else if (e.path.includes(cdpc)) {
      document.getElementById('deleteProjectPrompt').remove();
      deleteProject.dataset.active = '';
    } else if (e.path.includes(completedHeading)) {
      if (completedDropdown.className === 'down') {
        completedDropdown.className = 'up';
        completed.className = 'show';
      } else if (completedDropdown.className === 'up') {
        completedDropdown.className = 'down';
        completed.className = 'hide';
      }
    }
  });
}

export default loadEventHandlers;
