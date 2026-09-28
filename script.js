
const c=document.createElement('div');c.className='cursor-dot';document.body.appendChild(c);
document.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'});
document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>c.classList.add('active'));el.addEventListener('mouseleave',()=>c.classList.remove('active'))});

const hamburger=document.querySelector('.hamburger');
const mobileMenu=document.querySelector('.mobile-menu');
if(hamburger&&mobileMenu){
  hamburger.addEventListener('click',()=>{
    const open=hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open',open);
    hamburger.setAttribute('aria-expanded',String(open));
    mobileMenu.setAttribute('aria-hidden',String(!open));
  });
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    hamburger.classList.remove('open');mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');mobileMenu.setAttribute('aria-hidden','true');
  }));
}
const mobileCall=document.querySelector('.mobile-call');
function updateMobileCall(){
  if(!mobileCall)return;
  const shouldShow=window.innerWidth<=850 && window.scrollY>260;
  mobileCall.classList.toggle('visible',shouldShow);
}
window.addEventListener('scroll',updateMobileCall,{passive:true});
window.addEventListener('resize',updateMobileCall);
updateMobileCall();
