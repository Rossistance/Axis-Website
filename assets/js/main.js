
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
