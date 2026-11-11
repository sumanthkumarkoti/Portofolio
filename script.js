(function(){
  var nav=document.getElementById('navbar'),btn=document.querySelector('.nav-toggle'),links=document.querySelector('.nav-links');
  if(btn){
    btn.addEventListener('click',function(){var o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o);});
    links.addEventListener('click',function(e){if(e.target.tagName==='A'){links.classList.remove('open');btn.setAttribute('aria-expanded',false);}});
  }
  var file=location.pathname.split('/').pop()||'index.html';
  var all=[].slice.call(document.querySelectorAll('.nav-links a'));
  function mark(a){all.forEach(function(x){x.classList.toggle('active',x===a);});}
  var local=all.filter(function(a){return (a.getAttribute('href').split('#')[0]||'index.html')===file;});
  if(file==='game_dev.html'){mark(all.filter(function(a){return /#projects/.test(a.getAttribute('href'));})[0]);return;}
  if(!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){var m=local.filter(function(a){var h=a.getAttribute('href').split('#')[1];return (h||'welcome-section')===e.target.id;})[0];if(m)mark(m);}
  });},{rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('section[id]').forEach(function(s){io.observe(s);});
})();
