function populateList(list, parent) {
  const parentElement = parent;
  parentElement.innerHTML = '';
  for (let i = 0; i < list.length; i += 1) {
    const task = document.createElement('div');
    task.className = 'task';

    const check = document.createElement('div');
    check.className = 'check';
    check.dataset.taskIndex = i;
    task.appendChild(check);

    const title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = list[i].title;
    task.appendChild(title);

    const edit = document.createElement('div');
    edit.className = 'edit';
    edit.innerHTML = 'edit';
    edit.dataset.taskIndex = i;
    task.appendChild(edit);

    if (list[i].description !== '') {
      const description = document.createElement('div');
      description.className = 'description';
      description.innerHTML = list[i].description;
      task.appendChild(description);
    }

    const finePrint = document.createElement('div');
    finePrint.className = 'finePrint';
    if (list[i].dueDate !== '' || list[i].priority !== 'Low') {
      task.appendChild(finePrint);
    }

    if (list[i].priority === 'High') {
      const priority = document.createElement('div');
      priority.className = 'priority';
      priority.innerHTML = 'High priority';
      finePrint.appendChild(priority);
    }

    if (list[i].dueDate !== '') {
      const dueDate = document.createElement('div');
      dueDate.className = 'dueDate';
      dueDate.innerHTML = list[i].dueDate;
      finePrint.appendChild(dueDate);
    }

    parent.appendChild(task);
  }
}

export default populateList;
