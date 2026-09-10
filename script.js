/*
  SCRIPT.JS
  ------------------------------------------------------------
  You shouldn't need to edit this file. It reads CONFIG (from
  config.js) and PROJECTS (from projects.js) and renders them
  into the page.
  ------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderProjects();
  renderAbout();
  renderContact();
  runIntroTyping();
});

function renderHero() {
  document.getElementById('hero-name').textContent = CONFIG.name;
  document.getElementById('hero-tagline').textContent = CONFIG.tagline;
  document.title = `${CONFIG.name} — ${CONFIG.role}`;

  const statusEl = document.getElementById('hero-status');
  if (CONFIG.status) {
    statusEl.textContent = CONFIG.status;
  }
}

function renderProjects() {
  const list = document.getElementById('project-list');

  if (!PROJECTS || PROJECTS.length === 0) {
    list.innerHTML = `<p class="empty-note">No projects yet — add some in projects.js</p>`;
    return;
  }

  list.innerHTML = PROJECTS.map(p => `
    <article class="project">
      <div class="project-top">
        <h3 class="project-name"><span class="marker">&gt;</span> ${escapeHtml(p.name)}</h3>
        ${p.year ? `<span class="project-year">${escapeHtml(p.year)}</span>` : ''}
      </div>
      <p class="project-desc">${escapeHtml(p.description)}</p>
      <div class="project-meta">
        ${p.tech && p.tech.length ? `<div class="tech-tags">${p.tech.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
        <div class="project-links">
          ${p.link ? `<a href="${escapeAttr(p.link)}" target="_blank" rel="noopener">code</a>` : ''}
          ${p.demo ? `<a href="${escapeAttr(p.demo)}" target="_blank" rel="noopener">demo</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

function renderAbout() {
  document.getElementById('about-text').textContent = CONFIG.about;
}

function renderContact() {
  const list = document.getElementById('contact-list');
  const rows = [];

  if (CONFIG.links.email) {
    rows.push({ label: 'email', value: CONFIG.links.email, href: `mailto:${CONFIG.links.email}` });
  }
  if (CONFIG.links.github) {
    rows.push({ label: 'github', value: prettyUrl(CONFIG.links.github), href: CONFIG.links.github });
  }
  if (CONFIG.links.linkedin) {
    rows.push({ label: 'linkedin', value: prettyUrl(CONFIG.links.linkedin), href: CONFIG.links.linkedin });
  }
  if (CONFIG.links.twitter) {
    rows.push({ label: 'twitter', value: prettyUrl(CONFIG.links.twitter), href: CONFIG.links.twitter });
  }

  list.innerHTML = rows.map(r => `
    <li>
      <a href="${escapeAttr(r.href)}" target="_blank" rel="noopener">
        <span>${escapeHtml(r.value)}</span>
        <span class="contact-label">${escapeHtml(r.label)}</span>
      </a>
    </li>
  `).join('');
}

function runIntroTyping() {
  const target = document.getElementById('typed');
  const cursor = document.getElementById('cursor');
  const text = `whoami — ${CONFIG.role.toLowerCase()}`;

  // Respect reduced-motion preference: just show the final text.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    target.textContent = text;
    return;
  }

  let i = 0;
  const interval = setInterval(() => {
    target.textContent = text.slice(0, i + 1);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 32);
}

function prettyUrl(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, '&quot;');
}
