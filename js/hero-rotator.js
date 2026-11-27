/* Wechselt die Startüberschrift bei jedem erneuten Besuch durch mehrere Varianten. */
(function(){
  var h=document.getElementById('hero-h'); if(!h) return;
  var raw=h.getAttribute('data-rotate'); if(!raw) return;
  var ph=raw.split('|'); if(ph.length<2) return;
  var n=0;
  try{ var k='rrHero', v=parseInt(localStorage.getItem(k)||'0',10); if(isNaN(v))v=0;
       n=v%ph.length; localStorage.setItem(k, String((v+1)%ph.length)); }
  catch(e){ n=0; }
  h.textContent=ph[n];
})();
