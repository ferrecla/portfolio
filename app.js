(function(){
  "use strict";

  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const state = {
    area: 'artes',
    lang: 'pt',
    theme: localStorage.getItem('cf_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  };

  function readURL() {
    const p = new URLSearchParams(location.search);
    const a = (p.get('area') || p.get('a') || '').toLowerCase();
    const l = (p.get('lang') || p.get('l') || '').toLowerCase();
    state.area = (a === 'tech' || a === 'comunicacao') ? 'tech' : (a === 'artes' ? 'artes' : (localStorage.getItem('cf_area') || 'artes'));
    state.lang = (l === 'en' || l === 'pt') ? l : (localStorage.getItem('cf_lang') || 'pt');
  }

  function writeURL() {
    const p = new URLSearchParams(location.search);
    p.set('area', state.area);
    p.set('lang', state.lang);
    history.replaceState(null, '', '?' + p.toString());
    localStorage.setItem('cf_area', state.area);
    localStorage.setItem('cf_lang', state.lang);
  }

  function shareURL() {
    return location.origin + location.pathname + '?area=' + state.area + '&lang=' + state.lang;
  }

  const T = () => DATA.ui[state.lang];
  const F = () => DATA.fronts[state.area][state.lang];
  function parseYearScore(yr) {
    const s = String(yr || '').replace(/—/g, '-').replace(/–/g, '-').trim();
    if (s.includes('-')) {
      const parts = s.split('-');
      const start = parseInt(parts[0], 10) || 0;
      const endPart = parts[1].trim();
      let end;
      if (endPart === '') {
        end = 2026; // Em andamento
      } else if (!isNaN(parseInt(endPart, 10))) {
        end = parseInt(endPart, 10);
      } else {
        end = start;
      }
      return end * 10000 + start;
    }
    const y = parseInt(s, 10) || 0;
    return y * 10000 + y;
  }

  const visible = () => DATA.projects
    .filter(p => p.areas.includes(state.area))
    .slice()
    .sort((a, b) => parseYearScore(b.year) - parseYearScore(a.year));

  function roleOf(p) {
    if (p.roleByArea && p.roleByArea[state.area]) {
      return p.roleByArea[state.area][state.lang];
    }
    return p.role[state.lang];
  }

  function media(p, i, big) {
    if (p.img) {
      return `<img src="${esc(p.img)}" alt="${esc(p.title)}" loading="${big ? 'eager' : 'lazy'}">`;
    }
    return `<div class="ph" aria-hidden="true"><span>${String(i + 1).padStart(2, '0')}</span></div>`;
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('cf_theme', state.theme);
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  }

  function renderSegs() {
    const t = T();
    $('#segArea').innerHTML = ['artes', 'tech'].map(a =>
      `<button type="button" data-area="${a}" aria-pressed="${state.area === a}">${esc(t.areas[a])}</button>`
    ).join('');

    $('#segLang').innerHTML = ['pt', 'en'].map(l =>
      `<button type="button" data-lang="${l}" aria-pressed="${state.lang === l}">${l.toUpperCase()}</button>`
    ).join('');
  }

  function renderHero() {
    const f = F();
    const t = T();
    const isPt = state.lang === 'pt';

    $('#brandSub').textContent = isPt
      ? (state.area === 'artes' ? 'Artes da cena · Luz & Som' : 'Creative Strategist · Tech & Produto')
      : (state.area === 'artes' ? 'Performing Arts · Light & Sound' : 'Creative Strategist · Tech & Product');

    $('#profileBadge').textContent = isPt ? 'Perfil' : 'Profile';
    $('#availLabel').textContent = isPt ? 'Disponível' : 'Available';
    $('#eyebrow').textContent = f.eyebrow;
    $('#headline').textContent = f.headline;
    $('#lede').textContent = f.lede;

    const statsHtml = (f.stats && f.stats.length)
      ? f.stats.map(s => `<li><b>${esc(s.n)}</b><span>${esc(s.l)}</span></li>`).join('')
      : '';
    $('#stats').innerHTML = statsHtml;
    const profileFooter = $('#cardProfile .c-footer');
    if (profileFooter) {
      profileFooter.style.display = statsHtml ? '' : 'none';
    }

    $('#bio').innerHTML = f.bio.map(p => `<p>${esc(p)}</p>`).join('');
  }

  function renderFeatured() {
    const isPt = state.lang === 'pt';
    const t = T();
    const list = visible();

    const featuredCard = $('#cardFeatured');
    const dockFeaturedBtn = document.querySelector('.dock-btn[data-target="cardFeatured"]');

    if (state.area === 'artes') {
      if (featuredCard) featuredCard.style.display = 'none';
      if (dockFeaturedBtn) dockFeaturedBtn.style.display = 'none';
      return;
    }

    if (featuredCard) featuredCard.style.display = '';
    if (dockFeaturedBtn) dockFeaturedBtn.style.display = '';

    $('#tFeaturedTag').textContent = isPt ? 'Destaques' : 'Highlights';
    $('#hintClickCard').textContent = isPt ? 'Toque num item para ver ficha e links ↗' : 'Click any item for details & links ↗';

    // Destaque principal por área:
    // Em Tech: Vera
    // Em Artes: Fóssil
    const highlightId = state.area === 'tech' ? 'vera' : 'fossil';
    const featuredProjects = list.filter(p => p.id === highlightId);
    const toShow = featuredProjects.length ? featuredProjects : list.slice(0, 1);

    $('#featuredCount').textContent = isPt ? 'Projeto em Destaque' : 'Featured Project';

    $('#featuredContainer').innerHTML = toShow.map((p, i) => {
      const coverImg = p.img ? `<img src="${esc(p.img)}" alt="${esc(p.title)}">` :
        `<div class="ph"><span>0${i+1}</span></div>`;

      return `
        <div class="featured-item" data-id="${p.id}" tabindex="0">
          <div class="featured-cover">
            ${coverImg}
            <span class="featured-badge">${esc(p.year)}</span>
          </div>
          <div class="featured-info">
            <h4 class="featured-title">${esc(p.title)}</h4>
            <p class="featured-role">${esc(roleOf(p))}</p>
            <p class="featured-desc">${esc(p.desc[state.lang][0] || '')}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderGrid() {
    const isPt = state.lang === 'pt';
    const list = visible();

    $('#tWorksTag').textContent = isPt ? 'Trabalhos' : 'Selected Works';
    $('#worksCount').textContent = `${list.length} ${isPt ? 'projetos' : 'projects'}`;
    $('#scrollMoreText').textContent = isPt ? 'Role a lista para ver todos' : 'Scroll down to explore all';

    // Projetos com menos ênfase visual (opacidade suave, escala contida)
    const deEmphasizedIds = ['felicidade', 'mundareu', 'locarte', 'telas'];
    // Projetos com destaque visual prioritário no grid
    const featuredSpotlightIds = ['fossil', 'vera'];

    $('#grid').innerHTML = list.map((p, i) => {
      const isMuted = deEmphasizedIds.includes(p.id);
      const isSpotlight = featuredSpotlightIds.includes(p.id);
      const classes = [
        'dash-p-card',
        isMuted ? 'p-subtle' : '',
        isSpotlight ? 'p-spotlight' : ''
      ].filter(Boolean).join(' ');

      return `
        <div class="${classes}" data-id="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)}">
          <div class="dash-p-main">
            <div class="dash-p-header-line">
              <h4 class="dash-p-t">${esc(p.title)}</h4>
              ${isSpotlight ? `<span class="spotlight-tag">${isPt ? 'Destaque' : 'Featured'}</span>` : ''}
            </div>
            <p class="dash-p-r">${esc(roleOf(p))}</p>
            <p class="dash-p-org">${esc(p.org[state.lang])}</p>
          </div>
          <div class="dash-p-side">
            <span class="dash-p-yr">${esc(p.year)}</span>
            <div class="dash-p-arrow">↗</div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderSkills() {
    const isPt = state.lang === 'pt';
    const t = T();

    $('#tSkillsTag').textContent = isPt ? 'Habilidades' : 'Skills & Stack';
    $('#skillsSub').textContent = state.area === 'artes' ? (isPt ? 'Mesas, Áudio & Luz' : 'Lighting & Audio Consoles') : (isPt ? 'Web, CRM & Analytics' : 'Web, CRM & Analytics');
    $('#tTools').textContent = t.tools;
    $('#tEdu').textContent = t.edu;
    $('#verifiedLabel').textContent = isPt ? 'Fichas Oficiais & Portfólio Verificado' : 'Official Credits & Verified Portfolio';

    $('#tools').innerHTML = DATA.tools[state.area].map(x => `<li>${esc(x)}</li>`).join('');

    $('#edu').innerHTML = DATA.education[state.area].map(e => {
      const o = e[state.lang];
      return `<li><b>${esc(o.t)}</b><span>${esc(o.s)}</span></li>`;
    }).join('');
  }

  function renderLinks() {
    const c = DATA.contact;
    const isPt = state.lang === 'pt';

    $('#tChannelsTag').textContent = isPt ? 'Canais' : 'Channels';
    $('#linksIntro').textContent = isPt
      ? 'Acesso direto a plataformas, repositórios e perfis profissionais:'
      : 'Direct access to live platforms, repositories and verified profiles:';

    $('#basedTxt').textContent = esc(c.city[state.lang]);

    const links = [
      {
        title: "veracurtas.com.br",
        sub: isPt ? "Plataforma streaming Next.js" : "Next.js streaming platform",
        url: c.vera,
        show: true
      },
      {
        title: "LinkedIn",
        sub: "claudi-ferreira",
        url: c.linkedin,
        show: true
      },
      {
        title: "GitHub",
        sub: "github.com/ferrecla",
        url: c.github,
        show: true
      },
      {
        title: "Cargo Collective",
        sub: "claudi.cargo.site",
        url: c.cargo,
        show: true
      }
    ];

    $('#dashLinkButtons').innerHTML = links.filter(l => l.show).map(l => `
      <a href="${esc(l.url)}" target="_blank" rel="noopener" class="dash-btn-link">
        <div class="btn-lbl">
          <strong>${esc(l.title)}</strong>
          <span>${esc(l.sub)}</span>
        </div>
        <span>↗</span>
      </a>
    `).join('');
  }

  function renderContact() {
    const c = DATA.contact;
    const t = T();
    const isPt = state.lang === 'pt';

    $('#tContactTag').textContent = t.contact;
    $('#contactMeta').textContent = isPt ? 'Canais diretos' : 'Get in touch';
    $('#shareLabel').textContent = t.shareLabel;
    $('#shareUrlInput').value = shareURL();
    $('#btnCopyText').textContent = t.copy;

    const items = [
      {
        label: t.email,
        val: `<a href="mailto:${c.email}">${c.email}</a>`
      },
      {
        label: "WhatsApp",
        val: `<a href="${c.whatsapp || ('https://wa.me/' + c.phone.replace(/[^0-9]/g, ''))}" target="_blank" rel="noopener" class="wa-contact-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.121-.518-1.745-.722-2.888-2.502-2.975-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.35.491 1.199.534 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.185.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.513 0-10 4.487-10 10 0 1.954.564 3.782 1.545 5.334l-1.637 5.975 6.136-1.609c1.493.815 3.197 1.28 5.006 1.28 5.513 0 10-4.487 10-10 0-5.513-4.487-10-10-10z"/></svg>
          ${isPt ? 'Conversar no WhatsApp ↗' : 'Chat on WhatsApp ↗'}
        </a>`
      },
      {
        label: t.based,
        val: `<span>${esc(c.city[state.lang])}</span>`
      }
    ];

    $('#contactLinks').innerHTML = items.map(item => `
      <div class="c-item">
        <small>${esc(item.label)}</small>
        ${item.val}
      </div>
    `).join('');

    $('#ftrTxt').textContent = `${t.footer} · ${new Date().getFullYear()}`;
  }

  function renderChrome() {
    const t = T();
    const f = F();
    document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : 'en';
    document.title = `Claudi Ferreira — ${t.areas[state.area]}`;
    const d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', f.lede);
  }

  function render() {
    applyTheme();
    renderChrome();
    renderSegs();
    renderHero();
    renderFeatured();
    renderGrid();
    renderSkills();
    renderLinks();
    renderContact();
  }

  // Project Modal Drawer
  let lastFocus = null;
  function openProject(id) {
    const p = DATA.projects.find(x => x.id === id);
    if (!p) return;

    const i = visible().indexOf(p);
    const t = T();
    const facts = (p.facts && p.facts[state.lang]) || [];

    $('#drawerBody').innerHTML = `
      <p class="d-eyebrow">${esc(p.year)} · ${esc(p.org[state.lang])}</p>
      <h2 class="d-t" id="dTitle">${esc(p.title)}</h2>
      <p class="d-r">${esc(roleOf(p))}</p>
      <div class="d-media">${media(p, i < 0 ? 0 : i, true)}</div>
      <div class="d-body">${p.desc[state.lang].map(x => `<p>${esc(x)}</p>`).join('')}</div>
      ${facts.length ? `<ul class="d-facts">${facts.map(([k,v]) => `<li><b>${esc(k)}</b><span>${esc(v)}</span></li>`).join('')}</ul>` : ''}
      ${p.links.length ? `<div class="d-links">${p.links.map(l => `<a href="${esc(l.u)}" target="_blank" rel="noopener">${esc(l.l)} ↗</a>`).join('')}</div>` : ''}
    `;

    lastFocus = document.activeElement;
    $('#drawer').hidden = false;
    document.body.classList.add('lock');
    $('#drawerX').focus();
  }

  function closeProject() {
    $('#drawer').hidden = true;
    document.body.classList.remove('lock');
    if (lastFocus) lastFocus.focus();
  }

  // Smooth Horizontal / Vertical Scrolling for Dock Buttons
  function scrollToCard(cardId) {
    const el = document.getElementById(cardId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  // Event Listeners
  document.addEventListener('click', e => {
    // Area switch
    const a = e.target.closest('[data-area]');
    if (a) {
      state.area = a.dataset.area;
      writeURL();
      render();
      return;
    }

    // Lang switch
    const l = e.target.closest('[data-lang]');
    if (l) {
      state.lang = l.dataset.lang;
      writeURL();
      render();
      return;
    }

    // Dock Navigation
    const dockBtn = e.target.closest('.dock-btn');
    if (dockBtn && dockBtn.dataset.target) {
      $$('.dock-btn').forEach(b => b.classList.remove('active'));
      dockBtn.classList.add('active');
      scrollToCard(dockBtn.dataset.target);
      return;
    }

    // Open project detail from grid or featured
    const c = e.target.closest('[data-id]');
    if (c && !c.classList.contains('dock-btn')) {
      openProject(c.dataset.id);
      return;
    }

    // Close drawer
    if (e.target.closest('[data-close]') || e.target.closest('#drawerX')) {
      closeProject();
    }
  });

  // Keyboard Navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('#drawer').hidden) {
      closeProject();
    }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.hasAttribute('data-id')) {
      e.preventDefault();
      openProject(e.target.dataset.id);
    }
  });

  // Copy share URL button
  $('#btnCopy').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(shareURL());
    } catch (_) {}
    $('#btnCopyText').textContent = T().copied;
    setTimeout(() => {
      $('#btnCopyText').textContent = T().copy;
    }, 1800);
  });

  // Theme toggle button
  $('#btnTheme').addEventListener('click', toggleTheme);

  // Initialize
  readURL();
  writeURL();
  render();

})();
