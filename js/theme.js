/* Hell/Dunkel-Umschalter. Startwert: Systemeinstellung, Auswahl wird gemerkt. */
(function(){
  var KEY='rrTheme', root=document.documentElement;
  function cur(){ try{return localStorage.getItem(KEY);}catch(e){return null;} }
  function apply(t){ if(t==='dark'||t==='light'){ root.setAttribute('data-theme',t);} else { root.removeAttribute('data-theme'); } }
  apply(cur()); /* sofort, vor dem Rendern */
  function sysDark(){ return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches; }
  function effective(){ var t=cur(); return t ? t : (sysDark()?'dark':'light'); }
  function wire(){
    var btn=document.getElementById('theme-toggle'); if(!btn) return;
    function sync(){ var e=effective(); var toDark=btn.getAttribute('data-to-dark')||'Dunkle Ansicht', toLight=btn.getAttribute('data-to-light')||'Helle Ansicht';
      var lbl = e==='dark' ? toLight : toDark; btn.setAttribute('aria-label',lbl); btn.setAttribute('title',lbl); btn.setAttribute('aria-pressed', e==='dark'?'true':'false'); }
    sync();
    btn.addEventListener('click', function(){ var next = effective()==='dark' ? 'light' : 'dark'; try{localStorage.setItem(KEY,next);}catch(e){} apply(next); sync(); });
    if(window.matchMedia){ try{ matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(){ if(!cur()) sync(); }); }catch(e){} }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', wire); else wire();
})();
