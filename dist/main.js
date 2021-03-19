/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\nconst createProject = (title) => {\n    let color = \"gray\"\n    let tasks = []\n    let completed = []\n    return { title, color, tasks, completed }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/createProject.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\nconst createTask = (title) => {\n    let description = \"\"\n    let dueDate = \"\"\n    let priority = \"Low\"\n    return { title, description, dueDate, priority }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/createTask.js?");

/***/ }),

/***/ "./src/demoProjects.js":
/*!*****************************!*\
  !*** ./src/demoProjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"demoProjects\": () => (/* binding */ demoProjects)\n/* harmony export */ });\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\n\nlet myProjects = []\nconst home = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)(\"Home\")\nhome.tasks.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Replace window\"))\nhome.tasks.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Get garage inspection\"))\nhome.completed.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Put away Christmas decorations\"))\nmyProjects.push(home)\nconst work = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)(\"Work\")\nwork.color = \"red\"\nconst grinder = (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Fix grinder\")\ngrinder.priority = \"High\"\ngrinder.dueDate = \"2021-04-20\"\ngrinder.description = \"You have to open it up and start crankin' boiiii\"\nwork.tasks.push(grinder)\nwork.completed.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Do inventory\"))\nmyProjects.push(work)\nconst shopping = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)(\"Shopping\")\nshopping.color = \"blue\"\nshopping.tasks.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Eggs\"))\nshopping.tasks.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Milk\"))\nmyProjects.push(shopping)\nconst personal = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)(\"Personal\")\npersonal.color = \"green\"\npersonal.tasks.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Karate lesson\"))\npersonal.tasks.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Guitar practice\"))\npersonal.completed.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Push-ups\"))\nmyProjects.push(personal)\nfunction demoProjects(){return myProjects}\n\n\n//# sourceURL=webpack://todo-list/./src/demoProjects.js?");

/***/ }),

/***/ "./src/displayAddProjectPage.js":
/*!**************************************!*\
  !*** ./src/displayAddProjectPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAddProjectPage\": () => (/* binding */ displayAddProjectPage)\n/* harmony export */ });\n/* harmony import */ var _getDotColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDotColors */ \"./src/getDotColors.js\");\n\n\nfunction displayAddProjectPage(){\n    const content = document.getElementById(\"content\")\n    content.innerHTML = \"\"\n\n    const addProjectPage = document.createElement(\"div\")\n    addProjectPage.id = \"addProjectPage\"\n    addProjectPage.className = \"page\"\n\n    const h2 = document.createElement(\"h2\")\n    h2.innerHTML = \"Add Project\"\n    addProjectPage.appendChild(h2)\n    const input = document.createElement(\"input\")\n    input.id = \"addProjectInput\"\n    input.placeholder = \"Project title\"\n    input.maxLength = 50\n    addProjectPage.appendChild(input)\n\n    const colorRow = document.createElement(\"div\")\n    colorRow.className = \"colorRow\"\n    addProjectPage.appendChild(colorRow)\n\n    const label = document.createElement(\"label\")\n    label.innerHTML = \"Color:\"\n    label.className = \"projectColorLabel\"\n    colorRow.appendChild(label)\n\n    const colorSelect = document.createElement(\"select\")\n    colorSelect.className = \"colorSelect\"\n    colorSelect.id = \"addProjectColorSelect\"\n    colorRow.appendChild(colorSelect)\n\n    for (let i = 0; i < (0,_getDotColors__WEBPACK_IMPORTED_MODULE_0__.getDotColors)().length; i++) {\n        const option = document.createElement(\"option\")\n        option.value = (0,_getDotColors__WEBPACK_IMPORTED_MODULE_0__.getDotColors)()[i]\n        option.innerHTML = (0,_getDotColors__WEBPACK_IMPORTED_MODULE_0__.getDotColors)()[i]\n        colorSelect.appendChild(option)\n    }\n\n    const swatch = document.createElement(\"div\")\n    swatch.className = \"swatch \" + (0,_getDotColors__WEBPACK_IMPORTED_MODULE_0__.getDotColors)()[0]\n    swatch.id = \"addProjectSwatch\"\n    colorRow.appendChild(swatch)\n\n    const inputFooter = document.createElement(\"div\")\n    inputFooter.className = \"inputFooter\"\n    const button = document.createElement(\"button\")\n    button.id = \"addProjectButton\"\n    button.innerHTML = \"Add\"\n    button.className = \"addSave\"\n    inputFooter.appendChild(button)\n    const cancel = document.createElement(\"button\")\n    cancel.id = \"addProjectCancelButton\"\n    cancel.className = \"cancel\"\n    cancel.innerHTML = \"Cancel\"\n    inputFooter.appendChild(cancel)\n    addProjectPage.appendChild(inputFooter)\n    content.appendChild(addProjectPage)\n    input.focus()\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayAddProjectPage.js?");

/***/ }),

/***/ "./src/displayAddTask.js":
/*!*******************************!*\
  !*** ./src/displayAddTask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAddTask\": () => (/* binding */ displayAddTask)\n/* harmony export */ });\n/* harmony import */ var _setAddTaskBorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAddTaskBorder */ \"./src/setAddTaskBorder.js\");\n\n\nfunction displayAddTask(parent) {\n    const addTask = document.createElement(\"div\")\n    addTask.id = \"addTask\"\n    parent.appendChild(addTask)\n\n    const addTaskInner = document.createElement(\"div\")\n    addTaskInner.id = \"addTaskInner\"\n    addTask.appendChild(addTaskInner)\n\n    ;(0,_setAddTaskBorder__WEBPACK_IMPORTED_MODULE_0__.setAddTaskBorder)()\n\n    const plus = document.createElement(\"div\")\n    plus.className = \"plus\"\n    plus.innerHTML = \"+\"\n    addTaskInner.appendChild(plus)\n\n    const text = document.createElement(\"div\")\n    text.innerHTML = \"Add task\"\n    text.className = \"text\"\n    addTaskInner.appendChild(text)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayAddTask.js?");

/***/ }),

/***/ "./src/displayAddTaskPage.js":
/*!***********************************!*\
  !*** ./src/displayAddTaskPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAddTaskPage\": () => (/* binding */ displayAddTaskPage)\n/* harmony export */ });\nfunction displayAddTaskPage(cpi) {\n    const content = document.getElementById(\"content\")\n    content.innerHTML = \"\"\n    content.className = \"active\"\n\n    const addTaskPage = document.createElement(\"div\")\n    addTaskPage.id = \"addTaskPage\"\n    addTaskPage.className = \"page\"\n    addTaskPage.dataset.projectIndex = cpi\n    content.appendChild(addTaskPage)\n\n    const h2 = document.createElement(\"h2\")\n    h2.innerHTML = \"New Task\"\n    addTaskPage.appendChild(h2)\n\n    const input = document.createElement(\"input\")\n    input.id = \"inputTitle\"\n    input.placeholder = \"New task\"\n    input.maxLength = 140\n    addTaskPage.appendChild(input)\n\n    const addTaskDescription = document.createElement(\"textarea\")\n    addTaskDescription.id = \"inputDescription\"\n    addTaskDescription.placeholder = \"Description\"\n    addTaskPage.appendChild(addTaskDescription)\n\n    const dateLabel = document.createElement(\"label\")\n    dateLabel.innerHTML = \"Due:\"\n    dateLabel.id = \"inputDateLabel\"\n    addTaskPage.appendChild(dateLabel)\n\n    const date = document.createElement(\"input\")\n    date.id = \"inputDate\"\n    date.type = \"date\"\n    addTaskPage.appendChild(date)\n\n    addTaskPage.appendChild(document.createElement(\"br\"))\n\n    const priorityLabel = document.createElement(\"label\")\n    priorityLabel.innerHTML = \"Priority:\"\n    priorityLabel.id = \"inputPriorityLabel\"\n    addTaskPage.appendChild(priorityLabel)\n\n    const priority = document.createElement(\"select\")\n    priority.id = \"inputPriority\"\n    addTaskPage.appendChild(priority)\n\n    const low = document.createElement(\"option\")\n    low.innerHTML = \"Low\"\n    low.value = \"Low\"\n    priority.appendChild(low)\n\n    const high = document.createElement(\"option\")\n    high.innerHTML = \"High\"\n    high.value = \"High\"\n    priority.appendChild(high)\n\n    const inputFooter = document.createElement(\"div\")\n    inputFooter.className = \"inputFooter\"\n\n    const button = document.createElement(\"button\")\n    button.id = \"addTaskButton\"\n    button.innerHTML = \"Add\"\n    button.className = \"addSave\"\n    inputFooter.appendChild(button)\n\n    const cancel = document.createElement(\"button\")\n    cancel.id = \"addTaskCancelButton\"\n    cancel.className = \"cancel\"\n    cancel.innerHTML = \"Cancel\"\n    inputFooter.appendChild(cancel)\n    addTaskPage.appendChild(inputFooter)\n    input.focus()\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayAddTaskPage.js?");

/***/ }),

/***/ "./src/displayContent.js":
/*!*******************************!*\
  !*** ./src/displayContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayContent\": () => (/* binding */ displayContent)\n/* harmony export */ });\nfunction displayContent() {\n    const main = document.getElementById(\"main\")\n    const content = document.createElement(\"div\")\n    content.id = \"content\"\n    main.appendChild(content)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayContent.js?");

/***/ }),

/***/ "./src/displayDeleteProject.js":
/*!*************************************!*\
  !*** ./src/displayDeleteProject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayDeleteProject\": () => (/* binding */ displayDeleteProject)\n/* harmony export */ });\nfunction displayDeleteProject() {\n    const editProjectPage = document.getElementById(\"editProjectPage\")\n\n    const deleteProjectPrompt = document.createElement(\"div\")\n    deleteProjectPrompt.id = \"deleteProjectPrompt\"\n    editProjectPage.appendChild(deleteProjectPrompt)\n\n    const label = document.createElement(\"label\")\n    label.innerHTML = \"Delete this Project?\"\n    deleteProjectPrompt.appendChild(label)\n\n    const button = document.createElement(\"button\")\n    button.innerHTML = \"Confirm deletion\"\n    button.className = \"confirmDelete\"\n    button.id = \"confirmDeleteProject\"\n    deleteProjectPrompt.appendChild(button)\n\n    const cancel = document.createElement(\"button\")\n    cancel.className = \"cancel\"\n    cancel.id = \"confirmDeleteProjectCancel\"\n    cancel.innerHTML = \"Cancel\"\n    deleteProjectPrompt.appendChild(cancel)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayDeleteProject.js?");

/***/ }),

/***/ "./src/displayDeleteTask.js":
/*!**********************************!*\
  !*** ./src/displayDeleteTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayDeleteTask\": () => (/* binding */ displayDeleteTask)\n/* harmony export */ });\nfunction displayDeleteTask() {\n    const editTaskPage = document.getElementById(\"editTaskPage\")\n\n    const deleteTaskPrompt = document.createElement(\"div\")\n    deleteTaskPrompt.id = \"deleteTaskPrompt\"\n    editTaskPage.appendChild(deleteTaskPrompt)\n\n    const label = document.createElement(\"label\")\n    label.innerHTML = \"Delete this task?\"\n    deleteTaskPrompt.appendChild(label)\n\n    const button = document.createElement(\"button\")\n    button.innerHTML = \"Confirm deletion\"\n    button.className = \"confirmDelete\"\n    button.id = \"confirmDeleteTask\"\n    deleteTaskPrompt.appendChild(button)\n\n    const cancel = document.createElement(\"button\")\n    cancel.className = \"cancel\"\n    cancel.id = \"confirmDeleteTaskCancel\"\n    cancel.innerHTML = \"Cancel\"\n    deleteTaskPrompt.appendChild(cancel)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayDeleteTask.js?");

/***/ }),

/***/ "./src/displayEditProjectPage.js":
/*!***************************************!*\
  !*** ./src/displayEditProjectPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayEditProjectPage\": () => (/* binding */ displayEditProjectPage)\n/* harmony export */ });\n/* harmony import */ var _getDotColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDotColors */ \"./src/getDotColors.js\");\n\n\nfunction displayEditProjectPage(project, cpi) {\n    const content = document.getElementById(\"content\")\n    content.innerHTML = \"\"\n\n    const editProjectPage = document.createElement(\"div\")\n    editProjectPage.id = \"editProjectPage\"\n    editProjectPage.className = \"page\"\n    editProjectPage.dataset.projectIndex = cpi\n    content.appendChild(editProjectPage)\n\n    const h2 = document.createElement(\"h2\")\n    h2.innerHTML = \"Edit Project\"\n    editProjectPage.appendChild(h2)\n\n    const input = document.createElement(\"input\")\n    input.id = \"editProjectInput\"\n    input.placeholder = \"Project title\"\n    input.maxLength = 50\n    input.value = project.title\n    editProjectPage.appendChild(input)\n\n    const colorRow = document.createElement(\"div\")\n    colorRow.className = \"colorRow\"\n    editProjectPage.appendChild(colorRow)\n\n    const label = document.createElement(\"label\")\n    label.innerHTML = \"Color:\"\n    label.className = \"projectColorLabel\"\n    colorRow.appendChild(label)\n\n    const colorSelect = document.createElement(\"select\")\n    colorSelect.className = \"colorSelect\"\n    colorSelect.id = \"editProjectColorSelect\"\n    colorSelect.selectedIndex = \"0\"\n    colorRow.appendChild(colorSelect)\n\n    for (let i = 0; i < (0,_getDotColors__WEBPACK_IMPORTED_MODULE_0__.getDotColors)().length; i++) {\n        const option = document.createElement(\"option\")\n        option.value = (0,_getDotColors__WEBPACK_IMPORTED_MODULE_0__.getDotColors)()[i]\n        option.innerHTML = (0,_getDotColors__WEBPACK_IMPORTED_MODULE_0__.getDotColors)()[i]\n        colorSelect.appendChild(option)\n        if ((0,_getDotColors__WEBPACK_IMPORTED_MODULE_0__.getDotColors)()[i] === project.color) {\n            colorSelect.selectedIndex = \"\" + i\n        }\n    }\n    const swatchIndex = parseInt(colorSelect.selectedIndex)\n\n    const swatch = document.createElement(\"div\")\n    swatch.className = \"swatch \" + (0,_getDotColors__WEBPACK_IMPORTED_MODULE_0__.getDotColors)()[swatchIndex]\n    swatch.id = \"editProjectSwatch\"\n    colorRow.appendChild(swatch)\n\n    const inputFooter = document.createElement(\"div\")\n    inputFooter.className = \"inputFooter\"\n    const button = document.createElement(\"button\")\n    button.id = \"editProjectButton\"\n    button.innerHTML = \"Save\"\n    button.className = \"addSave\"\n    inputFooter.appendChild(button)\n    const cancel = document.createElement(\"button\")\n    cancel.id = \"editProjectCancelButton\"\n    cancel.className = \"cancel\"\n    cancel.innerHTML = \"Cancel\"\n    inputFooter.appendChild(cancel)\n\n    const deleteProject = document.createElement(\"button\")\n    deleteProject.id = \"deleteProject\"\n    deleteProject.className = \"delete\"\n    deleteProject.innerHTML = \"Delete\"\n    inputFooter.appendChild(deleteProject)\n\n    editProjectPage.appendChild(inputFooter)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayEditProjectPage.js?");

/***/ }),

/***/ "./src/displayEditTaskPage.js":
/*!************************************!*\
  !*** ./src/displayEditTaskPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayEditTaskPage\": () => (/* binding */ displayEditTaskPage)\n/* harmony export */ });\nfunction displayEditTaskPage(cpi, cti, task) {\n    const content = document.getElementById(\"content\")\n    content.innerHTML = \"\"\n    content.className = \"active\"\n\n    const editTaskPage = document.createElement(\"div\")\n    editTaskPage.id = \"editTaskPage\"\n    editTaskPage.className = \"page\"\n    editTaskPage.dataset.projectIndex = cpi\n    editTaskPage.dataset.taskIndex = cti\n    content.appendChild(editTaskPage)\n\n    const h2 = document.createElement(\"h2\")\n    h2.innerHTML = \"Edit Task\"\n    editTaskPage.appendChild(h2)\n\n    const input = document.createElement(\"input\")\n    input.id = \"inputTitle\"\n    input.placeholder = \"New task\"\n    input.maxLength = 140\n    input.value = task.title\n    editTaskPage.appendChild(input)\n\n    const editTaskDescription = document.createElement(\"textarea\")\n    editTaskDescription.id = \"inputDescription\"\n    editTaskDescription.placeholder = \"Description\"\n    editTaskDescription.value = task.description\n    editTaskPage.appendChild(editTaskDescription)\n\n    const dateLabel = document.createElement(\"label\")\n    dateLabel.innerHTML = \"Due:\"\n    dateLabel.id = \"inputDateLabel\"\n    editTaskPage.appendChild(dateLabel)\n\n    const date = document.createElement(\"input\")\n    date.id = \"inputDate\"\n    date.type = \"date\"\n    date.value = task.dueDate\n    editTaskPage.appendChild(date)\n\n    editTaskPage.appendChild(document.createElement(\"br\"))\n\n    const priorityLabel = document.createElement(\"label\")\n    priorityLabel.innerHTML = \"Priority:\"\n    priorityLabel.id = \"inputPriorityLabel\"\n    editTaskPage.appendChild(priorityLabel)\n\n    const priority = document.createElement(\"select\")\n    priority.id = \"inputPriority\"\n    editTaskPage.appendChild(priority)\n\n    const low = document.createElement(\"option\")\n    low.innerHTML = \"Low\"\n    low.value = \"Low\"\n    priority.appendChild(low)\n\n    const high = document.createElement(\"option\")\n    high.innerHTML = \"High\"\n    high.value = \"High\"\n    priority.appendChild(high)\n\n    if (task.priority === \"High\") {\n        priority.selectedIndex = \"1\"\n    }\n\n    const inputFooter = document.createElement(\"div\")\n    inputFooter.className = \"inputFooter\"\n\n    const button = document.createElement(\"button\")\n    button.id = \"editTaskButton\"\n    button.innerHTML = \"Save\"\n    button.className = \"addSave\"\n    inputFooter.appendChild(button)\n\n    const cancel = document.createElement(\"button\")\n    cancel.id = \"editTaskCancelButton\"\n    cancel.className = \"cancel\"\n    cancel.innerHTML = \"Cancel\"\n    inputFooter.appendChild(cancel)\n\n    const deleteTask = document.createElement(\"button\")\n    deleteTask.id = \"deleteTask\"\n    deleteTask.className = \"delete\"\n    deleteTask.innerHTML = \"Delete\"\n    inputFooter.appendChild(deleteTask)\n\n    editTaskPage.appendChild(inputFooter)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayEditTaskPage.js?");

/***/ }),

/***/ "./src/displayNav.js":
/*!***************************!*\
  !*** ./src/displayNav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayNav\": () => (/* binding */ displayNav)\n/* harmony export */ });\nfunction displayNav() {\n    const main = document.getElementById(\"main\")\n    const nav = document.createElement(\"div\")\n    nav.id = \"nav\"\n    main.appendChild(nav)\n    const navInner = document.createElement(\"div\")\n    navInner.id = \"navInner\"\n    nav.appendChild(navInner)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayNav.js?");

/***/ }),

/***/ "./src/displayPage.js":
/*!****************************!*\
  !*** ./src/displayPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPage\": () => (/* binding */ displayPage)\n/* harmony export */ });\nfunction displayPage(){\n    const body = document.getElementById(\"body\")\n    const header = document.createElement(\"div\")\n    header.id = \"header\"\n    const h1 = document.createElement(\"h1\")\n    h1.innerHTML = \"To-Do List\"\n    header.appendChild(h1)\n    const menuButton = document.createElement(\"button\")\n    menuButton.id = \"menuButton\"\n    const menuButtonInner = document.createElement(\"div\")\n    menuButtonInner.id = \"menuButtonInner\"\n    menuButton.appendChild(menuButtonInner)\n    for (let i = 0; i < 3; i ++) {\n        const div = document.createElement(\"div\")\n        div.id = \"hamburger\" + i\n        menuButtonInner.appendChild(div)\n    }\n    header.appendChild(menuButton)\n    body.appendChild(header)\n    const main = document.getElementById(\"main\")\n    body.appendChild(main)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayPage.js?");

/***/ }),

/***/ "./src/displayProjectPage.js":
/*!***********************************!*\
  !*** ./src/displayProjectPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjectPage\": () => (/* binding */ displayProjectPage)\n/* harmony export */ });\n/* harmony import */ var _populateList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateList */ \"./src/populateList.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _displayAddTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayAddTask */ \"./src/displayAddTask.js\");\n\n\n\n\nfunction displayProjectPage(index) {\n    const content = document.getElementById(\"content\")\n    content.innerHTML = \"\"\n\n    const projectPage = document.createElement(\"div\") \n    projectPage.id = \"projectPage\"\n    projectPage.className = \"page\"\n    projectPage.dataset.projectIndex = index\n    content.appendChild(projectPage)\n\n    const h2 = document.createElement(\"h2\")\n    h2.innerHTML = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projects)()[index].title\n    projectPage.appendChild(h2)\n\n    const edit = document.createElement(\"div\")\n    edit.innerHTML = \"edit\"\n    edit.id = \"editProject\"\n    h2.appendChild(edit)\n\n    const tasks = document.createElement(\"div\")\n    tasks.id = \"tasks\"\n    projectPage.appendChild(tasks)\n\n    ;(0,_populateList__WEBPACK_IMPORTED_MODULE_0__.populateList)((0,_projects__WEBPACK_IMPORTED_MODULE_1__.projects)()[index].tasks, tasks)\n    ;(0,_displayAddTask__WEBPACK_IMPORTED_MODULE_2__.displayAddTask)(projectPage)\n\n    const completedHeading = document.createElement(\"div\")\n    completedHeading.id = \"completedHeading\"\n    projectPage.appendChild(completedHeading)\n    if ((0,_projects__WEBPACK_IMPORTED_MODULE_1__.projects)()[index].completed.length === 0){\n        completedHeading.className = \"hide\"\n    } else {\n        completedHeading.className = \"show\"\n    }\n\n    const h3 = document.createElement(\"h3\")\n    h3.innerHTML = \"Completed\"\n    completedHeading.appendChild(h3)\n\n    const completedDropdown = document.createElement(\"div\")\n    completedDropdown.id = \"completedDropdown\"\n    completedDropdown.className = \"down\"\n    completedHeading.appendChild(completedDropdown)\n\n    const completed = document.createElement(\"div\")\n    completed.id = \"completed\"\n    completed.className = \"hide\"\n    projectPage.appendChild(completed)\n\n    ;(0,_populateList__WEBPACK_IMPORTED_MODULE_0__.populateList)((0,_projects__WEBPACK_IMPORTED_MODULE_1__.projects)()[index].completed, completed)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayProjectPage.js?");

/***/ }),

/***/ "./src/focusContent.js":
/*!*****************************!*\
  !*** ./src/focusContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"focusContent\": () => (/* binding */ focusContent)\n/* harmony export */ });\nfunction focusContent() {\n    document.getElementById(\"nav\").className = \"mHide\"\n    document.getElementById(\"menuButton\").className = \"mShow\"\n    document.getElementById(\"content\").className = \"mShow\"\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/focusContent.js?");

/***/ }),

/***/ "./src/focusNav.js":
/*!*************************!*\
  !*** ./src/focusNav.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"focusNav\": () => (/* binding */ focusNav)\n/* harmony export */ });\nfunction focusNav() {\n    document.getElementById(\"nav\").className = \"mShow\"\n    document.getElementById(\"menuButton\").className = \"mHide\"\n    document.getElementById(\"content\").className = \"mHide\"\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/focusNav.js?");

/***/ }),

/***/ "./src/getDotColors.js":
/*!*****************************!*\
  !*** ./src/getDotColors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDotColors\": () => (/* binding */ getDotColors)\n/* harmony export */ });\nlet dotColors = []\ndotColors.push(\"gray\")\ndotColors.push(\"pink\")\ndotColors.push(\"red\")\ndotColors.push(\"orange\")\ndotColors.push(\"yellow\")\ndotColors.push(\"green\")\ndotColors.push(\"emerald\")\ndotColors.push(\"teal\")\ndotColors.push(\"sky\")\ndotColors.push(\"blue\")\ndotColors.push(\"purple\")\ndotColors.push(\"rose\")\n\nfunction getDotColors(){\n    return dotColors\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/getDotColors.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayPage */ \"./src/displayPage.js\");\n/* harmony import */ var _displayNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayNav */ \"./src/displayNav.js\");\n/* harmony import */ var _populateNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateNav */ \"./src/populateNav.js\");\n/* harmony import */ var _displayContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayContent */ \"./src/displayContent.js\");\n/* harmony import */ var _loadEventHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadEventHandlers */ \"./src/loadEventHandlers.js\");\n/* harmony import */ var _focusNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./focusNav */ \"./src/focusNav.js\");\n\n\n\n\n\n\n\n(0,_displayPage__WEBPACK_IMPORTED_MODULE_0__.displayPage)()\n;(0,_displayNav__WEBPACK_IMPORTED_MODULE_1__.displayNav)()\n;(0,_populateNav__WEBPACK_IMPORTED_MODULE_2__.populateNav)()\n;(0,_displayContent__WEBPACK_IMPORTED_MODULE_3__.displayContent)()\n;(0,_focusNav__WEBPACK_IMPORTED_MODULE_5__.focusNav)()\n;(0,_loadEventHandlers__WEBPACK_IMPORTED_MODULE_4__.loadEventHandlers)()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/loadEventHandlers.js":
/*!**********************************!*\
  !*** ./src/loadEventHandlers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadEventHandlers\": () => (/* binding */ loadEventHandlers)\n/* harmony export */ });\n/* harmony import */ var _displayAddProjectPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayAddProjectPage */ \"./src/displayAddProjectPage.js\");\n/* harmony import */ var _displayProjectPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProjectPage */ \"./src/displayProjectPage.js\");\n/* harmony import */ var _focusNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusNav */ \"./src/focusNav.js\");\n/* harmony import */ var _focusContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusContent */ \"./src/focusContent.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _populateNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./populateNav */ \"./src/populateNav.js\");\n/* harmony import */ var _populateList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./populateList */ \"./src/populateList.js\");\n/* harmony import */ var _displayAddTaskPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displayAddTaskPage */ \"./src/displayAddTaskPage.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n/* harmony import */ var _setAddTaskBorder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setAddTaskBorder */ \"./src/setAddTaskBorder.js\");\n/* harmony import */ var _displayEditTaskPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./displayEditTaskPage */ \"./src/displayEditTaskPage.js\");\n/* harmony import */ var _displayDeleteTask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./displayDeleteTask */ \"./src/displayDeleteTask.js\");\n/* harmony import */ var _displayEditProjectPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./displayEditProjectPage */ \"./src/displayEditProjectPage.js\");\n/* harmony import */ var _displayDeleteProject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./displayDeleteProject */ \"./src/displayDeleteProject.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet memory\n\nfunction loadEventHandlers(){\n    document.addEventListener(\"click\", function(e){\n        const menuButton = document.getElementById(\"menuButton\")\n        const nav = document.getElementById(\"nav\")\n        const tabs = document.getElementsByClassName(\"tab\")\n        const content = document.getElementById(\"content\")\n        const api = document.getElementById(\"addProjectInput\")\n        const apb = document.getElementById(\"addProjectButton\")\n        const apcb = document.getElementById(\"addProjectCancelButton\")\n        const aps = document.getElementById(\"addProjectSwatch\")\n        const apcs = document.getElementById(\"addProjectColorSelect\")\n        const projectPage = document.getElementById(\"projectPage\")\n        const tasks = document.getElementById(\"tasks\")\n        const addTaskInner = document.getElementById(\"addTaskInner\")\n        const addTaskPage = document.getElementById(\"addTaskPage\")\n        const addTaskButton = document.getElementById(\"addTaskButton\")\n        const atcb = document.getElementById(\"addTaskCancelButton\")\n        const activeTab = document.getElementsByClassName(\"tab active\")[0]\n        const editTaskButton = document.getElementById(\"editTaskButton\")\n        const editTaskPage = document.getElementById(\"editTaskPage\")\n        const etcb = document.getElementById(\"editTaskCancelButton\")\n        const deleteTask = document.getElementById(\"deleteTask\")\n        const cdt = document.getElementById(\"confirmDeleteTask\")\n        const cdtc = document.getElementById(\"confirmDeleteTaskCancel\")\n        const editProject = document.getElementById(\"editProject\")\n        const editProjectButton = document.getElementById(\"editProjectButton\")\n        const editProjectPage = document.getElementById(\"editProjectPage\")\n        const eps = document.getElementById(\"editProjectSwatch\")\n        const epcs = document.getElementById(\"editProjectColorSelect\")\n        const epi = document.getElementById(\"editProjectInput\")\n        const deleteProject = document.getElementById(\"deleteProject\")\n        const epcb = document.getElementById(\"editProjectCancelButton\")\n        const cdp = document.getElementById(\"confirmDeleteProject\")\n        const cdpc = document.getElementById(\"confirmDeleteProjectCancel\")\n        const completedHeading = document.getElementById(\"completedHeading\")\n        const completed = document.getElementById(\"completed\")\n        const completedDropdown = document.getElementById(\"completedDropdown\")\n\n        const allChecks = document.getElementsByClassName(\"check\")\n        for (let i = 0; i < allChecks.length; i++){\n            if (e.path.includes(allChecks[i])) {\n                const cti = allChecks[i].dataset.taskIndex\n                const cpi = projectPage.dataset.projectIndex\n                if (e.path.includes(tasks)) {\n                    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].completed.push((0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].tasks[cti])\n                    ;(0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].tasks.splice(cti, 1)\n                    completedHeading.className = \"show\"\n                } else if (e.path.includes(completed)) {\n                    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].tasks.push((0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].completed[cti])\n                    ;(0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].completed.splice(cti, 1)\n                    if ((0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].completed.length === 0) {\n                        completedHeading.className = \"hide\"\n                        completedDropdown.className = \"down\"\n                        completed.className = \"hide\"\n                    }\n                }\n                (0,_populateList__WEBPACK_IMPORTED_MODULE_7__.populateList)((0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].tasks, tasks)\n                ;(0,_populateList__WEBPACK_IMPORTED_MODULE_7__.populateList)((0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].completed, completed)\n                ;(0,_setAddTaskBorder__WEBPACK_IMPORTED_MODULE_10__.setAddTaskBorder)()\n            }\n        }\n\n        const allEdits = document.getElementsByClassName(\"edit\")\n        for (let i = 0; i < allEdits.length; i++){\n            if (e.path.includes(allEdits[i])) {\n                const cti = allEdits[i].dataset.taskIndex\n                const cpi = projectPage.dataset.projectIndex\n                if (e.path.includes(tasks)) {\n                    (0,_displayEditTaskPage__WEBPACK_IMPORTED_MODULE_11__.displayEditTaskPage)(cpi, cti, (0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].tasks[cti])\n                } else if (e.path.includes(completed)) {\n                    (0,_displayEditTaskPage__WEBPACK_IMPORTED_MODULE_11__.displayEditTaskPage)(cpi, cti, (0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].completed[cti])\n                }\n            }\n        }\n\n        if(e.path.includes(menuButton)) {\n            (0,_focusNav__WEBPACK_IMPORTED_MODULE_2__.focusNav)()\n            if (editProjectPage !== null) {\n                (0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(editProjectPage.dataset.projectIndex)\n            } else if (editTaskPage !== null) {\n                (0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(editTaskPage.dataset.projectIndex)\n            } else if (addTaskPage !== null) {\n                (0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(addTaskPage.dataset.projectIndex)\n            }\n        } else if (e.path.includes(nav)) {\n            for (let i = 0; i < tabs.length; i++) {\n                if (e.path.includes(tabs[i])) {\n                    (0,_focusContent__WEBPACK_IMPORTED_MODULE_3__.focusContent)()\n                    if (tabs[i].className !== \"tab active\"){\n                        tabs[i].className = \"tab active\"\n                        if (tabs[i].id === \"addProjectTab\") {\n                            memory = activeTab\n                            ;(0,_displayAddProjectPage__WEBPACK_IMPORTED_MODULE_0__.displayAddProjectPage)()\n                        } else if (tabs[i].dataset.projectIndex !== undefined) {\n                            let index = tabs[i].dataset.projectIndex\n                            ;(0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(index)\n                        }\n                    }\n                } else {\n                    tabs[i].className = \"tab\"\n                }\n            }\n        } else if (e.path.includes(apb)) {\n            let title = api.value.trim()\n            if (api.value === \"\") {title = \"Untitled\"}\n            let newProject = (0,_createProject__WEBPACK_IMPORTED_MODULE_5__.createProject)(title)\n            newProject.color = apcs.value\n            ;(0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)().push(newProject)\n            ;(0,_populateNav__WEBPACK_IMPORTED_MODULE_6__.populateNav)()\n            let index = (0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)().length - 1\n            ;(0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(index)\n        } else if (e.path.includes(apcs)) {\n            aps.className = \"swatch \" + apcs.value\n\n        } else if (e.path.includes(apcb)) {\n            activeTab.className = \"tab\"\n            ;(0,_focusNav__WEBPACK_IMPORTED_MODULE_2__.focusNav)()\n            if (memory !== undefined) {\n                let index = memory.dataset.projectIndex\n                ;(0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(index)\n                memory.className = \"tab active\"\n            } else {\n                content.innerHTML = \"\"\n            }\n        } else if (e.path.includes(addTaskInner)) {\n            const cpi = projectPage.dataset.projectIndex\n            ;(0,_displayAddTaskPage__WEBPACK_IMPORTED_MODULE_8__.displayAddTaskPage)(cpi)\n        } else if (e.path.includes(addTaskButton)) {\n            const cpi = addTaskPage.dataset.projectIndex\n            let title = inputTitle.value.trim()\n            if (title === \"\") {\n                inputTitle.placeholder = \"Give your task a title\"\n                inputTitle.focus()\n                return\n            }\n            const newTask = (0,_createTask__WEBPACK_IMPORTED_MODULE_9__.createTask)(title)\n            newTask.description = inputDescription.value.trim()\n            newTask.dueDate = inputDate.value\n            newTask.priority = inputPriority.value\n            ;(0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].tasks.push(newTask)\n            ;(0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(cpi)\n        } else if (e.path.includes(atcb)) {\n            const cpi = addTaskPage.dataset.projectIndex\n            ;(0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(cpi)\n        } else if (e.path.includes(editTaskButton)) {\n            const cpi = editTaskPage.dataset.projectIndex\n            const cti = editTaskPage.dataset.taskIndex\n            const task = (0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].tasks[cti]\n            let title = inputTitle.value.trim()\n            if (title === \"\") {\n                inputTitle.placeholder = \"Give your task a title\"\n                inputTitle.focus()\n                return\n            }\n            task.title = title\n            task.description = inputDescription.value.trim()\n            task.dueDate = inputDate.value\n            task.priority = inputPriority.value\n            ;(0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(cpi)\n        } else if (e.path.includes(etcb)){\n            const cpi = editTaskPage.dataset.projectIndex\n            ;(0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(cpi)\n        } else if (e.path.includes(deleteTask)) {\n            if (deleteTask.dataset.active !== \"active\"){\n                deleteTask.dataset.active = \"active\"\n                ;(0,_displayDeleteTask__WEBPACK_IMPORTED_MODULE_12__.displayDeleteTask)()\n            }\n        } else if (e.path.includes(cdt)) {\n            const cpi = editTaskPage.dataset.projectIndex\n            const cti = editTaskPage.dataset.taskIndex\n            ;(0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].tasks.splice(cti, 1)\n            ;(0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(cpi)\n        } else if (e.path.includes(cdtc)) {\n            document.getElementById(\"deleteTaskPrompt\").remove()\n            deleteTask.dataset.active = \"\"\n        } else if (e.path.includes(editProject)) {\n            const cpi = projectPage.dataset.projectIndex\n            ;(0,_displayEditProjectPage__WEBPACK_IMPORTED_MODULE_13__.displayEditProjectPage)((0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi], cpi)\n        } else if (e.path.includes(editProjectButton)) {\n            const cpi = editProjectPage.dataset.projectIndex\n            let title = epi.value.trim()\n            if (epi.value === \"\") {title = \"Untitled\"}\n            (0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].title = title\n            ;(0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)()[cpi].color = epcs.value\n            ;(0,_populateNav__WEBPACK_IMPORTED_MODULE_6__.populateNav)()\n            ;(0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(cpi)\n        } else if (e.path.includes(epcs)) {\n            eps.className = \"swatch \" + epcs.value\n        } else if (e.path.includes(epcb)) {\n            const cpi = editProjectPage.dataset.projectIndex\n            ;(0,_displayProjectPage__WEBPACK_IMPORTED_MODULE_1__.displayProjectPage)(cpi)\n        } else if (e.path.includes(deleteProject)) {\n            if (deleteProject.dataset.active !== \"active\"){\n                deleteProject.dataset.active = \"active\"\n                ;(0,_displayDeleteProject__WEBPACK_IMPORTED_MODULE_14__.displayDeleteProject)()\n            }\n        } else if (e.path.includes(cdp)) {\n            const cpi = editProjectPage.dataset.projectIndex\n            ;(0,_projects__WEBPACK_IMPORTED_MODULE_4__.projects)().splice(cpi,1)\n            content.innerHTML = \"\"\n            ;(0,_populateNav__WEBPACK_IMPORTED_MODULE_6__.populateNav)()\n            ;(0,_focusNav__WEBPACK_IMPORTED_MODULE_2__.focusNav)()\n        } else if (e.path.includes(cdpc)) {\n            document.getElementById(\"deleteProjectPrompt\").remove()\n            deleteProject.dataset.active = \"\"\n        } else if (e.path.includes(completedHeading)) {\n            if (completedDropdown.className === \"down\") {\n                completedDropdown.className = \"up\"\n                completed.className = \"show\"\n            } else if (completedDropdown.className === \"up\") {\n                completedDropdown.className = \"down\"\n                completed.className = \"hide\"\n            }\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/loadEventHandlers.js?");

/***/ }),

/***/ "./src/populateList.js":
/*!*****************************!*\
  !*** ./src/populateList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateList\": () => (/* binding */ populateList)\n/* harmony export */ });\nfunction populateList(list, parent) {\n    parent.innerHTML = \"\"\n    for (let i = 0; i < list.length; i++) {\n        const task = document.createElement(\"div\")\n        task.className = \"task\"\n\n        const check = document.createElement(\"div\")\n        check.className = \"check\"\n        check.dataset.taskIndex = i\n        task.appendChild(check)\n\n        const title = document.createElement(\"div\")\n        title.className = \"title\"\n        title.innerHTML = list[i].title\n        task.appendChild(title)\n\n        const edit = document.createElement(\"div\")\n        edit.className = \"edit\"\n        edit.innerHTML = \"edit\"\n        edit.dataset.taskIndex = i\n        task.appendChild(edit)\n\n        if (list[i].description !== \"\") {\n            const description = document.createElement(\"div\")\n            description.className = \"description\"\n            description.innerHTML = list[i].description\n            task.appendChild(description)\n        }\n\n        const finePrint = document.createElement(\"div\")\n        finePrint.className = \"finePrint\"\n        if (list[i].dueDate !== \"\" || list[i].priority !== \"Low\"){\n            task.appendChild(finePrint)\n        }\n\n        if (list[i].priority === \"High\") {\n            const priority = document.createElement(\"div\")\n            priority.className = \"priority\"\n            priority.innerHTML = \"High priority\"\n            finePrint.appendChild(priority)\n        }\n\n        if (list[i].dueDate !== \"\") {\n            const dueDate = document.createElement(\"div\")\n            dueDate.className = \"dueDate\"\n            dueDate.innerHTML = list[i].dueDate\n            finePrint.appendChild(dueDate)\n        }\n\n        parent.appendChild(task)\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/populateList.js?");

/***/ }),

/***/ "./src/populateNav.js":
/*!****************************!*\
  !*** ./src/populateNav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateNav\": () => (/* binding */ populateNav)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nfunction populateNav(){\n    const navInner = document.getElementById(\"navInner\")\n    navInner.innerHTML = \"\"\n    for (let i = 0; i < (0,_projects__WEBPACK_IMPORTED_MODULE_0__.projects)().length; i++) {\n        const tab = document.createElement(\"div\")\n        tab.className = \"tab\"\n        tab.dataset.projectIndex = i\n        const dot = document.createElement(\"div\")\n        dot.className = \"dot \" + (0,_projects__WEBPACK_IMPORTED_MODULE_0__.projects)()[i].color\n        tab.appendChild(dot)\n        const title = document.createElement(\"div\")\n        title.className = \"title\"\n        title.innerHTML = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.projects)()[i].title\n        tab.appendChild(title)\n        navInner.appendChild(tab)\n    }\n    for (let i = 0; i < 1; i++) {\n        const tab = document.createElement(\"div\")\n        tab.className = \"tab\"\n        tab.id = \"addProjectTab\"\n        const plus = document.createElement(\"div\")\n        plus.className = \"plus\"\n        plus.innerHTML = \"+\"\n        tab.appendChild(plus)\n        const title = document.createElement(\"div\")\n        title.className = \"title\"\n        title.innerHTML = \"Add Project\"\n        tab.appendChild(title)\n        navInner.appendChild(tab)\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/populateNav.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _demoProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demoProjects */ \"./src/demoProjects.js\");\n\nlet myProjects = []\nmyProjects = (0,_demoProjects__WEBPACK_IMPORTED_MODULE_0__.demoProjects)()\nfunction projects(){return myProjects}\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/setAddTaskBorder.js":
/*!*********************************!*\
  !*** ./src/setAddTaskBorder.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAddTaskBorder\": () => (/* binding */ setAddTaskBorder)\n/* harmony export */ });\nfunction setAddTaskBorder() {\n    const tasks = document.getElementById(\"tasks\")\n    const addTaskInner = document.getElementById(\"addTaskInner\")\n    if (tasks.hasChildNodes() === true) {\n        addTaskInner.className = \"topBorder\"\n    } else {\n        addTaskInner.className = \"\"\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/setAddTaskBorder.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;