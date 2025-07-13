<script>
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        e.preventDefault(); // prevent link navigation
        const parent = this.closest('.dropdown');
        
        // Close other dropdowns if open
        document.querySelectorAll('.dropdown').forEach(drop => {
          if (drop !== parent) drop.classList.remove('active');
        });

        // Toggle the current one
        parent.classList.toggle('active');
      });
    });

    // Optional: Click outside to close
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('active'));
      }
    });
  });
</script>

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Load theme from local storage
document.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('theme');
  if (stored) document.documentElement.setAttribute('data-theme', stored);
});

// Scroll animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
