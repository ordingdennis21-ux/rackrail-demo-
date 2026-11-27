/* Zeigt bei jedem Laden eine andere Startüberschrift, nie zweimal dieselbe hintereinander. */
(function(){
  var h=document.getElementById('hero-h'); if(!h) return;
  var raw=h.getAttribute('data-rotate'); if(!raw) return;
  var ph=raw.split('|'); var N=ph.length; if(N<2) return;
  var last=-1;
  try{ last=parseInt(localStorage.getItem('rrHero'),10); if(isNaN(last))last=-1; }catch(e){}
  var n=Math.floor(Math.random()*N);
  if(n===last) n=(n+1)%N;
  try{ localStorage.setItem('rrHero', String(n)); }catch(e){}
  h.textContent=ph[n];
})();
