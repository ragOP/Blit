// Mobile nav
const burger = document.querySelector('.burger');
const mobileNav = document.getElementById('mobileNav');
burger?.addEventListener('click', ()=> mobileNav.classList.toggle('open'));

// Video modal
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('videoFrame');
document.querySelectorAll('.play').forEach(btn => {
  btn.addEventListener('click', () => {
    iframe.src = btn.dataset.video;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});
document.querySelector('.modal-close')?.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  iframe.src = '';
});
modal?.addEventListener('click', (e)=>{
  if(e.target === modal){ modal.classList.remove('open'); iframe.src=''; }
});

// Case study playbooks (simple demo)
const playbooks = {
  apparel: [
    "Audit account + Cohorts",
    "Creative angles from reviews",
    "UGC briefs + offer matrix",
    "Broad + Advantage + ASC structure",
    "Scale with incrementality checks"
  ],
  saas: [
    "Map entities + topics",
    "Comparison & alternatives pages",
    "Retarget with use‑case ads",
    "Demo LP + social proof",
    "Partner webinars"
  ],
  fintech: [
    "Trust angles + education",
    "Server‑side events + consent",
    "Lifecycle emails + onboarding",
    "YouTube mid‑funnel",
    "MMM readouts monthly"
  ]
};
document.querySelectorAll('.open-case').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.dataset.case;
    alert("Playbook:\n\n" + playbooks[id].map((x,i)=>`${i+1}. ${x}`).join('\n'));
  })
});

// Contact form (demo only)
document.getElementById('contactForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = "Thanks! We'll email your growth plan within 24 hours.";
  e.target.reset();
});

// Newsletter
document.getElementById('newsForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  document.getElementById('newsMsg').textContent = "Subscribed! Check your inbox.";
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 90, behavior:'smooth' });
    }
  })
});
