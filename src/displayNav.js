function displayNav() {
  const main = document.getElementById('main');
  const nav = document.createElement('div');
  nav.id = 'nav';
  main.appendChild(nav);
  const navInner = document.createElement('div');
  navInner.id = 'navInner';
  nav.appendChild(navInner);
}

export default displayNav;
