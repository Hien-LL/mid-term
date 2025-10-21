// Hiệu ứng navbar khi cuộn
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// Lấy tất cả link trong nav
const navLinks = document.querySelectorAll('.nav-links a');

// Khi click vào link, thêm class 'active'
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Hiệu ứng hiện dần khi cuộn xuống
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});
