const experience = [
  {
    period: 'Март 2022 — настоящее время',
    company: 'Atom (АО «Кама»)',
    role: 'Директор департамента онлайн‑сервисов',
    text: 'Создание структуры компании (15+ отделов, 200+ сотрудников), стратегическое и бюджетное планирование >2 млрд ₽, запуск ключевых цифровых сервисов, развитие культуры и взаимодействие с органами власти.'
  },
  {
    period: 'Апрель 2021 — февраль 2022',
    company: 'KFC (YUM! Restaurants International Russia, CIS & CEE)',
    role: 'Руководитель внедрения технических решений и стандартов',
    text: 'Разработка и реализация digital‑стратегии, внедрение платформ и стандартов, управление вендорами, поддержка выхода на новые рынки.'
  },
  {
    period: 'Март 2019 — март 2021',
    company: 'KFC',
    role: 'Руководитель проектного офиса',
    text: 'Управление портфелем IT‑проектов, координация кросс‑функциональных команд до 1000 человек, ML‑прогнозирование, приоритизация и бюджетный контроль.'
  },
  {
    period: 'Сентябрь 2018 — февраль 2019',
    company: 'GuruTaxi',
    role: 'Бизнес‑консультант по оптимизации процессов',
    text: 'Оптимизация документооборота и внутренних систем, снижение операционных затрат.'
  },
  {
    period: 'Июнь 2015 — июль 2018',
    company: 'GetTaxi Rus',
    role: 'Руководитель отдела автоматизации бизнес‑процессов',
    text: 'Product Owner мобильного приложения и порталов, e‑документооборот, аналитические системы, автоматизация с экономией 20 000+ человеко‑часов.'
  }
];

const skills = [
  ['Управление проектами', 95],
  ['Оптимизация процессов', 94],
  ['Бизнес‑анализ', 90],
  ['Бюджетирование CAPEX/OPEX', 92],
  ['Переговоры и контракт‑менеджмент', 88],
  ['Управление персоналом', 93],
  ['Английский язык (C1)', 84],
  ['Оптимизация затрат', 96]
];

const timelineEl = document.getElementById('timeline');
const skillsGridEl = document.getElementById('skillsGrid');
const sidebarSkillsEl = document.getElementById('sidebarSkills');

function renderTimeline() {
  timelineEl.innerHTML = experience.map((item, i) => `
    <article class="t-item reveal" style="transition-delay:${i * 0.04}s">
      <strong>${item.period}</strong>
      <h3>${item.company}</h3>
      <p><b>${item.role}</b></p>
      <p>${item.text}</p>
    </article>
  `).join('');
}

function renderSkills() {
  skillsGridEl.innerHTML = skills.map(([name, value]) => `
    <article class="skill reveal">
      <h4>${name}</h4>
      <div class="bar"><i data-v="${value}"></i></div>
    </article>
  `).join('');

  sidebarSkillsEl.innerHTML = skills.slice(0, 4).map(([name, value]) => `
    <div class="s-item">
      <b>${name}</b>
      <div class="bar"><i data-v="${value}"></i></div>
    </div>
  `).join('');
}

function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      const meter = entry.target.querySelector('.bar i');
      if (meter) meter.style.width = `${meter.dataset.v}%`;
    });
  }, { threshold: 0.16 });

  document.querySelectorAll('.reveal').forEach((node) => io.observe(node));
}

function bindUi() {
  document.getElementById('themeBtn').addEventListener('click', () => {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  });

  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(sidebar.classList.contains('open')));
  });

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.querySelector('.bg-a').style.transform = `translateY(${y * 0.08}px)`;
    document.querySelector('.bg-b').style.transform = `translateY(${y * 0.12}px)`;

    const sections = [...document.querySelectorAll('main section')];
    const activeId = sections.findLast((s) => y + 180 >= s.offsetTop)?.id;
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
  });
}

renderTimeline();
renderSkills();
observeReveal();
bindUi();
