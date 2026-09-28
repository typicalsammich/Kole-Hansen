
const c=document.createElement('div');c.className='cursor-dot';document.body.appendChild(c);
document.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'});
document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>c.classList.add('active'));el.addEventListener('mouseleave',()=>c.classList.remove('active'))});
