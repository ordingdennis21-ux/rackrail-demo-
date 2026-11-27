/* Startüberschrift: zufälliger Start, danach sanfter Wechsel auf dem Bildschirm. */
(function(){
  var h=document.getElementById('hero-h'); if(!h) return;
  var raw=h.getAttribute('data-rotate'); if(!raw) return;
  var ph=raw.split('|'); var N=ph.length; if(N<2) return;

  // Platz für die längste Variante reservieren (kein Springen beim Wechsel)
  try{ var mh=0; for(var j=0;j<N;j++){ h.textContent=ph[j]; if(h.offsetHeight>mh) mh=h.offsetHeight; } h.style.minHeight=mh+'px'; }catch(e){}

  // zufälligen Start wählen, nicht denselben wie zuletzt
  var i=Math.floor(Math.random()*N), last=-1;
  try{ last=parseInt(localStorage.getItem('rrHero'),10); }catch(e){}
  if(i===last) i=(i+1)%N;
  try{ localStorage.setItem('rrHero', String(i)); }catch(e){}
  h.textContent=ph[i];

  if(window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches) return;

  h.style.transition='opacity .5s ease';
  (function cycle(){
    setTimeout(function(){
      h.style.opacity='0';
      setTimeout(function(){
        i=(i+1)%N; h.textContent=ph[i];
        try{ localStorage.setItem('rrHero', String(i)); }catch(e){}
        h.style.opacity='1'; cycle();
      },500);
    },5000);
  })();
})();
