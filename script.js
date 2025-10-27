// Simple reveal-on-scroll using IntersectionObserver + tiny interactive touches

document.addEventListener('DOMContentLoaded', function () {
  // reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // tiny nav behavior: clicking anchors smooth scroll
  document.querySelectorAll('.nav a').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // header subtle parallax
  const hero = document.querySelector('.hero-card');
  if(hero){
    window.addEventListener('mousemove', (e)=>{
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      hero.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }
});
// ==========================
// 💬 Soft Skills Expanding Chips
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const chips = document.querySelectorAll(".soft-chip");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // Collapse any other expanded chip
      chips.forEach(c => {
        if (c !== chip) c.classList.remove("expanded");
      });

      // Toggle expansion for clicked one
      chip.classList.toggle("expanded");
    });
  });
});
