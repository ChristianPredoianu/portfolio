const hamburger = document.getElementById('hamburger');

document.getElementById('hamburger').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('open');
  console.log(navLinks.classList);
});
