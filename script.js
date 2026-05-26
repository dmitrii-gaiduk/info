const content = {
  ru: {
    fullName: 'Дмитрий Гайдук',
    position: 'Операционный директор (COO) / Исполнительный директор',
    birth: '14 августа 1988 г. • 37 лет',
    location: 'Москва • готов к переезду и командировкам',
    citizenship: 'Гражданство: Россия',
    employment: 'Занятость: полная, офис',
    languages: 'Языки: русский (родной), English (C1)',
    driving: 'Права: A, B • личный автомобиль',
    navAbout: 'Обо мне', navExperience: 'Опыт', navEducation: 'Образование', navCourses: 'Курсы', navSkills: 'Навыки', navContacts: 'Контакты',
    downloadCv: 'Скачать PDF',
    aboutTitle: 'Обо мне',
    aboutText: 'Более 16 лет управляю операционной, технической и коммерческой функциями в международных компаниях. Создаю команды и департаменты с нуля, управляю масштабом до 1000 человек, реализую цифровые трансформации, снижаю издержки и повышаю управляемость бизнеса через процессы, данные и сильную культуру исполнения.',
    experienceTitle: 'Опыт работы',
    educationTitle: 'Образование',
    coursesTitle: 'Курсы и дополнительное обучение',
    skillsTitle: 'Навыки',
    testimonialsTitle: 'Отзывы / Highlights',
    contactsTitle: 'Контакты',
    contactBtn: 'Связаться',
    detailsBtn: 'Подробнее'
  },
  en: {
    fullName: 'Dmitrii Gaiduk',
    position: 'COO / Executive Director',
    birth: 'August 14, 1988 • 37 y.o.',
    location: 'Moscow • open to relocation and business travel',
    citizenship: 'Citizenship: Russia',
    employment: 'Employment: full-time, office',
    languages: 'Languages: Russian (native), English (C1)',
    driving: 'Driving license: A, B • own car',
    navAbout: 'About', navExperience: 'Experience', navEducation: 'Education', navCourses: 'Courses', navSkills: 'Skills', navContacts: 'Contacts',
    downloadCv: 'Download PDF',
    aboutTitle: 'About',
    aboutText: 'I bring 16+ years of operational, technical and commercial leadership in international companies. I build teams and departments from scratch, lead organizations of up to 1,000 people, drive digital transformation, reduce costs and improve execution through structure, data and culture.',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    coursesTitle: 'Courses & Additional Learning',
    skillsTitle: 'Skills',
    testimonialsTitle: 'Testimonials / Highlights',
    contactsTitle: 'Contacts',
    contactBtn: 'Contact Me',
    detailsBtn: 'Details'
  }
};

const experience = [
  { category:'auto', period:{ru:'Март 2022 — н.в.',en:'Mar 2022 — Present'}, company:'Atom (АО «Кама»)', role:{ru:'Директор департамента онлайн-сервисов',en:'Director of Online Services'}, details:{ru:'Построил структуру 15+ отделов и 200+ сотрудников; бюджетирование более 2 млрд ₽; запуск сервисов зарядки, автопарка и post-sale; развитие культуры и взаимодействие с органами власти.',en:'Built 15+ departments and 200+ employees structure; budgeted over ₽2B; launched charging, fleet and after-sales services; developed culture and government relations.'}},
  { category:'foodtech', period:{ru:'Апр 2021 — Фев 2022',en:'Apr 2021 — Feb 2022'}, company:'KFC (YUM! Russia, CIS & CEE)', role:{ru:'Руководитель внедрения технических решений',en:'Head of Technical Solutions Deployment'}, details:{ru:'Запуск digital-стратегии, внедрение стандартов и платформ ресторанов, управление вендорами, поддержка запуска новых стран.',en:'Drove digital strategy, rolled out restaurant standards/platforms, managed vendors, enabled launches in new countries.'}},
  { category:'foodtech', period:{ru:'Мар 2019 — Мар 2021',en:'Mar 2019 — Mar 2021'}, company:'KFC', role:{ru:'Руководитель проектного офиса',en:'Head of PMO'}, details:{ru:'Управление портфелем IT‑проектов; кросс-функциональные команды до 1000 человек; ML‑прогнозирование; оптимизация процессов и бюджетный контроль.',en:'Managed IT project portfolio; coordinated cross-functional teams up to 1,000; built ML forecasting; optimized processes and budget control.'}},
  { category:'other', period:{ru:'2009 — 2019',en:'2009 — 2019'}, company:'GetTaxi / GuruTaxi / System Expert / ИП / Армия / ЦПТ', role:{ru:'Руководящие и экспертные роли',en:'Leadership & expert roles'}, details:{ru:'Автоматизация бизнес-процессов (20,000+ человеко‑часов экономии), 200+ гос‑проектов, внедрение инженерных и ИТ-решений.',en:'Business process automation (20,000+ man-hours saved), 200+ public projects, delivery of engineering and IT solutions.'}}
];

const skills = [
  ['Управление проектами / Project Management', 95],
  ['Оптимизация процессов / Process Optimization', 94],
  ['Бизнес-анализ / Business Analysis', 90],
  ['CAPEX / OPEX Budgeting', 92],
  ['Управление персоналом / People Leadership', 93],
  ['Cost Analysis / Audit', 89],
  ['Контракт-менеджмент / Negotiation', 88],
  ['Английский язык / English', 84]
];

const education = {
  ru: ['Российская государственная академия интеллектуальной собственности, Москва (2010) — Экономика и менеджмент, управление интеллектуальной собственностью.'],
  en: ['Russian State Academy of Intellectual Property, Moscow (2010) — Economics and Management, Intellectual Property Management.']
};

const courses = {
  ru: ['Бизнес-школа Eduson (2016).', '30+ бизнес-курсов: управление качеством, ораторское мастерство, переговоры, лидерство.'],
  en: ['Eduson Business School (2016).', '30+ courses: quality management, public speaking, negotiations, leadership.']
};

const testimonials = {
  ru: ['«Дмитрий превращает сложные процессы в измеримый результат».', '«Сильный лидер, который объединяет людей и технологии».'],
  en: ['“Dmitrii turns complexity into measurable execution.”', '“A strong leader who aligns people, processes and technology.”']
};

let lang = 'ru';
let filter = 'all';

const $ = (s) => document.querySelector(s);

function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (content[lang][key]) node.textContent = content[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach((b) => {
    const active = b.dataset.lang === lang;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
}

function renderFilters() {
  const labels = { all: 'All', auto: 'Auto', foodtech: 'Foodtech', other: 'Other' };
  const root = $('#timelineFilters');
  root.innerHTML = Object.entries(labels).map(([key, title]) => `<button class="filter-chip ${filter === key ? 'active':''}" data-filter="${key}">${title}</button>`).join('');
  root.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      filter = btn.dataset.filter;
      renderFilters();
      renderTimeline();
    });
  });
}

function renderTimeline() {
  const list = $('#timeline');
  const rows = experience.filter((x) => filter === 'all' || x.category === filter);
  list.innerHTML = rows.map((x, i) => `
    <article class="timeline-item reveal" style="transition-delay:${i * 0.05}s">
      <strong>${x.period[lang]}</strong>
      <h3>${x.company}</h3>
      <p>${x.role[lang]}</p>
      <div class="more"><p>${x.details[lang]}</p></div>
      <button class="timeline-toggle" type="button">${content[lang].detailsBtn}</button>
    </article>
  `).join('');
  list.querySelectorAll('.timeline-toggle').forEach((btn) => {
    btn.addEventListener('click', () => btn.closest('.timeline-item').classList.toggle('open'));
  });
  observeReveal();
}

function renderLists() {
  $('#educationList').innerHTML = education[lang].map((x) => `<li>${x}</li>`).join('');
  $('#coursesList').innerHTML = courses[lang].map((x) => `<li>${x}</li>`).join('');
  $('#testimonialsGrid').innerHTML = testimonials[lang].map((x) => `<blockquote>${x}</blockquote>`).join('');
}

function renderSkills() {
  $('#skillsGrid').innerHTML = skills.map(([name, value]) => `
    <article class="skill-card reveal">
      <h4>${name}</h4>
      <div class="meter"><i data-value="${value}"></i></div>
    </article>
  `).join('');
  $('#sidebarSkills').innerHTML = skills.slice(0,4).map(([name, value]) => `
    <div class="skill-inline">
      <strong>${name}</strong>
      <div class="meter"><i data-value="${value}"></i></div>
    </div>
  `).join('');
  observeReveal();
}

function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      const meter = entry.target.querySelector('.meter i');
      if (meter) meter.style.width = `${meter.dataset.value}%`;
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.reveal:not(.show)').forEach((el) => io.observe(el));
}

function bindUi() {
  $('#themeToggle').addEventListener('click', () => {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      applyI18n();
      renderAll();
    });
  });

  const menuBtn = $('#mobileMenuBtn');
  menuBtn.addEventListener('click', () => {
    const sidebar = $('#sidebar');
    sidebar.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(sidebar.classList.contains('open')));
  });

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    $('.bg-1').style.transform = `translateY(${y * 0.08}px)`;
    $('.bg-2').style.transform = `translateY(${y * 0.13}px)`;

    const sections = [...document.querySelectorAll('main section')];
    const active = sections.findLast((s) => y + 170 >= s.offsetTop)?.id;
    document.querySelectorAll('.nav-link').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${active}`));
  });
}

function renderAll() {
  renderFilters();
  renderTimeline();
  renderLists();
  renderSkills();
  observeReveal();
}

applyI18n();
renderAll();
bindUi();
