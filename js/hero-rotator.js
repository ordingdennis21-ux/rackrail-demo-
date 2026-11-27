/* Wechselt die Startüberschrift bei jedem erneuten Besuch zwischen zwei Varianten. */
(function(){
  var h=document.getElementById('hero-h'); if(!h) return;
  var a=h.getAttribute('data-first'), b=h.getAttribute('data-alt');
  if(!a||!b) return;
  var ph=[a,b], n=0;
  try{ var k='rrHero'; n=(localStorage.getItem(k)==='1')?1:0; localStorage.setItem(k, n?'0':'1'); }
  catch(e){ n=0; }
  h.textContent=ph[n];
})();
