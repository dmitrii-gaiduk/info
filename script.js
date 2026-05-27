const experience = [
  {
    period: 'Март 2022 — настоящее время',
    duration: '4+ года',
    company: 'Atom (АО «Кама»)',
    role: 'Директор департамента онлайн‑сервисов',
    domain: 'Электромобили, цифровые сервисы, B2C/B2B продукты',
    achievements: [
      'С нуля сформировал организационную структуру направления: 15+ отделов и 200+ сотрудников (продукт, IT, операции, аналитика).',
      'Выстроил стратегическое и бюджетное управление портфелем свыше 2 млрд ₽: CAPEX/OPEX, контроль отклонений, приоритизация инициатив по ROI.',
      'Запустил ключевые сервисы экосистемы: зарядная инфраструктура, управление корпоративным автопарком, post-sale процессы и онлайн-диагностика.',
      'Оптимизировал закупочные, кадровые и финансовые процессы, сократив цикл согласований и повысив прозрачность управленческой отчетности.',
      'Представлял компанию в GR-контуре: совместные инициативы с федеральными и региональными органами власти, публичные отраслевые презентации.'
    ],
    result: 'Результат: создана масштабируемая операционная модель, которая ускорила вывод цифровых сервисов и снизила операционные риски роста.'
  },
  {
    period: 'Апрель 2021 — февраль 2022',
    duration: '11 месяцев',
    company: 'KFC (YUM! Restaurants International Russia, CIS & CEE)',
    role: 'Руководитель внедрения технических решений и стандартов',
    domain: 'QSR, международная сеть, Tech&Data',
    achievements: [
      'Разработал и внедрил digital-стратегию по России, СНГ и Центральной/Восточной Европе с единой системой технологических стандартов.',
      'Организовал масштабирование платформ и технических решений на сети ресторанов: от пилотов до промышленного внедрения.',
      'Выстроил управление международными вендорами и поставщиками, повысив предсказуемость сроков и качество delivery.',
      'Участвовал в технологическом запуске новых стран присутствия и сопровождал кросс-функциональные трансформационные инициативы.',
      'Курировал бюджетное планирование (годовое/3-летнее) и контроль исполнения CAPEX/OPEX по направлению.'
    ],
    result: 'Результат: ускорено тиражирование стандартов и цифровых решений, улучшена управляемость международного внедрения.'
  },
  {
    period: 'Март 2019 — март 2021',
    duration: '2 года 1 месяц',
    company: 'KFC',
    role: 'Руководитель проектного офиса',
    domain: 'Управление портфелем IT-проектов',
    achievements: [
      'Руководил портфелем ключевых IT-инициатив и координировал кросс-функциональные команды численностью до 1000 человек.',
      'Запустил ML-платформу прогнозирования и процессы приоритизации проектов по цифровым бенефитам для бизнеса.',
      'Внедрил стандарты проектного управления, усилил дисциплину исполнения roadmap и прозрачность статусов для ТОП-менеджмента.',
      'Оптимизировал внутренние бизнес-процессы департамента, включая операционное планирование, риск-менеджмент и межкомандное взаимодействие.',
      'Проводил финансовый контроль ИТ-направления: бюджетирование, аудит расходов, защита приоритетов и мониторинг экономического эффекта.'
    ],
    result: 'Результат: повышена точность планирования и скорость реализации критичных проектов при сохранении бюджетной дисциплины.'
  },
  {
    period: 'Сентябрь 2018 — февраль 2019',
    duration: '6 месяцев',
    company: 'ГуруТакси, ООО',
    role: 'Бизнес‑консультант по оптимизации процессов',
    domain: 'Интернет-компания, процессный консалтинг',
    achievements: [
      'Провел аудит документооборота и внутренних систем, выявил точки потерь по срокам и затратам.',
      'Подготовил пакет автоматизированных решений для руководства по внутренним операциям и документообороту.',
      'Перестроил ключевые процессы с упором на стандартизацию, сокращение ручного труда и контроль SLA.',
      'Сопроводил внедрение изменений и настроил базовые метрики эффективности.'
    ],
    result: 'Результат: снижены операционные издержки и повышена управляемость внутренних процессов.'
  },
  {
    period: 'Июнь 2015 — июль 2018',
    duration: '3 года 2 месяца',
    company: 'GetTaxi Rus, ООО',
    role: 'Руководитель отдела автоматизации бизнес‑процессов',
    domain: 'Продукты и автоматизация в транспортном сервисе',
    achievements: [
      'Выступал Product Owner ключевых платформ: мобильное приложение для водителей, партнерские и внутренние порталы.',
      'Запустил электронный документооборот с ЭЦП и автоматизацию процессов транспортного департамента.',
      'Организовал развитие аналитических инструментов и систем расчетов для направлений «Корпоративные клиенты» и «Таксопарки».',
      'Проводил A/B-тесты, процессное моделирование и формирование user story для роста пользовательской базы.',
      'Обеспечил автоматизацию свыше 20 000 человеко-часов ручного труда и улучшил экономику ключевых операционных сценариев.'
    ],
    result: 'Результат: масштабирован продуктовый контур и достигнут измеримый экономический эффект за счет системной автоматизации.'
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

function renderTimeline() {
  timelineEl.innerHTML = experience.map((item, i) => `
    <article class="t-item reveal" style="transition-delay:${i * 0.05}s">
      <div class="job-head">
        <div>
          <strong>${item.period}</strong>
          <span class="job-duration">${item.duration}</span>
        </div>
        <span class="job-domain">${item.domain}</span>
      </div>
      <h3>${item.company}</h3>
      <p class="job-role"><b>${item.role}</b></p>
      <ul class="job-list">${item.achievements.map((point) => `<li>${point}</li>`).join('')}</ul>
      <p class="job-result">${item.result}</p>
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
