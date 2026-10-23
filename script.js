const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
document.getElementById('year').textContent = new Date().getFullYear();

// Creates a basic editable resume text file. Replace the sample details first.
document.getElementById('resumeButton').addEventListener('click', () => {
  const resume = `MRIDUL TIWARI
B.Tech CSE Student | Python | AI | Machine Learning | HTML | CSS

PROFILE
Third-year B.Tech student interested in Python, Artificial Intelligence, Machine Learning and web development.

SKILLS
HTML, CSS, Python, Artificial Intelligence (learning), Machine Learning (learning), Git & GitHub, VS Code

EDUCATION
B.Tech (CSE) — Babu Banarasi Das University
[Expected graduation year]

PROJECTS
1. AI-Powered Water Treatment Plant Monitoring — [Add your actual contribution]
2. Plant Disease Detection — [Add your actual contribution]
3. Personal Portfolio Website

CONTACT
Email: mt2086151@gmail.com
GitHub: https://github.com/Mridultiwari681
LinkedIn: https://www.linkedin.com/

Please replace all bracketed/sample details with accurate information.`;
  const blob = new Blob([resume], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'Mridul_Tiwari_Resume.txt'; a.click();
  URL.revokeObjectURL(url);
});
document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Portfolio contact from ' + data.get('name'));
  const body = encodeURIComponent('From: ' + data.get('name') + ' (' + data.get('email') + ')\n\n' + data.get('message'));
  window.location.href = 'mailto:mt2086151@gmail.com?subject=' + subject + '&body=' + body;
});
