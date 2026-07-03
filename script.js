function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll('section, div, h1, h2, p, .project-card').forEach(el => {
  el.setAttribute('data-aos', 'fade-up');  
});


AOS.init({
  duration: 1000,      
  delay: 1000,          
  easing: 'ease-in-out',
  offset: 120,        
  once: true,          
  mirror: false        
});
