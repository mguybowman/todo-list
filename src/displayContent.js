function displayContent() {
  const main = document.getElementById('main');
  const content = document.createElement('div');
  content.id = 'content';
  main.appendChild(content);
}

export default displayContent;
