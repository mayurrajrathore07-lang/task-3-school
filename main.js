
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const langButton = document.querySelector('.btn-lang');
if (langButton) {
  langButton.addEventListener('click', () => {
    const current = langButton.textContent.trim().toLowerCase();
    langButton.textContent = current.includes('lang') ? 'hindi' : 'eng';
  });
}



const searchButton = document.querySelector('.btn-search');
if (searchButton) {
  searchButton.addEventListener('click', () => {
    alert('sorry');
  });
}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 20) {
    navbar.style.backgroundColor = '#002b65';.
  } else {
    navbar.style.backgroundColor = '#003D8A';
  }
});
