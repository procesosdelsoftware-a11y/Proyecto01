document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Resaltar enlace activo automáticamente
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});