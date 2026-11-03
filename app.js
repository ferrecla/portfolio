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
        end = 2026;
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

  /* ── SwiftUI-flavoured class primitives ──────────────────────────────
     Grouped-list rows (44pt min height), 10pt inset corner radius,
     secondary label colours, 13pt footnotes.                        */
  const CLS = {
    row: 'flex items-center justify-between gap-3 rounded-ios-sm glass-inner px-3.5 py-3 text-left transition-[transform,opacity] duration-200 ease-ios hover:translate-x-0.5 active:scale-[0.99]',
    pill: 'rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-caption-2 font-semibold text-label-secondary',
    title: 'font-display text-subhead font-semibold tracking-tight text-white',
    role: 'mt-0.5 text-caption-1 font-medium text-label-secondary',
    org: 'mt-0.5 text-caption-2 uppercase tracking-[0.06em] text-label-tertiary',
  };

  function applyTheme() {
    const dark = state.theme === 'dark';
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('cf_theme', state.theme);

    const sun = document.querySelector('.icon-sun');
    const moon = document.querySelector('.icon-moon');
    if (sun) sun.classList.toggle('hidden', !dark);
    if (moon) moon.classList.toggle('hidden', dark);

    // Swap background per area
    const bg = document.getElementById('pageBg');
    if (bg) bg.setAttribute('data-area', state.area);
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  }

  function renderSegs() {
    const t = T();

    $('#segArea').innerHTML = ['artes', 'tech'].map(a => {
      const on = state.area === a;
      return `<button type="button" data-area="${a}" aria-pressed="${on}"
        class="rounded-full px-3 py-1 text-caption-1 font-semibold transition-all duration-200 ease-ios ${
 on ? 'text-white' : 'text-label-secondary hover:text-white'
        }">${esc(t.areas[a])}</button>`;
    }).join('');

    $('#segLang').innerHTML = ['pt', 'en'].map(l => {
      const on = state.lang === l;
      return `<button type="button" data-lang="${l}" aria-pressed="${on}"
        class="min-w-[2rem] rounded-full px-2 py-1 text-caption-1 font-semibold uppercase transition-all duration-200 ease-ios ${
 on ? 'text-white' : 'text-label-secondary hover:text-white'
        }">${l}</button>`;
    }).join('');
  }

  function renderHero() {
    const f = F();
    const isPt = state.lang === 'pt';

    $('#brandSub').textContent = isPt
      ? (state.area === 'artes' ? 'Artes da cena · Luz & Som' : 'Comunicação digital · CRM · Web')
      : (state.area === 'artes' ? 'Performing Arts · Light & Sound' : 'Digital communication · CRM · Web');

    $('#profileBadge').textContent = isPt ? 'Perfil' : 'Profile';
    $('#availLabel').textContent = isPt ? 'Disponível' : 'Available';
    $('#eyebrow').textContent = f.eyebrow;
    $('#headline').textContent = f.headline;
    $('#lede').textContent = f.lede;

    const statsHtml = (f.stats && f.stats.length)
      ? f.stats.map(s => `<li class="rounded-ios bg-white/10 px-2 py-2.5 text-center glass-inner">
          <b class="block font-display text-title-3 font-bold leading-none text-label text-white">${esc(s.n)}</b>
          <span class="mt-1 block text-caption-2 font-semibold uppercase leading-tight tracking-[0.04em] text-label-secondary text-label-secondary">${esc(s.l)}</span>
        </li>`).join('')
      : '';
    $('#stats').innerHTML = statsHtml;

    const profileFooter = $('#profileFooter');
    if (profileFooter) profileFooter.style.display = statsHtml ? '' : 'none';

    $('#bio').innerHTML = f.bio.map(p => `<p>${esc(p)}</p>`).join('');
  }

  /* Cover card — the same presentation used by the tech portfolio
     "Destaque" block. Reused by the featured column and by any
     spotlighted project inside the works list.                        */
  function coverCard(p, opts) {
    const isPt = state.lang === 'pt';
    const o = opts || {};
    const badge = o.badgeLabel
      ? `<span class="rounded-full bg-white px-2 py-0.5 text-caption-2 font-bold uppercase tracking-[0.06em] text-white bg-white text-black">${esc(o.badgeLabel)}</span>`
      : `<span class="rounded-full bg-black/70 px-2 py-0.5 text-caption-2 font-bold tracking-[0.05em] text-white backdrop-blur-sm">${esc(p.year)}</span>`;

    const cover = p.img
      ? `<img src="${esc(p.img)}" alt="${esc(p.title)}" class="h-full w-full object-cover transition-transform duration-500 ease-ios group-hover:scale-[1.03]" loading="${o.eager ? 'eager' : 'lazy'}">`
      : `<div class="flex h-full w-full items-center justify-center font-display text-4xl font-bold text-label-tertiary text-label-tertiary" aria-hidden="true">01</div>`;

    return `
      <div class="group cursor-pointer overflow-hidden rounded-ios-lg glass-inner transition-[transform,box-shadow] duration-300 ease-ios hover:-translate-y-0.5 glass-inner" data-id="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)}">
        <div class="relative aspect-video overflow-hidden bg-white/10 bg-white/10">
          ${cover}
          <span class="absolute right-2.5 top-2.5">${badge}</span>
        </div>
        <div class="p-4">
          <h4 class="font-display text-title-3 font-bold tracking-tight text-label text-white">${esc(p.title)}</h4>
          <p class="mt-0.5 text-caption-1 font-semibold text-label-secondary text-label-secondary">${esc(roleOf(p))}</p>
          <p class="mt-1.5 line-clamp-2 text-caption-1 leading-relaxed text-label-secondary text-label-secondary">${esc(p.desc[state.lang][0] || '')}</p>
          <div class="mt-2.5 flex items-center justify-between gap-2">
            <span class="truncate text-caption-2 uppercase tracking-[0.06em] text-label-tertiary text-label-tertiary">${esc(p.org[state.lang])} · ${esc(p.year)}</span>
            <span class="shrink-0 text-caption-1 font-semibold text-label-secondary transition-transform duration-200 ease-ios group-hover:translate-x-0.5 text-label-secondary">↗</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderFeatured() {
    const isPt = state.lang === 'pt';
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
    $('#featuredCount').textContent = isPt ? 'Projeto em Destaque' : 'Featured Project';

    const highlightId = state.area === 'tech' ? 'vera' : 'fossil';
    const featuredProjects = list.filter(p => p.id === highlightId);
    const toShow = featuredProjects.length ? featuredProjects : list.slice(0, 1);

    $('#featuredContainer').innerHTML = toShow.map(p => coverCard(p, {})).join('');
  }

  function renderGrid() {
    const isPt = state.lang === 'pt';
    const list = visible();

    $('#tWorksTag').textContent = isPt ? 'Trabalhos' : 'Selected Works';
    $('#worksCount').textContent = `${list.length} ${isPt ? 'projetos' : 'projects'}`;
    $('#scrollMoreText').textContent = isPt ? 'Role a lista para ver todos' : 'Scroll down to explore all';

    const deEmphasizedIds = ['felicidade', 'mundareu', 'locarte', 'telas'];
    const featuredSpotlightIds = ['fossil', 'vera'];
    const MAX_INLINE = 3;

    const parts = [];
    const spotlightItems = list.filter(p => featuredSpotlightIds.includes(p.id));
    // regular = not in spotlight, then keep original order minus the first MAX_INLINE
    const regularItems = list.filter(p => !featuredSpotlightIds.includes(p.id));

    // ── Cover cards (spotlight) ──────────────────────────────────────
    if (spotlightItems.length) {
      spotlightItems.forEach(p => {
        parts.push(coverCard(p, {
          badgeLabel: state.lang === 'pt' ? 'Destaque' : 'Featured',
          eager: true
        }));
      });
    }

    // ── Inline text rows (first MAX_INLINE regular) ──────────────────
    const inline = regularItems.slice(0, MAX_INLINE);
    inline.forEach(p => {
      const isMuted = deEmphasizedIds.includes(p.id);
      const cls = [CLS.row, isMuted ? 'opacity-55' : ''].filter(Boolean).join(' ');
      parts.push(`<div class="${cls}" data-id="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)}">
        <div class="min-w-0 flex-1">
          <h4 class="${CLS.title} truncate">${esc(p.title)}</h4>
          <p class="${CLS.role} truncate">${esc(roleOf(p))}</p>
          <p class="${CLS.org} truncate">${esc(p.org[state.lang])}</p>
        </div>
        <div class="shrink-0 text-right">
          <span class="${CLS.pill}">${esc(p.year)}</span>
          <div class="mt-1 text-caption-1 text-label-tertiary transition-transform duration-200 ease-ios group-hover:translate-x-0.5 text-label-tertiary">↗</div>
        </div>
      </div>`);
    });

    // ── Collapsible extra rows ────────────────────────────────────────
    const extraItems = regularItems.slice(MAX_INLINE);
    if (extraItems.length) {
      const label = state.lang === 'pt'
        ? `Ver mais ${extraItems.length} projetos`
        : `See ${extraItems.length} more projects`;
      const labelUp = state.lang === 'pt' ? 'Ver menos' : 'Show less';

      parts.push(`<button type="button" id="btnVerMais"
        class="mt-2 flex w-full items-center justify-center gap-1.5 rounded-ios py-2.5 text-subhead font-semibold text-accent-mint transition-colors duration-200 ease-ios hover:bg-white/10 active:bg-white/5">
        <span class="icon-chevron" id="chevronLabel">${esc(label)}</span>
        <svg id="chevronArrow" class="h-4 w-4 transition-transform duration-300 ease-ios" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>`);

      const extraHtml = extraItems.map(p => {
        const isMuted = deEmphasizedIds.includes(p.id);
        const cls = [CLS.row, isMuted ? 'opacity-55' : ''].filter(Boolean).join(' ');
        return `<div class="${cls}" data-id="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)}">
          <div class="min-w-0 flex-1">
            <h4 class="${CLS.title} truncate">${esc(p.title)}</h4>
            <p class="${CLS.role} truncate">${esc(roleOf(p))}</p>
            <p class="${CLS.org} truncate">${esc(p.org[state.lang])}</p>
          </div>
          <div class="shrink-0 text-right">
            <span class="${CLS.pill}">${esc(p.year)}</span>
            <div class="mt-1 text-caption-1 text-label-tertiary transition-transform duration-200 ease-ios group-hover:translate-x-0.5 text-label-tertiary">↗</div>
          </div>
        </div>`;
      }).join('');

      parts.push(`<div id="extraProjectsContainer" hidden class="mt-2 space-y-2">${extraHtml}</div>`);
    }

    $('#grid').innerHTML = parts.join('');
  }

  function renderSkills() {
    const isPt = state.lang === 'pt';
    const t = T();

    $('#tSkillsTag').textContent = isPt ? 'Habilidades' : 'Skills & Stack';
    $('#skillsSub').textContent = state.area === 'artes'
      ? (isPt ? 'Mesas, Áudio & Luz' : 'Lighting & Audio Consoles')
      : (isPt ? 'Web, CRM & Analytics' : 'Web, CRM & Analytics');
    $('#tTools').textContent = t.tools;
    $('#tEdu').textContent = t.edu;
    $('#verifiedLabel').textContent = isPt ? 'Fichas Oficiais & Portfólio Verificado' : 'Official Credits & Verified Portfolio';

    // Formation first, then tools
    $('#edu').innerHTML = DATA.education[state.area].map(e => {
      const o = e[state.lang];
      return `<li class="rounded-ios glass-inner px-3.5 py-2.5">
        <b class="block text-footnote font-semibold tracking-tight text-white">${esc(o.t)}</b>
        <span class="text-caption-1 text-label-secondary">${esc(o.s)}</span>
      </li>`;
    }).join('');

    $('#tools').innerHTML = DATA.tools[state.area].map(x =>
      `<li class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-caption-1 font-semibold text-white/80">${esc(x)}</li>`
    ).join('');
  }

  function renderLinks() {
    const c = DATA.contact;
    const isPt = state.lang === 'pt';
    const isArtes = state.area === 'artes';

    $('#tChannelsTag').textContent = isPt ? 'Contato' : 'Contact';
    $('#linksIntro').textContent = isPt
      ? 'Acesso direto e canais para conversar.'
      : 'Direct access and ways to get in touch.';

    $('#basedTxt').textContent = c.city[state.lang];

    const links = [
      { title: isPt ? 'Site pessoal' : 'Personal site', sub: 'claudi.cargo.site', url: c.cargo }
    ];
    if (!isArtes) {
      links.unshift({ title: 'veracurtas.com.br', sub: isPt ? 'Plataforma streaming Next.js' : 'Next.js streaming platform', url: c.vera });
      links.push({ title: 'LinkedIn', sub: 'claudi-ferreira', url: c.linkedin });
      links.push({ title: 'GitHub', sub: 'github.com/ferrecla', url: c.github });
    }

    const wa = c.whatsapp || ('https://wa.me/' + String(c.phone).replace(/[^0-9]/g, ''));
    const contactItems = [
      { label: t_email(), val: `<a href="mailto:${esc(c.email)}" class="text-subhead font-semibold text-white underline-offset-2 hover:underline">${esc(c.email)}</a>` },
      { label: 'WhatsApp', val: `<a href="${esc(wa)}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-subhead font-semibold text-accent hover:underline">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.121-.518-1.745-.722-2.888-2.502-2.975-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.35.491 1.199.534 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.185.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.513 0-10 4.487-10 10 0 1.954.564 3.782 1.545 5.334l-1.637 5.975 6.136-1.609c1.493.815 3.197 1.28 5.006 1.28 5.513 0 10-4.487 10-10 0-5.513-4.487-10-10-10z"/></svg>
          ${isPt ? 'Conversar no WhatsApp' : 'Chat on WhatsApp'} ↗
        </a>` }
    ];

    // Render links
    $('#dashLinkButtons').innerHTML = links.map(l => `
      <a href="${esc(l.url)}" target="_blank" rel="noopener"
         class="flex items-center justify-between gap-3 rounded-ios glass-inner px-3.5 py-3 transition-transform duration-200 ease-ios hover:scale-[1.015] active:scale-[0.99]">
        <div class="min-w-0">
          <strong class="block truncate text-subhead font-semibold text-white">${esc(l.title)}</strong>
          <span class="block truncate text-caption-1 text-label-secondary">${esc(l.sub)}</span>
        </div>
        <span class="shrink-0 text-caption-1 text-label-tertiary">↗</span>
      </a>
    `).join('');

    // Render contact items into the contact card (merge into cardContact)
    $('#contactLinks').innerHTML = contactItems.map(item => `
      <div class="rounded-ios glass-inner px-3.5 py-3">
        <small class="mb-0.5 block text-caption-2 font-semibold uppercase tracking-[0.08em] text-label-tertiary">${esc(item.label)}</small>
        ${item.val}
      </div>
    `).join('');

    $('#shareUrlInput').value = shareURL();
    $('#btnCopyText').textContent = T().copy;
    $('#ftrTxt').textContent = `${t_footer()} · ${new Date().getFullYear()}`;
  }

  function t_email() { return T().email; }
  function t_based() { return T().based; }
  function t_footer() { return T().footer; }

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
  }

  /* ── Project sheet ─────────────────────────────────────────────────── */
  function media(p, big) {
    if (p.img) {
      return `<img src="${esc(p.img)}" alt="${esc(p.title)}" class="h-full w-full object-cover" loading="${big ? 'eager' : 'lazy'}">`;
    }
    return `<div class="flex h-full w-full items-center justify-center font-display text-5xl font-bold text-label-tertiary text-label-tertiary" aria-hidden="true">01</div>`;
  }

  let lastFocus = null;

  function openProject(id) {
    const p = DATA.projects.find(x => x.id === id);
    if (!p) return;

    const t = T();
    const isPt = state.lang === 'pt';
    const facts = (p.facts && p.facts[state.lang]) || [];

    $('#drawerBody').innerHTML = `
      <p class="mb-1.5 text-caption-2 font-semibold uppercase tracking-[0.12em] text-label-secondary text-label-secondary">${esc(p.year)} · ${esc(p.org[state.lang])}</p>
      <h2 id="dTitle" class="font-display text-title-1 font-bold tracking-[-0.02em] text-label text-white">${esc(p.title)}</h2>
      <p class="mt-1 text-subhead font-semibold text-label-secondary text-label-secondary">${esc(roleOf(p))}</p>

      <div class="my-5 aspect-[16/10] overflow-hidden rounded-ios-lg border border-sys-sep/40 glass-inner border-white/10 glass-inner">
        ${media(p, true)}
      </div>

      <div class="space-y-2.5 text-callout leading-relaxed text-label text-white">
        ${p.desc[state.lang].map(x => `<p>${esc(x)}</p>`).join('')}
      </div>

      ${facts.length ? `<ul class="my-6 space-y-px overflow-hidden rounded-ios-lg glass-inner glass-inner">
        ${facts.map(([k, v], i) => `
          <li class="${i ? 'border-t border-sys-sep/40 border-white/10' : ''} flex flex-col gap-0.5 px-4 py-2.5 sm:flex-row sm:gap-4">
            <b class="shrink-0 text-caption-2 font-semibold uppercase tracking-[0.06em] text-label-secondary text-label-secondary sm:w-36">${esc(k)}</b>
            <span class="text-footnote text-label text-white">${esc(v)}</span>
          </li>`).join('')}
      </ul>` : ''}

      ${p.links.length ? `<div class="flex flex-wrap gap-2">
        ${p.links.map(l => `<a href="${esc(l.u)}" target="_blank" rel="noopener"
            class="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-caption-1 font-semibold text-white transition-opacity duration-150 ease-ios hover:opacity-85 bg-white text-black">${esc(l.l)} ↗</a>`).join('')}
      </div>` : ''}

      <button type="button" data-close class="mt-8 w-full rounded-ios bg-white/10 py-3 text-subhead font-semibold text-label transition-opacity duration-150 ease-ios active:opacity-70 bg-white/10 text-white sm:hidden">${isPt ? 'Fechar' : 'Close'}</button>
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

  function scrollToCard(cardId) {
    const el = document.getElementById(cardId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  document.addEventListener('click', e => {
    const a = e.target.closest('[data-area]');
    if (a) {
      state.area = a.dataset.area;
      writeURL();
      render();
      return;
    }

    const l = e.target.closest('[data-lang]');
    if (l) {
      state.lang = l.dataset.lang;
      writeURL();
      render();
      return;
    }

    const dockBtn = e.target.closest('.dock-btn');
    if (dockBtn && dockBtn.dataset.target) {
      $$('.dock-btn').forEach(b => b.classList.remove('active'));
      dockBtn.classList.add('active');
      scrollToCard(dockBtn.dataset.target);
      return;
    }

    if (e.target.closest('[data-close]') || e.target.closest('#drawerX')) {
      closeProject();
      return;
    }

    // Toggle extra projects list
    const btnVerMais = e.target.closest('#btnVerMais');
    if (btnVerMais) {
      const c = $('#extraProjectsContainer');
      if (!c) return;
      const expanded = !c.hidden;
      c.hidden = expanded;
      const isPt = state.lang === 'pt';
      const arrow = $('#chevronArrow');
      const label = $('#chevronLabel');
      if (arrow) arrow.style.transform = expanded ? 'none' : 'rotate(180deg)';
      if (label) label.textContent = expanded
        ? (isPt ? `Ver mais ${c.children.length} projetos` : `See ${c.children.length} more projects`)
        : (isPt ? 'Ver menos' : 'Show less');
      return;
    }

    const c = e.target.closest('[data-id]');
    if (c && !c.classList.contains('dock-btn')) {
      openProject(c.dataset.id);
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('#drawer').hidden) {
      closeProject();
    }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.hasAttribute('data-id')) {
      e.preventDefault();
      openProject(e.target.dataset.id);
    }
  });

  $('#btnCopy').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(shareURL());
    } catch (_) {}
    $('#btnCopyText').textContent = T().copied;
    setTimeout(() => {
      $('#btnCopyText').textContent = T().copy;
    }, 1800);
  });

  $('#btnTheme').addEventListener('click', toggleTheme);

  readURL();
  writeURL();
  render();

})();
