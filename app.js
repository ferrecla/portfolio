(function(){
  "use strict";
  const $=s=>document.querySelector(s);
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const state={area:'artes',lang:'pt'};

  function readURL(){
    const p=new URLSearchParams(location.search);
    const a=(p.get('area')||p.get('a')||'').toLowerCase();
    const l=(p.get('lang')||p.get('l')||'').toLowerCase();
    state.area=(a==='tech'||a==='comunicacao')?'tech':(a==='artes'?'artes':(localStorage.getItem('cf_area')||'artes'));
    state.lang=(l==='en'||l==='pt')?l:(localStorage.getItem('cf_lang')||'pt');
  }
  function writeURL(){
    const p=new URLSearchParams(location.search);
    p.set('area',state.area);p.set('lang',state.lang);
    history.replaceState(null,'','?'+p.toString());
    localStorage.setItem('cf_area',state.area);
    localStorage.setItem('cf_lang',state.lang);
  }
  function shareURL(){return location.origin+location.pathname+'?area='+state.area+'&lang='+state.lang}

  const T=()=>DATA.ui[state.lang];
  const F=()=>DATA.fronts[state.area][state.lang];
  const visible=()=>DATA.projects.filter(p=>p.areas.includes(state.area));
  function roleOf(p){
    if(p.roleByArea&&p.roleByArea[state.area])return p.roleByArea[state.area][state.lang];
    return p.role[state.lang];
  }
  function media(p,i,big){
    if(p.img)return `<img src="${esc(p.img)}" alt="${esc(p.title)}" loading="${big?'eager':'lazy'}">`;
    return `<div class="ph" aria-hidden="true"><i>${String(i+1).padStart(2,'0')}</i></div>`;
  }

  function renderSegs(){
    const t=T();
    $('#segArea').innerHTML=['artes','tech'].map(a=>`<button type="button" data-area="${a}" aria-pressed="${state.area===a}">${esc(t.areas[a])}</button>`).join('');
    $('#segLang').innerHTML=['pt','en'].map(l=>`<button type="button" data-lang="${l}" aria-pressed="${state.lang===l}">${l.toUpperCase()}</button>`).join('');
  }
  function renderHero(){
    const f=F();
    $('#eyebrow').textContent=f.eyebrow;
    $('#headline').textContent=f.headline;
    $('#lede').textContent=f.lede;
    $('#stats').innerHTML=f.stats.map(s=>`<li><b>${esc(s.n)}</b><span>${esc(s.l)}</span></li>`).join('');
    $('#bio').innerHTML=f.bio.map(p=>`<p>${esc(p)}</p>`).join('');
  }
  function renderGrid(){
    $('#grid').innerHTML=visible().map((p,i)=>`
      <button class="card" type="button" data-id="${p.id}" style="animation-delay:${Math.min(i*45,400)}ms">
        <div class="card-media">${media(p,i)}<span class="card-yr">${esc(p.year)}</span></div>
        <div>
          <h3 class="card-t">${esc(p.title)}</h3>
          <p class="card-r">${esc(roleOf(p))}</p>
          <p class="card-org">${esc(p.org[state.lang])}</p>
        </div>
      </button>`).join('');
  }
  function renderLists(){
    $('#tools').innerHTML=DATA.tools[state.area].map(x=>`<li>${esc(x)}</li>`).join('');
    $('#edu').innerHTML=DATA.education[state.area].map(e=>{const o=e[state.lang];return `<li><b>${esc(o.t)}</b><span>${esc(o.s)}</span></li>`}).join('');
  }
  function renderContact(){
    const c=DATA.contact,t=T();
    const items=[
      [t.email,`<a href="mailto:${c.email}">${c.email}</a>`],
      [t.phone,`<a href="tel:${c.phoneHref}">${c.phone}</a>`],
      [t.based,esc(c.city[state.lang])],
      ['LinkedIn',`<a href="${c.linkedin}" target="_blank" rel="noopener">claudi-ferreira</a>`]
    ];
    if(state.area==='tech'){
      items.push(['GitHub',`<a href="${c.github}" target="_blank" rel="noopener">github.com/ferrecla</a>`]);
      items.push(['Vera',`<a href="${c.vera}" target="_blank" rel="noopener">veracurtas.com.br</a>`]);
    }else{
      items.push(['Cargo',`<a href="${c.cargo}" target="_blank" rel="noopener">claudi.cargo.site</a>`]);
    }
    $('#contactLinks').innerHTML='<ul class="clist">'+items.map(([k,v])=>`<li><small>${esc(k)}</small>${v}</li>`).join('')+'</ul>';
    $('#shareLabel').textContent=t.shareLabel;
    $('#shareUrl').textContent=shareURL();
    $('#btnCopy').textContent=t.copy;
  }
  function renderChrome(){
    const t=T(),f=F();
    document.documentElement.lang=state.lang==='pt'?'pt-BR':'en';
    document.body.dataset.area=state.area;
    document.title='Claudi Ferreira — '+t.areas[state.area];
    const d=document.querySelector('meta[name="description"]');
    if(d)d.setAttribute('content',f.lede);
    $('#tWorks').textContent=t.works;
    $('#tAbout').textContent=t.about;
    $('#tTools').textContent=t.tools;
    $('#tEdu').textContent=t.edu;
    $('#tContact').textContent=t.contact;
    $('#ftrTxt').textContent=t.footer+' · '+new Date().getFullYear();
  }
  function render(){renderChrome();renderSegs();renderHero();renderGrid();renderLists();renderContact()}

  let lastFocus=null;
  function open(id){
    const p=DATA.projects.find(x=>x.id===id);if(!p)return;
    const i=visible().indexOf(p),t=T();
    const facts=(p.facts&&p.facts[state.lang])||[];
    $('#drawerBody').innerHTML=`
      <p class="d-eyebrow">${esc(p.year)} · ${esc(p.org[state.lang])}</p>
      <h2 class="d-t" id="dTitle">${esc(p.title)}</h2>
      <p class="d-r">${esc(roleOf(p))}</p>
      <div class="d-media">${media(p,i<0?0:i,true)}</div>
      <div class="d-body">${p.desc[state.lang].map(x=>`<p>${esc(x)}</p>`).join('')}</div>
      ${facts.length?`<ul class="d-facts">${facts.map(([k,v])=>`<li><b>${esc(k)}</b><span>${esc(v)}</span></li>`).join('')}</ul>`:''}
      ${p.links.length?`<p class="d-eyebrow">${esc(t.links)}</p><ul class="d-links">${p.links.map(l=>`<li><a href="${esc(l.u)}" target="_blank" rel="noopener">${esc(l.l)}</a></li>`).join('')}</ul>`:''}
    `;
    lastFocus=document.activeElement;
    $('#drawer').hidden=false;
    document.body.classList.add('lock');
    $('#drawerX').focus();
  }
  function close(){
    $('#drawer').hidden=true;
    document.body.classList.remove('lock');
    if(lastFocus)lastFocus.focus();
  }

  document.addEventListener('click',e=>{
    const a=e.target.closest('[data-area]');
    if(a){state.area=a.dataset.area;writeURL();render();return}
    const l=e.target.closest('[data-lang]');
    if(l){state.lang=l.dataset.lang;writeURL();render();return}
    const c=e.target.closest('.card');
    if(c){open(c.dataset.id);return}
    if(e.target.closest('[data-close]')||e.target.closest('#drawerX'))close();
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#drawer').hidden)close()});
  $('#btnCopy').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(shareURL())}catch(_){}
    $('#btnCopy').textContent=T().copied;
    setTimeout(()=>{$('#btnCopy').textContent=T().copy},1600);
  });

  readURL();writeURL();render();
})();