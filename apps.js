const toggleBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply saved theme preference
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
  document.body.classList.add('dark-mode');
}

// Toggle and save preference
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
});

// Update live time for Nairobi
function updateClock() {
  const now = new Date();
  const options = { 
    timeZone: 'Africa/Nairobi',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour12: false 
  };
  const formattedTime = now.toLocaleString('en-US', options);
  document.getElementById('clock').textContent = `🕒 Nairobi time: ${formattedTime}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial load