document.getElementById('scrollButton').addEventListener('click', function() {
  document.getElementById('thingSection').scrollIntoView({ behavior: 'smooth' });
});


function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}
