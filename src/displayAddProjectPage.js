import getDotColors from './getDotColors';

function displayAddProjectPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const addProjectPage = document.createElement('div');
  addProjectPage.id = 'addProjectPage';
  addProjectPage.className = 'page';

  const h2 = document.createElement('h2');
  h2.innerHTML = 'Add Project';
  addProjectPage.appendChild(h2);
  const input = document.createElement('input');
  input.id = 'addProjectInput';
  input.placeholder = 'Project title';
  input.maxLength = 50;
  addProjectPage.appendChild(input);

  const colorRow = document.createElement('div');
  colorRow.className = 'colorRow';
  addProjectPage.appendChild(colorRow);

  const label = document.createElement('label');
  label.innerHTML = 'Color:';
  label.className = 'projectColorLabel';
  colorRow.appendChild(label);

  const colorSelect = document.createElement('select');
  colorSelect.className = 'colorSelect';
  colorSelect.id = 'addProjectColorSelect';
  colorRow.appendChild(colorSelect);

  for (let i = 0; i < getDotColors().length; i += 1) {
    const option = document.createElement('option');
    option.value = getDotColors()[i];
    option.innerHTML = getDotColors()[i];
    colorSelect.appendChild(option);
  }

  const swatch = document.createElement('div');
  swatch.className = `swatch ${getDotColors()[0]}`;
  swatch.id = 'addProjectSwatch';
  colorRow.appendChild(swatch);

  const inputFooter = document.createElement('div');
  inputFooter.className = 'inputFooter';
  const button = document.createElement('button');
  button.id = 'addProjectButton';
  button.innerHTML = 'Add';
  button.className = 'addSave';
  inputFooter.appendChild(button);
  const cancel = document.createElement('button');
  cancel.id = 'addProjectCancelButton';
  cancel.className = 'cancel';
  cancel.innerHTML = 'Cancel';
  inputFooter.appendChild(cancel);
  addProjectPage.appendChild(inputFooter);
  content.appendChild(addProjectPage);
  input.focus();
}

export default displayAddProjectPage;
