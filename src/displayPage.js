function displayPage() {
  const body = document.getElementById('body');
  const header = document.createElement('div');
  header.id = 'header';
  const h1 = document.createElement('h1');
  h1.innerHTML = 'To-Do List';
  header.appendChild(h1);
  const menuButton = document.createElement('button');
  menuButton.id = 'menuButton';
  const menuButtonInner = document.createElement('div');
  menuButtonInner.id = 'menuButtonInner';
  menuButton.appendChild(menuButtonInner);
  for (let i = 0; i < 3; i += 1) {
    const div = document.createElement('div');
    div.id = `hamburger${i}`;
    menuButtonInner.appendChild(div);
  }
  header.appendChild(menuButton);
  body.appendChild(header);
  const main = document.getElementById('main');
  body.appendChild(main);
}

export default displayPage;
