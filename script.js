const t = {
  en: {
    nameEn: 'Dmitrii Gaiduk', nameRu: 'Gaiduk Dmitrii Valerievich',
    position: 'Operating Director (COO) / General Manager',
    age: '37 years old, born 14 Aug 1988',
    location: 'Moscow, Russia. Willing to relocate & travel.',
    citizenship: 'Russian citizenship. Authorized to work in Russia.',
    employment: 'Desired employment: Full-time, on-site.',
    langs: 'Russian (native), English (C1 advanced).',
    license: "Driver's licence A, B; own car.",
    tabAbout: 'About', tabExp: 'Experience', tabEdu: 'Education', tabSkills: 'Skills', tabContacts: 'Contacts',
    aboutTitle: 'About me',
    aboutText: 'Executive leader with 16+ years across operations, technology, and commercial management. Dmitrii has built and transformed divisions from scratch, led teams up to 1,000 people, and delivered digital transformation strategies with measurable business outcomes. He combines organizational design, Capex/Opex budgeting, IT product delivery, and government relations to optimize cost, speed, and quality. Passionate about innovation and mentoring high-performing teams.',
    expTitle: 'Experience', eduTitle: 'Education', skillsTitle: 'Skills', contactsTitle: 'Contacts',
    eduMain: 'Russian State Academy of Intellectual Property (Moscow) — 2010. Degree in Economics & Management, focus on Intellectual Property Management.',
    eduCourses: 'Professional development: 2016 — Eduson business school (30+ management courses). 2015 — Eduson courses in quality management and public speaking.',
    cta: 'Let’s discuss opportunities'
  },
  ru: {
    nameEn: 'Дмитрий Гайдук', nameRu: 'Гайдук Дмитрий Валерьевич',
    position: 'Операционный директор (COO) / Генеральный менеджер',
    age: '37 лет, дата рождения: 14 августа 1988',
    location: 'Москва, Россия. Готов к переезду и командировкам.',
    citizenship: 'Гражданство: РФ. Разрешение на работу в РФ.',
    employment: 'Желаемая занятость: полная, офисный формат.',
    langs: 'Русский (родной), английский (C1 advanced).',
    license: 'Водительские права категорий A, B; личный автомобиль.',
    tabAbout: 'О себе', tabExp: 'Опыт', tabEdu: 'Образование', tabSkills: 'Навыки', tabContacts: 'Контакты',
    aboutTitle: 'О себе',
    aboutText: 'Руководитель с опытом 16+ лет в операционном, техническом и коммерческом управлении. Дмитрий с нуля создавал и трансформировал подразделения, управлял командами до 1 000 человек, формировал и реализовывал стратегии цифровой трансформации с измеримым бизнес-эффектом. Экспертиза: оргдизайн, бюджетирование Capex/Opex, разработка IT-продуктов, взаимодействие с госструктурами, оптимизация затрат и процессов. Увлечён инновациями и развитием сильных команд.',
    expTitle: 'Опыт работы', eduTitle: 'Образование', skillsTitle: 'Навыки', contactsTitle: 'Контакты',
    eduMain: 'Российская государственная академия интеллектуальной собственности (Москва) — 2010. Экономика и управление, специализация: управление интеллектуальной собственностью.',
    eduCourses: 'Повышение квалификации: 2016 — бизнес-школа Eduson (30+ курсов по менеджменту). 2015 — курсы Eduson по управлению качеством и публичным выступлениям.',
    cta: 'Свяжитесь для обсуждения сотрудничества'
  }
};

const experience = {
  en: [
    ['Mar 2022 – Present','Atom (AO Kama), Moscow','Director of Online Services',['Built core operations for Russia’s Atom EV start-up, creating 15+ departments and a 200+ team.','Led strategic and financial planning with budgets above 2B RUB; optimized IT, HR, and finance processes.','Launched key services: charging infrastructure, fleet management, after-sales, remote diagnostics; represented Atom in government and investor forums in China.']],
    ['Apr 2021 – Feb 2022','KFC (YUM! Restaurants International Russia, CIS & CEE)','Head of Technical Solutions & Standards',['Defined digital strategy across Russia, CIS, and CEE; deployed restaurant digital platforms.','Set technical standards, managed vendor ecosystem, opened new markets from technology side.','Oversaw digital transformation, enterprise architecture, strategic planning, and multi-year budgeting.']],
    ['Mar 2019 – Mar 2021','KFC, Russia/CIS/CEE','Head of Project Office',['Managed portfolio of key IT programs and cross-functional teams up to 1,000 people.','Created ML forecasting platform and benefit-based prioritization framework.','Led process optimization, team reorganization, risk/conflict management, IT budgeting and audits.']],
    ['Sep 2018 – Feb 2019','GuruTaxi (guru.taxi)','Business Process Consultant',['Advised executives on workflow automation and internal systems; reduced operating costs.']],
    ['Jun 2015 – Jul 2018','GetTaxi Rus (gettaxi.ru)','Head of Business Process Automation',['Owned driver app and partner/corporate platforms, e-document flow, and transport automation.','Drove growth via process modeling and A/B testing; reduced manual workload by 20,000 hours.']],
    ['Nov 2013 – May 2015','System Expert (system-exp.ru)','Head of Design & Installation',['Delivered CCTV, ACS, IP telephony, and LAN projects; completed 200+ government projects.']],
    ['Aug 2011 – Nov 2013','Sole Proprietor, Moscow','Owner / Systems Integrator',['Designed and deployed SCS for government institutions; completed 100+ projects.']],
    ['Jul 2010 – Jul 2011','Russian Army, Khabarovsk Krai','Junior Sergeant, commander of sapper units',['Served in engineer troops, led sapper units and field operations.']],
    ['Aug 2009 – May 2010','Center for Technology Transfer (rusttc.ru)','Manager',['Prepared IP documentation for Rosnano and Ministry of Defence projects; inventoried R&D outputs.']]
  ],
  ru: [
    ['Март 2022 – настоящее время','Atom (АО «Кама»), Москва','Директор онлайн-сервисов',['Сформировал операционный контур стартапа электромобиля Atom: 15+ подразделений и команда 200+ человек.','Руководил стратегическим и финансовым планированием (бюджеты свыше 2 млрд ₽), оптимизировал IT, HR и финпроцессы.','Запустил ключевые сервисы: зарядная инфраструктура, управление парком, послепродажный сервис, удалённая диагностика; представлял компанию на госмероприятиях и у инвесторов в Китае.']],
    ['Апрель 2021 – февраль 2022','KFC (YUM! Restaurants International Russia, CIS & CEE)','Руководитель технических решений и стандартов',['Сформировал цифровую стратегию для России, СНГ и ЦВЕ; внедрил цифровые платформы ресторанов.','Разработал технические стандарты, управлял подрядчиками, обеспечил технологический запуск новых рынков.','Курировал цифровую трансформацию, корпоративную архитектуру, стратегические планы и многолетнее бюджетирование.']],
    ['Март 2019 – март 2021','KFC, Россия/СНГ/ЦВЕ','Руководитель проектного офиса',['Управлял портфелем ключевых IT-проектов и кросс-функциональными командами до 1 000 человек.','Создал ML-платформу прогнозирования и систему приоритизации по цифровой ценности.','Оптимизировал процессы, проводил реорганизацию, управлял рисками/конфликтами, отвечал за бюджет и аудит IT-финансов.']],
    ['Сентябрь 2018 – февраль 2019','GuruTaxi (guru.taxi)','Консультант по бизнес-процессам',['Консультировал руководство по автоматизации документооборота и внутренних систем, снижал издержки.']],
    ['Июнь 2015 – июль 2018','GetTaxi Rus (gettaxi.ru)','Руководитель автоматизации бизнес-процессов',['Отвечал за приложение водителя, партнёрский и веб-порталы, аналитику B2B, ЭДО и автоматизацию транспортного отдела.','Обеспечил рост пользователей через моделирование процессов и A/B-тесты; сократил ручной труд на 20 000 часов.']],
    ['Ноябрь 2013 – май 2015','System Expert (system-exp.ru)','Руководитель проектирования и монтажа',['Реализовал проекты СВН, СКУД, IP-телефонии и ЛВС; завершил 200+ государственных проектов.']],
    ['Август 2011 – ноябрь 2013','ИП, Москва','Собственник / системный интегратор',['Проектировал и внедрял СКС для госучреждений Москвы; завершил 100+ проектов.']],
    ['Июль 2010 – июль 2011','Вооружённые силы РФ, Хабаровский край','Младший сержант, командир сапёрных отделений',['Служба в инженерных войсках, управление сапёрными подразделениями и задачами в полевых условиях.']],
    ['Август 2009 – май 2010','Центр трансфера технологий (rusttc.ru)','Менеджер',['Подготавливал документацию по ИС для Роснано и Минобороны, проводил инвентаризацию результатов НИОКР.']]
  ]
};

const skills = {
  en: ['Project management','Business-process optimization','Business analysis','Project documentation','Proposal preparation','E-document flow','Technical specifications','Developer task setting','Analytical thinking','Prioritization','Cost analysis','Audit','Negotiations','Personnel management','Budgeting (Capex/Opex)','Organizational leadership','Contract management','Recruitment','Business correspondence','English proficiency','Event organization','Process weakness detection','Budget control','Teamwork','Cost optimization'],
  ru: ['Управление проектами','Оптимизация бизнес-процессов','Бизнес-анализ','Проектная документация','Подготовка предложений','Электронный документооборот','Технические задания','Постановка задач разработчикам','Аналитическое мышление','Приоритизация','Анализ затрат','Аудит','Переговоры','Управление персоналом','Бюджетирование (Capex/Opex)','Организационное лидерство','Управление договорами','Подбор персонала','Деловая переписка','Английский язык','Организация мероприятий','Выявление слабых мест процессов','Управление бюджетом','Командная работа','Оптимизация затрат']
};

function renderTimeline(lang){
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';
  experience[lang].forEach((job, idx) => {
    const [date, company, role, bullets] = job;
    const item = document.createElement('article');
    item.className = 'job reveal';
    item.style.transitionDelay = `${idx * 70}ms`;
    item.innerHTML = `<div class="job-head"><div><div class="job-role"><i class="fa-solid fa-building"></i> ${role}</div><div class="job-meta">${company}</div></div><div class="job-meta">${date}</div></div><ul>${bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
    timeline.appendChild(item);
  });
  setupReveal();
}

function renderSkills(lang){
  const container = document.getElementById('skills-cloud');
  container.innerHTML = skills[lang].map(s => `<span class="skill-badge reveal">${s}</span>`).join('');
  setupReveal();
}

function setLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    if (t[lang][key]) node.textContent = t[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  renderTimeline(lang);
  renderSkills(lang);
}

function setupReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
setLang('en');
setupReveal();
