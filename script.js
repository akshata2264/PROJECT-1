// ===============================
// 1️⃣ Mobile Menu Toggle (Modern JS)
// ===============================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active'); // animate burger icon
});

// ===============================
// 2️⃣ Smooth Scroll for Navbar Links
// ===============================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active'); // close menu on mobile
    menuToggle.classList.remove('active');
  });
});

// ===============================
// 3️⃣ Hero Button Hover Effect (Modern)
// ===============================
const heroBtn = document.querySelector('.hero .btn');

heroBtn.addEventListener('mouseenter', () => {
  heroBtn.classList.add('btn-glow'); // add class for CSS glow
});

heroBtn.addEventListener('mouseleave', () => {
  heroBtn.classList.remove('btn-glow');
});

// ===============================
// 4️⃣ Portfolio Card Interaction (Modal instead of alert)
// ===============================
const cards = document.querySelectorAll('.portfolio .card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').textContent;
    const desc = card.querySelector('p').textContent;
    
    // Create modal dynamically
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());

    modal.addEventListener('click', e => {
      if(e.target === modal) modal.remove(); // click outside closes
    });
  });
});

// ===============================
// 5️⃣ Scroll Reveal Animation (Modern)
// ===============================
const sections = document.querySelectorAll('section');

const revealOnScroll = entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('reveal');
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});
