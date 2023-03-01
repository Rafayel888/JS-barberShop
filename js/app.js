const menu = document.getElementById('phone-menu');
const sidebar = document.getElementById('menu');
menu.onclick=function () {
  sidebar.classList.toggle('active')
}