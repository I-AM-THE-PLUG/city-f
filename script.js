// Mobile menu toggle
const menuBtn = document.getElementById('menuToggle');
menuBtn && menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('.nav-links');
  if (!nav) return;
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '72px';
  nav.style.right = '20px';
  nav.style.background = 'rgba(255,255,255,0.96)';
  nav.style.padding = '12px';
  nav.style.borderRadius = '10px';
  nav.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
});

// Programs expand/collapse (if you later want more details)
document.querySelectorAll('.card-cta').forEach(a => {
  a.addEventListener('click', () => {
    // default behaviour is navigation; you can intercept if you add data attributes
  });
});

// Subscribe (non-functional placeholder)
const subscribeBtn = document.getElementById('subscribeBtn');
subscribeBtn && subscribeBtn.addEventListener('click', () => {
  const email = document.getElementById('footer-email').value;
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  // Replace with real subscribe action (AJAX or form post)
  alert('Thanks — subscription received: ' + email);
});
