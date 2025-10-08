
(() => {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries,obs)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }});
  },{threshold:.15});
  els.forEach(el=>io.observe(el));
  document.addEventListener('click', e=>{
    const a=e.target.closest('a[href^="#"]'); if(!a) return;
    const id=a.getAttribute('href').slice(1), t=document.getElementById(id);
    if(t){ e.preventDefault(); window.scrollTo({top:t.getBoundingClientRect().top+scrollY-70, behavior:'smooth'}); }
  });
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();


// Mobile nav toggle (accessible, slide-in + backdrop)
(function(){
  document.documentElement.classList.add('nav-ready');
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  var backdrop = document.querySelector('.nav-backdrop');
  if(!btn || !nav || !backdrop) return;

  function setOpen(open){
    btn.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('nav-open', open);
    backdrop.toggleAttribute('hidden', !open);
  }

  btn.addEventListener('click', function(){
    var open = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
  });

  // Close on ESC
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      setOpen(false);
    }
  });

  // Close when clicking backdrop
  backdrop.addEventListener('click', function(){ setOpen(false); });

  // Close when a nav link is clicked
  nav.addEventListener('click', function(e){
    if(e.target.closest('a')) setOpen(false);
  });
})();
